/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metody app.use(), app.get(). Metoda res.send().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require("express");
const app = express();

const PORT = 8043;

// Dodanie funkcji pośredniej do stosu (łańcucha) funkcji pośrednich:
app.use((req, res, next) => {
    console.log('Komunikat kontrolny  z funkcji pośredniej dla każdego żądania i na każdej ścieżce...');
    next();
})
/* UWAGA
    Funkcja zwrotna stanowiąca argument metody app.use() powyżej zostanie wykonana:
    1) dla każdego żądania (np. GET, POST);
    2) na każdej ścieżce żądania.
 */

// Obsługa żądania HTTP GET na zadanej ścieżce /:
app.get(
    "/", // określenie ścieżki

    // DEFINICJE FUNKCJI TWORZĄCYCH ŁAŃCUCH FUNKCJI POŚREDNICH
    // Definicja funkcji pośredniej A w łańcuchu:
    (req, res, next) => {
        console.log("Komunikat kontrolny z funkcji pośredniej A na ścieżce /");
        next();
    },
    // Definicja funkcji pośredniej B w łańcuchu:
    (req, res) => {
        console.log("Komunikat kontrolny z funkcji pośredniej B na ścieżce /");

        // Przesłanie odpowiedzi do klienta:
        res.send('<h4 style="color: black;">Strona główna</h4>');
        /* UWAGA
           Metoda res.send() pozwala na przesłanie odpowiedzi HTTP serwera do klienta.
           Metoda ta implementuje trzy metody:
           1) res.setHeaders() - sprawdza strukturę odpowiedzi (wyjścia) i ustawia automatycznie
              odpowiedni nagłówek odpowiedzi (response header);
           2) res.write() - przesyła dane (w sposób strumieniowy) do klienta;
           3) res.end() - kończy proces odpowiedzi.

           Argumentem tej metody może być:
           a) łańcuch znaków (String);
           b) tablica (array);
           c) obiekt (object);
           d) Buffer.

            Tutaj treść odpowiedzi stanowi literał łańcuchowy reprezentujący kod HTML.

            Funkcja pośrednia, której zadaniem jest przesłanie odpowiedzi do klienta (przeglądarki)
            jest często nazywana funkcją obsługi routa/ścieżki (route handler).
        */
    }
    /* UWAGA
        Funkcje pośrednie (callbacki) stanowiące argumenty metody app.get() powyżej
        zostaną wykonane jedynie dla żądania GET na ścieżce /.
        Kolejność wykonania funkcji -  zgodnie z kolejnością ich definicji w łańcuchu (kodzie).

        Oprócz tego (jako pierwsza) zostanie wykonana funkcja pośrednia zdefiniowana wcześniej
        jako argument metody app.use().
     */
);

// Obsługa żądania HTTP GET na zadanej ścieżce /about:
app.get(
    "/about", // określenie ścieżki
    // DEFINICJE FUNKCJI TWORZĄCYCH ŁAŃCUCH FUNKCJI POŚREDNICH
    (req, res, next) => {
        console.log("Komunikat kontrolny z funkcji pośredniej A na ścieżce /about");
        next();
    },
    // Definicja funkcji pośredniej B w łańcuchu:
    (req, res) => {
        console.log("Komunikat kontrolny z funkcji pośredniej B na ścieżce /about");
        // Przesłanie odpowiedzi do klienta:
        res.send('<h4 style="color: blue;">Podstrona /about</h4>');
    }
    /* UWAGA
        Funkcje pośrednie (callbacki) stanowiące argumenty metody app.get() powyżej
        zostaną wykonane jedynie dla żądania GET na ścieżce /about.
        Kolejność wykonania funkcji -  zgodnie z kolejnością ich definicji w kodzie.

        Oprócz tego (jako pierwsza) zostanie wykonana funkcja pośrednia zdefiniowana wcześniej
        jako argument metody app.use().
     */
);

// Obsługa żądania HTTP GET na zadanej ścieżce /help:
app.get(
    "/help", // określenie ścieżki
    // DEFINICJE FUNKCJI TWORZĄCYCH ŁAŃCUCH FUNKCJI POŚREDNICH
    (req, res) => {
        console.log("Komunikat kontrolny z funkcji pośredniej na ścieżce /help");
        // Przesłanie odpowiedzi do klienta:
        res.send('<h4 style="color: green;">Podstrona /help</h4>');
    }
    /* UWAGA
        Funkcja pośrednia stanowiąca argument metody app.get() powyżej zostanie wykonana
        jedynie dla żądania GET na ścieżce /help.

        Oprócz tego (jako pierwsza) zostanie wykonana funkcja pośrednia zdefiniowana wcześniej
        jako argument metody app.use().
     */
);

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie ", PORT);

    console.log("Wpisz w pasku adresu przeglądarki:");
    console.log(`http://localhost:${PORT}/`);
    console.log(`http://localhost:${PORT}/about`);
    console.log(`http://localhost:${PORT}/help`);
});





