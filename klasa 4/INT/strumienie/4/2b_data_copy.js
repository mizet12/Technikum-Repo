/*  NODE.JS STREAMS
    Przepisanie danych z pliku do pliku.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

const fs = require('fs');
const path = require('path');

// Pełne ścieżki dostępu do plików:
const fileName1 = __dirname + '/files/dane2a.txt';
const fileName2 = __dirname + '/files/dane2b.txt';

// Definicje strumieni: "do odczytu" i "do zapisu":
const rStream = fs.createReadStream(fileName1);
const wStream = fs.createWriteStream(fileName2);

rStream.setEncoding('utf8');

// Rejestracja funkcji obsługi zdarzenia 'data':
rStream.on('data', (chunk) => {
    // Zapis danych do systemu docelowego - pliku fileName2:
    wStream.write(chunk);
    /* UWAGA
        Po odczycie porcji danych ze strumienia wejściowego rStream,
        jest ona zapisywana so strumienia docelowego wStream.

        Jeśli zapis porcji danych zostaje zakończony sukcesem, funkcja write() zwraca true.
        W przeciwnym przypadku (czyli w przypadku błędu) - false.
        Możliwość zapisu kolejnej porcji danych do strumienia jest sygnalizowane
        poprzez zgłoszenie zdarzenia 'drain' - niejawnie.
     */
});
