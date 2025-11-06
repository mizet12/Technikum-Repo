/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    PODSUMOWANIE

    Oprogramowanie pośrednie poziomu aplikacji. Metody: app.use() i app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
    W przedstawionej aplikacji funkcje pośrednie:
     albo nie zostały skojarzone z żadną metodą HTTP, ani z żadną ścieżką - użycie metody app.use();
     albo zostały powiązane z żądaniem GET na zadanej ścieżce / - użycie metody app.get().
 */


/* UWAGA
    Dla przypomnienia, funkcje pośrednie (middleware functions) pozwalają na:
    1) dokonywanie zmian w obiekcie żądania (zwykle req) i obiekcie odpowiedzi (zwykle res);
    2) sterowanie cyklem żądanie-odpowiedź;
    3) wywołanie następnej funkcji pośredniej w łańcuchu funkcji pośrednich.

    Skojarzenie danego routa (ścieżki lub podścieżki) z funkcją pośrednią można zrealizować
    przy wykorzystaniu metod:
    a) app.use(), app.get() - na poziomie aplikacji;
    b) router.use(), router.get() na poziomie routera.
    Funkcja pośrednia stanowi wtedy argument w postaci funkcji zwrotnej (callback).

    Użycie metod app.use() i router.use() pozwala na powiązanie ścieżki/podścieżki z jedną lub wieloma
    funkcjami pośrednimi niezależnie od wykorzystywanej metody HTTP, np. GET, POST.

    Jeśli z kolei programista zamierza skojarzyć funkcje pośrednie z wybranym - jednym rodzajem
    żądania HTTP (np. GET, POST), to w tym przypadku może skorzystać z innych metod,
    np. app.get(), router.get() - dla żądania GET lub app.post(), router.post() - dla żądania POST itd.
 */


const express = require('express');
const app = express();
const PORT = 8031; // w razie potrzeby należy zmienić

counterF1 = 0; // licznik wywołań funkcji pośredniej f1()
counterF2 = 0; // licznik wywołań funkcji pośredniej f2()

// Powiązanie funkcji pośredniej z każdym żądaniem (z żądaniem na każdym roucie):
app.use(function f1(req, res, next) {
    counterF1++;
    console.log("counterF1 =", counterF1);
    next(); // wywołanie następnej funkcji pośredniej w łańcuchu funkcji pośrednich
});
/* UWAGA
    Wywołanie app.use() powyżej kojarzy funkcję pośrednią (callback) z każdym rodzajem
    żądania, np. HTTP GET, HTTP POST itd. oraz każdą ścieżką/trasą (routem).
 */

// Obsługa żądania HTTP GET na ścieżce '/':
app.get(
    '/', // określenie ścieżki
    function f2(req, res) { // funkcja obsługi ściezki
    /* UWAGA
        Funkcja pośrednia zdefiniowana w wywołaniu metody app.get() została skojarzona
        wyłącznie z żądaniem GET na ścieżce '/'.
     */
    counterF2++;
    console.log("counterF2 =", counterF2);

    // Przesłanie odpowiedzi do przeglądarki:
    res.send("<h4>Odpowiedź serwera aplikacji na żądanie GET klienta</h4>");
})


// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki (w zadanej kolejności):`);
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/app`);
    console.log(`http://localhost:${PORT}/bzdura`);
    console.log(`http://localhost:${PORT}`);
});