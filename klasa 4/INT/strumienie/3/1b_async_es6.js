/*  NODE.JS STREAMS
    Asynchroniczny odczyt strumienia.
    Podejście ES6.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

/* UWAGA
     Iterator (ES6) stanowi obiekt, który zapewnia sekwencyjny dostęp do elementów (porcji) strumienia
     - jedna po drugiej.
     Iterator (jak obiekt) jest wyposażony w metodę next(), która zwraca następny kawałek strumienia.
     Wywołanie metody next() powoduje ponadto przesunięcie wskaźnika bieżącej pozycji w strumieniu.
 */
/* UWAGA
    Użycie iteratora asynchronicznego oznacza, że bieżące zadanie (current task)
    może zostać wstrzymane przed pobraniem porcji danych (chunk).
 */

// Wykorzystanie konstruktora strumienia "do odczytu" z modułu 'stream':
const {Readable} = require('stream');

// Definicja funkcji - generatora:
async function * generator() {
    yield '1';
    yield '2';
    yield '3';
    /* UWAGA
        Polecenie yield powoduje wstrzymanie wykonywania funkcji generatora.
        Następnie zwracany jest element danej kolekcji (tutaj: strumienia).
        Działanie generatora jest wznawiane w chwili wywołania metody next() iteratora
        utworzonego za pomocą tego generatora.
     */
}
/* UWAGA
    Generator stanowi funkcję specjalną, która zwraca iterator danej "iterowalnej"
    struktury danych, np. strumienia.
*/
/* UWAGA
    Zadaniem generatora jest utworzenie iteratora strumienia (jako kolekcji danych),
    czyli obiektu reprezentującego dany kawałek (porcję) strumienia.

    Generator to funkcja specjalna zwracająca iterator. W ES6 definicja generatora
    jest oznaczana za pomocą symbolu * po słowie kluczowym function (function* ).
 */

// Utworzenie strumienia do odczytu na podstawie iteratora:
const rStream = Readable.from(generator());
/* UWAGA
    Metoda Readable.from() pozwala na utworzenie strumienia "do odczytu" na podstawie iteratora,
    w którym przechowywane są dane poszczególnych iteracji.
    Iterator został utworzony za pomocą generatora generator().
 */

// Rejestracja funkcji obsługi zdarzenia 'data' skojarzonego ze strumieniem rStream:
rStream.on('data', (chunk) => {
    console.log(chunk);
});
