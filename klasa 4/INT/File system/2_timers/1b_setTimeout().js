/* NODE.JS GLOBAL OBJECTS
   Moduł Timers. Metoda setTimeout().

   © Piotr Siewniak, wersja: 29.IV.2022 r.
*/



// Definicja funkcji pomocniczej:
function wb(liczba) {
    if (liczba >= 0) return console.log(liczba);
    else return console.log(-liczba);
}
/* UWAGA
    Zadaniem funkcji wb() jest obliczenie wartości bezwzględnej z liczby stanowiącej jej argument.
 */
// Wywołanie metody setTimeout():
setTimeout(
    wb, // funkcja zwrotna
    1000, // opóźnienie w ms
    -10 // argument funkcji zwrotnej wb()
);

console.log("Komunikat z kodu zawartego w ostatniej linii aplikacji ...");
/* UWAGA
    Wywołanie metodau setTimeout() nie blokuje wykonywania innego kodu w programie.
    Oznacza to, że wykonanie pozostałego kodu wstrzymywane.
    Jest on wykonywany normalnie - sekwencyjnie (jedna linia po drugiej).
 */