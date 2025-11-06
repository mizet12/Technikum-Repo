/*  NODE.JS STREAMS
    Odczyt całej zawartości pliku - metoda readFile().

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/
const http = require('http');
const fs = require('fs');
const path = require('path');

// Pełna ścieżka dostępu do pliku:
const filePath = __dirname + '/files/dane3.txt';
const PORT = 8080;

// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {
    // Odczyt całej zawartości pliku:
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Wyświetlenie informacji o ewentualnym błędzie:
            console.log("Uwaga błąd! ", err.message);
        }
        // Przesłanie danych do klienta (przeglądarki):
        res.end(data);
    })
    /* UWAGA
        Metoda readFile() powoduje odczytanie całej zawartości pliku o nazwie filePath.
        Dopiero po zakończeniu odczytu pliku i umieszczeniu jego zawartości w pamięci
        wykonywana jest funkcja zwrotna (callback) i zawartość pliku zostaje zwrócona
        do klienta HTTP (przeglądarki).

        Biorąc pod uwagę powyższe należy zwrócić uwagę, że odczyt pliku za pomocą metody
        readFile() nie jest wydajny! Funkcja zwrotna zostanie wykonana dopiero wtedy,
        gdy odczytana zostanie cała zawartość pliku!

        Problem ten można rozwiązać przy wykorzystaniu metody fs.createReadableStream(),
        czyli wykorzystaniu strumienia odczytywalnego.
    */
});

server.listen(PORT);
console.log("Serwer nasłuchuje na porcie", PORT);


