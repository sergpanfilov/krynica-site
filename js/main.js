/* [Krynica] — main.js
   Language switch, community picker (rotating diagram), tab groups with optional autoplay.
   Vanilla JS, no dependencies, no network requests. */
(function () {
  'use strict';

  var I18N = window.KRYNICA_I18N;
  var STORAGE_KEY = 'krynica-lang';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'pl';

  /* ---------- i18n ---------- */
  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pl' || saved === 'be') return saved;
    } catch (e) { /* storage unavailable */ }
    var nav = (navigator.language || '').toLowerCase();
    return /^(be|ru)/.test(nav) ? 'be' : 'pl';
  }

  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // **word** → accent colour; [Krynica] (any inflection) → copper brackets
  function rich(s) {
    return escapeHtml(s)
      .replace(/\*\*(.+?)\*\*/g, '<em class="accent">$1</em>')
      .replace(/\[(Krynic[a-ząęćłńóśźż]*)\]/g, '<span class="br">[</span>$1<span class="br">]</span>');
  }

  function applyLang(next) {
    lang = next;
    var d = I18N[lang];
    document.documentElement.lang = lang;
    document.title = get(d, 'meta.title').replace(/\*\*/g, '');
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', get(d, 'meta.description'));

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var v = get(d, nodes[i].getAttribute('data-i18n'));
      if (typeof v === 'string') nodes[i].innerHTML = rich(v);
    }
    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var pairs = attrNodes[j].getAttribute('data-i18n-attr').split(';');
      for (var p = 0; p < pairs.length; p++) {
        var parts = pairs[p].split(':');
        var val = get(d, parts[1]);
        if (typeof val === 'string') attrNodes[j].setAttribute(parts[0], val);
      }
    }
    var langButtons = document.querySelectorAll('.lang');
    for (var b = 0; b < langButtons.length; b++) {
      langButtons[b].setAttribute('aria-pressed', langButtons[b].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    renderCard();
  }

  function initLang() {
    applyLang(detectLang());
    var buttons = document.querySelectorAll('.lang');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var next = this.getAttribute('data-lang');
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
        applyLang(next);
      });
    }
  }

  /* ---------- hero: community picker ---------- */
  var COLORS = ['#C2602B', '#1F6F66', '#8C3B4A', '#4B4E8F', '#B8892B', '#2F5D8A'];
  var current = 0;
  var rotation = 0;
  var orbit = document.querySelector('.orbit');
  var rot = document.querySelector('.orbit-rot');
  var card = document.querySelector('.q-card');

  function renderCard() {
    if (!card) return;
    var c = I18N[lang].communities[current];
    card.querySelector('.q-card-name').textContent = c.name;
    card.querySelector('.q-card-text').textContent = c.q;
  }

  function pick(index) {
    if (index === current) return;
    current = index;
    // shortest rotation path so 5 → 0 does not spin the long way round
    var target = -60 * index;
    var delta = ((target - rotation) % 360 + 540) % 360 - 180;
    rotation += delta;
    if (rot) rot.style.transform = 'rotate(' + rotation + 'deg)';
    if (orbit) orbit.style.setProperty('--pick', COLORS[index]);
    var chips = document.querySelectorAll('.chip');
    for (var i = 0; i < chips.length; i++) chips[i].setAttribute('aria-pressed', i === index ? 'true' : 'false');
    // replay the card animation
    if (card) {
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = '';
    }
    renderCard();
  }

  function initPicker() {
    var chips = document.querySelectorAll('.chip');
    for (var i = 0; i < chips.length; i++) {
      (function (idx) {
        chips[idx].addEventListener('click', function () { pick(idx); });
      })(i);
    }
  }

  /* ---------- tabs ---------- */
  function initTabs(root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
    var autoplay = parseInt(root.getAttribute('data-autoplay'), 10) || 0;
    var timer = null;
    var index = Math.max(0, tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; }));

    function restartProgress(tab) {
      var bar = tab.querySelector('.tab-progress');
      if (!bar) return;
      bar.style.animation = 'none';
      void bar.offsetWidth;
      bar.style.animation = '';
    }

    function select(n, manual) {
      index = (n + tabs.length) % tabs.length;
      tabs.forEach(function (t, k) {
        var on = k === index;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        if (panels[k]) panels[k].hidden = !on;
        if (on) restartProgress(t);
      });
      if (manual) {
        stop();
        tabs[index].focus();
      }
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      root.setAttribute('data-auto', 'off');
    }

    tabs.forEach(function (t, k) {
      t.addEventListener('click', function () { select(k, true); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = k + 1;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = k - 1;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); select(n, true); }
      });
    });

    select(index, false);
    if (autoplay && !reduceMotion) {
      root.setAttribute('data-auto', 'on');
      root.style.setProperty('--dur', autoplay + 'ms');
      timer = setInterval(function () { select(index + 1, false); }, autoplay);
      // pause when the page is in a background tab, resume when it comes back
      document.addEventListener('visibilitychange', function () {
        if (root.getAttribute('data-auto') !== 'on') return;
        if (document.hidden) { clearInterval(timer); timer = null; }
        else if (!timer) timer = setInterval(function () { select(index + 1, false); }, autoplay);
      });
    }
  }

  /* ---------- boot ---------- */
  initPicker();
  initLang();
  var groups = document.querySelectorAll('[data-tabs]');
  for (var g = 0; g < groups.length; g++) initTabs(groups[g]);
})();
