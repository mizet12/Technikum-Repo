/*  NODE.JS STREAMS
    Odczyt strumienia w trybie wstrzymania (paused mode).

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/


const fs = require('fs');
const path = require('path');

// Pełna ścieżka dostępu do pliku:
const filePath = __dirname + '/files/dane1.txt';

let data = ''; // dane
let chunk; // porcja danych

// Utworzenie strumienia do odczytu:
const rStream = fs.createReadStream(filePath);

// Rejestracja funkcji obsługi zdarzenia 'readable':
rStream.on('readable', () => {
    /* UWAGA
        Zdarzenie 'readable' jest zgłaszane (emitowane) jeśli istnieje MOŻLIWOŚĆ
        odczytu porcji danych ze strumienia.
     */
    while ((chunk = rStream.read()) != null) { // jeśli pozostały jakieś dane do odczytu
        data += chunk;
    }
    /* UWAGA
        Funkcja read() odczytuje porcję danych z wewnętrznego bufora i zwraca ją do otoczenia.
        W przypadku, jeśli nie pozostało już nic do odczytu, wówczas read() zwraca wartość null.
     */
});
/* UWAGA
    W trybie wstrzymania odczyt porcji danych realizuje się za pomocą metody read(),
    która jest wywoływana w sposób jawny.
    Metoda read() może być wywoływana wielkokrotnie jako instrukcja składowa pętli,
    każdorazowo po odczycie porcji danych - jeśli pozostały jeszcze jakieś dane do odczytu.
 */
/* UWAGA
    W trybie płynnym metoda read() jest wywoływana "po cichu" (w sposób niejawny).
 */

// Rejestracja funkcji obsługi zdarzenia 'end':
rStream.on('end', () => {
    console.log(data)
});
/* UWAGA
    Zdarzenie 'end' jest zgłaszane, jeśli nie ma już żadnych danych do "skonsumowania" ze strumienia.
    Wówczas dane są przesyłane do konsoli.
 */
