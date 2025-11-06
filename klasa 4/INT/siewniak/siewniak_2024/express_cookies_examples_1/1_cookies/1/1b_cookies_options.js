/*  NODE EXPRESS - COOKIES
    Konfigurowanie cookies: res.cookie().

    © Piotr Siewniak, wersja: 2.III.2022 r.
*/

// Konfiguracja cookie

const express = require('express');
const cookieParser = require('cookie-parser');

// Utworzenie obiektu aplikacji:
const app = express();
const PORT = 8002; // w razie potrzeby należy zmienić

// Deklaracja użycia cookie-parsera w aplikacji:
app.use(cookieParser());

// Rejestracja i obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Wyświetlenie informacji pomocniczych w konsoli:
    console.log("Stan początkowy cookies:");
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);

    // Usunięcie wszystkich cookies:
    const cookies = req.cookies; // zmienna pomocnicza
    for (let property in cookies) {
        if (!cookies.hasOwnProperty(property)) continue;

        res.cookie(
            property, // nazwa cookie
            null, // wartość cookie
            { expires: new Date(Date.now()) }
        );
    }
    /* UWAGA
        Wszystkie aktywne cookies zostały usunięte poprzez nadanie im wartości ''
        oraz czasu ważności 0 ("teraz").
     */

    // Wysłanie odpowiedzi do przeglądarki:
    res.send("Obserwuj konsolę terminala w celu monitorowania cyklu 'żądanie klienta - odpowiedź serwera'");
    /* UWAGA
       Wraz z odpowiedzią serwera (aplikacji) do klienta, do przeglądarki są przesyłane zdefiniowane cookies.
       Tutaj: nie są przesyłane żadne cookies, ponieważ wszystkie zostały usunięte.
     */
});

// Rejestracja i obsługa żądania GET na roucie (ścieżce) /login:
app.get('/login', (req, res) => {
    // Definicja cookie:
    res.cookie('logged_in', 'true', {
        path: '/',
        /* UWAGA
            Opcja path jest wykorzystywana w celu określenia ścieżki cookie.
            Wartością domyślną jest '/'.
         */
        expires: new Date('31 12 2022'), // określenie daty ważności pliku cookie
        /* UWAGA
            Opcja expires oznacza datę wygaśnięcia (datę ważności) pliku cookie.
            Jest on reprezentowana przez obiekt typu Data.
            Domyślnie cookie wygasa wraz z zakończeniem bieżącej sesji (session).

            Czas ważności cookie począwszy od czasu bieżącego można ustalić również
            przy wykorzystaniu metody now(), np.
                expires: 360000 + Date.now().
            Wyrażenie powyżej oznacza, że cookie będzie aktywne 360000 ms od teraz.

            Oprócz opcji expire można również używać opcji maxAge, np.:
                maxAge: 360000
            Liczba oznacza ilość ms liczona od Date.now().
         */

        // Ustawienia cookie poprawiające bezpieczeństwo:
        secure: false,
        /* UWAGA
            Opcja secure: true oznacza, że przeglądarka odrzuci cookie, jeśli połączenie nie jest bezpieczne
            - dopuszcza jedynie protokół HTTPS, a nie HTTP. Domyślną wartością dla protokołu HTTP jest false,
            a dla HTTPS - true.
         */
        httpOnly: true,
        /* UWAGA
           Wartość true opcji httpOnly oznacza, że cookie może być wysyłane za pośrednictwem
           protokołów HTTP lub HTTP, ale nie jest udostępnione klientowi  JavaScript.
           Oznacza to, że cookie może być używane jedynie przez serwer (aplikację).
           Wartość domyślna - true.
         */
        overwrite: false,
        /* UWAGA
            Wartość true opcji overwrite oznacza, że wcześniejszy plik cookie o tej samej nazwie
            może zostać nadpisany. Wartość domyślna opcji - false.
         */
        sameSite: 'lax'
        /* UWAGA
            Opcja sameSite ustawiona na true oznacza, że cookie pochodzi z tej (a nie innej) witryny.
            Wykorzystuje się ją w celu eliminacji śledzenia przez strony trzecie.
            Wartość domyślna - false. Inne wartości: 'strict', 'lax' lub true (= strict).
         */
    });

    // Przesłanie odpowiedzi do klienta:
    res.send('Cookie "logged_in" zostało zdefiniowane i przesłane do przeglądarki ...');

    // Wyświetlenie informacji pomocniczych w konsoli:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
});

// Rejestracja i obsługa żądania GET na roucie /app:
app.get('/app', (req, res) => {
    // Zmienna pomocnicza:
    let response;
    if (req.cookies.logged_in == 'true') {
       response = "req.cookies.logged_in == 'true'";
    } else {
        response = "req.cookies.logged_in == 'false'";
    }

    // Przesłanie odpowiedzi do klienta:
    res.send(response);
    /* UWAGA
        Wraz z odpowiedzią do klienta (przeglądarki) są wysyłane aktywne cookies (tutaj: cookie logged_in).
     */

    // Wyświetlenie informacji pomocniczych w konsoli terminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
});

app.get('/logout', (req, res) => {
    // Usunięcie cookie:
    res.clearCookie('logged_in');

    res.send("Cookie 'logged_in' zostało usunięte!");

    // Wyświetlenie informacji pomocniczych w konsoli terminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
})

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log('Serwer aplikacji został uruchomiony ...');
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/login`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/app`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/logout`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/app`);
});

/*  ĆWICZENIE 1
    Wykonaj kilka (kilkanaście) eksperymentów polegających na usuwaniu cookies w różny sposób:
    1) za pomocą metody res.clearCookie() (wariant I);
    2) za pomocą metody res.cookie wraz z opcją expires/maxAge (wariant II).

    Zinterpretuj uzyskane rezultaty.
 */

/*  ĆWICZENIE 2
    Zmodyfikuj kod aplikacji na podstawie następujących założeń:
    1) zdefiniuj dodatkowe cookie, którego wartość zawiera datę ostatniego "wykorzystania" aplikacji.
       Przyjąć, że wspomniane wykorzystanie aplikacji jest równoważne wartości 'true' cookie logged_in.
    2) podczas każdego uruchomienia aplikacji powinna zostać wyświetlona wyminiona powyżej data.
 */