/* NODE.JS MODULES
    Moduły lokalne zdefiniowane przez programistę.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Deklaracje zmiennych tylko do odczytu (read-only), w których zostały zapamiętane literały:
const stringConst = "Piotr";
const numberConst = 10;

// Deklaracje zmiennych:
let stringLet;
let numberLet;

/* UWAGA
    Zmienne zadeklarowane (zdefiniowane) w module są domyślnie prywatne względem tego modułu.
    Tym samym, domyślnie nie są one dostępne dla świata zewnętrznego.
    To samo dotyczy innych elementów języka, jak np. funkcje, obiekty itp.
 */


/* UWAGA
    W ES6 (ECMAScript 2015) słowo kluczowe const nie oznacza definicji stałej.
    Słowo const oznacza referencję (odniesienie) do zmiennej - z tym, że referencja ta
    jest tylko do odczytu (read-only reference).
    Tym samym, jeśli zmienna typu const należy do typu liczbowego, łańcuchowego, lub funkcyjnego
    - wówczas nie będzie można zmienić zapamiętanej w niej wartości, tj. przypisać innej (zmienionej) wartości.
    Nie można ponownie (drugi raz) przypisać wartości zmiennej typu const.
    Zmienne deklarowane za pomocą słowa kluczowego const należy zainicjować (w przeciwieństwie do
    zmiennych tylu let).
    Np.:
    const STALA = 10;
    STALA = 11; // błędna instrukcja (TypeError)

    Sytuacja wygląda inaczej, jeśli zmienna const jest obiektem (lub tablicą, która w JS również jest obiektem).
    Referencja do całego obiektu jest niezmienna (immutable), ale jednocześnie można zmieniać wartości
    właściwości (properties) takich obiektów.
    Np.
    const obiekt = {wlasciwosc: 10};
    obiekt.wlasciwosc = 11; // poprawna instrukcja
    obiekt = {wlasciwosc: 11}; // błędna instrukcja (TypeError)

    Analogicznie jak dla zmiennych deklarowanych za pomocą słowa kluczowego let,
    zmienne typu const mają zasięg blokowy (block scope).
 */

// Eksport zmiennych napis i liczba:
exports.stringConst = stringConst;
exports.numberConst = numberConst;

exports.stringLet = stringLet;
exports.numberLet = numberLet;

/* UWAGA
    Zmienne zostały wyeksportowane jako właściwości obiektu exports.
    Tym samym, będą one dostępne dla świata zewnętrznego jako właściwości obiektu exports,
    a nie jako odrębne, niezależne zmienne.

    Ze względu na to, że obiekty (i inne elementy, np. zmienne) zdefiniowane w pliku
    są domyślnie prywatne, zmienna log nie będzie dostępna na zewnątrz modułu.
 */

/* UWAGA
    Zamiast obiektu exports, do eksportu można wykorzystać właściwość exports obiektu module:
    module.exports.stringConst = stringConst;
    module.exports.numberConst = numberConst;

    module.exports.stringLet = stringLet;
    module.exports.numberLet = numberLet;
 */




