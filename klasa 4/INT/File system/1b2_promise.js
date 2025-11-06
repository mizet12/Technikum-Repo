const http = require('http');
// Dołączenie zasobów modułu fs w postaci "promisowej":
const fs = require('fs').promises;
const fileName = __dirname + '/pages/main.html'; // pełna ścieżka dostępu do pliku HTML


// Definicja listenera (funkcji obsługi) żądań:
const requestListener = (req, res) => {
    // Odczyt pliku tekstowego w sposób asynchroniczny:
    const promise = fs.readFile(fileName); // metoda fs.readFile() zwraca obiekt obietnicy
    // Obsługa obietnicy:
    promise
    // Obsługa spełnionej obietnicy (stanu "resolved"):
        .then((data) => {
            res.statusCode = 200; // odpowiedź pomyślna
            res.setHeader('Content-Type', 'text/html'); // zawartość odpowiedzi - kod HTML
            res.end(data); // zakończenie odpowiedzi połączone z przesłaniem danych do klienta
        })
        // Obsługa niespełnionej obietnicy (stanu "rejected"):
        .catch((err) => {
            res.writeHead(500);
            res.end("err.message:", err.message);
            return;
        })
}
const PORT = 8090;
// Utworzenie obiektu serwera:
const server = http.createServer(requestListener);
// Uruchomienie serwera:
server.listen(PORT, () => {
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});
