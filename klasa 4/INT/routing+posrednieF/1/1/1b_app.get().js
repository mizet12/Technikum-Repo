/*  NODE EXPRESS - ROUTING
    Wprowadzenie. Metoda app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/


/* UWAGA
    W aplikacji obsługiwane jest żądanie HTTP GET na ścieżce /.
    Inne żądania nie są obsługiwane.

    Routing zaimplementowany za pomocą metody app.get().
 */

// Dołączenie do aplikacji zasobów publicznych modułu 'express':
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8080; // w razie potrzeby należy zmienić

// Rejestracja funkcji obsługi i obsługa żądania HTTP GET w punkcie końcowym '/':
app.get(
    '/', // ścieżka odpowiadająca stronie głównej aplikacji
    (req, res) => { // funkcja obsługi żądania
    /* UWAGA
        Funkcja zwrotna pełni rolę funkcji obsługi żądania GET na ścieżce /.
        Formalnie jest to funkcja pośrednia (middleware function).

        Tematyka funkcji pośrednich jest omawiana w foderze MIDDLEWARE.
     */

        // Komunikat pomocniczy:
        console.log("Odpowiedź serwera aplikacji do klienta została wysłana");

        // Wysłanie odpowiedzi HTTP (HTTP response) do klienta:
        res.send('<h1 style="color: blue;">Odpowiedź aplikacji na żądanie HTTP GET </h1>');
});


// Uruchomienie serwera aplikacji:
const server = app.listen(
    PORT, // port
    () => { // funkcja zwrotna
    /* UWAGA
        Funkcja zwrotna jest wykonywana po uruchmieniu serwera aplikacji.
     */
        // Wyświetlenie informacji pomocniczych w konsoli:
        console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT}`);
        console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
    }
);

/* UWAGA
    SZCZEGÓŁOWE OMÓWIENIE ŻĄDANIA HTTP GET JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> GET_REQUEST
 */