/* NODE.JS
   Serwer HTTP - WPROWADZENIE.

   Metoda http.createServer().
   Metody: res.writeHead(), res.write(), res.end().
   Metoda server.listen().

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/


const http = require('http');

const PORT = 8080; // w razie potrzeby należy zmienić


// Utworzenie obiektu serwera HTTP:
const server = http.createServer(
    (req, res) => { // funkcja zwrotna (funkcja obsługi żądania i odpowiedzi)
        // Ustelenie kodu statusu odpowiedzi (response status code)
        res.statusCode = 200; // pomyślna odpowiedź
        // Ustalenie nagłówka odpowiedzi:
        res.setHeader('Content-Type', 'text/html');

        // Zmienna pomocnicza:
        const temp =    '<html lang="pl">' +
                        '<head>' +
                        '<meta charset="UTF-8">' +
                        '</head>' +
                        '<body>' +
                        '<h1 style="font-family: Consolas; color: blue;">Odpowiedź serwera na żądanie</h1>' +
                        '</p>' +
                        '</body>' +
                        '</html>'

        // Przesłanie odpowiedzi do klienta i zakończenie połączenia:
        res.end(temp);
    }
);

// Uruchomienie serwera Node:
server.listen(PORT, () => {
    // Wyświetlenie informacji w konsoli:
    console.log('Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});
/* UWAGA
    Wywołanie metody listen() powoduje uruchomienie serwera webowego Node.
    Server pracuje i nasłuchuje (oczekuje na żądania) na zadanym porcie.

    Funkcja zwrotna stanowiąca argument metody server.listen() zostaje wykonana,
    jeśli serwer jest gotowy do pracy.
 */

