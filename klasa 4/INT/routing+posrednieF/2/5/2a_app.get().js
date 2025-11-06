/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)

    PODSUMOWANIE
    Oprogramowanie pośrednie poziomu aplikacji - metoda app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/


/* UWAGA
    W przedstawionej aplikacji wszystkie funkcje pośrednie zostały skojarzone z zadaną ścieżką
    za pomocą metody app.get()
 */

const express = require('express');
const app = express();
const PORT = 8032; // w razie potrzeby można zmienić

// Obsługa żądania GET na ścieżce '/':
app.get('/', (req, res, next) => {
    console.log('Operacja przed wysłaniem odpowiedzi do klienta...');
    next();
});

// Obsługa żądania GET na ścieżce '/':
app.get('/', (req, res, next) => {
    console.log('Odpowiedź serwera aplikacji na żądanie GET ...');

    res.send("Treść odpowiedzi serwera aplikacji do klienta");
    next();
})


// Obsługa żądania GET na roucie '/':
app.get('/', (req, res) => {
    console.log('Operacja po wysłaniu odpowiedzi do klienta ...');
})
/* UWAGA
    Każdorazowo w wywołaniu app.get() następuje powiązanie funkcji pośredniej (stanowiącej jej argument)
    z routem (ścieżką/trasą) '/', ale jedynie dla żądania GET.
 */
/* UWAGA
    Funkcje pośrednie zdefiniowane powyżej będą wywoływane w kolejności zgodnej z ich kolejnością
    w łańcuchu funkcji pośrednich, czyli zgodnie z kolejnością ich powiązań z routem w kodzie źródłowym.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki:`);
    console.log(`http://localhost:${PORT}`);
});
