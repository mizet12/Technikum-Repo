+/*  NODE.JS CALLBACKS.
    Kod asynchroniczny (asynchronus code).
    Zagnieżdżone wywołania zwrotne (nested callbacks).

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicje niezależnych funkcji pomocniczych:
function f1() {
    console.log('Komunikat z funkcji f1() ...');
}
function f2() {
    console.log('Komunikat z funkcji f2() ...');
};
function f3() {
    console.log('Komunikat z funkcji f3() ...');
}
// Definicja funkcji zaierającej kod asynchroniczny:
function nestedCallbacks() {
    setTimeout(() => {
        f1();
        setTimeout(() => {
            f2();
            setTimeout(() => {
                f3();
            }, 1000) // zmienić w testach aplikacji na 3000
        }, 1000) // zmienić w testach na 2000
    }, 1000)
}
/* UWAGA
    Kod funkcji nestedCallbacks() zwiera elementy asynchroniczne, które wynikają
    z użycia w jej ciele funkcji asynchronicznej setTimeout().
    Każda następna funkcja setTimeout() jest zagnieżdżona w funkcji wyższego rzędu.
    Struktura ta tworzy "piramidę" coraz głębszych wywołań zwrotnych.

    Implementacja mocno zagnieżdżonych calbacków jest trudna do skutecznego kontrolowania.
    Dlatego też, kod JS zawierający zagnieżdżone wywołania zwrotne jest często nazywany
    "piramidą zagłady" (pyramid of doom) albo "piekłem wywołań zwrotnych" (callback hell).
 */

// Wywołanie funkcji nestedCallbacks():
nestedCallbacks();

/* UWAGA
    Rezultat w konsoli:

    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...
 */




