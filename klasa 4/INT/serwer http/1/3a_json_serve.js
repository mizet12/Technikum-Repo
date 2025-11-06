/* NODE.JS - serwer HTTP.
    Odpowiedź HTTP w formacie JSON.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

// Dołączenie zasobów publicznych modułu wbudowanego http:
const http = require('http');

const PORT = 8083;

// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {

    // Wysłanie do przeglądarki nagłówka odpowiedzi:
    res.writeHead(200, {'Content-Type': 'application/json'});
    /* UWAGA
       Argument {'Content-Type': 'application/json'} oznacza, że odpowiedź HTTP do klienta
       jest w formacie JSON.
     */

    // Utworzenie obiektu date reprezentującego datę:
    const date = new Date();
    // Utworzenie obiektu reprezentującego bieżącą datę:
    const currentDate = {
        dzien: date.getDate(), // dzień
        miesiac: date.getMonth() + 1, // miesiąc
        rok: date.getFullYear() // rok
    }

    // Określenie i zapisanie odpowiedzi HTTP serwera do przeglądarki:
    res.write(
        JSON.stringify(currentDate) // konwersję obiektu JS na łańcuch znaków
    );

    // Zakończenie procesu przesyłania odpowiedzi do klienta:
    res.end();
});

// Uruchomienie serwera:
server.listen(PORT, 'localhost', () => {
    console.log('Serwer webowy pracuje na porcie', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});
