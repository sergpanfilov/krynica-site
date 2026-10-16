/* [Krynica] — texts for both languages.
   Edit here, not in index.html. Keys must stay identical in `pl` and `be`.
   Markup allowed inside strings: **word** → accent colour, [Krynica] → copper brackets. */
window.KRYNICA_I18N = {
  pl: {
    meta: {
      title: '[Krynica] — suwerenny AI społeczności',
      description: 'Pilotaż 2026. Wspólny rdzeń wiedzy i warstwy społeczności. AI-konsultant bez chmury, który rośnie z każdego pytania.',
      skip: 'Przejdź do treści'
    },
    nav: { label: 'Główna', how: 'Jak działa', problems: 'Problemy', tech: 'Technologia', partners: 'Partnerzy', join: 'Dołącz', lang: 'Język strony', logo: 'Krynica — strona główna' },
    hero: {
      kicker: 'pilotaż 2026',
      title: 'Wiedza, która **płynie** do ludzi',
      lead: 'Suwerenny AI społeczności: wspólny rdzeń wiedzy i warstwy poszczególnych społeczności. Rośnie z każdego pytania. Należy do ludzi, którzy go tworzą.',
      cta1: 'Jak to działa',
      cta2: 'Zostań partnerem',
      core: 'wspólny rdzeń',
      diagram: 'Schemat: wspólny rdzeń wiedzy w środku i sześć warstw społeczności wokół niego',
      cardLabel: 'typowe pytanie',
      picker: 'Wybierz społeczność'
    },
    communities: [
      { name: 'Emeryci', q: 'Jak przeliczyć staż pracy z Białorusi?' },
      { name: 'Więźniowie polityczni', q: 'Jak zdobyć dokumenty bez paszportu?' },
      { name: 'Ochrona praw', q: 'Gdzie szukać pomocy przy dyskryminacji lub przemocy?' },
      { name: 'Ochotnicy', q: 'Jaki mam status i jakie prawa w Polsce?' },
      { name: 'Edukacja', q: 'Jak nostryfikować dyplom i studiować w UE?' },
      { name: 'Samozatrudnieni i małe firmy', q: 'Jak zarejestrować działalność i bronić swoich interesów?' }
    ],
    marquee: {
      label: 'Przykładowe pytania',
      items: [
        'Jak przedłużyć kartę pobytu?',
        'Jak otworzyć konto w banku bez paszportu?',
        'Czy mogę studiować zaocznie?',
        'Jak zgłosić dyskryminację w pracy?',
        'Jak przeliczyć emeryturę ze stażem z Białorusi?',
        'Od czego zacząć JDG?',
        'Jak nostryfikować dyplom?',
        'Co daje ochrona międzynarodowa?',
        'Jak zapisać się do NFZ?',
        'Jak rozliczyć PIT za pierwszy rok?'
      ]
    },
    how: {
      kicker: 'jak to działa',
      title: 'Od pytania do załatwionej sprawy',
      lead: '[Krynica] nie tylko odpowiada. Pomaga wypełnić wniosek, a każda konsultacja wraca do rdzenia i uczy całą społeczność.',
      t1: { tag: '01 · Pytasz', title: 'Tekstem lub głosem, po swojemu', sub: 'Prywatnie w Telegramie. Po białorusku, polsku lub rosyjsku.' },
      t2: { tag: '02 · Odpowiedź ze źródłem', a1: 'Zmiana pracodawcy a pobyt czasowy', a1tag: 'sprawdzone', a2: 'Wymagane dokumenty', a2tag: 'źródło', example: 'przykład', title: 'Jasno, konkretnie, z odnośnikiem' },
      t3: { tag: '03 · Załatwiasz sprawę', form: 'Wniosek', steps: '3 / 5', title: 'AI-konsultant pomaga wypełnić wniosek' },
      t4: { tag: '04 · Człowiek czuwa', value: '1 h', title: 'Tygodniowo prawnika i eksperta wystarczy' },
      t5: { tag: '05 · Baza rośnie', title: 'Każda konsultacja wraca do rdzenia — anonimowo' }
    },
    problems: {
      kicker: 'trzy problemy starego modelu · wybierz, aby porównać',
      tablist: 'Problemy',
      illustration: 'ilustracja',
      tabs: [
        {
          label: 'Aktualność', teaser: 'Poradnik traci aktualność w kilka miesięcy',
          title: 'Poradnik starzeje się.', accent: '[Krynica] rośnie.',
          text: 'Grant opłaca dokument, nie jego życie. Poradnik traci aktualność już w pierwszych miesiącach. [Krynicę] codziennie uczą pytania ludzi, a prawnik i ekspert sprawdzają ją raz w tygodniu.',
          caption: 'aktualność i zakres wiedzy w miesiącach',
          alt: 'Wykres: aktualność poradnika spada w ciągu kilku miesięcy po publikacji, a wiedza w Krynicy rośnie',
          l1: 'tradycyjny poradnik', l2: '[Krynica]',
          x0: 'publikacja', x1: '3 mies.', x2: '6 mies.', x3: '9 mies.', x4: '12 mies.'
        },
        {
          label: 'Przepustowość', teaser: 'Dwóch-trzech konsultantów to za mało',
          title: 'Konsultanci to wąskie gardło.', accent: '[Krynica] nie.',
          text: 'Pytań przybywa co miesiąc, a dwóch-trzech konsultantów obsłuży tylko stałą część. Reszta zostaje bez odpowiedzi. W [Krynicy] AI-konsultant odpowiada wszystkim, a ludzie zajmują się tylko trudnymi sprawami.',
          caption: 'pytania miesięcznie',
          alt: 'Wykres: liczba pytań rośnie z miesiąca na miesiąc, konsultanci obsługują tylko stałą część, reszta zostaje bez odpowiedzi; Krynica odpowiada na wszystkie',
          l1: 'obsłużone przez konsultantów', l2: 'bez odpowiedzi', l3: '[Krynica]',
          x0: '1 mies.', x1: '3', x2: '6', x3: '9', x4: '12 mies.'
        },
        {
          label: 'Własność', teaser: 'Wiedza z konsultacji ginie z grantem',
          title: 'Wiedza ginie z grantem.', accent: 'W [Krynicy] zostaje.',
          text: 'Doświadczenie z konsultacji zostaje w notatkach i raportach wykonawcy grantu. W [Krynicy] każdy przypadek, anonimowo, trafia do bazy, która należy do społeczności.',
          caption: 'dokąd trafia wiedza z konsultacji',
          l1: 'u wykonawcy grantu', l2: 'w bazie społeczności',
          g: 'Model grantowy', g1: 'notatki konsultanta', g2: 'raport', g3: 'ginie po grancie',
          gnote: 'Wiedza zostaje u wykonawcy grantu i znika razem z projektem.',
          k: '[Krynica]', k1: 'baza społeczności · anonimowo', k2: 'odpowiedź dla pytającego',
          knote: 'Każda konsultacja zostaje w bazie, którą społeczność może zabrać na własny serwer.'
        }
      ]
    },
    tech: {
      kicker: 'technologia · trzy etapy · wybierz, aby zobaczyć',
      title: 'Suwerenny AI społeczności. **Bez chmury.**',
      lead: 'Model open-source i baza działają na własnym serwerze w Polsce. Ani jedno pytanie nie trafia do zewnętrznych usług.',
      tablist: 'Etapy',
      stages: [
        { label: 'Start', teaser: 'Wspólny rdzeń, warstwy społeczności', tag: 'Etap 1 · serwer główny', title: 'Jeden serwer, wszystkie społeczności',
          text: 'Wspólny rdzeń wiedzy jest jeden — bez sprzecznych wersji. Każda społeczność ma zaszyfrowaną, oddzielną warstwę ze swoimi przypadkami.',
          c1: 'open-source LLM', c2: 'RAG', c3: 'Telegram', c4: 'lokalne rozpoznawanie mowy' },
        { label: 'Jakość', teaser: 'Jak pilnujemy, by odpowiedzi były trafne', tag: 'Etap 2 · kontrola jakości', title: 'Każda zmiana przechodzi egzamin',
          text: 'Wiedza jest wersjonowana w Git: wiadomo, kto i co zmienił, każdą zmianę można cofnąć. Przed każdą aktualizacją system zdaje egzamin z setek prawdziwych pytań. Model można wymienić — wiedza zostaje.',
          c1: 'historia zmian w Git', c2: 'egzamin przed aktualizacją', c3: 'źródło w każdej odpowiedzi', c4: 'wymienny model' },
        { label: 'Sieć', teaser: 'Każda społeczność na własnym serwerze', tag: 'Etap 3 · serwery społeczności', title: 'Każda społeczność na własnym sprzęcie',
          text: 'Warstwa społeczności przenosi się na jej własny serwer, z jej kluczami. Rdzeń przychodzi z serwera głównego jako kopia tylko do odczytu. Propozycje zmian rdzenia wnoszą społeczności, wprowadza serwer główny.',
          c1: 'własne klucze', c2: 'kopia rdzenia tylko do odczytu', c3: 'szyfrowana kopia zapasowa', c4: 'otwarta licencja' }
      ],
      f1: { value: '0', label: 'zapytań do chmury' },
      f2: { value: 'AMD Ryzen AI Max+', label: 'procesor serwera głównego' },
      f3: { value: 'Git', label: 'historia każdej zmiany wiedzy' },
      f4: { value: 'RODO', label: 'polska organizacja' }
    },
    needs: {
      kicker: 'dla zrozumienia rzeczywistości',
      title: 'Mapa potrzeb zamiast raportu',
      lead: 'Każde pytanie to pomiar. Widać, czego ludzie naprawdę potrzebują — codziennie, bez ankiet.',
      map: 'Mapa potrzeb — dane przykładowe',
      a: 'Legalizacja', b: 'Praca i podatki', c: 'Samozatrudnienie i firmy', d: 'Ochrona praw', e: 'Inne',
      note: 'udział tematów w pytaniach · dane przykładowe'
    },
    partners: {
      kicker: 'partnerzy · kim jesteś? wybierz',
      title: '[Krynicę] budujemy razem',
      tablist: 'Partnerzy',
      list: [
        { label: 'Społeczności', teaser: 'Warstwa, która należy do Was', tag: 'Nasz pierwszy partner', title: 'Warstwa, która należy do Was', cta: 'Dołącz ze swoją społecznością',
          o1: 'Własna warstwa bazy', d1: 'Z Waszymi przypadkami i Waszym ekspertem.',
          o2: 'Pomoc 24/7', d2: 'Dla każdego członka, w jego języku.',
          o3: 'Z czasem własny serwer', d3: 'Z Waszymi kluczami, na Waszym sprzęcie.',
          o4: 'Głos w rdzeniu', d4: 'Proponujecie zmiany wspólnej wiedzy.' },
        { label: 'Darczyńcy', teaser: 'Projekt, który żyje po grancie', tag: 'Organizacje darczyńców', title: 'Projekt, który żyje po grancie', cta: 'Porozmawiajmy o wsparciu',
          o1: 'Czysta mapa potrzeb', d1: 'Dane z codziennych pytań, nie z ankiet.',
          o2: 'Mierzalny efekt', d2: 'Liczby zamiast deklaracji.',
          o3: 'Minimalne koszty', d3: 'Własny serwer, bez abonamentów chmurowych.',
          o4: 'Otwarta licencja', d4: 'Wiedza zostaje dla wszystkich.' },
        { label: 'Firmy technologiczne', teaser: 'Edge AI na Waszym sprzęcie', tag: 'Partnerzy technologiczni', title: 'Edge AI w służbie ludzi — na Waszym sprzęcie', cta: 'Porozmawiajmy o współpracy',
          o1: 'Case study', d1: 'Przebieg i wyniki pilotażu na Waszym sprzęcie.',
          o2: 'Wspólne materiały', d2: 'Z Waszym działem marketingu.',
          o3: 'Wystąpienia', d3: 'Na wydarzeniach branżowych i NGO.',
          o4: 'Model do powtórzenia', d4: 'Dla kolejnych organizacji i społeczności.' },
        { label: 'Aktywiści', teaser: 'Prawnicy, wolontariusze, IT', tag: 'Prawnicy, wolontariusze, IT', title: 'Zmieniaj system godzinę tygodniowo', cta: 'Zostań wolontariuszem',
          o1: 'Prawnicy i eksperci', d1: 'Sprawdzają odpowiedzi, uzupełniają rdzeń i warstwy.',
          o2: 'Wolontariusze', d2: 'Wyszukują i wybierają gotowe poradniki z poprzednich lat.',
          o3: 'Specjaliści IT', d3: 'Lokalne AI, otwarty kod, architektura.',
          o4: 'Praca zdalna', d4: 'We własnym tempie, z dowolnego miejsca.' }
      ]
    },
    footer: {
      title: 'Napisz do nas**.**',
      name: 'Sergiusz Panfiłow',
      role: 'koordynator',
      code: 'Otwarty kod strony',
      note: 'Pilotaż 2026 · [Krynica] · strona bez cookies, analityki i zewnętrznych usług'
    }
  },

  be: {
    meta: {
      title: '[Krynica] — суверэнны AI супольнасцей',
      description: 'Пілот 2026. Агульнае ядро ведаў і слаі супольнасцей. AI-кансультант без воблака, які расце з кожнага пытання.',
      skip: 'Перайсці да зместу'
    },
    nav: { label: 'Галоўнае меню', how: 'Як працуе', problems: 'Праблемы', tech: 'Тэхналогія', partners: 'Партнёры', join: 'Далучыцца', lang: 'Мова сайта', logo: 'Krynica — галоўная старонка' },
    hero: {
      kicker: 'пілот 2026',
      title: 'Веды, якія **цякуць** да людзей',
      lead: 'Суверэнны AI супольнасцей: агульнае ядро ведаў і слаі асобных супольнасцей. Расце з кожнага пытання. Належыць людзям, якія яго ствараюць.',
      cta1: 'Як гэта працуе',
      cta2: 'Стаць партнёрам',
      core: 'агульнае ядро',
      diagram: 'Схема: агульнае ядро ведаў у цэнтры і шэсць слаёў супольнасцей вакол яго',
      cardLabel: 'тыповае пытанне',
      picker: 'Выберыце супольнасць'
    },
    communities: [
      { name: 'Пенсіянеры', q: 'Як пералічыць працоўны стаж з Беларусі?' },
      { name: 'Палітвязні', q: 'Як атрымаць дакументы без пашпарта?' },
      { name: 'Абарона правоў', q: 'Дзе шукаць дапамогі пры дыскрымінацыі або гвалце?' },
      { name: 'Добраахвотнікі', q: 'Які ў мяне статус і якія правы ў Польшчы?' },
      { name: 'Адукацыя', q: 'Як настрыфікаваць дыплом і вучыцца ў ЕС?' },
      { name: 'Самазанятыя і малы бізнес', q: 'Як зарэгістраваць дзейнасць і абараняць свае інтарэсы?' }
    ],
    marquee: {
      label: 'Прыклады пытанняў',
      items: [
        'Як падоўжыць карту побыту?',
        'Як адкрыць рахунак у банку без пашпарта?',
        'Ці магу я вучыцца завочна?',
        'Як заявіць пра дыскрымінацыю на працы?',
        'Як пералічыць пенсію са стажам з Беларусі?',
        'З чаго пачаць JDG?',
        'Як настрыфікаваць дыплом?',
        'Што дае міжнародная абарона?',
        'Як запісацца ў NFZ?',
        'Як падаць PIT за першы год?'
      ]
    },
    how: {
      kicker: 'як гэта працуе',
      title: 'Ад пытання да вырашанай справы',
      lead: '[Krynica] не толькі адказвае. Дапамагае запоўніць заяву, а кожная кансультацыя вяртаецца ў ядро і вучыць усю супольнасць.',
      t1: { tag: '01 · Пытаеце', title: 'Тэкстам або голасам, па-свойму', sub: 'Прыватна ў Telegram. Па-беларуску, па-польску або па-руску.' },
      t2: { tag: '02 · Адказ з крыніцай', a1: 'Змена працадаўцы і часовы побыт', a1tag: 'праверана', a2: 'Патрэбныя дакументы', a2tag: 'крыніца', example: 'прыклад', title: 'Ясна, канкрэтна, са спасылкай' },
      t3: { tag: '03 · Вырашаеце справу', form: 'Заява', steps: '3 / 5', title: 'AI-кансультант дапамагае запоўніць заяву' },
      t4: { tag: '04 · Чалавек сочыць', value: '1 гадз', title: 'На тыдзень юрысту і эксперту дастаткова' },
      t5: { tag: '05 · База расце', title: 'Кожная кансультацыя вяртаецца ў ядро — ананімна' }
    },
    problems: {
      kicker: 'тры праблемы старой мадэлі · выберыце, каб параўнаць',
      tablist: 'Праблемы',
      illustration: 'ілюстрацыя',
      tabs: [
        {
          label: 'Актуальнасць', teaser: 'Даведнік старэе за некалькі месяцаў',
          title: 'Даведнік старэе.', accent: '[Krynica] расце.',
          text: 'Грант аплачвае дакумент, а не яго жыццё. Даведнік губляе актуальнасць ужо ў першыя месяцы. [Krynica] штодня вучыцца на пытаннях людзей, а юрыст і эксперт правяраюць яе раз на тыдзень.',
          caption: 'актуальнасць і аб’ём ведаў у месяцах',
          alt: 'Графік: актуальнасць даведніка падае праз некалькі месяцаў пасля публікацыі, а веды ў Krynica растуць',
          l1: 'традыцыйны даведнік', l2: '[Krynica]',
          x0: 'публікацыя', x1: '3 мес.', x2: '6 мес.', x3: '9 мес.', x4: '12 мес.'
        },
        {
          label: 'Прапускная здольнасць', teaser: 'Двух-трох кансультантаў замала',
          title: 'Кансультанты — вузкае месца.', accent: '[Krynica] — не.',
          text: 'Пытанняў штомесяц больш, а два-тры кансультанты абслугоўваюць толькі сталую частку. Астатнія застаюцца без адказу. У [Krynica] AI-кансультант адказвае ўсім, а людзі займаюцца толькі складанымі справамі.',
          caption: 'пытанняў на месяц',
          alt: 'Графік: колькасць пытанняў расце з месяца ў месяц, кансультанты апрацоўваюць толькі сталую частку, астатнія застаюцца без адказу; Krynica адказвае на ўсе',
          l1: 'апрацаваны кансультантамі', l2: 'без адказу', l3: '[Krynica]',
          x0: '1 мес.', x1: '3', x2: '6', x3: '9', x4: '12 мес.'
        },
        {
          label: 'Уласнасць', teaser: 'Веды знікаюць разам з грантам',
          title: 'Веды знікаюць з грантам.', accent: 'У [Krynica] застаюцца.',
          text: 'Досвед кансультацый застаецца ў нататках і справаздачах выканаўцы гранта. У [Krynica] кожны выпадак ананімна трапляе ў базу, якая належыць супольнасці.',
          caption: 'куды трапляюць веды з кансультацый',
          l1: 'у выканаўцы гранта', l2: 'у базе супольнасці',
          g: 'Грантавая мадэль', g1: 'нататкі кансультанта', g2: 'справаздача', g3: 'знікае пасля гранта',
          gnote: 'Веды застаюцца ў выканаўцы гранта і знікаюць разам з праектам.',
          k: '[Krynica]', k1: 'база супольнасці · ананімна', k2: 'адказ таму, хто пытаў',
          knote: 'Кожная кансультацыя застаецца ў базе, якую супольнасць можа забраць на ўласны сервер.'
        }
      ]
    },
    tech: {
      kicker: 'тэхналогія · тры этапы · выберыце, каб убачыць',
      title: 'Суверэнны AI супольнасцей. **Без воблака.**',
      lead: 'Мадэль з адкрытым кодам і база працуюць на ўласным серверы ў Польшчы. Ніводнае пытанне не трапляе ў знешнія сэрвісы.',
      tablist: 'Этапы',
      stages: [
        { label: 'Старт', teaser: 'Агульнае ядро і слаі супольнасцей', tag: 'Этап 1 · галоўны сервер', title: 'Адзін сервер, усе супольнасці',
          text: 'Агульнае ядро ведаў адно — без супярэчлівых версій. Кожная супольнасць мае зашыфраваны асобны слой са сваімі выпадкамі.',
          c1: 'open-source LLM', c2: 'RAG', c3: 'Telegram', c4: 'лакальнае распазнаванне маўлення' },
        { label: 'Якасць', teaser: 'Як мы сочым, каб адказы былі дакладнымі', tag: 'Этап 2 · кантроль якасці', title: 'Кожная змена здае экзамен',
          text: 'Веды версіянуюцца ў Git: вядома, хто і што змяніў, любую змену можна адкаціць. Перад кожным абнаўленнем сістэма здае экзамен з сотняў сапраўдных пытанняў. Мадэль можна замяніць — веды застаюцца.',
          c1: 'гісторыя змен у Git', c2: 'экзамен перад абнаўленнем', c3: 'крыніца ў кожным адказе', c4: 'зменная мадэль' },
        { label: 'Сетка', teaser: 'Кожная супольнасць на ўласным серверы', tag: 'Этап 3 · серверы супольнасцей', title: 'Кожная супольнасць на ўласным абсталяванні',
          text: 'Слой супольнасці пераносіцца на яе ўласны сервер, з яе ключамі. Ядро прыходзіць з галоўнага сервера як копія толькі для чытання. Прапановы змен ядра ўносяць супольнасці, укараняе галоўны сервер.',
          c1: 'уласныя ключы', c2: 'копія ядра толькі для чытання', c3: 'зашыфраваная рэзервовая копія', c4: 'адкрытая ліцэнзія' }
      ],
      f1: { value: '0', label: 'запытаў у воблака' },
      f2: { value: 'AMD Ryzen AI Max+', label: 'працэсар галоўнага сервера' },
      f3: { value: 'Git', label: 'гісторыя кожнай змены ведаў' },
      f4: { value: 'RODO', label: 'польская арганізацыя' }
    },
    needs: {
      kicker: 'для разумення рэчаіснасці',
      title: 'Карта патрэб замест справаздачы',
      lead: 'Кожнае пытанне — гэта вымярэнне. Відаць, што людзям сапраўды патрэбна — штодня, без апытанняў.',
      map: 'Карта патрэб — прыкладныя даныя',
      a: 'Легалізацыя', b: 'Праца і падаткі', c: 'Самазанятыя і фірмы', d: 'Абарона правоў', e: 'Іншае',
      note: 'доля тэм у пытаннях · прыкладныя даныя'
    },
    partners: {
      kicker: 'партнёры · хто вы? выберыце',
      title: '[Krynica] — будуем разам',
      tablist: 'Партнёры',
      list: [
        { label: 'Супольнасці', teaser: 'Слой, які належыць вам', tag: 'Наш першы партнёр', title: 'Слой, які належыць вам', cta: 'Далучыцца са сваёй супольнасцю',
          o1: 'Уласны слой базы', d1: 'З вашымі выпадкамі і вашым экспертам.',
          o2: 'Дапамога 24/7', d2: 'Кожнаму ўдзельніку, на яго мове.',
          o3: 'З часам уласны сервер', d3: 'З вашымі ключамі, на вашым абсталяванні.',
          o4: 'Голас у ядры', d4: 'Вы прапануеце змены агульных ведаў.' },
        { label: 'Донары', teaser: 'Праект, які жыве пасля гранта', tag: 'Арганізацыі-донары', title: 'Праект, які жыве пасля гранта', cta: 'Пагаворым пра падтрымку',
          o1: 'Чыстая карта патрэб', d1: 'Даныя са штодзённых пытанняў, а не з апытанняў.',
          o2: 'Вымерны эфект', d2: 'Лічбы замест дэкларацый.',
          o3: 'Мінімальныя выдаткі', d3: 'Уласны сервер, без воблачных падпісак.',
          o4: 'Адкрытая ліцэнзія', d4: 'Веды застаюцца для ўсіх.' },
        { label: 'Тэхналагічныя фірмы', teaser: 'Edge AI на вашым абсталяванні', tag: 'Тэхналагічныя партнёры', title: 'Edge AI на службе людзям — на вашым абсталяванні', cta: 'Пагаворым пра супрацоўніцтва',
          o1: 'Case study', d1: 'Ход і вынікі пілота на вашым абсталяванні.',
          o2: 'Супольныя матэрыялы', d2: 'З вашым аддзелам маркетынгу.',
          o3: 'Выступы', d3: 'На галіновых падзеях і ў NGO.',
          o4: 'Мадэль для паўтарэння', d4: 'Для наступных арганізацый і супольнасцей.' },
        { label: 'Актывісты', teaser: 'Юрысты, валанцёры, IT', tag: 'Юрысты, валанцёры, IT', title: 'Змяняйце сістэму гадзіну на тыдзень', cta: 'Стаць валанцёрам',
          o1: 'Юрысты і эксперты', d1: 'Правяраюць адказы, дапаўняюць ядро і слаі.',
          o2: 'Валанцёры', d2: 'Шукаюць і адбіраюць гатовыя даведнікі мінулых гадоў.',
          o3: 'IT-спецыялісты', d3: 'Лакальны AI, адкрыты код, архітэктура.',
          o4: 'Дыстанцыйная праца', d4: 'У сваім тэмпе, з любога месца.' }
      ]
    },
    footer: {
      title: 'Напішыце нам**.**',
      name: 'Сяргей Панфілаў',
      role: 'каардынатар',
      code: 'Адкрыты код сайта',
      note: 'Пілот 2026 · [Krynica] · сайт без cookies, аналітыкі і знешніх сэрвісаў'
    }
  }
};
