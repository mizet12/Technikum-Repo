
/* NODE.JS - serwer HTTP.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

// Dołączenie modułu wbudowanego http:
const http = require('http');

const PORT = 8081; // w razie potrzeby należy zmienić

// Utworzenie serwera webowego NODE.JS:
const server = http.createServer((req, res) => {
    console.log("Komunikat testowy w konsoli ...");

    // Wypisanie w konsoli części adresu URL - po nazwie domeny:
    console.log("Adres URL: ", req.url);
    // Wypisanie w konsoli metody żądania HTTP:
    console.log("Metoda HTTP: ", req.method);
    /* UWAGA
        Parametr req, który repezentuje obiekt żądania (typu IncomingMessage) posiada różne właściwości,
        np. url, method itd.
     */

    // Wypisanie w konsoli kodu statusu odpowiedzi (HTTP response status code):
    console.log("Kod statusu odpowiedzi: ", res.statusCode);
    /* UWAGA
        Informacje w konsoli pojawią się po uruchomieniu serwera webowego NODE.JS - jako fragmenty jego
        odpowiedzi na żądanie GET, czyli po wpisaniu w pasku adresu przegladarki http://localhost:PORT.
     */

    // Wysłanie porcji zawartości (ciała) odpowiedzi do klienta:
    res.write(
        // Ciało odpowiedzi HTTP w postaci łańcucha znaków:
        "Komunikat testowy odpowiedzi HTTP ...".toUpperCase(),
        // System kodowania znaków:
        'utf8',
        // Funkcja zwrotna (funkcja obsługi):
        () => {
            console.log("Zapisywanie treści odpowiedzi do klienta ...")
        }
    );
    // Zakończenie odpowiedzi serwera bez wysyłania żadnych informacji:
    res.end();
});

// Uruchomienie serwera webowego:
server.listen(PORT, 'localhost', () => {
    console.log('Serwer webowy pracuje na porcie', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});
/* UWAGA
    Zadaniem metody listen() jest utworzenie "listenera" na zadanym porcie lub ścieżce.
    Tutaj:
    Metoda listen() posiada trzy argumenty:
    1) serwer nasłuchuje na porcie PORT;
    2) na hoście lokalnym localhost;
    3) callback stanowi funkcję strzałkową, która zostanie wywołana i wykonana
       po utworzeniu (aktywacji) listenera.
 */

/* ĆWICZENIE
    Odpowiedzieć na pytanie:
    - dlaczego informacje w konsoli są wyświetlane dwukrotnie?
 */

/* UWAGA
     Favicon.ico to mała ikona (kwadrat) wyświetlana przed adresem w polu adresowym przeglądarki,
     na karcie strony www oraz w zakładce ulubionych oraz w wynikach wyszukiwania.
     Stanowi ona element graficzny identyfikujący daną stronę WWW.
     Potocznie ikona ta nazywana jest "fawikonką".
 */