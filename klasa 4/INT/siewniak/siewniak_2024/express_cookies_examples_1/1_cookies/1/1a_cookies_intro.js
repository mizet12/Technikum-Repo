/*  NODE EXPRESS - COOKIES.
    Definicja cookies: res.cookie().
    Odczyt cookies.

    © Piotr Siewniak, wersja: 2.III.2022 r.
*/

/* UWAGA
    Przed uruchomieniem aplikacji należy najpierw zainstalować moduły:
    1. express;
    2. cookie-parser.
 */

/* UWAGA
    Cookies (ciasteczka) to małe porcje informacji przesyłane z (serwera HTTP) aplikacji do klienta (przeglądarki).
    Są one przechowywane po stronie klienta - w magazynie ciasteczek (cookies storage) przeglądarki -
    w postaci niewielkich plików tekstowych.

    Każde cookie jest skojarzone z określoną witryną WWW (aplikacją). Tym samym, dane cookie może być
    wykorzystane tylko w odniesieniu do skojarzonej z nią strony.
    Jeśli użytkownik odwiedzi taką stronę, wówczas przeglądarka automatycznie wysyła do serwera HTTP (aplikacji)
    skojarzone z nią pliki cookies. Dzieje się tak przy każdym żądaniu.

    W plikach cookie mogą być przechowywane różne informacje dotyczące aktywności klienta (użytkownika), np.:
    - login;
    - preferencje (językowe, asortymentowe itp.);
    - ostatnia zawartość koszyka w sklepie internetowym itp.
    Bardzo często cookies (wraz z mechanizmem sesji) są wykorzystywane do uwierzytelnienia użytkownika
    na stronie internetowej.

    Schemat przepływu informacji w procesie obsługi cookies:
    1. żądanie (request) od klienta do aplikacji, która obsługuje ciasteczka;
        Żądanie to polega na wpisaniu w pasku adresu przeglądarki adresu URL żądanej strony.
    2. odpowiedź (response) aplikacji do klienta z dołączonymi cookies;
        Serwer HTTP przetwarza żądanie od klienta, a następnie wysyła do niego odpowiedź.
        Jeśli klient wyrazi na to zgodę, wraz z odpowiedzią może wysłać do niego plik cookie.

    ................
    3. żądanie od klienta do aplikacji z dołączonymi cookies.
        Jeśli klient wchodzi ponownie na daną stronę, wówczas przeglądarka wysyła do serwera HTTP (do aplikacji)
        skojarzone z nią ciasteczka. Na tej podstawie może się później odbywać np. identyfikacja i autoryzacja
        użytkownika.


    Ciasteczka stanowią bardzo dobry sposób na przekazywanie różnych danych pomiędzy sesjami korzystania
    z określonej aplikacji. Ze względu na fakt, że ciasteczka są przechowywane po stronie klienta,
    zapobiega to zbędnemu obciążeniu serwera dużą ilością danych.

    Ciasteczka mogą mieć określoną datę ważności, co oznacza, że obowiązują tylko do określonej daty i czasu.

    W praktyce stosuje się różne rodzaje plików cookie:
    1) cookies sesyjne -
        - obowiązują przez krótki czas odwiedzin witryny. Zawierają zwykle wybrane dane użytkownika.
        Po zakończeniu sesji (korzystania z aplikacji) pliki te są usuwane z urządzenia użytkownika;
    2) cookies długotrwałe -
        - obowiązują przez długi czas (np. 1 rok). Zawierają one zwykle preferencje użytkownika
        (język, katalog produktów itp.);
    3) cookies stron trzecich -
        - zapewniają stronom zewnętrznym możliwość decydowania o wyświetlanych reklamach w zależności
        od wcześniejszych preferencji użytkownika.

    W plikach cookie nie można przechowywać żadnych poufnych informacji ze względu na bezpieczeństwo tych danych.
 */

const express = require('express');

// Dołączenie zasobów publicznych modułu cookie-parser:
const cookieParser = require('cookie-parser');
/* UWAGA
   Dołączenie zasobów publicznych modułu cookie-parser jest konieczne, jeśli jedną z funkcjonalności aplikacji
   jest obsługa ciasteczek.
 */

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8000; // w razie potrzeby można zmienić

// Konfiguracja aplikacji do użycia cokkies:
app.use(cookieParser());
/* UWAGA
    Cookie-parser stanowi funkcję pośrednią (middleware function), które pozwala na analizę (parsowanie)
    plików cookie dołączonych do obiektu żądania (req) klienta (czyli wysyłanych na serwer).
    Funkcja ta umożliwia także zapis plików cookie w zasobach przegladarki (czyli po stronie klienta).
    Cookie-parser parsuje nagłówek cookie (cookie header) i wypełnia obiekt req.cookies parami klucz-wartość,
    gdzie klucze to nazwy cookies, a wartości - odpowiadające im wartości.

    Technicznie, wywołanie metody app.use(cookieParser()); powoduje utworzenie funkcji pośredniej (cookie-parsera)
    do obsługi cookies. Stanowi deklarację jej użycia w aplikacji:

    Tutaj, funkcja cookieParser() została załączona dla wszystkich routów (ścieżek)
    oraz dla każdego typu żądania (GET, POST itd).
 */

