/* NODE.JS - HTTP Server.
   Serwowanie plików HTML. Wykorzystanie PROMISÓW (wersja II).

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const PORT = 8080; // w razie potrzeby należy zmienić
const fileName = __dirname + '/html/webpage.html'; // pełna ścieżka dostępu do pliku HTML
const requestListener = (req, res) => {
    const promise = fs.readFile(fileName); // metoda fs.readFile() zwraca promisa
    promise
        .then((data) => {
            res.statusCode = 200; // pomyślna odpowiedź
            res.setHeader('Content-Type', 'text/html'); // zawartość odpowiedzi - HTML
            res.end(data);
        })
        .catch((err) => {
            res.writeHead(500);
            res.end("Uwaga!", err.message);
            return;
        })
}
const server = http.createServer(requestListener);
server.listen(PORT, () => {
    // Wyświetlenie informacji w konsoli:
    console.log('Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});


