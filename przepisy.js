/*
  Baza przepisów dla strony „Z lodówki na talerz”.

  Jak dodać własny przepis: skopiuj dowolny blok { ... }, wklej go na końcu listy
  (przed ostatnim nawiasem ]) i zmień treść. Pola:
    n     – nazwa przepisu
    o     – krótki opis (jedno zdanie)
    czas  – łączny czas w minutach
    porcje– liczba porcji
    trud  – "łatwe", "średnie" albo "trudne"
    typ   – "obiad", "zupa", "sniadanie", "salatka" albo "deser"
    dieta – "mieso", "ryba", "wege" (wegetariańskie) albo "weganskie"
    s     – składniki: ["nazwa", "ilość"]; nazwy pisz w mianowniku, np. "pierś z kurczaka"
    k     – kroki przygotowania
*/
window.PRZEPISY = [

/* ===================== DANIA GŁÓWNE Z MIĘSEM ===================== */
{n:"Kotlety schabowe z ziemniakami i mizerią",o:"Klasyczny niedzielny obiad: chrupiące schabowe, młode ziemniaki i ogórki w śmietanie.",czas:50,porcje:4,trud:"średnie",typ:"obiad",dieta:"mieso",
s:[["schab","4 plastry (ok. 600 g)"],["jajka","2 szt."],["bułka tarta","100 g"],["mąka","3 łyżki"],["ziemniaki","1 kg"],["ogórek","2 szt."],["śmietana","150 g"],["koperek","1 pęczek"],["olej","do smażenia"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki obierz i ugotuj w osolonej wodzie do miękkości (ok. 20 minut).","Ogórki pokrój w cienkie plasterki, posól, odstaw na 10 minut i odlej wodę. Wymieszaj ze śmietaną i posiekanym koperkiem.","Schab rozbij tłuczkiem na cienkie plastry, dopraw solą i pieprzem.","Każdy plaster obtocz w mące, potem w roztrzepanych jajkach, na końcu w bułce tartej.","Smaż na rozgrzanym oleju po 3–4 minuty z każdej strony, aż będą złociste.","Podawaj z ziemniakami posypanymi koperkiem i mizerią."]},

{n:"Kurczak w sosie śmietanowo-pieczarkowym",o:"Delikatna pierś z kurczaka w kremowym sosie z pieczarkami, idealna do ryżu albo makaronu.",czas:30,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","500 g"],["pieczarki","300 g"],["cebula","1 szt."],["śmietanka","200 ml"],["czosnek","2 ząbki"],["natka pietruszki","garść"],["masło","1 łyżka"],["olej","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Pierś pokrój w kostkę, dopraw solą i pieprzem.","Na oleju obsmaż kurczaka na złoto (ok. 6 minut) i zdejmij z patelni.","Na maśle zeszklij posiekaną cebulę, dodaj pokrojone pieczarki i smaż, aż odparuje woda.","Dodaj przeciśnięty czosnek, wlej śmietankę i włóż z powrotem kurczaka.","Duś 5 minut, aż sos zgęstnieje. Dopraw i posyp natką.","Podawaj z ryżem, makaronem albo ziemniakami."]},

{n:"Pieczone udka z ziemniakami",o:"Udka i ziemniaki pieczone razem na jednej blasze — mało zmywania, dużo smaku.",czas:60,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["udka z kurczaka","8 szt."],["ziemniaki","1 kg"],["czosnek","4 ząbki"],["papryka słodka mielona","2 łyżeczki"],["tymianek","1 łyżeczka"],["oliwa","4 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 200°C.","Ziemniaki umyj i pokrój w ćwiartki (ze skórką).","Wymieszaj oliwę z papryką, tymiankiem, przeciśniętym czosnkiem, solą i pieprzem.","Natrzyj marynatą udka i ziemniaki, ułóż wszystko na blasze w jednej warstwie.","Piecz 45–50 minut, aż skórka kurczaka będzie chrupiąca, a ziemniaki miękkie."]},

{n:"Gulasz wieprzowy",o:"Miękkie kawałki łopatki w gęstym, paprykowym sosie. Najlepszy z kaszą albo kluskami.",czas:100,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["łopatka wieprzowa","800 g"],["cebula","2 szt."],["papryka","1 szt."],["koncentrat pomidorowy","2 łyżki"],["papryka słodka mielona","1 łyżka"],["mąka","2 łyżki"],["liść laurowy","2 szt."],["ziele angielskie","3 ziarna"],["bulion","500 ml"],["olej","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Mięso pokrój w kostkę 3 cm, obtocz w mące i obsmaż partiami na oleju w garnku.","Dodaj pokrojoną w piórka cebulę i smaż 5 minut.","Wsyp paprykę mieloną, dodaj koncentrat, liść laurowy i ziele angielskie, zalej bulionem.","Przykryj i duś na małym ogniu około 1 godziny, mieszając od czasu do czasu.","Dodaj pokrojoną paprykę i duś jeszcze 15 minut. Dopraw solą i pieprzem."]},

{n:"Spaghetti bolognese",o:"Makaron z sosem z mięsa mielonego i pomidorów, gotowany powoli dla pełnego smaku.",czas:50,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["mięso mielone","500 g"],["spaghetti","400 g"],["pomidory z puszki","2 puszki (800 g)"],["cebula","1 szt."],["marchew","1 szt."],["czosnek","2 ząbki"],["koncentrat pomidorowy","2 łyżki"],["oregano","1 łyżeczka"],["parmezan","do posypania"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Na oliwie zeszklij drobno posiekaną cebulę, startą marchew i czosnek.","Dodaj mięso i smaż, rozbijając łopatką, aż straci różowy kolor.","Dodaj koncentrat, pomidory z puszki i oregano. Duś pod przykryciem 25–30 minut.","W międzyczasie ugotuj makaron al dente w osolonej wodzie.","Dopraw sos solą i pieprzem, wymieszaj z makaronem i posyp parmezanem."]},

{n:"Kotlety mielone z ziemniakami i buraczkami",o:"Soczyste mielone jak u mamy, z puree i buraczkami.",czas:45,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["mięso mielone","600 g"],["bułka","1 szt."],["jajka","1 szt."],["cebula","1 szt."],["bułka tarta","5 łyżek"],["ziemniaki","1 kg"],["buraki","4 szt. (ugotowane)"],["masło","1 łyżka"],["mleko","100 ml"],["olej","do smażenia"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki obierz i ugotuj do miękkości. Utłucz z masłem i ciepłym mlekiem.","Bułkę namocz w wodzie i odciśnij. Cebulę drobno posiekaj.","Wymieszaj mięso z bułką, jajkiem, cebulą, solą i pieprzem. Uformuj owalne kotlety i obtocz w bułce tartej.","Smaż na oleju po 5–6 minut z każdej strony na średnim ogniu.","Buraki zetrzyj na tarce, podgrzej z odrobiną masła, dopraw solą i odrobiną octu albo soku z cytryny."]},

{n:"Gołąbki w sosie pomidorowym",o:"Liście kapusty zawijane z mięsem i ryżem, duszone w sosie pomidorowym.",czas:120,porcje:6,trud:"średnie",typ:"obiad",dieta:"mieso",
s:[["kapusta","1 główka"],["mięso mielone","500 g"],["ryż","100 g"],["cebula","1 szt."],["przecier pomidorowy","500 ml"],["bulion","300 ml"],["majeranek","1 łyżeczka"],["śmietana","2 łyżki"],["olej","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ryż ugotuj do połowy miękkości. Cebulę posiekaj i zeszklij na oleju.","Z kapusty wytnij głąb, sparz główkę we wrzątku i zdejmuj kolejne liście. Zgrubienia na liściach zetnij nożem.","Wymieszaj mięso z ryżem, cebulą, majerankiem, solą i pieprzem.","Na każdy liść nałóż łyżkę farszu i zawiń jak kopertę.","Ułóż gołąbki ciasno w garnku, zalej bulionem i przecierem. Duś pod przykryciem na małym ogniu 1 godzinę.","Na koniec zabiel sos śmietaną i dopraw."]},

{n:"Bigos",o:"Kapusta kiszona i świeża duszona z mięsem, kiełbasą i grzybami. Im dłużej, tym lepszy.",czas:180,porcje:8,trud:"średnie",typ:"obiad",dieta:"mieso",
s:[["kapusta kiszona","1 kg"],["kapusta","500 g"],["łopatka wieprzowa","500 g"],["kiełbasa","300 g"],["boczek","150 g"],["cebula","2 szt."],["suszone grzyby","20 g"],["śliwki suszone","8 szt."],["koncentrat pomidorowy","2 łyżki"],["liść laurowy","3 szt."],["ziele angielskie","5 ziaren"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Grzyby namocz w szklance gorącej wody na 30 minut.","Kapustę kiszoną odciśnij i posiekaj. Zalej wodą, dodaj liść laurowy i ziele angielskie, gotuj 30 minut.","Dodaj poszatkowaną świeżą kapustę i gotuj kolejne 20 minut.","Na patelni wytop pokrojony boczek, obsmaż na nim kostki łopatki i cebulę, a na końcu plasterki kiełbasy.","Przełóż mięso do kapusty, dodaj pokrojone grzyby z wodą, śliwki i koncentrat.","Duś na małym ogniu co najmniej 1,5 godziny, mieszając. Dopraw solą i pieprzem."]},

{n:"Kotlet z piersi kurczaka w panierce",o:"Szybka wersja schabowego z kurczaka — cienki, chrupiący, gotowy w kwadrans.",czas:25,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","2 szt. (ok. 600 g)"],["jajka","2 szt."],["bułka tarta","100 g"],["mąka","3 łyżki"],["papryka słodka mielona","1 łyżeczka"],["olej","do smażenia"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Każdą pierś przekrój wzdłuż na dwa cieńsze filety i lekko rozbij.","Dopraw solą, pieprzem i papryką.","Obtocz kolejno w mące, jajku i bułce tartej.","Smaż na oleju po 3–4 minuty z każdej strony, aż będą złote i upieczone w środku.","Podawaj z ziemniakami albo frytkami i surówką."]},

{n:"Kurczak curry z ryżem",o:"Łagodne curry z mlekiem kokosowym, gotowe w pół godziny.",czas:30,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","500 g"],["mleko kokosowe","400 ml"],["cebula","1 szt."],["czosnek","2 ząbki"],["imbir","1 cm"],["curry","2 łyżki"],["pomidory z puszki","1 puszka"],["ryż","250 g"],["kolendra","garść (opcjonalnie)"],["olej","2 łyżki"],["sól","do smaku"]],
k:["Ugotuj ryż według przepisu na opakowaniu.","Na oleju zeszklij cebulę, dodaj czosnek, starty imbir i curry. Smaż minutę.","Dodaj pokrojonego w kostkę kurczaka i obsmaż ze wszystkich stron.","Wlej mleko kokosowe i pomidory, gotuj 15 minut na małym ogniu.","Dopraw solą, posyp kolendrą i podawaj z ryżem."]},

{n:"Makaron z kurczakiem i szpinakiem",o:"Penne w kremowym sosie z kurczakiem, szpinakiem i czosnkiem.",czas:25,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","400 g"],["makaron","400 g"],["szpinak","150 g"],["śmietanka","200 ml"],["czosnek","3 ząbki"],["parmezan","40 g"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ugotuj makaron al dente.","Kurczaka pokrój w paski, dopraw i usmaż na oliwie.","Dodaj czosnek, a po chwili szpinak i mieszaj, aż zwiędnie.","Wlej śmietankę, dodaj starty parmezan i gotuj 2 minuty.","Wymieszaj z makaronem i dopraw pieprzem."]},

{n:"Leczo z kiełbasą",o:"Papryka, cukinia i pomidory duszone z kiełbasą — sycące jednogarnkowe danie.",czas:40,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["kiełbasa","300 g"],["papryka","3 szt."],["cukinia","1 szt."],["cebula","1 szt."],["pomidory z puszki","1 puszka"],["czosnek","2 ząbki"],["papryka słodka mielona","1 łyżeczka"],["olej","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kiełbasę pokrój w półplasterki i podsmaż na oleju w garnku.","Dodaj pokrojoną cebulę i czosnek, smaż 3 minuty.","Dodaj paprykę w paskach i cukinię w kostkę, duś 10 minut.","Wlej pomidory, dodaj paprykę mieloną i duś kolejne 15 minut.","Dopraw solą i pieprzem. Podawaj z chlebem albo ryżem."]},

{n:"Zapiekanka makaronowa z szynką i serem",o:"Makaron zapiekany z szynką, śmietaną i żółtym serem.",czas:40,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["makaron","350 g"],["szynka","200 g"],["ser żółty","150 g"],["śmietana","200 g"],["jajka","2 szt."],["groszek","150 g"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 190°C. Ugotuj makaron al dente.","Szynkę pokrój w kostkę. Wymieszaj śmietanę z jajkami, solą i pieprzem.","Połącz makaron z szynką, groszkiem i połową startego sera.","Przełóż do naczynia żaroodpornego, zalej masą jajeczną i posyp resztą sera.","Zapiekaj 20 minut, aż ser się zarumieni."]},

{n:"Risotto z kurczakiem i pieczarkami",o:"Kremowe risotto z kurczakiem, pieczarkami i parmezanem.",czas:40,porcje:4,trud:"średnie",typ:"obiad",dieta:"mieso",
s:[["ryż","300 g (najlepiej arborio)"],["pierś z kurczaka","300 g"],["pieczarki","250 g"],["cebula","1 szt."],["bulion","1 l"],["parmezan","50 g"],["masło","2 łyżki"],["oliwa","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Bulion podgrzej i trzymaj na małym ogniu.","Na oliwie obsmaż kurczaka w kostce i pokrojone pieczarki, odłóż.","Na łyżce masła zeszklij cebulę, wsyp ryż i smaż 2 minuty, mieszając.","Wlewaj bulion po jednej chochli, czekając, aż ryż go wchłonie. Mieszaj często, ok. 18 minut.","Dodaj kurczaka z pieczarkami, resztę masła i starty parmezan. Dopraw i podawaj od razu."]},

{n:"Kurczak z warzywami z woka",o:"Szybkie danie po azjatycku z sosem sojowym i chrupiącymi warzywami.",czas:25,porcje:3,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","400 g"],["papryka","1 szt."],["marchew","1 szt."],["brokuł","1 mały"],["sos sojowy","4 łyżki"],["czosnek","2 ząbki"],["imbir","1 cm"],["miód","1 łyżka"],["ryż","200 g"],["olej","2 łyżki"]],
k:["Ugotuj ryż.","Kurczaka pokrój w paski, warzywa w cienkie słupki, brokuł podziel na małe różyczki.","Na mocno rozgrzanym oleju smaż kurczaka 4 minuty i zdejmij.","Wrzuć warzywa z czosnkiem i imbirem, smaż 4–5 minut, by zostały chrupiące.","Dodaj kurczaka, sos sojowy i miód, wymieszaj i podgrzewaj minutę. Podawaj z ryżem."]},

{n:"Pulpety w sosie pomidorowym",o:"Miękkie klopsiki gotowane w sosie pomidorowym, świetne z ryżem lub makaronem.",czas:45,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["mięso mielone","500 g"],["jajka","1 szt."],["bułka tarta","3 łyżki"],["cebula","1 szt."],["przecier pomidorowy","500 ml"],["czosnek","2 ząbki"],["bazylia","garść"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Wymieszaj mięso z jajkiem, bułką tartą, połową startej cebuli, solą i pieprzem. Uformuj kulki wielkości orzecha włoskiego.","Na oliwie zeszklij resztę cebuli i czosnek, wlej przecier i zagotuj.","Włóż pulpety do sosu, przykryj i gotuj na małym ogniu 20 minut.","Dopraw sos, dodaj porwaną bazylię. Podawaj z ryżem albo makaronem."]},

{n:"Gulasz wołowy",o:"Wołowina duszona długo z cebulą i papryką, aż rozpada się pod widelcem.",czas:150,porcje:4,trud:"średnie",typ:"obiad",dieta:"mieso",
s:[["wołowina","800 g"],["cebula","3 szt."],["papryka","1 szt."],["czosnek","3 ząbki"],["koncentrat pomidorowy","2 łyżki"],["papryka słodka mielona","1 łyżka"],["kminek","1/2 łyżeczki"],["mąka","2 łyżki"],["bulion","700 ml"],["olej","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Wołowinę pokrój w kostkę, obtocz w mące i obsmaż partiami na oleju.","Dodaj pokrojoną cebulę i czosnek, smaż do zeszklenia.","Wsyp paprykę i kminek, dodaj koncentrat, zalej bulionem.","Duś pod przykryciem na małym ogniu 2 godziny, dolewając wody w razie potrzeby.","Na ostatnie 20 minut dodaj pokrojoną paprykę. Dopraw i podawaj z kaszą lub kluskami."]},

{n:"Kiełbasa z cebulką i ziemniakami",o:"Proste, domowe danie z patelni z podsmażanymi ziemniakami.",czas:35,porcje:3,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["kiełbasa","400 g"],["ziemniaki","800 g"],["cebula","2 szt."],["musztarda","do podania"],["majeranek","1 łyżeczka"],["olej","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki ugotuj w mundurkach, obierz i pokrój w plastry.","Na oleju podsmaż kiełbasę w plasterkach, dodaj cebulę w piórkach.","Gdy cebula się zarumieni, dodaj ziemniaki i smaż, aż będą chrupiące.","Dopraw majerankiem, solą i pieprzem. Podawaj z musztardą i ogórkiem kiszonym."]},

{n:"Spaghetti carbonara",o:"Włoski klasyk z boczkiem, jajkami i parmezanem — bez śmietany.",czas:20,porcje:4,trud:"średnie",typ:"obiad",dieta:"mieso",
s:[["spaghetti","400 g"],["boczek","200 g"],["jajka","3 szt."],["parmezan","60 g"],["czosnek","1 ząbek"],["pieprz","do smaku"],["sól","do smaku"]],
k:["Ugotuj makaron w osolonej wodzie. Odlej szklankę wody z gotowania.","Boczek pokrój w paski i wytop na patelni z czosnkiem (czosnek potem usuń).","Wymieszaj jajka ze startym parmezanem i dużą ilością pieprzu.","Odcedzony makaron wrzuć na patelnię z boczkiem i zdejmij z ognia.","Wlej masę jajeczną i szybko mieszaj, dodając trochę wody z makaronu, aż powstanie kremowy sos. Podawaj od razu."]},

{n:"Tortille z kurczakiem i warzywami",o:"Wrapy z przyprawionym kurczakiem, świeżymi warzywami i sosem czosnkowym.",czas:25,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","400 g"],["tortilla","4 szt."],["sałata","kilka liści"],["pomidory","2 szt."],["ogórek","1 szt."],["jogurt naturalny","150 g"],["czosnek","1 ząbek"],["papryka słodka mielona","1 łyżeczka"],["olej","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kurczaka pokrój w paski, dopraw papryką, solą i pieprzem, usmaż na oleju.","Jogurt wymieszaj z przeciśniętym czosnkiem i szczyptą soli.","Pomidory i ogórka pokrój w kostkę.","Tortille podgrzej na suchej patelni.","Na każdą nałóż sałatę, kurczaka, warzywa i sos, a potem zwiń."]},

{n:"Chili con carne",o:"Pikantny gulasz z mięsa mielonego, fasoli i pomidorów.",czas:50,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["mięso mielone","500 g"],["fasola czerwona","1 puszka"],["pomidory z puszki","1 puszka"],["kukurydza","1 puszka"],["cebula","1 szt."],["papryka","1 szt."],["czosnek","2 ząbki"],["chili","1/2 łyżeczki"],["kmin rzymski","1 łyżeczka"],["olej","2 łyżki"],["sól","do smaku"]],
k:["Na oleju zeszklij cebulę i czosnek, dodaj mięso i smaż, aż się zrumieni.","Dodaj paprykę w kostce, chili i kmin rzymski, smaż 2 minuty.","Wlej pomidory i duś 20 minut.","Dodaj odsączoną fasolę i kukurydzę, gotuj jeszcze 10 minut.","Dopraw solą. Podawaj z ryżem, chlebem albo nachosami."]},

{n:"Kurczak w miodzie i sosie sojowym",o:"Lepkie, słodko-słone kawałki kurczaka z sezamem.",czas:25,porcje:3,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","500 g"],["sos sojowy","4 łyżki"],["miód","2 łyżki"],["czosnek","2 ząbki"],["imbir","1 cm"],["mąka ziemniaczana","1 łyżka"],["sezam","1 łyżka"],["ryż","200 g"],["olej","2 łyżki"]],
k:["Ugotuj ryż.","Kurczaka pokrój w kostkę i obtocz w mące ziemniaczanej.","Smaż na oleju na złoto, ok. 6 minut.","Wymieszaj sos sojowy, miód, czosnek i starty imbir. Wlej na patelnię.","Mieszaj, aż sos zgęstnieje i oblepi mięso. Posyp sezamem i podawaj z ryżem."]},

{n:"Fasolka po bretońsku",o:"Fasola z kiełbasą i boczkiem w gęstym sosie pomidorowym.",czas:45,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["fasola biała","2 puszki"],["kiełbasa","250 g"],["boczek","100 g"],["cebula","1 szt."],["przecier pomidorowy","400 ml"],["koncentrat pomidorowy","1 łyżka"],["majeranek","1 łyżeczka"],["papryka słodka mielona","1 łyżeczka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Boczek pokrój w kostkę i wytop w garnku.","Dodaj cebulę i kiełbasę w kostce, smaż 5 minut.","Wlej przecier, dodaj koncentrat, paprykę i majeranek.","Dodaj odsączoną fasolę i gotuj na małym ogniu 20 minut.","Dopraw solą i pieprzem. Podawaj z chlebem."]},

{n:"Łazanki z kapustą i kiełbasą",o:"Makaron łazanki z duszoną kapustą i podsmażaną kiełbasą.",czas:45,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["makaron","300 g (łazanki)"],["kapusta kiszona","500 g"],["kiełbasa","250 g"],["cebula","1 szt."],["boczek","100 g"],["koncentrat pomidorowy","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kapustę kiszoną posiekaj, zalej wodą i gotuj 20 minut. Odcedź.","Wytop boczek, dodaj cebulę i kiełbasę, smaż do zrumienienia.","Dodaj kapustę i koncentrat, duś 10 minut.","Ugotuj makaron i wymieszaj z kapustą. Dopraw solą i pieprzem."]},

{n:"Karkówka z patelni z cebulką",o:"Plastry karkówki smażone z dużą ilością cebuli.",czas:30,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["karkówka","600 g"],["cebula","3 szt."],["czosnek","2 ząbki"],["musztarda","1 łyżka"],["majeranek","1 łyżeczka"],["olej","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Karkówkę pokrój w plastry 1,5 cm i lekko rozbij.","Natrzyj musztardą, czosnkiem, majerankiem i pieprzem. Najlepiej odstaw na 30 minut.","Smaż na rozgrzanym oleju po 4 minuty z każdej strony, posól pod koniec.","Na tej samej patelni usmaż cebulę w piórkach do złotego koloru.","Podawaj mięso z cebulką, ziemniakami i surówką."]},

{n:"Domowe burgery wołowe",o:"Soczyste burgery z mielonej wołowiny z serem i warzywami.",czas:30,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["wołowina mielona","600 g"],["bułki","4 szt."],["ser żółty","4 plastry"],["pomidory","1 szt."],["sałata","4 liście"],["cebula czerwona","1 szt."],["ogórek kiszony","2 szt."],["ketchup","do podania"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Mięso dopraw solą i pieprzem, uformuj 4 płaskie kotlety (nieco szersze niż bułka).","Smaż na mocno rozgrzanej patelni lub grillu po 3–4 minuty z każdej strony.","Na minutę przed końcem połóż na każdym plaster sera.","Bułki przekrój i podpiecz.","Złóż burgery: sałata, kotlet z serem, pomidor, cebula, ogórek i ketchup."]},

{n:"Zapiekanka ziemniaczana z mięsem mielonym",o:"Warstwy ziemniaków i mięsa zapiekane pod serem.",czas:70,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["ziemniaki","1 kg"],["mięso mielone","400 g"],["cebula","1 szt."],["śmietanka","200 ml"],["ser żółty","150 g"],["czosnek","2 ząbki"],["papryka słodka mielona","1 łyżeczka"],["olej","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 190°C. Ziemniaki obierz i pokrój w cienkie plastry.","Na oleju podsmaż cebulę i mięso, dopraw papryką, solą i pieprzem.","Śmietankę wymieszaj z czosnkiem i szczyptą soli.","W naczyniu układaj warstwami ziemniaki i mięso, zaczynając i kończąc na ziemniakach. Zalej śmietanką.","Przykryj folią i piecz 35 minut, potem posyp serem i zapiekaj bez folii 15 minut."]},

{n:"Udka z kurczaka duszone w warzywach",o:"Udka duszone z marchewką, papryką i pomidorami w jednym garnku.",czas:60,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["udka z kurczaka","8 szt."],["marchew","2 szt."],["papryka","1 szt."],["cebula","1 szt."],["pomidory z puszki","1 puszka"],["czosnek","2 ząbki"],["papryka słodka mielona","1 łyżeczka"],["olej","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Udka dopraw solą, pieprzem i papryką, obsmaż na oleju w garnku na złoto.","Dodaj cebulę, czosnek i pokrojoną marchew, smaż 3 minuty.","Wlej pomidory i pół szklanki wody, przykryj i duś 30 minut.","Dodaj paprykę w paskach i duś jeszcze 10 minut. Podawaj z ryżem lub kaszą."]},

{n:"Kurczak z papryką i ryżem z jednego garnka",o:"Ryż gotowany razem z kurczakiem i warzywami — obiad z jednego naczynia.",czas:40,porcje:4,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["pierś z kurczaka","400 g"],["ryż","250 g"],["papryka","2 szt."],["cebula","1 szt."],["groszek","150 g"],["bulion","600 ml"],["papryka słodka mielona","1 łyżeczka"],["kurkuma","1/2 łyżeczki"],["olej","2 łyżki"],["sól","do smaku"]],
k:["Na oleju obsmaż kurczaka w kostce, dodaj cebulę i paprykę.","Wsyp ryż, paprykę mieloną i kurkumę, smaż minutę.","Zalej gorącym bulionem, przykryj i gotuj na małym ogniu 15 minut.","Dodaj groszek, przykryj i gotuj jeszcze 5 minut, aż ryż wchłonie płyn. Dopraw solą."]},

{n:"Wątróbka drobiowa z cebulką i jabłkiem",o:"Delikatna wątróbka smażona z cebulą i kawałkami jabłka.",czas:25,porcje:3,trud:"łatwe",typ:"obiad",dieta:"mieso",
s:[["wątróbka drobiowa","500 g"],["cebula","2 szt."],["jabłka","1 szt."],["mąka","2 łyżki"],["masło","1 łyżka"],["olej","2 łyżki"],["majeranek","1/2 łyżeczki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Wątróbkę opłucz, oczyść z błon i osusz.","Na oleju i maśle usmaż cebulę w piórkach, dodaj jabłko w cząstkach i smaż 3 minuty. Zdejmij z patelni.","Wątróbkę obtocz w mące i smaż 3–4 minuty z każdej strony.","Dodaj cebulę z jabłkiem, posyp majerankiem, posól dopiero na końcu (inaczej stwardnieje)."]},

/* ===================== ZUPY ===================== */
{n:"Rosół z kurczaka",o:"Klarowny, aromatyczny rosół — podstawa polskiej niedzieli.",czas:150,porcje:6,trud:"łatwe",typ:"zupa",dieta:"mieso",
s:[["kurczak","1 kg (porcja rosołowa lub udka)"],["marchew","3 szt."],["pietruszka","2 szt."],["seler","1/4 bulwy"],["por","1/2 szt."],["cebula","1 szt."],["liść laurowy","2 szt."],["ziele angielskie","4 ziarna"],["makaron","200 g (nitki)"],["natka pietruszki","garść"],["sól","do smaku"],["pieprz","kilka ziaren"]],
k:["Mięso opłucz, włóż do garnka, zalej 3 litrami zimnej wody i powoli zagotuj. Zbieraj szumowiny.","Cebulę przekrój i opal na suchej patelni lub nad palnikiem.","Dodaj obrane warzywa, cebulę, liść laurowy, ziele angielskie i pieprz.","Gotuj na bardzo małym ogniu, pod uchyloną pokrywką, co najmniej 2 godziny. Posól pod koniec.","Przecedź. Podawaj z ugotowanym makaronem, marchewką w plasterkach i natką."]},

{n:"Zupa pomidorowa",o:"Kremowa pomidorówka na bulionie, z ryżem albo makaronem.",czas:30,porcje:4,trud:"łatwe",typ:"zupa",dieta:"mieso",
s:[["bulion","1,5 l (najlepiej rosół)"],["przecier pomidorowy","500 ml"],["koncentrat pomidorowy","2 łyżki"],["śmietana","150 g"],["ryż","100 g"],["natka pietruszki","garść"],["cukier","szczypta"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ugotuj ryż albo makaron osobno.","Bulion zagotuj, dodaj przecier i koncentrat, gotuj 10 minut.","Śmietanę zahartuj: wymieszaj z kilkoma łyżkami gorącej zupy, a potem wlej do garnka.","Dopraw solą, pieprzem i szczyptą cukru.","Podawaj z ryżem lub makaronem, posypaną natką."]},

{n:"Zupa ogórkowa",o:"Lekko kwaśna zupa z ogórków kiszonych i ziemniaków.",czas:45,porcje:4,trud:"łatwe",typ:"zupa",dieta:"wege",
s:[["ogórek kiszony","5 szt."],["ziemniaki","4 szt."],["marchew","1 szt."],["pietruszka","1 szt."],["bulion warzywny","1,5 l"],["śmietana","150 g"],["koperek","1 pęczek"],["masło","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki pokrój w kostkę, marchew i pietruszkę zetrzyj na grubej tarce.","Zagotuj bulion, dodaj warzywa i gotuj 15 minut.","Ogórki zetrzyj i podduś 5 minut na maśle, potem dodaj do zupy razem z odrobiną zalewy z ogórków.","Gotuj jeszcze 10 minut. Zabiel zahartowaną śmietaną.","Dopraw pieprzem (sól ostrożnie, ogórki są słone) i posyp koperkiem."]},

{n:"Żurek z kiełbasą i jajkiem",o:"Kwaśna zupa na zakwasie z białą kiełbasą, ziemniakami i jajkiem.",czas:50,porcje:4,trud:"łatwe",typ:"zupa",dieta:"mieso",
s:[["zakwas na żurek","500 ml"],["biała kiełbasa","400 g"],["ziemniaki","4 szt."],["jajka","4 szt."],["boczek","100 g"],["cebula","1 szt."],["czosnek","3 ząbki"],["majeranek","1 łyżka"],["chrzan","1 łyżka"],["liść laurowy","2 szt."],["ziele angielskie","3 ziarna"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kiełbasę gotuj 20 minut w 1,5 l wody z liściem laurowym i zielem. Wyjmij i pokrój.","Ziemniaki pokrój w kostkę i ugotuj w wywarze z kiełbasy.","Boczek i cebulę podsmaż na patelni, dodaj do zupy.","Wlej zakwas, dodaj czosnek, majeranek i chrzan. Gotuj 5 minut, nie doprowadzając do mocnego wrzenia.","Jajka ugotuj na twardo. Podawaj zupę z kiełbasą i połówkami jajek."]},

{n:"Krupnik",o:"Gęsta zupa z kaszą jęczmienną, warzywami i ziemniakami.",czas:60,porcje:6,trud:"łatwe",typ:"zupa",dieta:"mieso",
s:[["bulion","2 l"],["kasza jęczmienna","80 g"],["ziemniaki","4 szt."],["marchew","2 szt."],["pietruszka","1 szt."],["seler","1 kawałek"],["natka pietruszki","garść"],["masło","1 łyżka"],["liść laurowy","1 szt."],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kaszę przepłucz. Warzywa obierz i pokrój w kostkę.","Zagotuj bulion, wsyp kaszę i gotuj 15 minut.","Dodaj warzywa, ziemniaki i liść laurowy, gotuj kolejne 20 minut.","Dodaj masło, dopraw solą i pieprzem, posyp natką."]},

{n:"Zupa pieczarkowa",o:"Kremowa zupa z pieczarek z makaronem albo ziemniakami.",czas:40,porcje:4,trud:"łatwe",typ:"zupa",dieta:"wege",
s:[["pieczarki","500 g"],["cebula","1 szt."],["bulion warzywny","1,5 l"],["ziemniaki","3 szt."],["śmietana","150 g"],["masło","2 łyżki"],["koperek","pęczek"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Na maśle zeszklij cebulę, dodaj pokrojone pieczarki i smaż 10 minut.","Zagotuj bulion z pokrojonymi w kostkę ziemniakami.","Dodaj pieczarki i gotuj 15 minut.","Zabiel zahartowaną śmietaną, dopraw i posyp koperkiem."]},

{n:"Barszcz czerwony",o:"Klarowny, kwaskowy barszcz z buraków.",czas:70,porcje:4,trud:"łatwe",typ:"zupa",dieta:"weganskie",
s:[["buraki","1 kg"],["marchew","1 szt."],["pietruszka","1 szt."],["seler","1 kawałek"],["cebula","1 szt."],["czosnek","3 ząbki"],["sok z cytryny","2 łyżki"],["majeranek","1 łyżeczka"],["liść laurowy","2 szt."],["ziele angielskie","4 ziarna"],["cukier","1 łyżeczka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Warzywa obierz. Buraki pokrój w plastry, resztę w kawałki.","Zalej 2 litrami wody, dodaj liść laurowy i ziele, gotuj 40 minut.","Dodaj czosnek i majeranek, gotuj jeszcze 5 minut, potem przecedź.","Dopraw sokiem z cytryny, cukrem, solą i pieprzem, aż będzie słodko-kwaśny. Nie gotuj już, by zachował kolor."]},

{n:"Kapuśniak",o:"Rozgrzewająca zupa z kiszonej kapusty z ziemniakami i boczkiem.",czas:60,porcje:6,trud:"łatwe",typ:"zupa",dieta:"mieso",
s:[["kapusta kiszona","500 g"],["ziemniaki","4 szt."],["boczek","150 g"],["marchew","1 szt."],["cebula","1 szt."],["bulion","1,5 l"],["koncentrat pomidorowy","1 łyżka"],["kminek","1/2 łyżeczki"],["liść laurowy","2 szt."],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kapustę posiekaj i gotuj w bulionie z liściem laurowym 20 minut.","Boczek z cebulą podsmaż i dodaj do zupy.","Dodaj ziemniaki w kostce i startą marchew, gotuj 20 minut.","Dodaj koncentrat i kminek, dopraw solą i pieprzem."]},

{n:"Grochówka",o:"Gęsta zupa z grochu łuskanego z kiełbasą i majerankiem.",czas:100,porcje:6,trud:"łatwe",typ:"zupa",dieta:"mieso",
s:[["groch łuskany","300 g"],["kiełbasa","250 g"],["boczek","100 g"],["ziemniaki","3 szt."],["marchew","1 szt."],["cebula","1 szt."],["czosnek","2 ząbki"],["majeranek","1 łyżka"],["liść laurowy","2 szt."],["sól","do smaku"],["pieprz","do smaku"]],
k:["Groch namocz na noc (albo kup taki, który nie wymaga moczenia).","Gotuj groch w 2 l wody z liściem laurowym ok. 50 minut, aż się rozpadnie.","Dodaj ziemniaki i marchew w kostce, gotuj 20 minut.","Podsmaż boczek, cebulę i kiełbasę, dodaj do zupy z czosnkiem.","Dopraw majerankiem, solą i pieprzem."]},

{n:"Krem z dyni",o:"Aksamitna zupa krem z dyni z imbirem.",czas:40,porcje:4,trud:"łatwe",typ:"zupa",dieta:"wege",
s:[["dynia","1 kg"],["ziemniaki","1 szt."],["cebula","1 szt."],["czosnek","2 ząbki"],["imbir","2 cm"],["bulion warzywny","1 l"],["śmietanka","100 ml"],["pestki dyni","do posypania"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Dynię obierz i pokrój w kostkę, ziemniak też.","Na oliwie zeszklij cebulę, czosnek i imbir.","Dodaj dynię i ziemniak, zalej bulionem i gotuj 20 minut do miękkości.","Zmiksuj na gładko, dodaj śmietankę i dopraw.","Podawaj z uprażonymi pestkami dyni."]},

{n:"Krem z brokułów",o:"Zielona zupa krem z brokułów i ziemniaka, z serem pleśniowym lub bez.",czas:30,porcje:4,trud:"łatwe",typ:"zupa",dieta:"wege",
s:[["brokuł","2 szt."],["ziemniaki","2 szt."],["cebula","1 szt."],["czosnek","2 ząbki"],["bulion warzywny","1 l"],["śmietanka","100 ml"],["masło","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Na maśle zeszklij cebulę i czosnek.","Dodaj pokrojone ziemniaki i różyczki brokułu, zalej bulionem.","Gotuj 15 minut i zmiksuj na krem.","Dodaj śmietankę, dopraw solą i pieprzem. Podawaj z grzankami."]},

{n:"Zupa jarzynowa",o:"Lekka zupa z sezonowych warzyw.",czas:40,porcje:6,trud:"łatwe",typ:"zupa",dieta:"wege",
s:[["ziemniaki","3 szt."],["marchew","2 szt."],["pietruszka","1 szt."],["kalafior","1/2 szt."],["fasolka szparagowa","150 g"],["groszek","100 g"],["por","1/2 szt."],["bulion warzywny","2 l"],["koperek","pęczek"],["masło","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Wszystkie warzywa obierz i pokrój w drobną kostkę, kalafior podziel na różyczki.","Zagotuj bulion, wrzuć marchew, pietruszkę i ziemniaki, gotuj 10 minut.","Dodaj kalafior, fasolkę, groszek i por, gotuj 15 minut.","Dodaj masło, dopraw i posyp koperkiem."]},

{n:"Zupa krem z pomidorów z puszki",o:"Szybki krem z pomidorów z bazylią — gotowy w 20 minut.",czas:20,porcje:4,trud:"łatwe",typ:"zupa",dieta:"weganskie",
s:[["pomidory z puszki","2 puszki"],["cebula","1 szt."],["czosnek","2 ząbki"],["bulion warzywny","500 ml"],["bazylia","garść"],["oliwa","2 łyżki"],["cukier","1 łyżeczka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Na oliwie zeszklij cebulę i czosnek.","Dodaj pomidory i bulion, gotuj 10 minut.","Zmiksuj z bazylią na gładko.","Dopraw solą, pieprzem i cukrem. Podawaj z grzankami."]},

{n:"Zupa z czerwonej soczewicy",o:"Gęsta, rozgrzewająca zupa z soczewicy z kuminem.",czas:35,porcje:4,trud:"łatwe",typ:"zupa",dieta:"weganskie",
s:[["soczewica","200 g (czerwona)"],["marchew","2 szt."],["cebula","1 szt."],["czosnek","2 ząbki"],["pomidory z puszki","1 puszka"],["bulion warzywny","1,2 l"],["kmin rzymski","1 łyżeczka"],["sok z cytryny","1 łyżka"],["oliwa","2 łyżki"],["sól","do smaku"]],
k:["Na oliwie zeszklij cebulę, czosnek i startą marchew, dodaj kmin rzymski.","Wsyp przepłukaną soczewicę, dodaj pomidory i bulion.","Gotuj 20 minut, aż soczewica się rozpadnie.","Zmiksuj częściowo lub całkiem, dopraw solą i sokiem z cytryny."]},

{n:"Zupa ziemniaczana (kartoflanka)",o:"Prosta zupa z ziemniaków z majerankiem i podsmażaną cebulką.",czas:40,porcje:4,trud:"łatwe",typ:"zupa",dieta:"wege",
s:[["ziemniaki","6 szt."],["marchew","1 szt."],["pietruszka","1 szt."],["cebula","1 szt."],["bulion warzywny","1,5 l"],["majeranek","1 łyżka"],["masło","1 łyżka"],["śmietana","100 g"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki pokrój w kostkę, marchew i pietruszkę zetrzyj.","Gotuj warzywa w bulionie 20 minut.","Cebulę zrumień na maśle i dodaj do zupy.","Dopraw majerankiem, solą i pieprzem, zabiel śmietaną."]},

{n:"Zupa gulaszowa",o:"Pikantna, gęsta zupa z wołowiną, ziemniakami i papryką.",czas:90,porcje:6,trud:"średnie",typ:"zupa",dieta:"mieso",
s:[["wołowina","500 g"],["ziemniaki","4 szt."],["papryka","2 szt."],["cebula","2 szt."],["czosnek","3 ząbki"],["koncentrat pomidorowy","2 łyżki"],["papryka słodka mielona","1 łyżka"],["kminek","1/2 łyżeczki"],["bulion","1,5 l"],["olej","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Wołowinę pokrój w małą kostkę i obsmaż na oleju.","Dodaj cebulę i czosnek, potem paprykę mieloną, kminek i koncentrat.","Zalej bulionem i gotuj pod przykryciem 50 minut.","Dodaj ziemniaki i paprykę w kostce, gotuj 20 minut. Dopraw."]},

/* ===================== RYBY ===================== */
{n:"Łosoś pieczony z warzywami",o:"Filet z łososia pieczony na blasze z brokułem i ziemniakami.",czas:35,porcje:2,trud:"łatwe",typ:"obiad",dieta:"ryba",
s:[["łosoś","2 filety (ok. 300 g)"],["ziemniaki","500 g"],["brokuł","1 mały"],["cytryna","1 szt."],["czosnek","2 ząbki"],["koperek","garść"],["oliwa","3 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 200°C. Ziemniaki pokrój w ćwiartki, wymieszaj z oliwą i solą, piecz 15 minut.","Dodaj na blachę różyczki brokułu, a obok połóż łososia skórą do dołu.","Rybę skrop sokiem z cytryny, posyp czosnkiem, solą i pieprzem.","Piecz jeszcze 12–15 minut. Posyp koperkiem i podawaj z cząstkami cytryny."]},

{n:"Dorsz w panierce z surówką z kapusty",o:"Chrupiąca ryba z patelni z kiszoną surówką.",czas:30,porcje:4,trud:"łatwe",typ:"obiad",dieta:"ryba",
s:[["dorsz","600 g"],["jajka","2 szt."],["bułka tarta","80 g"],["mąka","3 łyżki"],["kapusta kiszona","400 g"],["marchew","1 szt."],["jabłka","1 szt."],["cytryna","1/2 szt."],["olej","do smażenia"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kapustę kiszoną posiekaj, wymieszaj ze startą marchewką i jabłkiem oraz łyżką oleju.","Rybę pokrój na porcje, skrop cytryną, posól i popieprz.","Obtocz w mące, jajku i bułce tartej.","Smaż na oleju po 3–4 minuty z każdej strony.","Podawaj z surówką i ziemniakami."]},

{n:"Ryba po grecku",o:"Smażona ryba pod warzywną pierzynką z marchewki w pomidorach. Dobra na zimno.",czas:60,porcje:6,trud:"łatwe",typ:"obiad",dieta:"ryba",
s:[["dorsz","600 g"],["marchew","4 szt."],["pietruszka","1 szt."],["seler","1/4 bulwy"],["cebula","1 szt."],["koncentrat pomidorowy","3 łyżki"],["mąka","3 łyżki"],["liść laurowy","2 szt."],["ziele angielskie","3 ziarna"],["olej","do smażenia"],["cukier","1 łyżeczka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rybę pokrój, posól, obtocz w mące i usmaż. Ułóż w naczyniu.","Warzywa zetrzyj na tarce o grubych oczkach, cebulę pokrój w piórka.","Warzywa duś na oleju z liściem laurowym i zielem, podlewając wodą, ok. 20 minut.","Dodaj koncentrat, cukier, sól i pieprz — powinno być słodko-kwaśne.","Wyłóż warzywa na rybę. Podawaj na ciepło albo schłodzone."]},

{n:"Makaron z tuńczykiem w sosie pomidorowym",o:"Spiżarniane danie z puszki tuńczyka i pomidorów.",czas:20,porcje:3,trud:"łatwe",typ:"obiad",dieta:"ryba",
s:[["tuńczyk","1 puszka"],["makaron","300 g"],["pomidory z puszki","1 puszka"],["cebula","1 szt."],["czosnek","2 ząbki"],["oregano","1 łyżeczka"],["natka pietruszki","garść"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ugotuj makaron al dente.","Na oliwie zeszklij cebulę i czosnek.","Dodaj pomidory i oregano, gotuj 8 minut.","Dodaj odsączonego tuńczyka, podgrzej.","Wymieszaj z makaronem, dopraw i posyp natką."]},

{n:"Sałatka z tuńczykiem i jajkiem",o:"Sycąca sałatka z tuńczykiem, jajkiem, kukurydzą i ogórkiem.",czas:20,porcje:2,trud:"łatwe",typ:"salatka",dieta:"ryba",
s:[["tuńczyk","1 puszka"],["jajka","3 szt."],["kukurydza","1/2 puszki"],["ogórek","1 szt."],["sałata","1/2 główki"],["cebula czerwona","1/2 szt."],["majonez","2 łyżki"],["jogurt naturalny","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Jajka ugotuj na twardo (10 minut), ostudź i pokrój.","Sałatę porwij, ogórka pokrój w kostkę, cebulę w piórka.","Wymieszaj majonez z jogurtem, solą i pieprzem.","Połącz wszystko z odsączonym tuńczykiem i kukurydzą, polej sosem."]},

{n:"Krewetki z czosnkiem i makaronem",o:"Spaghetti z krewetkami, czosnkiem, chili i natką.",czas:20,porcje:2,trud:"łatwe",typ:"obiad",dieta:"ryba",
s:[["krewetki","250 g"],["spaghetti","200 g"],["czosnek","4 ząbki"],["chili","szczypta"],["masło","2 łyżki"],["cytryna","1/2 szt."],["natka pietruszki","garść"],["oliwa","2 łyżki"],["sól","do smaku"]],
k:["Ugotuj makaron, odlej pół szklanki wody z gotowania.","Na oliwie i maśle podsmaż plasterki czosnku z chili.","Dodaj krewetki i smaż 2–3 minuty, aż zmienią kolor.","Dodaj makaron, sok z cytryny i trochę wody z makaronu, wymieszaj.","Posyp natką i dopraw solą."]},

{n:"Śledź w śmietanie z jabłkiem",o:"Śledzie w sosie śmietanowym z jabłkiem i cebulą.",czas:15,porcje:4,trud:"łatwe",typ:"salatka",dieta:"ryba",
s:[["śledź","400 g (płaty matjas)"],["śmietana","200 g"],["jabłka","1 szt."],["cebula","1 szt."],["ogórek kiszony","1 szt."],["koperek","garść"],["pieprz","do smaku"]],
k:["Śledzie, jeśli są bardzo słone, namocz na godzinę w wodzie lub mleku. Pokrój w kawałki.","Jabłko i ogórka pokrój w kostkę, cebulę w piórka.","Wymieszaj śmietanę z jabłkiem, cebulą, ogórkiem, koperkiem i pieprzem.","Połącz ze śledziami i odstaw do lodówki na co najmniej godzinę. Podawaj z ziemniakami albo chlebem."]},

{n:"Pasta z wędzonej makreli",o:"Szybka pasta do chleba z makreli, twarogu i szczypiorku.",czas:10,porcje:4,trud:"łatwe",typ:"sniadanie",dieta:"ryba",
s:[["makrela wędzona","1 szt."],["twaróg","150 g"],["jogurt naturalny","2 łyżki"],["szczypiorek","pęczek"],["sok z cytryny","1 łyżeczka"],["pieprz","do smaku"]],
k:["Makrelę obierz ze skóry i ości.","Rozgnieć widelcem z twarogiem i jogurtem.","Dodaj posiekany szczypiorek, sok z cytryny i pieprz.","Podawaj na pieczywie z pomidorem albo ogórkiem."]},

/* ===================== DANIA WEGETARIAŃSKIE ===================== */
{n:"Placki ziemniaczane",o:"Chrupiące placki z tartych ziemniaków, ze śmietaną albo cukrem.",czas:40,porcje:4,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["ziemniaki","1 kg"],["cebula","1 szt."],["jajka","1 szt."],["mąka","2 łyżki"],["śmietana","do podania"],["olej","do smażenia"],["sól","1 łyżeczka"],["pieprz","do smaku"]],
k:["Ziemniaki i cebulę zetrzyj na drobnej tarce. Odlej nadmiar soku.","Dodaj jajko, mąkę, sól i pieprz, wymieszaj.","Na rozgrzanym oleju kładź po łyżce ciasta i rozpłaszczaj.","Smaż po 3 minuty z każdej strony na złoto. Odsącz na ręczniku papierowym.","Podawaj ze śmietaną albo posypane cukrem."]},

{n:"Pierogi leniwe",o:"Miękkie kluseczki z twarogu, polane masłem z bułką tartą.",czas:30,porcje:4,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["twaróg","500 g"],["jajka","2 szt."],["mąka","150 g"],["masło","3 łyżki"],["bułka tarta","2 łyżki"],["cukier","do posypania"],["sól","szczypta"]],
k:["Twaróg rozgnieć widelcem, dodaj jajka, szczyptę soli i mąkę. Zagnieć miękkie ciasto.","Podziel na wałki grubości 2 cm, lekko spłaszcz i krój ukośnie.","Gotuj partiami w osolonym wrzątku 2 minuty od wypłynięcia.","Na maśle zrumień bułkę tartą i polej kluski. Podawaj z cukrem lub śmietaną."]},

{n:"Kopytka",o:"Kluski z ziemniaków i mąki, podawane z masłem albo do sosu.",czas:50,porcje:4,trud:"średnie",typ:"obiad",dieta:"wege",
s:[["ziemniaki","1 kg"],["mąka","250 g"],["jajka","1 szt."],["masło","2 łyżki"],["cebula","1 szt."],["sól","do smaku"]],
k:["Ziemniaki ugotuj, odcedź i przeciśnij przez praskę. Ostudź.","Dodaj jajko, mąkę i sól, szybko zagnieć ciasto.","Uformuj wałki, spłaszcz i pokrój ukośnie na kopytka.","Gotuj w osolonym wrzątku 2 minuty od wypłynięcia.","Podawaj z cebulką zrumienioną na maśle albo z gulaszem."]},

{n:"Pierogi ruskie",o:"Pierogi z ziemniakami, twarogiem i smażoną cebulką.",czas:90,porcje:5,trud:"trudne",typ:"obiad",dieta:"wege",
s:[["mąka","500 g"],["woda","250 ml (ciepła)"],["ziemniaki","700 g"],["twaróg","300 g"],["cebula","2 szt."],["masło","2 łyżki"],["olej","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki ugotuj i przeciśnij. Cebulę usmaż na złoto na maśle.","Wymieszaj ziemniaki z twarogiem i połową cebuli, dopraw mocno pieprzem i solą.","Mąkę wymieszaj z ciepłą wodą, olejem i szczyptą soli, zagnieć gładkie ciasto.","Rozwałkuj cienko, wykrawaj krążki szklanką, nakładaj farsz i dokładnie sklejaj brzegi.","Gotuj partiami w osolonym wrzątku 3 minuty od wypłynięcia. Podawaj z resztą cebulki."]},

{n:"Kluski śląskie z sosem pieczarkowym",o:"Okrągłe kluski z dołeczkiem z ziemniaków i mąki ziemniaczanej.",czas:50,porcje:4,trud:"średnie",typ:"obiad",dieta:"wege",
s:[["ziemniaki","1 kg"],["mąka ziemniaczana","ok. 250 g"],["jajka","1 szt."],["pieczarki","300 g"],["cebula","1 szt."],["śmietana","200 g"],["masło","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki ugotuj, przeciśnij i ostudź. Wyrównaj w misce, zaznacz ćwiartkę i ją wyjmij.","W puste miejsce wsyp mąkę ziemniaczaną (tyle, ile wyjętych ziemniaków), dodaj jajko i sól. Zagnieć.","Formuj kulki, spłaszcz i zrób kciukiem dołek.","Gotuj w osolonym wrzątku 2–3 minuty od wypłynięcia.","Sos: pieczarki z cebulą usmaż na maśle, dodaj śmietanę, dopraw. Polej kluski."]},

{n:"Spaghetti aglio e olio",o:"Makaron z oliwą, czosnkiem i chili — z tego, co zawsze jest w domu.",czas:15,porcje:2,trud:"łatwe",typ:"obiad",dieta:"weganskie",
s:[["spaghetti","200 g"],["czosnek","4 ząbki"],["chili","szczypta"],["natka pietruszki","garść"],["oliwa","5 łyżek"],["sól","do smaku"]],
k:["Ugotuj makaron w mocno osolonej wodzie, odlej pół szklanki wody z gotowania.","Na oliwie na małym ogniu podgrzewaj plasterki czosnku z chili, aż czosnek się lekko zezłoci.","Dodaj makaron i kilka łyżek wody z gotowania, energicznie wymieszaj.","Posyp natką i od razu podawaj."]},

{n:"Makaron z sosem pomidorowym i mozzarellą",o:"Prosty makaron z sosem pomidorowym, bazylią i rozpływającą się mozzarellą.",czas:20,porcje:3,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["makaron","300 g"],["pomidory z puszki","1 puszka"],["mozzarella","1 kulka"],["czosnek","2 ząbki"],["bazylia","garść"],["oliwa","2 łyżki"],["cukier","szczypta"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ugotuj makaron.","Na oliwie podsmaż czosnek, dodaj pomidory i gotuj 10 minut. Dopraw solą, pieprzem i cukrem.","Wymieszaj sos z makaronem.","Dodaj porwaną mozzarellę i bazylię, wymieszaj i podawaj."]},

{n:"Leczo warzywne",o:"Duszone warzywa w pomidorach, bez mięsa.",czas:35,porcje:4,trud:"łatwe",typ:"obiad",dieta:"weganskie",
s:[["cukinia","1 szt."],["papryka","3 szt."],["cebula","1 szt."],["pomidory z puszki","1 puszka"],["czosnek","2 ząbki"],["ciecierzyca","1 puszka (opcjonalnie)"],["papryka słodka mielona","1 łyżeczka"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Na oliwie zeszklij cebulę i czosnek.","Dodaj paprykę w paskach, duś 5 minut.","Dodaj cukinię w kostce i pomidory, duś 15 minut.","Dodaj odsączoną ciecierzycę, dopraw papryką, solą i pieprzem."]},

{n:"Curry z ciecierzycy i szpinaku",o:"Wegańskie curry z ciecierzycą, szpinakiem i mlekiem kokosowym.",czas:25,porcje:4,trud:"łatwe",typ:"obiad",dieta:"weganskie",
s:[["ciecierzyca","2 puszki"],["szpinak","150 g"],["mleko kokosowe","400 ml"],["pomidory z puszki","1 puszka"],["cebula","1 szt."],["czosnek","3 ząbki"],["imbir","2 cm"],["curry","2 łyżki"],["ryż","250 g"],["olej","2 łyżki"],["sól","do smaku"]],
k:["Ugotuj ryż.","Na oleju zeszklij cebulę, czosnek i imbir, dodaj curry.","Dodaj pomidory, mleko kokosowe i odsączoną ciecierzycę, gotuj 15 minut.","Wmieszaj szpinak, aż zwiędnie. Dopraw solą i podawaj z ryżem."]},

{n:"Placki z cukinii",o:"Lekkie placuszki z cukinii z fetą i koperkiem.",czas:30,porcje:3,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["cukinia","2 szt."],["jajka","2 szt."],["mąka","5 łyżek"],["feta","100 g"],["koperek","garść"],["czosnek","1 ząbek"],["jogurt naturalny","do podania"],["olej","do smażenia"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Cukinię zetrzyj, posól i odstaw na 10 minut. Odciśnij mocno z wody.","Dodaj jajka, mąkę, pokruszoną fetę, koperek, czosnek i pieprz.","Smaż małe placki na oleju po 3 minuty z każdej strony.","Podawaj z jogurtem."]},

{n:"Zapiekanka ziemniaczana z serem",o:"Ziemniaki w śmietanie zapiekane pod żółtym serem (gratin).",czas:60,porcje:4,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["ziemniaki","1 kg"],["śmietanka","300 ml"],["ser żółty","150 g"],["czosnek","2 ząbki"],["masło","1 łyżka"],["gałka muszkatołowa","szczypta"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 190°C, naczynie wysmaruj masłem.","Ziemniaki pokrój w cienkie plastry.","Śmietankę podgrzej z czosnkiem, solą, pieprzem i gałką.","Ułóż ziemniaki w naczyniu, zalej śmietanką, posyp serem.","Piecz 45 minut, aż ziemniaki będą miękkie, a wierzch złoty."]},

{n:"Fasolka szparagowa z bułką tartą",o:"Fasolka polana masłem z bułką tartą — polski klasyk.",czas:20,porcje:3,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["fasolka szparagowa","500 g"],["masło","3 łyżki"],["bułka tarta","3 łyżki"],["jajka","2 szt. (opcjonalnie)"],["sól","do smaku"]],
k:["Fasolce obetnij końcówki, gotuj w osolonej wodzie 8–10 minut.","Na maśle zrumień bułkę tartą.","Odcedzoną fasolkę polej masłem z bułką.","Możesz posypać posiekanym jajkiem na twardo."]},

{n:"Kasza gryczana z pieczarkami i cebulą",o:"Sycąca kasza z podsmażonymi pieczarkami.",czas:30,porcje:3,trud:"łatwe",typ:"obiad",dieta:"weganskie",
s:[["kasza gryczana","200 g"],["pieczarki","300 g"],["cebula","2 szt."],["natka pietruszki","garść"],["olej","3 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kaszę ugotuj w osolonej wodzie (1 część kaszy na 2 części wody), ok. 15 minut.","Na oleju usmaż cebulę w piórkach, dodaj pokrojone pieczarki.","Smaż, aż pieczarki się zrumienią. Dopraw solą i pieprzem.","Wymieszaj z kaszą i posyp natką."]},

{n:"Omlet z warzywami",o:"Puszysty omlet z papryką, pomidorem i serem.",czas:15,porcje:1,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["jajka","3 szt."],["papryka","1/2 szt."],["pomidory","1 szt."],["ser żółty","30 g"],["szczypiorek","garść"],["masło","1 łyżeczka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Jajka roztrzep z solą i pieprzem.","Na maśle podsmaż paprykę 2 minuty.","Wlej jajka, dodaj pokrojonego pomidora i ser.","Smaż na małym ogniu pod przykryciem 3–4 minuty. Złóż na pół i posyp szczypiorkiem."]},

{n:"Szakszuka",o:"Jajka gotowane w gęstym sosie z pomidorów i papryki.",czas:25,porcje:2,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["jajka","4 szt."],["pomidory z puszki","1 puszka"],["papryka","1 szt."],["cebula","1 szt."],["czosnek","2 ząbki"],["kmin rzymski","1/2 łyżeczki"],["papryka słodka mielona","1 łyżeczka"],["natka pietruszki","garść"],["oliwa","2 łyżki"],["sól","do smaku"]],
k:["Na oliwie zeszklij cebulę, paprykę i czosnek.","Dodaj przyprawy i pomidory, duś 10 minut, aż sos zgęstnieje.","Zrób w sosie dołki i wbij do nich jajka.","Przykryj i gotuj 5–7 minut, aż białka się zetną. Posyp natką, jedz z pieczywem."]},

{n:"Kalafior zapiekany z serem",o:"Kalafior pod sosem beszamelowym i serem.",czas:40,porcje:4,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["kalafior","1 szt."],["mleko","400 ml"],["masło","2 łyżki"],["mąka","2 łyżki"],["ser żółty","120 g"],["gałka muszkatołowa","szczypta"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 200°C. Kalafior podziel na różyczki i gotuj 5 minut w osolonej wodzie.","Na maśle podsmaż mąkę, stopniowo wlewaj mleko, mieszając do zgęstnienia. Dodaj połowę sera, gałkę, sól i pieprz.","Kalafior ułóż w naczyniu, zalej sosem i posyp resztą sera.","Zapiekaj 20 minut na złoto."]},

{n:"Pieczone warzywa z fetą",o:"Kolorowe warzywa pieczone na blasze z fetą i ziołami.",czas:40,porcje:3,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["cukinia","1 szt."],["papryka","2 szt."],["bakłażan","1 szt."],["cebula czerwona","1 szt."],["pomidorki koktajlowe","200 g"],["feta","150 g"],["czosnek","3 ząbki"],["oregano","1 łyżeczka"],["oliwa","4 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 210°C.","Warzywa pokrój w duże kawałki, wymieszaj z oliwą, czosnkiem, oregano, solą i pieprzem.","Piecz na blasze 25 minut.","Pokrusz fetę na wierzch i piecz jeszcze 5 minut. Podawaj z kaszą kuskus albo pieczywem."]},

{n:"Kotlety z ciecierzycy",o:"Wegańskie kotleciki z ciecierzycy z kuminem i natką.",czas:30,porcje:3,trud:"łatwe",typ:"obiad",dieta:"weganskie",
s:[["ciecierzyca","1 puszka"],["cebula","1 szt."],["czosnek","2 ząbki"],["natka pietruszki","garść"],["mąka","3 łyżki"],["kmin rzymski","1 łyżeczka"],["olej","do smażenia"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ciecierzycę odsącz i osusz.","Zmiksuj ją z cebulą, czosnkiem, natką, kuminem, solą i pieprzem na grudkowatą masę.","Dodaj mąkę i uformuj małe kotleciki.","Smaż na oleju po 3–4 minuty z każdej strony. Podawaj z surówką i sosem jogurtowym albo hummusem."]},

{n:"Burrito z fasolą i ryżem",o:"Tortilla z fasolą, ryżem, kukurydzą i serem.",czas:30,porcje:4,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["tortilla","4 szt."],["fasola czerwona","1 puszka"],["ryż","150 g"],["kukurydza","1/2 puszki"],["papryka","1 szt."],["cebula","1 szt."],["ser żółty","100 g"],["kmin rzymski","1 łyżeczka"],["papryka słodka mielona","1 łyżeczka"],["olej","1 łyżka"],["sól","do smaku"]],
k:["Ugotuj ryż.","Na oleju podsmaż cebulę i paprykę, dodaj fasolę, kukurydzę i przyprawy. Lekko rozgnieć część fasoli.","Na tortillach rozłóż ryż, farsz i starty ser.","Zawiń ciasno i podgrzej na suchej patelni z obu stron."]},

{n:"Ryż smażony z warzywami i jajkiem",o:"Najlepszy sposób na wczorajszy ryż.",czas:20,porcje:2,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["ryż","300 g ugotowanego (najlepiej z poprzedniego dnia)"],["jajka","2 szt."],["groszek","100 g"],["marchew","1 szt."],["cebula dymka","2 szt."],["sos sojowy","3 łyżki"],["czosnek","1 ząbek"],["olej","2 łyżki"]],
k:["Marchewkę pokrój w drobną kostkę.","Na mocno rozgrzanym oleju smaż marchewkę, groszek i czosnek 3 minuty.","Dodaj ryż i smaż, mieszając, aż się podgrzeje.","Odsuń ryż na bok, wbij jajka, roztrzep je i wymieszaj z ryżem.","Dodaj sos sojowy i posiekaną dymkę."]},

{n:"Naleśniki ze szpinakiem i fetą",o:"Wytrawne naleśniki z farszem ze szpinaku, fety i czosnku.",czas:40,porcje:4,trud:"łatwe",typ:"obiad",dieta:"wege",
s:[["mąka","200 g"],["mleko","300 ml"],["jajka","2 szt."],["szpinak","300 g"],["feta","150 g"],["czosnek","2 ząbki"],["olej","do smażenia"],["sól","szczypta"]],
k:["Zmiksuj mąkę, mleko, jajka, 100 ml wody i szczyptę soli. Odstaw na 15 minut.","Smaż cienkie naleśniki na lekko natłuszczonej patelni.","Szpinak podduś z czosnkiem, aż odparuje woda. Wymieszaj z pokruszoną fetą.","Nałóż farsz na naleśniki, złóż w trójkąty i podsmaż krótko z obu stron."]},

/* ===================== ŚNIADANIA I KOLACJE ===================== */
{n:"Jajecznica ze szczypiorkiem",o:"Kremowa jajecznica na maśle.",czas:10,porcje:1,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["jajka","3 szt."],["masło","1 łyżeczka"],["szczypiorek","garść"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozpuść masło na patelni na małym ogniu.","Wbij jajka i mieszaj powoli łopatką, aż się zetną, ale pozostaną kremowe.","Zdejmij z ognia, dopraw i posyp szczypiorkiem."]},

{n:"Jajecznica na boczku",o:"Jajecznica z chrupiącym boczkiem i cebulką.",czas:15,porcje:2,trud:"łatwe",typ:"sniadanie",dieta:"mieso",
s:[["jajka","5 szt."],["boczek","100 g"],["cebula","1/2 szt."],["szczypiorek","garść"],["pieprz","do smaku"]],
k:["Boczek pokrój w kostkę i wytop na patelni.","Dodaj drobno posiekaną cebulę i smaż 2 minuty.","Wbij jajka i mieszaj, aż się zetną.","Dopraw pieprzem (boczek jest słony) i posyp szczypiorkiem."]},

{n:"Owsianka z owocami",o:"Ciepła owsianka na mleku z bananem i owocami.",czas:10,porcje:1,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["płatki owsiane","50 g"],["mleko","250 ml"],["banany","1 szt."],["borówki","garść"],["miód","1 łyżeczka"],["cynamon","szczypta"]],
k:["Płatki zalej mlekiem i gotuj 4–5 minut, mieszając.","Dodaj szczyptę cynamonu.","Przełóż do miski, dodaj plasterki banana, owoce i miód."]},

{n:"Twarożek ze rzodkiewką i szczypiorkiem",o:"Świeży twarożek na kanapki.",czas:10,porcje:2,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["twaróg","250 g"],["śmietana","3 łyżki"],["rzodkiewka","6 szt."],["szczypiorek","pęczek"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Twaróg rozgnieć widelcem ze śmietaną.","Rzodkiewki pokrój w drobną kostkę, szczypiorek posiekaj.","Wymieszaj wszystko, dopraw solą i pieprzem. Podawaj z pieczywem."]},

{n:"Pasta jajeczna",o:"Pasta z jajek na twardo ze szczypiorkiem i majonezem.",czas:20,porcje:3,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["jajka","5 szt."],["majonez","2 łyżki"],["musztarda","1 łyżeczka"],["szczypiorek","pęczek"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Jajka ugotuj na twardo (10 minut), ostudź w zimnej wodzie i obierz.","Posiekaj drobno albo rozgnieć widelcem.","Wymieszaj z majonezem, musztardą i szczypiorkiem. Dopraw."]},

{n:"Placuszki bananowe",o:"Puszyste placuszki z bananem na śniadanie.",czas:20,porcje:2,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["banany","2 szt. (dojrzałe)"],["jajka","2 szt."],["mąka","4 łyżki"],["mleko","3 łyżki"],["proszek do pieczenia","1/2 łyżeczki"],["olej","do smażenia"],["miód","do podania"]],
k:["Banany rozgnieć widelcem.","Dodaj jajka, mleko, mąkę i proszek do pieczenia, wymieszaj.","Smaż małe placuszki na lekko natłuszczonej patelni po 2 minuty z każdej strony.","Podawaj z miodem, jogurtem lub owocami."]},

{n:"Naleśniki z twarogiem",o:"Słodkie naleśniki z twarogiem i wanilią.",czas:40,porcje:4,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["mąka","200 g"],["mleko","300 ml"],["jajka","3 szt."],["twaróg","400 g"],["cukier","3 łyżki"],["cukier waniliowy","1 opakowanie"],["olej","do smażenia"],["sól","szczypta"]],
k:["Zmiksuj mąkę, mleko, 2 jajka, 100 ml wody i szczyptę soli. Odstaw na 15 minut.","Smaż cienkie naleśniki na lekko natłuszczonej patelni.","Twaróg wymieszaj z jajkiem, cukrem i cukrem waniliowym.","Nałóż farsz, zwiń naleśniki i podsmaż krótko na maśle. Podawaj ze śmietaną lub owocami."]},

{n:"Tosty francuskie",o:"Chleb moczony w jajku z mlekiem i smażony na maśle.",czas:15,porcje:2,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["chleb","4 kromki"],["jajka","2 szt."],["mleko","100 ml"],["cynamon","szczypta"],["masło","1 łyżka"],["miód","do podania"]],
k:["Roztrzep jajka z mlekiem i cynamonem.","Zanurz kromki chleba z obu stron.","Smaż na maśle po 2 minuty z każdej strony.","Podawaj z miodem i owocami."]},

{n:"Tosty z szynką i serem",o:"Zapiekane tosty z szynką, serem i pomidorem.",czas:10,porcje:2,trud:"łatwe",typ:"sniadanie",dieta:"mieso",
s:[["chleb","4 kromki (tostowy)"],["szynka","4 plastry"],["ser żółty","4 plastry"],["pomidory","1 szt."],["masło","1 łyżka"],["ketchup","do podania"]],
k:["Kromki posmaruj z zewnątrz masłem.","Na dwie kromki połóż szynkę, ser i plasterki pomidora, przykryj pozostałymi.","Zapiekaj w opiekaczu albo na patelni pod przykryciem po 3 minuty z każdej strony."]},

{n:"Grzanki z awokado i jajkiem",o:"Chrupiące pieczywo z pastą z awokado i jajkiem sadzonym.",czas:15,porcje:2,trud:"łatwe",typ:"sniadanie",dieta:"wege",
s:[["chleb","2 kromki"],["awokado","1 szt."],["jajka","2 szt."],["sok z cytryny","1 łyżeczka"],["chili","szczypta"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Chleb podpiecz w tosterze lub na patelni.","Awokado rozgnieć z sokiem z cytryny, solą i pieprzem.","Usmaż jajka sadzone.","Posmaruj grzanki awokado, połóż jajko i posyp chili."]},

{n:"Racuchy z jabłkami",o:"Puszyste placki drożdżowe z kawałkami jabłek, posypane cukrem pudrem.",czas:60,porcje:4,trud:"średnie",typ:"deser",dieta:"wege",
s:[["mąka","300 g"],["mleko","250 ml"],["jajka","1 szt."],["drożdże","20 g (świeże)"],["jabłka","2 szt."],["cukier","2 łyżki"],["cukier puder","do posypania"],["olej","do smażenia"],["sól","szczypta"]],
k:["Drożdże rozpuść w ciepłym mleku z łyżką cukru.","Dodaj mąkę, jajko, resztę cukru i sól, wymieszaj. Odstaw w ciepłe miejsce na 30 minut.","Jabłka obierz i pokrój w kosteczkę, wmieszaj do ciasta.","Smaż łyżką na rozgrzanym oleju po 2 minuty z każdej strony.","Posyp cukrem pudrem."]},

/* ===================== SAŁATKI I PRZEKĄSKI ===================== */
{n:"Sałatka jarzynowa",o:"Klasyczna sałatka warzywna z majonezem.",czas:60,porcje:8,trud:"łatwe",typ:"salatka",dieta:"wege",
s:[["ziemniaki","4 szt."],["marchew","3 szt."],["pietruszka","2 szt."],["jajka","5 szt."],["ogórek kiszony","4 szt."],["groszek","1 puszka"],["jabłka","1 szt."],["cebula","1 szt."],["majonez","4 łyżki"],["musztarda","1 łyżeczka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ziemniaki, marchew i pietruszkę ugotuj w mundurkach, ostudź i obierz.","Jajka ugotuj na twardo.","Wszystko pokrój w drobną kostkę razem z ogórkami, jabłkiem i cebulą.","Dodaj odsączony groszek, majonez i musztardę. Dopraw i schłodź."]},

{n:"Sałatka grecka",o:"Pomidory, ogórek, oliwki i feta z oliwą i oregano.",czas:10,porcje:2,trud:"łatwe",typ:"salatka",dieta:"wege",
s:[["pomidory","3 szt."],["ogórek","1 szt."],["papryka","1 szt."],["cebula czerwona","1/2 szt."],["feta","150 g"],["oliwki","garść"],["oregano","1/2 łyżeczki"],["oliwa","3 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Warzywa pokrój w duże kawałki, cebulę w piórka.","Dodaj oliwki i fetę w kostce albo w całym kawałku.","Polej oliwą, posyp oregano, solą i pieprzem."]},

{n:"Mizeria",o:"Ogórki w śmietanie z koperkiem.",czas:15,porcje:4,trud:"łatwe",typ:"salatka",dieta:"wege",
s:[["ogórek","3 szt."],["śmietana","200 g"],["koperek","pęczek"],["sok z cytryny","1 łyżeczka"],["cukier","szczypta"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ogórki pokrój w cienkie plasterki, posól i odstaw na 10 minut.","Odlej wodę.","Wymieszaj ze śmietaną, koperkiem, sokiem z cytryny, szczyptą cukru i pieprzem."]},

{n:"Surówka z marchewki i jabłka",o:"Słodko-kwaśna surówka do obiadu.",czas:10,porcje:4,trud:"łatwe",typ:"salatka",dieta:"weganskie",
s:[["marchew","4 szt."],["jabłka","1 szt."],["sok z cytryny","1 łyżka"],["olej","1 łyżka"],["cukier","szczypta"],["sól","szczypta"]],
k:["Marchew i jabłko zetrzyj na tarce o drobnych oczkach.","Dodaj sok z cytryny, olej, cukier i sól, wymieszaj."]},

{n:"Surówka z białej kapusty",o:"Chrupiąca surówka z kapusty, marchewki i jogurtu.",czas:15,porcje:4,trud:"łatwe",typ:"salatka",dieta:"wege",
s:[["kapusta","1/2 małej główki"],["marchew","1 szt."],["jogurt naturalny","3 łyżki"],["majonez","1 łyżka"],["sok z cytryny","1 łyżka"],["koperek","garść"],["cukier","szczypta"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kapustę cienko poszatkuj, posól i lekko pomnij dłońmi.","Dodaj startą marchew i koperek.","Wymieszaj jogurt z majonezem, sokiem z cytryny, cukrem i pieprzem, połącz z warzywami."]},

{n:"Sałatka z kurczakiem i grzankami",o:"Sałatka w stylu cezar z kurczakiem, parmezanem i grzankami.",czas:25,porcje:2,trud:"łatwe",typ:"salatka",dieta:"mieso",
s:[["pierś z kurczaka","300 g"],["sałata","1 główka (rzymska)"],["chleb","2 kromki"],["parmezan","30 g"],["jogurt naturalny","3 łyżki"],["majonez","1 łyżka"],["czosnek","1 ząbek"],["sok z cytryny","1 łyżka"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Kurczaka dopraw i usmaż na oliwie, pokrój w paski.","Chleb pokrój w kostkę i podpiecz na patelni na złote grzanki.","Wymieszaj jogurt, majonez, czosnek, sok z cytryny i połowę startego parmezanu.","Sałatę porwij, dodaj kurczaka i grzanki, polej sosem i posyp resztą parmezanu."]},

{n:"Bruschetta z pomidorami",o:"Grzanki z pomidorami, czosnkiem i bazylią.",czas:15,porcje:2,trud:"łatwe",typ:"salatka",dieta:"weganskie",
s:[["chleb","4 kromki (bagietka lub ciabatta)"],["pomidory","3 szt."],["czosnek","1 ząbek"],["bazylia","garść"],["oliwa","2 łyżki"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Pomidory pokrój w drobną kostkę, wymieszaj z oliwą, bazylią, solą i pieprzem.","Chleb podpiecz i natrzyj przekrojonym ząbkiem czosnku.","Nałóż pomidory na grzanki tuż przed podaniem."]},

{n:"Zapiekanki z pieczarkami i serem",o:"Bagietka zapiekana z pieczarkami i żółtym serem, jak z budki.",czas:25,porcje:2,trud:"łatwe",typ:"salatka",dieta:"wege",
s:[["bagietka","1 szt."],["pieczarki","250 g"],["cebula","1 szt."],["ser żółty","150 g"],["masło","1 łyżka"],["ketchup","do podania"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Rozgrzej piekarnik do 200°C.","Pieczarki i cebulę drobno pokrój i usmaż na maśle, dopraw.","Bagietkę przekrój wzdłuż, nałóż pieczarki i posyp startym serem.","Zapiekaj 10 minut, aż ser się roztopi. Polej ketchupem."]},

{n:"Hummus",o:"Kremowa pasta z ciecierzycy z czosnkiem i cytryną.",czas:10,porcje:4,trud:"łatwe",typ:"salatka",dieta:"weganskie",
s:[["ciecierzyca","1 puszka"],["tahini","2 łyżki"],["czosnek","1 ząbek"],["sok z cytryny","2 łyżki"],["kmin rzymski","1/2 łyżeczki"],["oliwa","3 łyżki"],["sól","do smaku"]],
k:["Ciecierzycę odsącz, zachowaj trochę zalewy.","Zmiksuj ją z tahini, czosnkiem, sokiem z cytryny, kuminem i solą.","Dolewaj zalewę lub zimną wodę, aż pasta będzie gładka.","Podawaj polany oliwą, z warzywami lub pieczywem."]},

{n:"Sałatka makaronowa z kurczakiem",o:"Sycąca sałatka z makaronem, kurczakiem, kukurydzą i papryką.",czas:30,porcje:4,trud:"łatwe",typ:"salatka",dieta:"mieso",
s:[["makaron","250 g"],["pierś z kurczaka","300 g"],["kukurydza","1 puszka"],["papryka","1 szt."],["ogórek kiszony","2 szt."],["jogurt naturalny","4 łyżki"],["majonez","2 łyżki"],["olej","1 łyżka"],["sól","do smaku"],["pieprz","do smaku"]],
k:["Ugotuj makaron i ostudź.","Kurczaka usmaż na oleju i pokrój w kostkę.","Paprykę i ogórki pokrój w kostkę.","Wymieszaj wszystko z kukurydzą, jogurtem i majonezem. Dopraw."]},

/* ===================== DESERY I WYPIEKI ===================== */
{n:"Szarlotka",o:"Kruche ciasto z dużą ilością jabłek z cynamonem.",czas:90,porcje:12,trud:"średnie",typ:"deser",dieta:"wege",
s:[["mąka","400 g"],["masło","250 g (zimne)"],["cukier","150 g"],["jajka","2 żółtka + 1 całe"],["proszek do pieczenia","1 łyżeczka"],["jabłka","1,5 kg"],["cynamon","1 łyżeczka"],["cukier puder","do posypania"]],
k:["Mąkę, masło, cukier, jajka i proszek szybko zagnieć na kruche ciasto. Podziel na 2 części i schłodź 30 minut.","Jabłka obierz, zetrzyj na grubej tarce i podduś z cynamonem, aż puszczą sok. Odcedź.","Rozgrzej piekarnik do 180°C. Większą część ciasta wyłóż na dno formy.","Rozłóż jabłka, a resztę ciasta zetrzyj na wierzch.","Piecz 50 minut. Po ostudzeniu posyp cukrem pudrem."]},

{n:"Muffinki czekoladowe",o:"Wilgotne muffinki z kawałkami czekolady.",czas:35,porcje:12,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["mąka","250 g"],["kakao","3 łyżki"],["cukier","150 g"],["jajka","2 szt."],["mleko","200 ml"],["olej","100 ml"],["czekolada","100 g"],["proszek do pieczenia","2 łyżeczki"]],
k:["Rozgrzej piekarnik do 180°C. Formę wyłóż papilotkami.","W jednej misce wymieszaj mąkę, kakao, cukier i proszek.","W drugiej roztrzep jajka z mlekiem i olejem.","Połącz krótko obie masy łyżką, dodaj posiekaną czekoladę.","Nałóż do papilotek i piecz 20 minut."]},

{n:"Brownie",o:"Gęste, czekoladowe ciasto z wilgotnym środkiem.",czas:45,porcje:12,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["gorzka czekolada","200 g"],["masło","150 g"],["cukier","200 g"],["jajka","3 szt."],["mąka","100 g"],["kakao","2 łyżki"],["orzechy włoskie","50 g (opcjonalnie)"],["sól","szczypta"]],
k:["Rozgrzej piekarnik do 180°C. Formę 20×20 cm wyłóż papierem.","Rozpuść czekoladę z masłem w kąpieli wodnej.","Ubij jajka z cukrem, wmieszaj czekoladę.","Dodaj mąkę, kakao, sól i orzechy, delikatnie wymieszaj.","Piecz 25 minut — środek ma być lekko wilgotny."]},

{n:"Budyń waniliowy domowy",o:"Gładki budyń z mleka bez gotowej mieszanki.",czas:15,porcje:3,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["mleko","500 ml"],["mąka ziemniaczana","2 łyżki"],["cukier","3 łyżki"],["jajka","1 żółtko"],["cukier waniliowy","1 opakowanie"],["masło","1 łyżeczka"]],
k:["Odlej szklankę mleka i wymieszaj z mąką ziemniaczaną i żółtkiem.","Resztę mleka zagotuj z cukrem i cukrem waniliowym.","Wlej mieszankę, cały czas mieszając, i gotuj minutę, aż zgęstnieje.","Dodaj masło. Podawaj na ciepło z owocami lub sokiem."]},

{n:"Pieczone jabłka z cynamonem",o:"Jabłka pieczone z miodem, orzechami i cynamonem.",czas:35,porcje:4,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["jabłka","4 szt."],["miód","2 łyżki"],["orzechy włoskie","garść"],["rodzynki","garść"],["cynamon","1 łyżeczka"],["masło","1 łyżka"]],
k:["Rozgrzej piekarnik do 180°C.","Z jabłek wydrąż gniazda nasienne, nie przebijając dna.","Wypełnij posiekanymi orzechami, rodzynkami, miodem i cynamonem, na wierzch połóż kawałek masła.","Piecz 25 minut. Podawaj z jogurtem lub lodami."]},

{n:"Chlebek bananowy",o:"Wilgotne ciasto z dojrzałych bananów.",czas:70,porcje:10,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["banany","3 szt. (bardzo dojrzałe)"],["mąka","220 g"],["jajka","2 szt."],["cukier","100 g"],["masło","80 g (roztopione)"],["proszek do pieczenia","1 łyżeczka"],["cynamon","1 łyżeczka"],["orzechy włoskie","50 g (opcjonalnie)"]],
k:["Rozgrzej piekarnik do 175°C. Keksówkę wyłóż papierem.","Banany rozgnieć, dodaj jajka, cukier i masło.","Wmieszaj mąkę, proszek, cynamon i orzechy.","Przełóż do formy i piecz 50–55 minut (do suchego patyczka)."]},

{n:"Gofry",o:"Chrupiące gofry z cukrem pudrem lub owocami.",czas:30,porcje:4,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["mąka","250 g"],["mleko","350 ml"],["jajka","2 szt."],["masło","80 g (roztopione)"],["cukier","2 łyżki"],["proszek do pieczenia","2 łyżeczki"],["truskawki","do podania"],["sól","szczypta"]],
k:["Wymieszaj mąkę, cukier, proszek i sól.","Dodaj mleko, jajka i roztopione masło, wymieszaj na gładkie ciasto.","Piecz w rozgrzanej gofrownicy 3–4 minuty.","Podawaj z owocami, bitą śmietaną albo cukrem pudrem."]},

{n:"Ryż z jabłkami zapiekany",o:"Słodki ryż na mleku zapiekany z jabłkami i cynamonem.",czas:60,porcje:4,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["ryż","200 g"],["mleko","800 ml"],["jabłka","4 szt."],["cukier","4 łyżki"],["cynamon","1 łyżeczka"],["masło","2 łyżki"],["jajka","2 szt."]],
k:["Ryż ugotuj na mleku na małym ogniu do miękkości (ok. 20 minut), ostudź i wymieszaj z jajkami i połową cukru.","Jabłka zetrzyj i wymieszaj z cynamonem i resztą cukru.","W natłuszczonym naczyniu układaj warstwami ryż i jabłka.","Na wierzch połóż wiórki masła i piecz w 180°C przez 30 minut."]},

{n:"Kisiel owocowy domowy",o:"Gęsty kisiel z owoców — świeżych albo mrożonych.",czas:15,porcje:4,trud:"łatwe",typ:"deser",dieta:"weganskie",
s:[["truskawki","400 g (lub inne owoce)"],["mąka ziemniaczana","3 łyżki"],["cukier","4 łyżki"],["woda","700 ml"]],
k:["Owoce zagotuj z 500 ml wody i cukrem, gotuj 5 minut.","Mąkę ziemniaczaną rozmieszaj w 200 ml zimnej wody.","Wlej do gotujących się owoców, cały czas mieszając.","Gotuj minutę, aż kisiel zgęstnieje i stanie się przezroczysty."]},

{n:"Placek z owocami (ucierany)",o:"Szybkie ciasto ucierane z sezonowymi owocami.",czas:60,porcje:12,trud:"łatwe",typ:"deser",dieta:"wege",
s:[["mąka","300 g"],["masło","200 g (miękkie)"],["cukier","200 g"],["jajka","4 szt."],["proszek do pieczenia","2 łyżeczki"],["śliwki","500 g (lub jabłka, borówki)"],["cukier puder","do posypania"]],
k:["Rozgrzej piekarnik do 180°C, formę wyłóż papierem.","Masło utrzyj z cukrem na puszystą masę, dodawaj po jednym jajku.","Wmieszaj mąkę z proszkiem.","Przełóż ciasto do formy, ułóż na wierzchu owoce.","Piecz 40–45 minut. Posyp cukrem pudrem."]}

];
