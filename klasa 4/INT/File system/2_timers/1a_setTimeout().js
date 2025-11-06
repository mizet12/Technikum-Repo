/*  NODE.JS GLOBAL OBJECTS
    Moduł Timers. Funkcja setTimeout().

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/

/* UWAGA
    Moduł Timers zawiera funkcje, których zadaniem jest wykonanie określonego kodu po zadanym czasie.
    Nie jest wymagany import timerów za pomocą funkcji require(), ponieważ wszystkie metody tego modułu
    są dostępne globalnie.
 */

/* UWAGA
    Funkcja setTimeout() jest funkcją globalną. Jej zadaniem jest wywołanie funkcji wywołania zwrotnego
    - stanowiącej jej argument - z zadanym opóźnieniem (w ms).
 */

console.log("Kod zawarty w pierwszej linii skryptu ...");

// Definicja funkcji pomocniczej, jako funkcji nazwanej:
function callback() {
    console.log( "Wywołanie funkcji o nazwie callback ...");
}

// Wywołanie funkcji setTimeout():
const timer = setTimeout(
    callback, // funkcja zwrotna
    2000 // opóźnienie w ms
);
console.log(timer);
/* UWAGA
    Funkcja wywołania zwrotnego (callback) zostanie wykonana dopiero po wykonaniu jej funkcji nadrzędnej,
    czyli funkcji setTimeout().
    Funkcja setTimeout() zwraca obiekt Timeout (reprezentowany tutaj przez zmienną timer).
 */

// Ponowne wywołanie funkcji setTimeout():
setTimeout(
    () => { // definicja funkcji zwrotnej
        console.log( "Wywołanie funkcji zwrotnej zdefiniowanej jako funkcja strzałkowa ...");
    },
    3000    // opóźnienie w ms
);

console.log("Kod zawarty w ostatniej linii skryptu ...");

/* UWAGA
    Rezultat wykonania skryptu w konsoli po upływie ok. 4 sekund:
    Kod zawarty w pierwszej linii skryptu ...
    Kod zawarty w ostatniej linii skryptu ...
    Wywołanie funkcji o nazwie callback ...
    Wywołanie funkcji strzałkowej ...

    Jak widać powyżej, funkcja setTimeout() nie blokuje wykonania innego kodu w skrypcie - pozostała część kodu
    jest wykonywana sekwencyjnie, jedna linia po drugiej.
    Po określonym (zadanym czasie) czasie wykonywany jest kod zawarty wewnątrz funkcji setTimeout(),
    czyli funkcje wywołania zwrotnego.
 */