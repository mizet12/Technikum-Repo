/*  NODE EXPRESS - ROUTING
    Wprowadzenie. Metoda app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
    W aplikacji obsługiwane jest żądanie HTTP GET na ścieżce /introduction.
    Inne żądania (np. HTTP POST), jak również inne ścieżki żądań, nie są tutaj obsługiwane.

    Routing został tutaj zaimplementowany za pomocą metody app.get().
 */


/* UWAGA
    Przed uruchomieniem aplikacji należy najpierw zainstalować framework express.
    Można to zrobić globalnie (npm install -g express) lub lokalnie - w folderze aplikacji.
 */

// Dołączenie zasobów publicznych modułu 'express':
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();
const PORT = 8083; // w razie potrzeby należy zmienić

/* UWAGA
    W ogólności, "ruting" (routing) definiuje sposób, w jaki aplikacja odpowiada na żądanie HTTP klienta
    skojarzone z określonym punktem końcowym (endpoint).
    Punkt końcowy jest określany za pomocą adresu URL (lub ścieżki) wraz z metodą żądania HTTP (np. GET, POST itd.).
    Dany punkt końcowy (route) może mieć przypisaną jedną lub więcej funkcji obsługi (route handler).

    W języku polskim routing jest nazywany "rutingiem", "routingiem" lub "trasowaniem".
    Router'y są nazywane odpowiednio: "ruterami", "routerami" lub "trasownikami".
    Z kolei route'y są nazywane "rutami", trasami lub ścieżkami.


    Implementację routingu w aplikacji Node Express można realizować przy wykorzystaniu zasobów:
    a) obiektu aplikacji app,
    b) jak również obiektu router.

    Utworzenie obiektu aplikacji: const app = express();
    Utworzenie obiektu routera: const router = express.Router();

    Odpowiednie metody obiektu app reprezentują poszczególne metody HTTP,
    np. app.get() - obsługa żądań GET, app.post() - obsługa żądań POST itd.
 */

// Rejestracja funkcji obsługi i obsługa żądania GET na ścieżce /introduction:
app.get(
    '/introduction', // ścieżka/trasa (route) żądania HTTP
    (req, res) => { // funkcja obsługi żądania (request handler)
        /* UWAGA
            Parametry (argumenty) 'req' i 'res' funkcji zwrotnej (callback) stanowią (odpowiednio) obiekty:
            1) żądania (request);
            2) odpowiedzi (response).
            Obiekt 'req' reprezentuje żądanie HTTP. Obiekt ten posiada różne właściwości i metody
            pozwalające na obsługę żądań HTTP.
            Z kolei obiekt 'res' reprezentuje odpowiedź HTTP wysyłaną przez aplikację (serwer Express),
            jako reakcję na otrzymane żądanie.

            Jeśli po uruchomieniu aplikacji w pasku adresu przeglądarki zostanie wpisany łańcuch:
                http://localhost:8083/introduction
            to jest to równoznaczne z otrzymaniem przez serwer aplikacji (serwer Express)
            żądania GET na ścieżce '/introduction'.
            Następnie zostanie wykonana funkcja zwrotna, stanowiąca funkcję obsługi tego żądania.
            Na stronę zostanie przesłana odpowiedź w postaci komunikatu tekstowego.
         */

        /* UWAGA
            Formalnie funkcja obsługi żądania stanowi funkcję pośrednią/pośredniczącą (middleware function).
            W ogólności, żądanie może być obsługiwane przez wiele funkcji pośrednich -
            - nie tylko jedną (jak tutaj).
         */

        /* UWAGA
            Do rejestracji funkcji obsługi żądania na zadanej ścieżce można również wykorzystać metodę app.use().
            Metoda app.use() będzie omawiana później.
         */

        // Komunikat pomocniczy:
        console.log("Odpowiedź serwera aplikacji do klienta została wysłana");

        // Wysłanie odpowiedzi HTTP (HTTP response) do klienta:
        res.send("<h1 style='color: blue;'>Komunikat kontrolny jako odpowiedź HTTP</h1>");
        /* UWAGA
            Metoda res.send() pozwala na wysłanie odpowiedzi HTTP do klienta (przeglądarki).
            Argumentem tej metody może być łańcuch znaków (String), tablica (array),
            obiekt (object), albo Buffer.

            Tutaj treść odpowiedzi stanowi literał łańcuchowy reprezentujący kod HTML.
         */
        /* UWAGA
           Metoda res.send() implementuje trzy metody:
           1) res.setHeaders() - sprawdza strukturę odpowiedzi (wyjścia) i ustawia automatycznie
              odpowiedni nagłówek odpowiedzi (response header);
           2) res.write() - przesyła dane (w sposób strumieniowy) do klienta;
           3) res.end() - kończy proces odpowiedzi.
         */
    }
);
/* UWAGA
    Metoda get() obsługuje metodę HTTP GET (żądanie GET).

    Metoda get() ma dwa argumenty:
    1) pierwszym argumentem jest ścieżka - route (inaczej trasa) - punkt końcowy,
       z którym jest skojarzona funkcja obsługi żądania;
    2) drugim argumentem jest funkcja zwrotna (callback), stanowiąca wspomnianą funkcję obsługi.

    Tutaj punkt końcowy jest określony jako '/introduction'. Ścieżka ta określa routa,
    na którym żądanie zostanie uruchomione.

    Funkcja obsługi (czyli funkcja callback) jest wywoływana, jeśli aplikacja otrzyma żądanie HTTP
    do określonego punktu końcowego (czyli routa).

 */

// Uruchomienie serwera aplikacji:
app.listen(PORT);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/intruduction`);
/* UWAGA
    Metoda app.listen() jest identyczna z metodą server.listen() znaną z Node.js.
    Pozwala ona na powiązanie (bind) i nasłuchiwanie (listen) połączeń na zadanym hoście i porcie.

    Aplikacja (serwer aplikacji) nasłuchuje żądań HTTP (np. GET, POST) na zdefiniowanej wcześniej ścieżce.
    Jeśli ścieżka żądania w pasku adresu przeglądarki pasuje do ścieżki określonej w wywołaniu metody app.get(),
    wówczas wywoływana jest funkcja zwrotna (callback), jako funkcja obsługi tego żądania.
 */

/* UWAGI KOŃCOWE
    OMÓWIENIE FUNKCJI POŚREDNICH (MIDDLEWARE FUNCTIONS) JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> ROUTING -> MIDDLEWARE
    OMÓWIENIE ŻĄDANIA HTTP GET JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> GET_REQUEST
 */