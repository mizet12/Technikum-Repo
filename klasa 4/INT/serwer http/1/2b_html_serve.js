/* NODE.JS - serwer HTTP.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/


// Dołączenie modułu wbudowanego http:
const http = require('http');

const PORT = 8082;

// Definicja funkcji, która będzie pełniła rolę argumentu metody createServer():
const requestListener = (req, res) => {
    // Wysłanie do przeglądarki nagłówka odpowiedzi:
    // res.writeHead(200, {'Content-Type': 'text/html'});

    // Zapisanie porcji (lub całości) odpowiedzi HTTP do klienta:
    res.write(
        '<html lang="pl">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '</head>' +
        '<body>' +
        '<h1 style="color: red;"> Odpowiedź serwera na żądanie HTTP </h1>' +
        '</body>' +
        '</html>'
    );
    // Zakończdenie odpowiedzi:
    res.end();
};

// Utworzenie serwera webowego:
const server = http.createServer(requestListener);
/* UWAGA
    Argumentem metody http.createServer() jest funkcja zwrotna requestListener().
 */

// Uruchomienie serwera:
server.listen(PORT, 'localhost', () => {
    console.log('Serwer webowy pracuje na porcie', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});

