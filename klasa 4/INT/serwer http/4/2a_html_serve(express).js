/*  NODE - SERVER HTTP.
    WYKORZYSTANIE FRAMEWORKA EXPRESS.
    Wprowadzenie do routingu. Obsługa żądania HTTP GET.

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
   APLIKACJA WYŁĄCZNIE DO CELÓW DEMONSTRACYJNYCH!
   FRAMEWORK EXPRESS JEST OMAWIANY OSOBNO!
   ROUTING JEST OMAWIANY OSOBNO!
 */

/* UWAGA
    Przed uruchomieniem aplikacji należy najpierw zainstalować framework express.
    Można to zrobić globalnie (npm install -g express) lub lokalnie - w folderze aplikacji.
 */

// Dołączenie do aplikacji zasobów publicznych modułu 'express':
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();
const PORT = 8083;

/* UWAGA
    W ogólności, "ruting" (routing) definiuje sposób, w jaki aplikacja odpowiada na żądanie klienta
    skojarzone z zadanym punktem końcowym (endpoint). Punkt końcowy jest określany za pomocą
    adresu URL lub ścieżki wraz z metodą żądania HTTP (GET, POST itd.).
    Dany "rut" (route) może mieć przypisaną jedną lub więcej funkcji obsługi.

    W języku polskim "ruting" (routing) jest nazywany także "routingiem" lub "trasowaniem".
    "Rutery" (routery) są nazywane również "routerami" lub "trasownikami".
    Z kolei "ruty" (routes) są nazywane także trasami/ścieżkami.


    Routing można zdefiniować za pomocą obiektu aplikacji 'app':
        const app = express();
    jak również obiektu 'router':
        const router = express.Router();

    Poszczególne metody obiektu app odpowiadają metodom HTTP, np. app.get() - obsługa żądań GET,
    app.post() - obsługa żądań POST itd.
 */

// Definicja i rejestracja funkcji obsługi punktu końcowego (route handler) '/introduction'
// dla żądania HTTP GET:
app.get('/introduction', (req, res) => {
    /* UWAGA
        Jeśli po uruchomieniu aplikacji w pasku przeglądarki zostanie wpisany adres (żądanie):
            localhost:PORT/introduction
        wówczas serwer otrzyma żądanie GET na ścieżce '/introduction'.
        Następnie zostanie wykonana funkcja callback, stanowiąca funkcję obsługi tego żądania.
        Na stronę zostanie przesłana odpowiedź w postaci komunikatu tekstowego.
     */
    /* UWAGA
        Do określenia funkcji pośredniczącej/pośredniej (middleware function),
        można również wykorzystać metodę app.use().
     */

    // Wysłanie odpowiedzi HTTP (HTTP response) do klienta:
    res.send("<h1 style='color: blue;'>Komunikat kontrolny jako odpowiedź HTTP</h1>");
    /* UWAGA
        Metoda res.send() służy do wysłania odpowiedzi HTTP do klienta.
        Argumentem tej metody może być łańcuch znaków (String), tablica (array),
        obiekt (object), albo obiekt typu Buffer.

        Tutaj treść odpowiedzi stanowi literał łańcuchowy.
     */
});
/* UWAGA
    Metoda get() obsługuje metodę HTTP GET (żądanie GET).
    Parametry (argumenty) 'req' i 'res' funkcji zwrotnej (callback) stanowią (odpowiednio) obiekty:
    1) żądania (request);
    2) odpowiedzi (response).
    Obiekt 'req' reprezentuje żądanie HTTP. Obiekt ten jest wyposażony we właściwości (np. req.app)
    i metody (np. req.get()) pozwalające na obsługę żądań HTTP.
    Obiekt 'res' reprezentuje z kolei odpowiedź HTTP wysyłaną przez aplikację, jako reakcję
    na otrzymane żądanie.

    Metoda get() ma dwa argumenty: - pierwszym jest ścieżka/trasa - punkt końcowy,
    z którym jest skojarzona funkcja obsługi (funkcja typu callback), stanowiąca drugi argument.
    Tutaj punkt końcowy jest określony jako '/introduction'. Ścieżka ta określa "RUTA" (route),
    na którym żądanie zostanie uruchomione.

    Funkcja obsługi (czyli funkcja callback) jest wywoływana, jeśli aplikacja otrzyma żądanie HTTP
    do określonego punktu końcowego (czyli routa).

 */

// Powiązanie i nasłuchiwanie serwera aplikacji na zadanym porcie:
app.listen(PORT); // w razie potrzeby należy zmienić port!
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/introduction`);
/* UWAGA
    Metoda listen() jest identyczna z metodą server.listen() znaną z Node.js.
    Pozwala ona na powiązanie i nasłuchiwanie połączeń na zadanym hoście i porcie.

    Aplikacja (serwer aplikacji) nasłuchuje żądań na zadanym hoście i porcie,
    które są zgodne ze zdefiniowanym wcześniej routem.
    Jeśli adres (ścieżka) żądania pasuje z określonym routem (czyli jest z nim zgodna),
    wówczas wywoływana jest funkcja zwrotna (callback), jako funkcja obsługi tego żądania.
 */
