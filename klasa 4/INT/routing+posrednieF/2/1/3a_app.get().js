/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metoda app.get(). Metoda res.send().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require("express");
const app = express();
const PORT = 8044;

// DEFINICJE FUNKCJI POŚREDNICH
// Definicja pierwszej funkcji pośredniej:
const f1 = (req, res, next) => {
    console.log("Komunikat pochodzący z funkcji pośredniej f1())");
    next();
}
// Definicja drugiej funkcji pośredniej:
const f2 = (req, res, next) => {
    console.log("Komunikat pochodzący z funkcji pośredniej f2()");
    next();
}
// Definicja trzeciej funkcji pośredniej (funkcji obsługi routa - ścieżki):
const f3 = (req, res) => {
    console.log("Komunikat pochodzący z (ostatniej) funkcji pośredniej f3()");
    res.send("<h4>Odpowiedź serwera na żądanie GET z ostatniej funkcji pośredniej - f3()</h4>");
}

// Obsługa żądania GET na roucie '/':
app.get(
    "/", // określenie routa (ścieżki)
    f1, // pierwsza funkcja pośrednia w łańcuchu
    f2, // druga funkcja pośrednia w łańcuchu
    f3 // trzecia funkcja pośrednia w łańcuchu
    /* UWAGA
        Funkcje pośrednie tworzą łańcuch. Funkcje wchodzące w skład zdefiniowanego łańcucha
        są wykonywane sekwencyjnie jedna po drugiej w zadanej kolejności.

        Bardzo często zamiast łańcucha funkcji pśrednich jest również używane określenie:
        stos funkcji pośrednich (middleware stack).
     */
);
/* UWAGA
    Metoda app.get() pozwala na skojarzenie (powiązanie) funkcji pośrednich z określonym routem (ścieżką).

    Oprócz użycia metody app.get(), funkcje pośrednie można wiązać (kojarzyć) z określonym routem
    przy wykorzystaniu metody app.use().
 */
app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}/`);
});

