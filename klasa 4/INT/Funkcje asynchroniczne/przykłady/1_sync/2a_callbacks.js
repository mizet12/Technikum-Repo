/*  JAVASCRIPT.
    Kod synchroniczny (synchronous code).
    Funkcje zwrotne (callback functions).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/


/* UWAGA
    Funkcjami zwrotnymi (inaczej: funkcjami wywołań zwrotnych) (callbacks) są nazywane funkcje,
    które są przekazywane do innych funkcji, jako jej parametry/argumenty,
    a następnie w niej wywoływane.
    Funkcje wywołań zwrotnych mogą być używane do obsługi zarówno kodu synchronicznego,
    jak również asynchronicznego.

   Funkcje callback są często używane do kontynuowania wykonywania kodu po zakończeniu wykonywania
   określonej operacji asynchronicznej. W takim przypadku są one nazywane asynchronicznymi wywołaniami
   zwrotnymi (asynchronous callbacks).
 */

// Definicja funkcji pomocniczej:
function callbackFunction() {
    console.log('Komunikat z funkcji callbackFunction() ...');
}
// Definicja bezparametrowej funkcji f1():
function f1() {
    console.log('Komunikat z funkcji f1() ...');
}

// Definicja funkcji f2() z parametrem funkcyjnym:
function f2(callback) {
    /* UWAGA
        Do funkcji f2() został przekazany przez wartość (passed by value) parametr callback,
        który reprezentuje funkcję.
     */
    console.log('Pierwszy komunikat z funkcji f2() ...');

    // Wywołanie funkcji callback():
    callback();

    console.log('Drugi komunikat z funkcji f2() ...');
}
/* UWAGA
    Funkcja f2() nie zawiera żadnych elementów asynchronicznych - jest zwykłą funkcją synchroniczną,
    w której wszystkie operacje są realizowane w sposób sekwencyjny - jedna po drugiej.
 */

// Definicja bezparametrowej funkcji f3():
function f3() {
    console.log('Komunikat z funkcji f3() ...');
}
/* UWAGA
    Wszystkie zdefiniowane powyżej funkcje są funkcjami synchronicznymi.
 */


// Wywołania zdefiniowanych funkcji synchronicznych:
f1();

f2(callbackFunction);
/* UWAGA
    Funkcja callbackFunction() została przekazana w wywołaniu funkcji f2() jako jej argument.
 */
f3();

/* UWAGA
    Rezultat wykonania aplikacji w konsoli:

    Komunikat z funkcji f1() ...
    Pierwszy komunikat z funkcji f2() ...
    Komunikat z funkcji callbackFunction() ...
    Drugi komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...

    Jak widać powyżej, wszystkie operacje w aplikacji są wykonynawe w sposób synchroniczny
    - sekwencyjnie, jedna po drugiej.
 */

