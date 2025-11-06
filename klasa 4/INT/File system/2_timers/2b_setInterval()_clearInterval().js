/*  NODE.JS GLOBAL OBJECTS
    Funkcje setInterval() i clearInterval().

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/

// Wywołanie funkcji globalnej setInterval():
const timer = setInterval(
    () => { // definicja funkcji wywołania zwrotnego
        console.log( "Wywołanie funkcji zwrotnej ...");
    },
     3000 // opóźnienie w ms
);

// Zatrzymanie timera zwróconego przez funkcję setInterval():
clearInterval(timer);
/* UWAGA
    Timer zostanie zatrzymany przed upływem 3 sekund.
 */

console.log("Komunikat z instrukcji w ostatniej linii programu ...");
/* UWAGA
    Skutkiem działania programu jest jedynie wyświetlenie komunikatu kontrolnego
    z instrukcji w ostatniej linii programu.
 */



