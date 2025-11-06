/* NODE.JS - serwer HTTP.
   Serwowanie danych CSV.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

const http = require('http');

const PORT = 8087;
const fileName = 'data.csv'; // nazwa pliku, do którego zostaną zapisane dane CSV

// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment;filename=${fileName}`);
    res.writeHead(200); // sukces

    // Zapisanie pliku .CSV z danymi:
    res.end(`id,firstname,lastname,job_position\n1,Piotr, Siewniak, nauczyciel`);
    /* UWAGA
        Plik .CSV zostanie zapisany w standardowym (ustalonym) katalogu systemowym przeznaczonym na pobrane pliki.
     */
});
// Uruchomienie serwera:
server.listen(PORT, 'localhost', () => {
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});
