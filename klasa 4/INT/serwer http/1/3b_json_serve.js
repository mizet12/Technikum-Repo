/* NODE.JS - PODSTAWY.
   Serwer HTTP.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

// Dołączenie modułu wbudowanego http:
const http = require('http');

const PORT = 8084;

// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {

    // Wysłanie do przeglądarki nagłówka odpowiedzi:
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Definicja obiektu JS o nazwie person (notacja literałowa):
    const person = {
        imie: "Piotr",
        nazwisko: "Siewniak",
        wiek: 50,
        plec: 'M'
    }
    /* UWAGA
        Notacja literałowa reprezentuje format JSON.
     */
    // Określenie odpowiedzi serwera do przeglądarki (klienta):
    res.write(JSON.stringify(person));
    /* UWAGA
        Metoda stringify() pozwala na konwersję obiektu JS w postaci literału (JSON) na łańcuch znaków.
     */
    // Przesłanie informacji do klienta:
    res.end();
});

// Uruchomienie serwera webowego (HTTP):
server.listen(PORT, () => {
    console.log('Serwer HTTP pracuje i oczekuje żądania na porcie', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});
