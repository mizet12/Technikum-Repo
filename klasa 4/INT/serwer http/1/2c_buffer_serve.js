/* NODE.JS - serwer HTTP.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

// Dołączenie modułu wbudowanego http:
const http = require('http');

const PORT = 8085; // w razie potrzeby należy zmienić

// Utworzenie serwera webowego NODE:
const server = http.createServer((req, res) => {
    // Utworzenie bufora o rozmiarze 16 bajtów (oktetów):
    const buffer = Buffer.alloc(20);
    // Zmienna pomocnicza (łańcuch znaków):
    const stringData = "Node.js Web Server";
    // Zapis danych do obiektu buffer:
    buffer.write(
        stringData, // zapisywany łańcuch znaków
        0, // pozycja początkowa (0 - domyślnie)
        stringData.length, // liczba zapisywanych bajtów
        'utf8' // system kodowania znaków
    );

    // Wysłanie porcji zawartości (ciała) odpowiedzi do klienta:
    res.write(
        // Ciało odpowiedzi HTTP w postaci bufora:
       buffer,
        // System kodowania znaków:
        'utf8',
        () => {
            console.log("Zawartość bufora (jako string): ", buffer.toString());
        }
    );
    // Zakończenie odpowiedzi serwera:
    res.end();
});

// Uruchomienie serwera webowego:
server.listen(PORT, 'localhost', () => {
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});

