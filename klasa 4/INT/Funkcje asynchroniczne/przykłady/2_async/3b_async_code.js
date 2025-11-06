/*  JS CALLBACKS.
    Kod synchroniczny i asynchroniczny.
    Funkcje wywołania zwrotnego (callbacks).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

/* UWAGA
    PRZED REALIZACJĄ TEGO TEMATU NALEŻY OMÓWIĆ MODUŁ TIMER.
 */

// Definicja funkcji pomocniczej:
let callbackFunction = () => {
    console.log('Komunikat z funkcji callbackFunction() ...');
}

// Definicja funkcji synchronicznej:
function f1() {
    console.log('Komunikat z funkcji f1() ...');
}

// // Definicja funkcji zawierającej kod synchroniczny i asynchroniczny:
function f2(callback) { // funkcja posiada parametr funkcyjny
    console.log('Pierwszy komunikat z funkcji f2() ...');
    setTimeout(
        () => {
            callback();
        },
        /* UWAGA
            Funkcja typu callback stanowi argument funkcji nadrzędnej (tutaj: funkcji
            asynchronicznej setTimeout(). Funkcja callback jest wykonywana dopiero po
            zakończeniu wykonywania funkcji setTimeout(), która stanowi funkcję nadrzędną
            nad callbackiem.
         */
        0 // opóźnienie w ms
    )
    console.log('Drugi komunikat z funkcji f2() ...');
}

// Definicja funkcji synchronicznej:
function f3(callback) {
    console.log('Pierwszy komunikat z funkcji f3() ...');
    callback();
    console.log('Drugi komunikat z funkcji f3() ...');
}

// Definicja funkcji synchronicznej:
function f4() {
    console.log('Komunikat z funkcji f4() ...');
}

// Wywołania funkcji w zadanej kolejności:
f1();
f2(callbackFunction);
f3(callbackFunction);
f4();

/* UWAGA
    Przedstawiony powyżej kod JS zawiera elementy asynchroniczne.

    Rezultatem wykonania aplikacji jest następująca zawartość konsoli:

    Komunikat z funkcji f1() ...
    Pierwszy komunikat z funkcji f2() ...
    Drugi komunikat z funkcji f2() ...
    Pierwszy komunikat z funkcji f3() ...
    Komunikat z funkcji callbackFunction() ...
    Drugi komunikat z funkcji f3() ...
    Komunikat z funkcji f4() ...
    Komunikat z funkcji callbackFunction() ...

    Kod synchroniczny został wykonany w całości przed rozpoczęciem przetwarzania kodu asynchronicznego,
    zawartego w funkcji f2().
 */

