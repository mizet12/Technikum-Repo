/*  JS CALLBACKS.
    Kod asynchroniczny (asynchronous code). Funkcje wywołań zwrotnych (callback functions).
    Wykorzystanie asynchronicznego Web API - funkcji setTimeout().

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/


/* UWAGA
    PRZED REALIZACJĄ TEGO TEMATU NALEŻY OMÓWIĆ MODUŁ TIMER.
 */


/* UWAGA
    Programowanie asynchroniczne polega na tym, że wykonywanie operacji nie przebiega
    sekwencyjnie w takiej kolejności, w jakiej występuje w kodzie źródłowym (tj. linia po linii).
    W programowaniu asynchronicznym program nie czeka aż określone zadanie asynchroniczne
    się skończy (operacja asynchroniczna dobiegnie końca) - wykonywanie pozostałych operacji
    może (i jest) kontynuowane.
 */

/* UWAGA
    RÓŻNE SPOSOBY REALIZACJI ASYNCHRONICZNOŚCI SĄ OMAWIANE OSOBNO!
 */

// Definicja funkcji synchronicznej:
function f1() {
    console.log('Komunikat z funkcji f1() ...');
}

// Definicja funkcji zawierającej kod asynchroniczny:
function f2() {
    console.log('Pierwszy komunikat z funkcji f2() ...');
    setTimeout( // wywołanie funkcji asynchronicznej
        () => { // funkcja typu callback
            console.log('Komunikat z funkcji typu callback wywoływanej w f2() ...');
        },
        0 // opóźnienie w ms
    )
    console.log('Drugi komunikat z funkcji f2() ...');
}
/* UWAGA
    Funkcja setTimeout() stanowi wbudowany asynchroniczny Web API przeglądarki.
    Wykonuje ona funkcję stanowiącą jej pierwszy argument po upływie określonego,
    zadanego czasu - czyli z zadanym opóźnieniem.
    Czas opóźnienia mierzony w ms stanowi drugi argument setTimeout().

    Funkcja stanowiąca pierwszy argument funkcji setTimeout() jest funkcją wywołania zwrotnego (callback).
    Podczas wykonywania kodu asynchronicznego, funkcje typu callback są wykonywane asynchronicznie,
    tj. dopiero po zakończeniu wykonywania ich funkcji nadrzędnych - funkcji wywołujących (caller'ów).
    Tutaj funkcją nadrzędną jest funkcja asynchroniczna setTimeout().

    Innymi słowy, funkcja callback jest wykonywana dopiero po zakończeniu wykonywania skojarzonej z nią
    operacji asynchronicznej (czyli setTimeout()).
 */
/* UWAGA
    Należy zwrócić uwagę, że w ciele funkcji f2() jest zawarty zarówno kod synchroniczny (wywołania
    console.log), jak również kod asynchroniczny (wywołanie funkcji setTimeout()).
 */

// Definicja funkcji synchronicznej:
function f3() {
    console.log('Komunikat z funkcji f3() ...');
}
// Definicja funkcji synchronicznej:
function f4() {
    console.log('Komunikat z funkcji f4() ...');
}

// Wywołania zdefiniowanych funkcji w zadanej kolejności:
const main = function() {
    f1();
    f2(); // wywołanie f2() zawierającej kod asynchroniczny
    f3();
    f4();
}
main();

