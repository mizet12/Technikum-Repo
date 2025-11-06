/*  NODE.JS STREAMS
    Asynchroniczny odczyt strumienia.
    Podejście ES6.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

const fs = require('fs');
const path = require('path');

// Pełna ścieżka dostępu do pliku:
const filePath = __dirname + '/files/dane1.txt';

// Definicja funkcji asynchronicznej do odczytu strumienia "kawałkami":
async function readChunks(readableStream) {
    // Użycie iteratora asynchronicznego:
    for await (const chunk of readableStream) {
        console.log("Porcja danych: ", chunk);
    }
}
/* UWAGA
     Iterator stanowi obiekt, który zapewnia sekwencyjny dostęp do elementów (porcji) strumienia
     - jedna po drugiej.
     Iterator (jak obiekt) jest wyposażony w metodę next(), która zwraca następny kawałek strumienia.
     Wywołanie metody next() powoduje ponadto przesunięcie wskaźnika bieżącej pozycji w strumieniu.
 */
/* UWAGA
    Użycie iteratora asynchronicznego oznacza, że bieżące zadanie (current task)
    może zostać wstrzymane przed pobraniem porcji danych (chunk).
 */

// Utworzenie strumienia do odczytu danych:
const rStream = fs.createReadStream(filePath, 'utf8');

// Odczyt strumienia:
readChunks(rStream);