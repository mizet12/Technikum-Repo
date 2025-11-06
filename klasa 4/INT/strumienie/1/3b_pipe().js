/*  NODE.JS STREAMS
    Odczyt danych z pliku i przesłanie do klienta HTTP.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

// Pełna ścieżka dostępu do pliku:
const filePath = __dirname + '/files/dane3.txt';
const PORT = 8082;

// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {
    // Utworzenie strumienia odczytywalnego:
    const str = fs.createReadStream(filePath);

    str.on('data', (chunk) => {
    /* UWAGA
         Zdarzenie 'data' jest zgłaszane (emitowane) w przypadku, jeśli porcja danych (chunk)
        jest gotowa do odczytania. Od tej chwili można przetworzać tę porcję danych.
     */
        console.log('Porcja danych (bufor)', chunk);
        /* UWAGA
            Każdy kawałek (porcja) danych stanowi instancję klasy Buffer.
         */
        console.log('Porcja danych (łańcuch znaków)', chunk.toString());
        /* UWAGA
            Jeśli strumień str zostanie utworzony wraz z podaniem systemu kodowania znaków:
                const str = fs.createReadStream(filePath, {encoding: 'utf8'});
            wówczas niepotrzebna będzie konwersja bufora na string (jak powyżej)
         */
    })

    // Przesłanie porcji danych ze źródła (pliku) do klienta HTTP (HTTP response):
    str.pipe(res);
    /* UWAGA
        Strumień 'str' stanowi źródło danych, a 'res' to strumień docelowy.
     */
})
server.listen(PORT);
console.log("Serwer nasłuchuje na porcie", PORT);

/* UWAGA
    W aplikacji powyżej, jeśli tylko jest do dyspozycji gotowa porcja danych,
    jest ona przesyłana w sposób "strumieniowy" do klienta HTTP - nie ma oczekiwania,
    aż plik zostanie w całości odczytany (jak przy użyciu metody readFile()).
 */