/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metody app.use() i app.get(). Metoda res.send().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const app = express(); // obiekt aplikacji
const PORT = 8045;

// Skojarzenie funkcji pośredniej z routem (ścieżką) '/app':
app.use(
    '/app',  // określenie ścieżki
    // Definicja funkcji pośredniczącej:
    (req, res, next) => {
        console.log("Serwer otrzymał od klienta żądanie GET na ścieżce /app");
        next();
    }
);
/* UWAGA
    W ogólności, metoda use() służy do skojarzenia (powiązania) określonej funkcji pośredniej
    z zadanym routem. To samo można uzyskać np. poprzez wywołanie metody app.get(), app.post() itd.

    Wywołanie metody app.use() powoduje dodanie funkcji pośredniej (lub funkcji pośrednich)
    do tzw. wewnętrznego stosu funkcji pośrednich (internal middleware stack), inaczej:
    do łańcucha funkcji pośrednich.
 */

// Rejestracja i obsługa żądania GET na roucie '/app':
app.get(
    '/app', // określenie ścieżki
    // Definicja funkcji unkcji obsługi routa (route handler):
    (req, res) => {
        // Wysłanie odpowiedzi do przeglądarki:
        res.send('<p>Odpowiedź serwera aplikacji na żądanie na ścieżce /app</p>');
    }
    /* UWAGA
        Zdefiniowana powyżej funkcja pośrednia jest drugą i zarazem ostatnią funkcją
        w łańcuchu funkcji pośrednich.
        Dlatego też, nie wymaga parametru next, ani wywołania metody next().
        Ponadto, w funkcji tej (jako ostatniej w łańcuchu) zawarte jest odpowiedź serwera
        do klienta.
     */
);
/* UWAGA
    W wywołaniu metody app.get() powyżej, ze ścieżką '/app' skojarzono pojedynczą funkcję pośrednią
    - funkcję obsługi tej ścieżki. Funkcja ta zostanie dodana do łańcucha funkcji pośrednich na jego końcu.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}/app`);
});