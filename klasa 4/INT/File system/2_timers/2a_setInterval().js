/*  NODE.JS GLOBAL OBJECTS
    Funkcja setInterval().

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/

/* UWAGA
    Zadaniem funkcji globalnej setInterval() jest cykliczne wywoływanie funkcji zwrotnej,
    która stanowi jej argument - zgodnie z zadanym interwałem czasowym (mierzonym w ms).
 */

// Definicja funkcji pomocniczej:
function callback() {
    console.log( "Wywołanie funkcji o nazwie callback ...");
}

// Wywołanie funkcji setInterval():
const timer = setInterval(
    callback,    // funkcja wywołania zwrotnego
    1000         // opóźnienie w ms
);
//console.log(timer)
/* UWAGA
    Funkcja wywołania zwrotnego o nazwie callback jest wykonywana cyklicznie (z 1-sekundowym
    interwałem czasowym) - po wykonaniu funkcji nadrzędnej, czyli funkcji setInterval().

    Funkcja setInterval() zwraca timer (obiekt Timeout).
 */


