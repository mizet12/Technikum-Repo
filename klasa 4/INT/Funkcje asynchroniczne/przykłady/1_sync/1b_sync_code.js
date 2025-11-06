/*  JAVASCRIPT.
    Kod synchroniczny (synchronous code).
    Stos wywołań funkcji (function call stack).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

// DEFINICJE FUNKCJI
function f1() {
    console.log('Komunikat z funkcji f1() ...');
}
function f2() {
    // Wywołanie funkcji f1() w ciele funkcji f2():
    f1();

    console.log('Komunikat z funkcji f2() ...');
}
function f3() {
    // Wywołanie funkcji f2() w ciele funkcji f3():
    f2();

    console.log('Komunikat z funkcji f3() ...');
}

// Wywołanie funkcji f3:
f3();

/* UWAGA
    Zawartość konsoli po wykonaniu aplikacji:

    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...

    Najpierw na stosie wywołań funkcji (function call stack) zostanie umieszczona
    wywoływana funkcja f3(). Następuje rozpoczęcie jej wykonywania.
    W ciele funkcji f3() jest wywoływana funkcja f2(). Tym samym, funkcja f2()
    zostaje dodana do stosu.
    Rozpoczęcie wykonywania funkcji f2() wiąże się z wywołaniem funkcji f1().
    Zatem f1() jest wykonywana - w konsoli pojawi się odpowiedni komunikat.

    Po wykonaniu f1() jest ona usuwana ze stosu i sterowanie zostaje przeniesione
    z powrotem do funkcji f2(). W konsoli zostaje wyświetlony skojarzony z nią komunikat.
    Po zakończeniu wykonywania f2() jest ona usuwana ze stosu i sterowanie zostaje
    zwrócone do funkcji f3().
    Kontynuacja wykonywania f3() wiąże się z wyświetleniem komunikatu w konsoli,
    po czym funkcja ta kończy swoje działanie i jest jako ostatnia usuwana ze stosu
    wywołań funkcji.

    Wszystkie działania na stosie są realizowane w sposób sekwencyjny - jedno po drugim.
    Takie działania określane są terminem "synchroniczne" (synchronous).
 */
