/* NODE.JS - zastosowanie interfejsu (modułu) url.
   WHATWG API.

   © Piotr Siewniak, wersja: 28.VI.2022 r.
*/

// Dołączenie zasobów publicznych zewnętrznych modułów:
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

const PORT = 8081; // w razie potrzeby należy zmienić

// Utworzenie serwera webowego:
const server = http.createServer((req, res) => {
    // Określenie względnego adresu URL pliku:
    const relativeUrlString = __dirname + '/html/info.html';
    // Określenie bazowego adresu URL:
    const baseUrlString = `http://localhost:${PORT}`;

    // Utworzenie obiektu URL za pośrednictwem konstruktora:
    const urlObject = new URL(relativeUrlString, baseUrlString);
    // Wyświetlenie informacji pomocniczej:
    console.log("urlObject.pathname:", urlObject.pathname);

    // Określenie nazwy przesyłanego pliku:
    let fileName = urlObject.pathname; // ścieżka dostępu w przetwarzanym adresie URL
    console.log("fileName:", fileName);

    // Odczyt zawartości pliku
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("Uwaga! Nie znaleziono takiego pliku!");
        }
        // Ustalenie nagłówka odpowiedzi (response header):
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Wysłanie (pierwszej) porcji zawartości odpowiedzi (response body) do klienta:
        res.write(data);
        // Zakończenie odpowiedzi serwera:
        return res.end();
    });
})

// Uruchomienie serwera HTTP:
server.listen(PORT, () => {
    // Wyświetlenie informacji pomocniczych:
    console.log(`Serwer HTTP pracuje i nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/html/info.html`)
});

