/* NODE.JS GLOBAL OBJECTS
   Moduł Timers. Metody setInterval() i clearInterval().

   © Piotr Siewniak, wersja: 29.IV.2022 r.
*/

// Definicja funkcji info():
function info() {
    return console.log('Komunikat kontrolny ...');
}

// Licznik pomocniczy:
let count = 0;

// Wywołanie metody setInterval():
const timer = setInterval(
    () => { // definicja funkcji zwrotnej
        console.log('Komunikat kontrolny ...');
        count++
        if (count == 3) clearInterval(timer);
    },
    1000 // opóźnienie
);
/* UWAGA
    Zadaniem metody clearInterval() jest wyczyszczenie timera (licznika czasu) ustawionego wcześniej
    za pomocą metody setInterval().

    Tutaj:
    komunikat kontrolny (pochodzący z funkcji zwrotnej info()) zostanie wyświetlony 3 razy.
 */

