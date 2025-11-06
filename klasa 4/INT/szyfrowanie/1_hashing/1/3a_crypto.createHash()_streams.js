/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metoda createHash(). Wykorzystanie strumieni.

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Określenie danej wejściowej do zakodowania (haszowania):
const inputData = __filename; // nazwa tego pliku ze ścieżką
console.log("Dana wejściowa: ", inputData);

// Utworzenie obiektu Hash:
const hash = crypto.createHash('sha256'); // algorytm kodowania: sha256

// Utworzenie strumienia odczytywalnego (readable stream):
const readableStream = fs.createReadStream(inputData);

// Rejestracja funkcji obsługi (listenera) i obsługa zdarzenia readable:
readableStream.on(
    'readable', // nazwa zdarzenia
    /* UWAGA
        Zdarzenie 'readable' jest emitowane, jeśli dane są dostępne do odczytu.
        Dodanie listenera powoduje, że dane są odczytywane do wewnetrznego bufora.
     */

    () => { // funkcja obsługi (listener) zdarzenia 'readable'
        // Odczyt danych (pojedynczego elementu) ze strumienia wejściowego:
        const data = readableStream.read();
        if (data) { // jeśli kolejne dane są dostępne do odczytu
            // Aktualizacja danej:
            hash.update(data);
        }
        else {
            // Wyznaczenie skrótu (wyniku) haszowania:
            let result = hash.digest('hex'); // typ kodowania: 'hex'
            console.log("Dana wejściowa po haszowaniu: ", result);
        }
    }
);


