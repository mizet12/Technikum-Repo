/*  NODE EXPRESS - METODA HTTP GET.
    Parametry żądania GET.

    © Piotr Siewniak, wersja: 23.II.2022 r.
*/

/* UWAGA
    Za pomocą metody HTTP GET dane można przesłać do serwera aplikacji (serwera Express)
     na dwa sposoby:
        1. przy użyciu parametrów GET w postaci ciągu zapytania (query string);
        2. przy użyciu parametrów GET w postaci symboli zastępczych (placeholders)
    w adresie URL żądania.

    Tutaj wykorzystano ciąg zapytania.

    Parametry GET w ciągu zapytania stanowią pary klucz-wartość (key-value) w łańcuchu URL żądania
    określone po znaku ?, oddzielone od siebie znakiem &, np.:
        http://localhost:8080/auto?marka=volkswagen&model=golf".

    Przesłane dane są dostępne w aplikacji za pośrednictwem obiektu req.query.
 */


const express = require('express');

// Obiekt aplikacji:
const app = express();
const PORT = 8001; // w razie potrzeby należy zmienić

// Rejestracja i obsługa żądania GET na roucie (ścieżce) /auto:
app.get(
    // Określenie routa:
    '/auto',
    // Definicja funkcji obsługi routa:
    (req, res) => {
        // Wyświetlenie danych w konsoli w celach pomocniczych:
        console.log("Obiekt req.query = ", req.query);
        /* UWAGA
           Dane przesłane za pomocą metody HTTP GET jako parametry żądania
           są dostępne w aplikacji jako pary klucz-wartość obiektu req.query.
         */

        // Przesłanie odpowiedzi HTTP do klienta (przeglądarki):
        res.send(
            "<h4 style='color: blue'>Dane wybranego samochodu</h4>" +
            "<p> Marka: " + req.query.marka.toUpperCase() + "</p>" +
            "<p> Model: " + req.query["model"].toUpperCase() + "</p>"
        );
    /* UWAGA
        Funkcja zwrotna zostanie wywołana, gdy pojawi się żądanie HTTP GET na ścieżce /auto
        określonej względem katalogu głównego aplikacji.
     */
})

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: \nhttp://localhost:${PORT}/auto?marka=volkswagen&model=golf`);
})
