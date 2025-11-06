/* NODE.JS - HTTP Server.
   Serwowanie plików HTML. Wykorzystanie CALLBACKÓW (wersja I).

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8081; // w razie potrzeby należy zmienić
const fileName = __dirname + '/html/webpage.html'; // pełna ścieżka dostępu do pliku HTML
const requestListener = (req, res) => {
    fs.readFile(
        fileName, // nazwa pliku ze ścieżką
        (err, data) => { // funkcja zwrotna
            if (err) {
                res.writeHead(500);
                res.end("Uwaga!", err.message);
                return; // funkcja zwrotna kończy działanie i zwraca undefined
            }
            res.statusCode = 200; // pomyślna odpowiedź
            res.setHeader('Content-Type', 'text/html'); // zawartość odpowiedzi - HTML
            res.end(data);
        });
}
http.createServer(requestListener)  // argumentem wywołania metody createServer() jest zdefiniowana funkcja
    .listen(PORT, () => {
        console.log('Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie', PORT);
        console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
    });


