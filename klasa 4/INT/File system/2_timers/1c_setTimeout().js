/* NODE.JS GLOBAL OBJECTS
   Moduł Timers. Metoda setTimeout().

   © Piotr Siewniak, wersja: 29.IV.2022 r.
*/

// Definicja funkcji pomocniczej:
function srednia(l1, l2) {
    return console.log("Średnia wynosi ", (l1 + l2) / 2);
}

// Wywołanie metody setTimeout():
setTimeout(
    srednia, // funkcja wywołania zwrotnego
    3000, // opóźnienie
    1, 2 // argumenty wywołania funkcji średnia
);
/* UWAGA
    Funkcje srednia() stanowiąca pierwszy argument wywołania metody setTimeout() zostanie wykonana
    z opóźnieniem 3000 ms.
    Ostatnie argumenty wywołania setTimeout() stanowią argumenty wywołania funkcji srednia(),
    stanowiącej funkcję wywołania zwrotnego.
 */

// Kolejne wywołanie metody setTimeout():
setTimeout(
    (l1, l2) => { // definicja funkcji zwrotnej
        return console.log("Średnia wynosi ", (l1 + l2) / 2);
    },
    2000, // opóźnienie w ms
    10, 20 // argumenty wywołania funkcji zwrotnej
);
/* UWAGA
    Funkcja zwrotna stanowiąca pierwszy argument wywołania metody setTimeout() zostanie wykonana
    z opóźnieniem 2000 ms. Liczby 10, 20 stanowią argumenty wywołania funkcji zwrotnej.
 */

console.log("Komunikat z kodu zawartego w ostatniej linii aplikacji ...");

/* UWAGA
    Rezulat wykonania programu po upływie ok 4 sekund:
    Komunikat z kodu zawartego w ostatniej linii aplikacji ...
    Średnia wynosi  15
    Średnia wynosi  1.5

    Jak widać, wywołanie funkcji setTimeout() nie blokuje wykonywania innego kodu w skrypcie.
 */