/* UWAGA
    Przedstawiony powyżej kod JS zawiera wywołanie asynchronicznej funkcji setTimeout()
    z czasem opóźnienia 0 ms (czyli faktycznie bez opóźnienia).
    Wykonania funkcji nie są jednak realizowane sekwencyjnie, jedno po drugim.

    Rezultatem wykonania aplikacji jest następująca zawartość konsoli:

    Komunikat z funkcji f1() ...
    Pierwszy komunikat z funkcji f2() ...
    Drugi komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...
    Komunikat z funkcji f4() ...
    Komunikat z funkcji typu callback wywoływanej w f2() ...

    Jak widać, wykonanie funkcji callback zawierającej wywołanie stanowiącej argument funkcji
    asynchronicznej setTimeout()) nastąpiło dopiero po funkcjach synchronicznych (oraz kodzie
    synchronicznym zawartym w f2()).

    W przypadku operacji asynchronicznych (jak tutaj), funkcje callback są wykonywane dopiero
    po zakończeniu wykonywania operacji asynchronicznych, czyli po zakończeniu wykonywania
    funkcji nadrzędnej. Tutaj funkcją nadrzędną jest setTimeout(), czyli funkcja callback
    stanowiąca jej argument zostanie wykonana dopiero po zakończeniu setTimeout().

    Oprócz stosu wywołań funkcji, silnik JS musi w tym przypadku kontrolować API przeglądarki
    (browser API) odpowiadające funkcji setTimeout() oraz tzw. pętlę zdarzeń (event loop)
    obsługiwanych przez funkcje typu callback.

    Silnik JS może wykonać w danej chwili tylko jedną operację. Wymaga to dostarczenia do
    tzw. pętli zdarzeń (event loop) informacji, kiedy należy wykonać konkretną instrukcję.
    Pętla zdarzeń obsługuje to za pomocą mechanizmów:
    1) stosu wywołań funkcji (function call stack);
    2) kolejki wywołań (funkcji) zwrotnych (callback queue /task queue).
    Ujmując to inaczej, zadaniem pętli zdarzeń jest monitorowanie stosu wywołań funkcji
    oraz kolejki wywołań zwrotnych.
    Jeśli stos wywołań jest pusty, pętla zdarzeń pobiera pierwsze zdarzenie z kolejki,
    a następnie umieszczago na stosie wywołań. Tam następuje jego uruchomienie.
    Każde zdarzenie stanowi wyłacznie wywołanie zwrotne funkcji.
    Dana funkcja callback jest dodawana do kolejki, jeśli wystąpi API przegladarki
    - tutaj: wywołana zostaje funkcja setTimeout().
*/

/* UWAGA
    W ogólności, funkcje callback, stanowiące argumenty innych funkcji nie są umieszczane
    bezpośrednio na stosie wywołań funkcji. Tym samym, nie powstaje żaden mechanizm blokowania
    wykonywania kodu, ani oczekiwania na wykonywanie.
    Funkcja callback zostaje umieszczona na stosie wywołań funkcji dopiero wtedy, gdy jest on pusty
    - czyli wykonywanie funkcji nadrzędnej nad callbackiem zostało zakończone.

    Silnik JS sprawdza kolejkę callbacków cyklicznie - pobiera z kolejki i umieszcza na stosie
    wywołań funkcji callback, który jest w danej chwili potrzebny.
    Funkcja callback umieszczona na stosie jest wykonywana podobnie do zwykłych funkcji.
    Analogicznie - po zakończeniu wykonywania dany callback jest usuwany ze stosu.

    Biorąc pod uwagę powyższe, funkcje (metody) asynchroniczne są nieblokujące (non-blockig).
    Wynika to z faktu, że są one wykonywane asynchronicznie. Nieblokujące (czyli asynchroniczne)
    operacje mogą być realizowane dzięki pętli zdarzeń (event loop).

    Tutaj:
    najpierw na stosie wywołań funkcji umieszczana jest funkcja main().
    Rozpoczyna się wykonywanie tej funkcji. Następnie na stos trafia funkcja f1(),
    która również jest wykonywana. Po zakończeniu jest ona usuwana ze stosu.
    Następnie na stos trafia funkcja f2().
    Wywołanie funkcji setTimeout() w ciel w funkcji f2() powoduje dodanie funkcji callback
    stanowiącej jej argument do kolejki callbacków.
    Następnie na stos są ładowane i wykonywane kolejno następne funkcje synchroniczne: f3() i f4().
    Callback z funkcji f2() nadal oczekuje w kolejce.
    Dopiero po usunięciu ze stosu wywołań ostatniej funkcji synchronicznej,
    callback jest pobierany z kolejki, umieszczany na stosie i wykonywany.
    Po zakończeniu tego procesu stos wywołań funkcji oraz kolejka callbacków są puste.
 */

