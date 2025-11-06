/* NODE.JS MODULES
    Moduły lokalne zdefiniowane przez programistę.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja funkcji w formie deklaracji (ES5):
function f1() {
    console.log("Komunikat kontrolny z funkcji f1() ...");
}
// Definicja funkcji strzałkowej (arrow function) (ES6):
const f2 = () => {
    console.log("Komunikat kontrolny z funkcji f2() ...");
}
/* UWAGA
    Funkcje zdefiniowane powyżej są domyślnie prywatne względem modułu.
    Tym samym, nie są one dostępne dla świata zewnętrznego (tzn. na zewnątrz modułu).
 */


// Eksport funkcji, jako właściwości (metod) obiektu exports:
exports.f1 = f1;
exports.f2 = f2;
/* UWAGA
    W JS metoda (jako funkcja zdefiniowana w obiekcie) jest tak naprawdę właściwością.

    Funkcje f1() i f2() zostały wyeksportowane, jako właściwości obiektu exports,
    a nie jako niezależne funkcje. Tym samym, na zewnątrz modułu funkcje te są
    również dostępne jako właściwości, a nie jako odrębne funkcje.
 */

/* UWAGA
    Zamiast obiektu exports, do eksportu można wykorzystać właściwość exports obiektu module:
    module.exports.f1 = f1;
    module.exports.f2 = f2;
 */
