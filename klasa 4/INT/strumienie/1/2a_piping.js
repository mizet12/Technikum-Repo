/*  NODE.JS STREAMS
    "Piping" - odczyt danych z jednego strumienia i zapis do drugiego.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/


/* UWAGA
    "Piping" to mechanizm, który polega na odczytaniu danych ze źródła (source)
    i zapisanie ich w miejscu docelowym (destination). Ważne jest, że proces pipingu
    odbywa się bez żadnego sterowania przepływem (flow control).
 */

// Dołączenie zasobów modułu wbudowanego fs:
const fs = require('fs');
const path = require('path');

// Pełne ścieżki dostępu do plików:
const filePath1 = __dirname + '/files/dane1.txt';
const filePath2 = __dirname + '/files/dane2.txt';

// Utworzenie strumienia "do odczytu" (readable stream):
const rStream = fs.createReadStream(filePath1);
/* UWAGA
    Dane będą odczytywane z pliku fileName1.
 */

// Utworzenie strumienia "do zapisu" (writeable):
const wStream = fs.createWriteStream(filePath2); // zmienić np. na '' - wystąpi błąd
/* UWAGA
    Dane będą zapisywane do pliku fileName2.
 */

// Odczyt danych z pliku dane1.txt i zapis tych danych do pliku dane2.txt:
rStream.pipe(wStream);
/* UWAGA
    Wywołanie metody pipe() powoduje pobranie danych ze żródła danych (data source)
    - strumienia rStream (do odczytu) i przekazanie ich jako dane wejściowe do miejsca
    docelowego (destination) - do strumienia wStream (do zapisu).
    Metoda pipe() zwraca strumień docelowy.

    Wykorzystanie metody pipe() stanowi najprostszy sposób obsługi odczytu danych
    z jednego strumienia (źródłowego) i ich zapisu do innego strumienia (docelowego).
    Drugim sposobem obsługi takich operacji jest wykorzystanie zdarzeń - jak w poprzednich
    przykładach.
 */

// Rejestracja funkcji obsługi zdarzenia (błędu) 'error' skojarzonego ze strumieniem rStream:
rStream.on('error', (err) => {
    console.log("Uwaga błąd! ", err.message);
});
// Rejestracja funkcji obsługi zdarzenia (błędu) 'error' skojarzonego ze strumieniem wStream:
wStream.on('error', (err) => {
    console.log("Uwaga błąd! ", err.message);
});
/* UWAGA
    Powyżej uwzględniona została możliwość wystąpienia błędu dla obu strumieni: rStream oraz wStream.
 */


