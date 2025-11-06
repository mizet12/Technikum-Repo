/*  NODE.JS STREAMS
    Implementacja strumieni do odczytu i do zapisu.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

// Dołączenie interfejsu konstruktorów Readable i Writable:
const {Readable} = require('stream');
const {Writable} = require('stream');

// Dane:
const userData = 1;

// Utworzenie strumienia "do odczytu":
const rStream = new Readable({
    read() {}
});
/* UWAGA
    Strumień "odczytywalny" przechowuje dane (informacje) w wewnętrznym buforze.
    Funkcja read() odczytuje z niego porcję danych i zwraca ją na zewnątrz.
    W przypadku, jeśli nie pozostało już nic do odczytu, wówczas read() zwraca wartość null.

    Wywołanie metody read() jest konieczne, aby wykorzystane dane usunąć z wewnętrznej kolejki bufora.
    Brak wywołania read() spowoduje z kolei, że dane będą przechowywane w kolejce dopóki nie zostaną
    "skonsumowane".
 */

// Utworzenie i implementacja strumienia "do zapisu":
const wStream = new Writable({
    write(chunk, encoding, callback) {
        console.log("Dane: ", chunk.toString());
        callback();
        /* UWAGA
            Funkcja callback() jest potrzebna, aby zasygnalizować,
            że zapis do strumienia zakończył się sukcesem, czy nie.
            Funkcja ta stanowi listener zdarzenia 'finish'.
         */
    }
});

// Przesłanie porcji danych ze źródła (rStream) do celu (wStream):
rStream.pipe(wStream);

// "Popchnięcie" danych w buforze wewnętrznym strumienia:
rStream.push(userData.toString());

// Rejestracja funkcji obsługi zdarzenia 'close':
rStream.on('close', () =>
        wStream.end()
        /* UWAGA
            Wywołanie metody end() dla strumienia zapisywalnego spowoduje,
            że do tego strumienia nie będzie już można zapisywać żadnych danych.
         */
);
wStream.on('close', () =>
    console.log('Koniec działania programu ...')
);
// Rejestracja funkcji obsługi zdarzenia 'error':
rStream.on('error', (err) =>
    console.log('Uwaga błąd!', err.message)
);
wStream.on('error', (err) =>
    console.log('Uwaga błąd!', err.message)
);

// Zniszczenie strumienia odczytywalnego:
rStream.destroy();
/* UWAGA
    Zadaniem metody destroy() jest zniszczenie strumienia rStream.
    Powoduje to wyemitowanie zdarzenia 'close'.
 */


