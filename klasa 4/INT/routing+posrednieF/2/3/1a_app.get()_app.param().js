/*  NODE EXPRESS
    FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metody app.param() i app.get(). Metoda res.send().
    Wykorzystanie parametrów żądania HTTP GET (HTTP GET request parameters).

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const app = express(); // obiekt aplikacji
const PORT = 8055;

// Dodanie - skojarzenie triggera (wyzwalacza) typu callback z parametrem 'marka':
app.param(
    // Określenie parametru:
    'marka',
    // Definicja funkcji pośredniej:
    (req, res, next, marka) => {
        // Zamiana na duże litery:
        req.marka = marka.toUpperCase();
        next();
    }
);
/* UWAGA
    Zadaniem triggera zdefiniowanego powyżej jest obsługa parametru 'marka' żądania.
 */
// Dodanie triggera do parametru 'model':
app.param(
    // Określenie parametru:
    'model',
    // Definicja funkcji pośredniej:
    (req, res, next, model) => {
        // Zamiana na duże litery:
        req.model = model.toUpperCase();
        next();
    }
);
/* UWAGA
    Zadaniem triggera zdefiniowanego powyżej jest obsługa parametru 'model' żądania.
 */

// Obsługa żądania GET z parametrami:
app.get(
    // Określenie routa (ścieżki) z parametrami:
    '/app/:marka/:model',
    /* UWAGA
        Żądanie GET posiada dwa parametry: marka i model.
        Każdy parametr jest obsługiwany za pomocą oddzielnego triggera (zdefiniowanego wcześniej).
     */
    // Definicja funkcji pośredniej:
    (req, res) => {
        // Wyświetlenie informacji pomocniczej w konsoli:
        console.log("\nreq.params: ", req.params);

        // Wysłanie odpowiedzi do klienta:
        res.send(`Przeglądasz informacje o samochodzie ${req.marka} ${req.model}`);
    }
);
/* UWAGA
    Funkcja pośrednia zdefiniowana powyżej stanowi funkcję obsługi (route hamdler),
    ponieważ jej zadaniem jest przesłanie odpowiedzi serwera aplikacji do klienta.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, (err) => {
    if (err) {
        console.log("Uwaga błąd!", err.message);
        return
    }
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}/app/Volkswagen/Golf`);
});
