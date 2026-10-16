/* [Krynica] — main.js
   Language switch, community picker (rotating diagram), tab groups.
   Vanilla JS, no dependencies, no network requests. */
(function () {
  'use strict';

  var I18N = window.KRYNICA_I18N;
  var STORAGE_KEY = 'krynica-lang';
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

  function plain(s) {
    return s.replace(/\*\*/g, '');
  }

  function applyLang(next) {
    lang = next;
    var d = I18N[lang];
    document.documentElement.lang = lang;
    document.title = plain(get(d, document.body.getAttribute('data-title-key') || 'meta.title'));
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', get(d, 'meta.description'));

    var other = I18N[lang === 'pl' ? 'be' : 'pl'];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var v = get(d, key);
      if (typeof v !== 'string') continue;
      if (nodes[i].hasAttribute('data-i18n-stable')) {
        // reserve room for the longer of the two languages so the layout does not jump on switch
        var o = get(other, key);
        nodes[i].setAttribute('data-ghost', plain(typeof o === 'string' ? o : v));
        nodes[i].innerHTML = '<span class="i18n-text">' + rich(v) + '</span>';
      } else {
        nodes[i].innerHTML = rich(v);
      }
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
    card.querySelector('.q-card-text .i18n-text').textContent = c.q;
  }

  // the card keeps the height of the longest question in either language
  function initCardGhost() {
    if (!card) return;
    var longest = '';
    ['pl', 'be'].forEach(function (l) {
      I18N[l].communities.forEach(function (c) { if (c.q.length > longest.length) longest = c.q; });
    });
    card.querySelector('.q-card-text').setAttribute('data-ghost', longest);
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

  /* ---------- tabs (manual selection only) ---------- */
  function initTabs(root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
    var index = Math.max(0, tabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true'; }));

    function select(n, manual) {
      index = (n + tabs.length) % tabs.length;
      tabs.forEach(function (t, k) {
        var on = k === index;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        if (panels[k]) panels[k].hidden = !on;
      });
      if (manual) tabs[index].focus();
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
  }

  /* ---------- boot ---------- */
  initPicker();
  initCardGhost();
  initLang();
  var groups = document.querySelectorAll('[data-tabs]');
  for (var g = 0; g < groups.length; g++) initTabs(groups[g]);
})();
