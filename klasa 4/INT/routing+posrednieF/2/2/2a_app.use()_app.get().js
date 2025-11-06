/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metody app.use() i app.get(). Metoda res.send().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const app = express(); // obiekt aplikacji
const PORT = 8046;

// DEFINICJE FUNKCJI POŚREDNICH:
const f1 = (req, res, next) => {
    console.log("Komunikat od funkcji pośredniej f1() ...");
    next();
}
const f2 = (req, res, next) => {
    console.log("Komunikat od funkcji pośredniej f2() ...");
    next();
}
const f3 = (req, res, next) => {
    console.log("Komunikat od funkcji pośredniej f3() ...");
    next();
}

// Skojarzenie (powiązanie) funkcji pośredniej z routem '/app':
app.use(
    // Określenie routa (ścieżki):
    '/app',
    // Wykaz funkcji pośrednich:
    f1, f2
);
/* UWAGA
    Funkcje pośrednie f1() i f2() zostaną dodane do łańcucha funkcji pośrednich
    w wymienionej kolejności na jego początku.
 */

// Obsługa żądania GET na roucie '/app':
app.get(
    // Określenie routa:
    '/app',
    // Definicja funkcji pośredniej:
    (req, res, next) => {
        console.log("Komunikat od funkcji obsługi routa /app ...");

        // Wysłanie odpowiedzi do klienta (przeglądarki):
        res.send('<h4 style="color: blue;">Treść odpowiedzi serwera aplikacji na żądanie GET klienta</h4>');
        next();
    }
);
/* UWAGA
    Zdefiniowana powyżej funkcja pośrednia zawiera:
    1) przesłanie odpowiedzi serwera do klienta (czyli stanowi funkcję obsługi routa);
    2) instrukcje pomocnicze (wysłnie komunikatu do konsoli).
    Zostanie ona dodana do łańcucha funkcji pośrednich po funkcjach f1() i f2().
 */

// Skojarzenie funkcji pośredniej f3 z routem '/app':
app.use('/app', f3);
/* UWAGA
    Zdefiniowana powyżej funkcja pośrednia zostanie dodana do łańcucha funkcji pośrednich
    przed funkcją obsługi routa.
 */

/* UWAGA
    Funkcje pośrednie zostaną wykonane w kolejności zgodnej z ich powiązaniami w kodzie źródłowym
    z określonym routem.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, (err) => {
    if (err) {
        console.log("Uwaga błąd!", err.message);
        return
    }
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}/app`);
});

/* UWAGA
    Wyniki działania aplikacji świadczą o tym, że funkcja obsługi routa nie musi być ostatnią
    funkcją pośrednią w zdefiniowanym łańcuchu funkcji pośrednich.
 */