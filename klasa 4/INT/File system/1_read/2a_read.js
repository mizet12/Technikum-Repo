/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda asynchroniczna readFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

// Dołączenie zasobów modułu fs:
const fs = require('fs');
const http = require('http');
const fileName = 'data.json';
const rootPath = __dirname + '/files/' + fileName;
const PORT = 8080;

http.createServer((req, res) => { 
    fs.readFile(
        rootPath, // ścieżka dostępu do pliku
        'utf8', // system kodowania znakków
        (err, data) => { // funkcja zwrotna (callback)
            if (err) {
                console.log("err.message: ", err.message);
                return
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            return res.end();
        });
})
    .listen(PORT);

// Wyświetlenie komunikatu pomocniczego w konsoli:
console.log(`Serwer HTTP nasłuchuje na porcie: ${PORT}`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
/* UWAGA
    Instrukcje zawarte w ostatnich liniach programu są synchroniczne.
    Dlatego też zostamą wykonane przed operacjami asynchronicznymi, czyli przed odczytem zawartości pliku.
 */

