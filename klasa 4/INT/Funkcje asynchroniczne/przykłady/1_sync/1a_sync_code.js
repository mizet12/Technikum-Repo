/*  JAVASCRIPT.
    Kod synchroniczny (synchronous code).
    Stos wywołań funkcji (function call stack).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

/* UWAGA
    Kod synchroniczny (synchronous code) to taki, w którym linie są wykonywane sekwencyjnie
    jedna po drugiej.
    Za każdym razem, gdy wywoływana jest jakaś funkcja, program czeka aż skończy się jej działanie
    i sterowanie wróci na poziom aplikacji. Dopiero wtedy wykonywana jest następna instrukcja
    (np. kolejna funkcja) występująca w kodzie źródłowym po wywołaniu funkcji.
 */

/* UWAGA
    Operacje synchroniczne, czyli operacje wykonywane sekwencyjnie jedna po drugiej stanowią operacje
    blokujące (blocking operations). Wynonanie następnej operacji synchronicznej jest możliwe dopiero
    po zakończeniu wykonania poprzedniej operacji synchronicznej.
    Biorąc pod uwagę powyższe funkcje/metody blokujące są wykonywane synchronicznie - jedna po drugiej.
 */

// DEFINICJE FUNKCJI
// Definicja funkcji nazwanej:
function f1() {
    console.log('Komunikat z funkcji f1() ...');
}

// Definicja funkcji przy wykorzystaniu wyrażenia funkcyjnego (function expression):
const f2 = function() {
    console.log('Komunikat z funkcji f2() ...');
}

// Definicja funkcji strzałkowej (arrow function):
const f3 = () => {
    console.log('Komunikat z funkcji f3() ...');
}

// Wywołania zdefiniowanych funkcji w zadanej kolejności:
f1();
f2();
f3();

/* UWAGA
    Kolejne wywołania funkcji są wykonywane synchronicznie - sekwencyjnie, jedno po drugim.
    Rezultatem wykonania aplikacji jest następująca zawartość konsoli:

    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...
*/
/* UWAGA
    Wywołanie funkcji w JS powoduje dodanie jej do stosu wywołań funkcji (function call stack)
    i rozpoczęcie jej wykonywania. Domyślnie, każdy wiersz w funkcji jest wykonywany sekwencyjnie,
    po jednym wierszu na raz.
    Po zakończeniu wykonywania danej funkcji jest ona usuwana ze stosu, a następnie jest do niego
    dodawana następna wywoływana funkcja itd.
    Tutaj: najpierw na stosie będzie się znajdowała funkcja f1(), po niej f2(), a na końcu f3().

    Stos wywołań funkcji jest nazywany również stosem wykonań funkcji (function execution stack).

    Przedstawiony powyżej kod JS nie zawiera żadnych asynchronicznych interfejsów API (application
    programming interface). Jest zatem wykonywany sekwencyjnie - synchronicznie, jedna linia kodu
    po drugiej.
 */

