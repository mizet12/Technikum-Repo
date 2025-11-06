/* NODE.JS - serwer HTTP.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

// Dołączenie modułu wbudowanego http:
const http = require('http');
// Dołączenie modułu wbudowanego url:
const url = require('url');

const PORT = 8086;

// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {
    // Wyświetlenie informacji pomocniczej:
    console.log("req.url = ", req.url);

    // Konwersja adresu URL żądania na obiekt JS:
    const parsedUrl = url.parse(req.url, true);
    /* UWAGA
        Metoda url.parse() analizuje ciąg URL i zwraca obiekt URL, który zawiera pary klucz-wartość.
        Każda właściwość tego obiektu odpowiada określonej części składowej adresu URL.
        Argument true oznacza, że metoda powinna analizować ciąg zapytania.
     */

    // Wyświetlenie właściwości obiektu parsedUrl:
    console.log("pathname: ", parsedUrl.pathname);
    console.log("path: ", parsedUrl.path);
    console.log("search: ", parsedUrl.search);

    // Konwersja obiektu parsedUrl na obiekt ciągu zapytania (query string object):
    const queryData = parsedUrl.query;
    /* UWAGA
       Właściwość query obiektu url zwraca obiekt, w którym właściwości odpowiadają  parametrom ciągu zapytania.
    */
    console.log("Obiekt queryData: ", queryData);

    const message = queryData.marka + " " + queryData.model;

    // Wysłanie do przeglądarki nagłówka odpowiedzi:
    res.writeHead(200, {'Content-Type': 'text/plain'});
    /* UWAGA
        Argument {'Content-Type': 'text/plain'} oznacza odpowiedź w postaci zwykłego tekstu.
     */

    // Zapisanie odpowiedzi serwera do przeglądarki (klienta):
    res.write(message);
    // Przesłanie informacji do klienta:
    res.end(message);
});
// Uruchomienie serwera:
server.listen(PORT, () => {
    console.log('Serwer HTTP nasłuchuje na porcie', PORT);
    console.log(`Wpisz w pasku adresu: http://localhost:${PORT}/?marka=VW&model=Golf`);
});



