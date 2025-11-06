/* NODE.JS GLOBAL OBJECTS
   Moduł Timers. Metoda setImmediate().

   © Piotr Siewniak, wersja: 29.IV.2022 r.
*/

// Definicja funkcji pomocniczej, która stanowi zwykłą funkcję synchroniczną:
function wb(liczba) {
    if (liczba >= 0) return console.log(liczba);
    else return console.log(-liczba);
}

// Wywołanie metody asynchronicznej setImmediate():
setImmediate(
    wb, // funkcja wywołania zwrotnego
    -1 // argument funkcji wb()
);
/* UWAGA
    Funkcja setImmediate() zostanie wykonana po zakończeniu iteracji pętli zdarzeń.
 */
// Wywołanie metody setTimeout():
setTimeout(
    wb, // funkcja wywołania zwrotnego
    0, // opóźnienie 0
    -2 // argument funkcji wb()
)

// Wywołanie funkcji wb():
wb(-10);

/* UWAGA
    Funkcja wb() stanowi argument funkcji nieblokujących: setImmediate() i setTimeout().
    Tym samym, względem wspomnianych funkcji stanowi ona funkcję zwrotną (callback).
    Po wywołaniach funkcji nieblokujących (setImmediate() i setTimeout()) następuje zwykłe
    wywołanie funkcji wb().

    Rezultat wykonania programu jest następujący:
    10
    2
    1
 */



