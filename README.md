# [Krynica] — strona pilotażu

Strona jednoekranowa projektu **[Krynica]**: suwerennego AI społeczności białoruskiej w Polsce — wspólny rdzeń wiedzy, warstwy poszczególnych społeczności, AI‑konsultant bez chmury.

Adres: **https://ai.belhome.cc** (GitHub Pages, gałąź `main`, katalog główny).

## Zasady

- Czysty statyczny HTML + CSS + wanilowy JS. Bez frameworków, bez kroku budowania, bez zależności.
- **Żadnych zewnętrznych żądań.** Czcionki (Onest, JetBrains Mono) leżą w repozytorium, nie ma Google Fonts, CDN, analityki, pikseli, cookies ani formularzy. Strona pokazuje tę samą zasadę, na której opiera się projekt.
- Dwa języki: polski (domyślny) i białoruski. Wybór zapamiętywany w `localStorage`; bez zapisu język bierze się z `navigator.language` (`be` i `ru` → białoruski, reszta → polski).
- Dostępność: kontrast ≥ 4,5:1, zakładki z `role="tab"` / `aria-selected`, pełna obsługa klawiatury (Tab, strzałki, Home/End), `prefers-reduced-motion` wyłącza animacje.

## Struktura

```
index.html          cała treść strony (tekst polski w HTML; każdy element tekstowy ma data-i18n)
privacy.html        polityka prywatności (teksty również w js/i18n.js, klucz `privacy`)
css/style.css       style, @font-face, responsywność, prefers-reduced-motion
js/i18n.js          wszystkie teksty w obu językach — jedyne miejsce do edycji treści
js/main.js          przełącznik języka, wybór społeczności (obracający się schemat), zakładki
fonts/onest/        Onest (variable, woff2) + OFL.txt
fonts/jetbrains-mono/  JetBrains Mono (variable, woff2) + OFL.txt
favicon.svg         logo
CNAME               domena dla GitHub Pages
.nojekyll           wyłącza przetwarzanie Jekyll na GitHub Pages
```

## Jak zmienić teksty

Wszystkie teksty są w `js/i18n.js`, w obiekcie `window.KRYNICA_I18N` z dwiema gałęziami: `pl` i `be`. Struktura kluczy musi być identyczna w obu językach.

1. Znajdź klucz: w `index.html` element ma atrybut `data-i18n="sekcja.klucz"`, np. `data-i18n="hero.lead"`.
2. Zmień wartość w `js/i18n.js` w gałęzi `pl` **i** `be`.
3. Jeśli zmieniasz tekst polski, zmień też tekst w `index.html` — to on jest widoczny, zanim załaduje się JS (i w wyszukiwarkach).

Oznaczenia dozwolone w tekstach:
- `**słowo**` → kolor akcentu (np. „Wiedza, która **płynie** do ludzi”),
- `[Krynica]`, `[Krynicy]`, `[Krynicę]` → nazwa z nawiasami w kolorze miedzi.

Atrybuty (np. `aria-label`) tłumaczy `data-i18n-attr="aria-label:sekcja.klucz"`.

Listy (społeczności, pytania w pasku, zakładki) mają klucze z indeksem: `communities.0.name`, `marquee.items.3`, `problems.tabs.2.title`.

Po zmianie wystarczy `git push` — GitHub Pages publikuje stronę w ciągu minuty.

## Wersja białoruska

Tłumaczenie białoruskie (oficjalna ortografia, bez taraszkiewicy) zostało przygotowane automatycznie. **Należy je wyczytać z osobą władającą językiem** przed szerszym rozpowszechnianiem strony. W wersji białoruskiej konsekwentnie używamy „AI”, nie „ШІ”.

## Sprawdzanie lokalne

Strona nie wymaga budowania. Wystarczy otworzyć `index.html` w przeglądarce lub uruchomić prosty serwer:

```
python3 -m http.server 8000
```

i wejść na http://localhost:8000.

## Publikacja

Strona jest hostowana na GitHub Pages z gałęzi `main` (katalog główny) i własną domeną `ai.belhome.cc` (plik `CNAME`). DNS: rekord `CNAME` dla `ai` wskazujący na `sergpanfilov.github.io`.

## Licencje

Kod strony: MIT (plik `LICENSE`). Czcionki Onest i JetBrains Mono: SIL Open Font License 1.1 (pliki `OFL.txt` obok czcionek).
