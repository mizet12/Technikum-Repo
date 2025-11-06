/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metoda app.get(). Metoda res.send().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require("express");
const app = express();
const PORT = 8038;

// DEFINICJE FUNKCJI POŚREDNICH:
function f1(req, res, next) {
    console.log("Komunikat z funkcji pośredniej f1()");
    next();
}
function f2(req, res, next) {
    console.log("Komunikat z funkcji pośredniej f2()");
    next();
}
function f3(req, res, next) {
    console.log("Komunikat z funkcji pośredniej f3()");
    next();
    /* UWAGA
        Trzecia funkcja w łańcuchu - f3() - nie zawiera instrukcji powodujących wysłanie odpowiedzi
        serwera aplikacji do klienta (przeglądarki), bo nie jest to ostatnia funkcja pośrednia w łańcuchu.
        Dlatego też, posiada ona parametr funkcyjny next oraz zawiera wywołanie metody next().
     */
}

// Obsługa żądania GET na roucie (ścieżce/trasie) '/':
app.get(
    "/", // określenie routa (ścieżki)
    /* UWAGA
        Funkcje pośrednie zdefiniowane poniżej zostają dodane do stosu funkcji pośrednich
        wyłącznie dla routa /.
     */
    f1, f2, f3 // funkcje pośrednie
    /* UWAGA
        Funkcje pośrednie tworzą łańcuch. Funkcje wchodzące w skład zdefiniowanego łańcucha
        są wykonywane sekwencyjnie jedna po drugiej w zadanej kolejności.
     */
);

// Obsługa żądania GET na roucie '/':
app.get(
    '/',  // określenie routa
    // Definicja czwartej (ostatniej w łańcuchu) funkcji pośredniej:
    function f4(req, res) {
        console.log("Komunikat z ostatniej funkcji pośredniej w łańcuchu");

        // Wysłanie odpowiedzi z serwera do klienta:
        res.send("<h4 style='color:blue;'>Odpowiedź serwera na żądanie GET z funkcji pośredniej f4()</h4>");
});
/* UWAGA
    W wywołaniu metody app.get() skojarzonej z routem '/' powiązano kolejną (czwartą) funkcję pośrednią.
    Jest ona nazywana funkcją obsługi routa (route handling), ponieważ zawiera odpowiedź serwera
    do klienta (przeglądarki).
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}`);
});

