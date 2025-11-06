/*  NODE EXPRESS - METODA HTTP GET.
    Parametry żądania zawarte w adresie URL.

    © Piotr Siewniak, wersja: 23.II.2022 r.
*

/* UWAGA
    Za pomocą metody HTTP GET dane można przesłać do serwera aplikacji (serwera Express)
     na dwa sposoby:
        1. przy użyciu parametrów GET;
        2. przy użyciu symboli zastępczych (placeholders)
    w adresie URL żądania.

    Tutaj wykorzystano parametry (symbole zastępcze) zawarte w żądaniu,jako elementy składowe (segmenty)
    łańcucha URL żądania GET.

    Np. po wykonaniu żądania:
        "http://localhost:PORT/auto/volkswagen/golf"
    do aplikacji (obiektu app) zostaną przesłane dane: "volkswagen" oraz "golf".

    Przesłane dane są dostępne za pośrednictwem obiektu req.params.
 */

const express = require('express');

const app = express();
const PORT = 8002; // w razie potrzeby należy zmienić

// Obsługa żądania GET na roucie (ścieżce) /auto/:marka/:model:
app.get(
    // Określenie routa:
    '/auto/:marka/:model',
    // Definicja funkcji obsługi routa:
    (req, res) => {
        // Pomocnicze wyświetlenie danych w konsoli:
        console.log("Obiekt req.params = ", req.params);

        // Przesłanie odpowiedzi HTTP do klienta (przeglądarki):
        res.send(
            "<h4 style='color: blue'>Dane wybanego samochodu</h4>" +
            "<p> Marka: " + req.params.marka.toUpperCase() + "</p>" +
            "<p> Model: " + req.params['model'].toUpperCase() + "</p>"
        );
    /* UWAGA
        Funkcja obsługi routa (funkcja zwrotna) zostanie wywołana, gdy pojawi się żądanie HTTP GET
        np. na ścieżce /auto/skoda/octavia' (określonej względem katalogu głównego aplikacji).
     */
})

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: \nhttp://localhost:${PORT}/auto/volkswagen/golf`);
})
