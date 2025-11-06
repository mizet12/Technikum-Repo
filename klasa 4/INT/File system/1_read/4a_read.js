/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda readFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

// Dołączenie zasobów pakietów wbudowanych http i fs:
const http = require('http');
const fs = require('fs');

const fileName = __dirname + '/pages/main.html';
const PORT = 8083;

// Utworzenie serwera NODE nasłuchującego na zadanym porcie:
http.createServer((req, res) => {
    // Odczyt zawartości pliku main.html w sposób asynchroniczny:
    fs.readFile(fileName, 'utf8',
        (err, data) => { // funkcja typu callback
            if (err) {
                throw err;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            /* UWAGA
                W nagłówku odpowiedzi określono, że do klienta będzie przesyłany kod HTML.
             */

            res.write(data);
            return res.end();
        });
}).listen(PORT);

console.log(`Serwer HTTP nasłuchuje na porcie: ${PORT}`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);