/* NODE.JS
   Serwer HTTP - WPROWADZENIE.

   Metoda http.createServer().
   Metody: res.writeHead(), res.write(), res.end().
   Metoda server.listen().

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

// Import (dołączenie) modułu wbudowanego (built-in module) http:
const http = require('http');

const PORT = 8081; // w razie potrzeby należy zmienić


// Utworzenie serwera HTTP:
http.createServer(
    (req, res) => { // funkcja obsługi żądania i odpowiedzi HTTP
                    // req - request (żądanie), res - response (odpowiedź)
        // Wysłanie zdefiniowanego nagłówka odpowiedzi (response header) do żądania (request):
        res.writeHead(200, {'Content-Type': 'text/html'});

        // Wysłanie pierwszej porcji zawartości odpowiedzi (ciała) do klienta:
        res.write('<html lang="pl">');
        /* UWAGA
            Przy pierwszym wywołaniu metody res.write() do klienta wysyłane są zbuforowane informacje
            nagłówka (buffered header information) oraz pierwsza porcja (chunk) ciała odpowiedzi.
         */

        // Wysłanie kolejnych porcji ciała odpowiedzi do klienta:
        res.write('<head>');
        res.write('<meta charset="UTF-8">');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1 style="color: red;">Odpowiedź serwera na żądanie ...</h1>');
        res.write('</body>');
        res.write('</html>');
        /* UWAGA
            Przy drugim wywołaniu res.write() do klienta wysyłana jest (oddzielnie) druga porcja danych.
            Drugie wywołanie res.write() powoduje, że Node.js wysyła dane strumieniowo i druga porcja strumienia
            jest buforowana do pierwszej (czyli wcześniej) wysłanej porcji.
            Porcja danych jest albo łańcuchem znaków (string), albo buforem (buffer).
            Kolejne wywołania metody res.write() wywołują analogiczny skutek jak drugie wywołanie.
         */

        // Przesłanie odpowiedzi do klienta:
        res.end('Nagłówek odpowiedzi (i sama odpowiedź) zostały w całości przesłane do klienta ...');
        /* UWAGA
            Wywołanie metody end() oznacza zakończenie odpowiedzi serwera, które (jak tutaj) może być
            połączone z wyświetleniem komunikatu w przeglądarce.
         */
}).listen(PORT);
/* UWAGA
    Wywołanie metody listen(PORT) oznacza, że zdefiniowany server HTTP nasłuchuje
    (oczekuje na żądania) na zadanym porcie.
 */

// Wyświetlenie informacji w konsoli:
console.log('Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie', PORT);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);