/* NODE EXPRESS - PLIKI STATYCZNE.
   Kod routingu oddzielony od kodu aplikacji.

   Wykorzystanie parametrów żądania HTTP.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
var router = require("./routes/router");

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8015; // w razie potrzeby należy zmienić

// Konfiguracja aplikacji do użycia routera:
app.use(router);

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, (err) => {
    // Obsługa ewentualnego błędu:
    if (err) {
        console.log("Uwaga błąd!", err.message);
        return
    }

    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/app/home`);
})


