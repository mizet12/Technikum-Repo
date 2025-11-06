/*  NODE.JS STREAMS
    Strumień do zapisu (writable stream).
    Zdarzenia strumienia zapisywalnego (Writable stream events).

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

/* UWAGA
    Strumień zapisywalny pozwala na zapis danych w miejscu docelowym,
    np. do pliku, innego strumienia itd.
    Strumień zapisywalny stanowi abstrakcję określonego miejsca docelowego,
    do którego dane mogą być zapisywane.
 */

// Dołączenie zasobów modułu wbudowanego fs:
const fs = require('fs');
const path = require('path');

// Pełna ścieżka dostępu do pliku:
const filePath = __dirname + '/files/dane2.txt';

// Zmienna pomocnicza reprezentująca dane:
let dane = 'Dane zapisywane w pliku';

// Utworzenie strumienia "do zapisu" (writeable):
const wStream = fs.createWriteStream(filePath);
/* UWAGA
    Metoda fs.createWriteStream() zwraca obiekt fs.WriteStream.
    Stanowi ona alternatywę wobiec metody fs.writeFile() w przypadku konieczności
    zapisu dużej porcji danych do pliku.
 */

// Zapis danych dane do pliku w systemie kodowania UTF8:
wStream.write(dane, 'UTF8');
/* UWAGA
    Metoda write() powoduje zapis porcji danych do strumienia.
 */

// Sygnalizacja końca danych:
wStream.end();
/* UWAGA
    Wywołanie metody end() sygnalizuje, że nie ma więcej danych do zapisu do strumienia.
 */


// Rejestracja funkcji obsługi zdarzenia 'finish':
wStream.on('finish', () => {
    console.log("Dane zostały zapisane w pliku ...");
});
/* UWAGA
    Zdarzenie 'finish' jest zgłaszane (emitowane) po wykonaniu metody end() i informuje,
    że wszystkie dane zostały wypłukane (opróżnione) ze strumienia.

    Konieczność obsługi zdarzenia 'finish' wynika z wcześniejszego wykorzystania metody end().
 */

// Rejestracja funkcji obsługi zdarzenia - błędu error:
wStream.on('error', (err) => {
    console.log("Uwaga błąd!", err.message);
});

console.log("Komunikat w ostatniej linii kodu programu ...");
