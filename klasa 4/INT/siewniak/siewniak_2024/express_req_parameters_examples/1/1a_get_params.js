/* NODE EXPRESS - OBSŁUGA ŻĄDAŃ GET Z PARAMETRAMI
   Metody app.param(), właściwość req.params.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

const express = require('express');

// Utworzenie serwera aplikacji:
const app = express();
const PORT = 8055; // w razie potrzeby należy zmienić

// Dodanie triggera (wyzwalacza) do parametru 'marka':
app.param('marka', (req, res, next, marka) => {
    // Zapis zmodyfikowanej zmiennej (parametru) do właściwości req.marka:
    req.marka = marka.toUpperCase();
    next();
});
/* UWAGA
    Metoda app.param() służy do dodawania triggera do parametrów żądania na zadanym roucie (ścieżce).
    Wspomniany trigger stanowi funkcję zwrotną (callback).

    Parametr next (i wywołanie metody next()) jest potrzebne w celu uruchomienia kolejnej funkcji pośredniej,
    np. kolejnego triggera lub funkcji obsługi routa.
 */

// Dodanie triggera (wyzwalacza) o parametru 'model':
app.param('model', (req, res, next, model) => {
    // Zapis zmodyfikowanej zmiennej do właściwości req.model:
    req.model = model.toUpperCase();
    next();
});

// Rejestracja i obsługa żądania GET na zadanym roucie:
app.get('/app/:marka/:model', (req, res) => {
    /* UWAGA
        Zdefiniowane żądanie GET posiada dwa parametry: marka i model.
        Każde z nich jest obsługiwane za pomocą oddzielnego triggera powyżej.
     */

    // Wyświetlenie informacji pomocniczej w konsoli:
    console.log("\nreq.params: ", req.params);
    /* UWAGA
        Obiekt req.params zawiera właściwości (pary klucz-wartość), które są odwzorowane
        na adres URL routa (ścieżki) z parametrami - tutaj: /app/marka/model.
     */

    // Wysłanie odpowiedzi do klienta:
    res.send("<b>Wybrany samochód:</b> " +  req.marka + " " + req.model);
});

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log("\nWpisz w pasku adresu przeglądarki np.:");
    console.log(`http://localhost:${PORT}/app/opel/astra`);
})


