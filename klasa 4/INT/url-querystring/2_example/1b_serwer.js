/* NODE.JS - zastosowanie modułu url.
    Legacy API.

   © Piotr Siewniak, wersja: 28.VI.2022 r.
*/

// Dołączenie zasobów publicznych zewnętrznych modułów:
const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 8080; // w razie potrzeby należy zmienić

// Utworzenie serwera webowego:
const server = http.createServer((req, res) => {
    // Parsowanie treści żądania HTTP GET:
    let urlObject = url.parse(req.url, true);
    // Wyświetlenie informacji pomocniczej:
    console.log("urlObject.pathname:", urlObject.pathname);
    /* UWAGA
        Ustawienie drugiego argumentu metody url.parse() na true powoduje, że właściwość query
        obiektu urlObject stanowi przeanalizowany, zdekodowany obiekt.
        Obiekt ten odpowiada wynikowi wywołania metody parse() z modułu querystring.
     */

    // Określenie nazwy przesyłanego pliku:
    let fileName =
        __dirname // bezwzględna ścieżka dostępu do katalogu, w którym jest zapisany program serwer.js
        + urlObject.pathname; // ścieżka dostępu w przetwarzanym adresie URL
    /* UWAGA
       Nazwę pliku można określić również używając ścieżki względnej:
       let fileName = '.' + ${urlObject.pathname};
       Jak widać powyżej, ścieżka dostępu do pliku została poprzedzona kropką (.) co oznacza,
       że plik ten podczas odczytu będzie poszukiwany w katalogu bieżącym (tym samym,
       który zawiera aplikację serwer.js).
     */
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