// Rejestracja i obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Wyświetlenie informacji pomocniczych w konsoli:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
    /* UWAGA
        Właściwość req.cookies stanowi obiekt, który zawiera aktywne cookies przesyłane za pośrednictwem żądania.
        Przeglądarka (klient) wysyła aktywne cookies z powrotem do serwera aplikacji za każdym razem,
        gdy wysyła do niego żądanie.
     */

    // Usunięcie cookies:
    res.clearCookie('user');
    res.clearCookie('profession');
    /* UWAGA
        Usunięcie wybranego cookie wymaga użycia jego nazwy jako argumentu.
     */
    /* UWAGA
        Usunięcie wszystkich cookies można zrealizować za pomocą metody res.clearCookies()
        bez żadnych argumentów.
        Zamiennie można również zralizować następująco:
     */

    // Wysłanie odpowiedzi do przeglądarki:
    res.send("Do odpowiedzi serwera do klienta zostały dołączone aktywne cookies ...");
});

// Rejestracja i obsługa żądania GET na ścieżce /set:
app.get('/set', (req, res) => {
    // Określenie (definicja) cookies:
    res.cookie(
        'user', // nazwa cookie
        'piotr', // wartość cookie
        {maxAge: 1000*60*60 + Date.now()} // obiekt opcji
        /* UWAGA
            Za pomocą opcji maxAge ustawiono tutaj czas ważności cookie na 1 godzinę
         */
    );
    res.cookie('profession', 'teacher', {
        expires: new Date(Date.now() + 1000*60*60) // cookie wygasa po 1 godzinie
    });
    /* UWAGA
       Metoda res.cookie() pozwala na definicję cookie, tj. określenie:
       1) jego nazwy - klucza (key);
       2) odpowiadającej jej wartości (cookie value).
       W obiekcie opcji można również określić parametry cookie (tutaj: datę ważności cookie).

       W ogólności, metodę res.cookie() wykorzystuje się w cyklu żądanie-odpowiedź w funkcji zwrotnej
       skojarzonej z określonym routem (ścieżką) - jak tutaj.
     */

    // Przesłanie odpowiedzi serwera do klienta:
    res.send('Wraz z tą odpowiedzią do klienta zostały wysłane zdefiniowane cookies ...');
    /* UWAGA
       Do odpowiedzi serwera (aplikacji) do klienta zostaną dołączone zdefiniowane wcześniej cookies.
     */

    // Wyświetlenie informacji pomocniczych w konsoli teminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
});
/* UWAGA
    Na żądanie klienta GET na ścieżce /set serwer HTTP udzieli odpowiedzi, do której zostaną dołączone
    zdefiniowane wcześniej pliki cookie. Zostaną one zapisane w magazynie cookies przeglądarki.
 */

// Rejestracja i obsługa żądania GET na roucie /get:
app.get('/get', (req, res) => {
    // Przesłanie odpowiedzi do klienta:
    res.send("Cookies zostały przesłane z przeglądarki do serwera (aplikacji)");
    /* UWAGA
       Wraz z żądaniem GET klienta na ścieżce /get zostały przesłane do serwera (aplikacji)
       pliki cookies przechowywane w magazynie cookies przeglądarki.
     */

    // Wyświetlenie informacji pomocniczych w konsoli teminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
});

app.get('/delete', (req, res) => {
    // Usunięcie cookies:
    res.clearCookie('user');
    /* UWAGA
        Usunięcie pliku (lub plików) cookie jest realizowane za pomocą metody res.clearCookie().
        Usuwane cookie stanowi argument metody.
     */
    res.clearCookie('profession');
    /* UWAGA
        Przy usuwaniu cookies należy postępować zgodnie z uwagą podaną w dokumentacji Express:

        "Przeglądarki internetowe ... wyczyszczą plik cookie tylko wtedy, gdy opcje podane
        (w wywołaniu metody res.clearCookie()) są identyczne z tymi, które podano w res.cookie(),
        z wyjątkiem (opcji) expires i maxAge."

        Wynika z tego, że przeglądarka (klient) może nie usunąć danego cookie dletego,
        ponieważ nie jest identyczne z tym, które zdefiniowano za pomocą res.cookie().
     */

        // Wysłanie odpowiedzi serwera do przeglądarki:
    res.send('Pliki cookie zostały usunięte ...');
    /* UWAGA
        Wraz z odpowiedzią serwera (aplikacji) do klienta zostaną przesłane cookies,
        czyli tutaj: żadne cookie.
     */

    // Wyświetlenie informacji pomocniczych w konsoli teminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
});

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log('Serwer aplikacji został uruchomiony ...');
    console.log(`Wpisz kolejno w pasku adresu przeglądarki (i obserwuj konsolę terminala):`);
    console.log(`http://127.0.0.1:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}/set`);
    console.log(`http://127.0.0.1:${PORT}/get`);
    console.log(`http://127.0.0.1:${PORT}/delete`);
    console.log(`http://127.0.0.1:${PORT}`);
});

/*  ĆWICZENIE
    Zmodyfikuj kod aplikacji - wyświetlić wartości aktywnych cookies w przeglądarce w postaci:
    1) JSON (wariant I);
    2) w kodzie HTML (wariant II).
 */