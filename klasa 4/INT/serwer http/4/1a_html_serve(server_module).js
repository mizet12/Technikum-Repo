/* NODE.JS - serwer HTTP.
   WYKORZYSTANIE MODUŁU SERVER.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

/* UWAGA
   APLIKACJA WYŁĄCZNIE DO CELÓW DEMONSTRACYJNYCH!
 */

// Dołączenie modułu server:
const server = require('server');

const PORT = 8092;

// Wyodrębnienie metod get() i post() z obiektu router:
const {get, post} = server.router;
/* UWAGA
    Obiekt router ma zadanie poinformować serwer w jaki sposób ma on obsługiwać nadchodzące żądania.
    Istnieje kilka metod importu/wyodrębnienia metod get() i post().
 */
//console.log("server.router", server.router);

// Uruchomienie serwera:
server(
    {port: PORT}, // określenie na którym porcie serwer będzie nasłuchiwał żądań
    [ // tablica zawierająca funkcje obsługi określonych żądań
        get( // żądanie GET
            '/', // trasa/ścieżka (route)
            ctx => "<h1 style='color: red;'>Strona główna</h1>" // funkcja zwrotna
        ),
        get(
            '/help', // trasa/ścieżka (route)
            ctx => "<h1 style='color: green;'>Podstrona pomocy dla użytkownika</h1>"
        ),
        get(
            '/contact', // trasa/ścieżka (route)
            ctx => "<h1 style='color: blue;'>Podstrona kontaktu</h1>"
        )
        /* UWAGA
            Określona funkcja zwrotna zostanie wykonana jako odpowiedź na zadane żądanie GET.
         */
    ]
)

console.log("Serwer nasłuchuje na porcie", PORT);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/help`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/contact`);



