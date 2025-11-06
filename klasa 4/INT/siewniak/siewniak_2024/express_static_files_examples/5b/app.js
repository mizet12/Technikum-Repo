/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML, CSS i JPG.
    Wykorzystanie modułu routera.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
var router = require("./routes/router");

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8014; // w razie potrzeby należy zmienić

// Skojarzenie routera z podstronami (routami/trasami):
app.use('/', router);
app.use('/about', router);
app.use('/help', router);


// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, (err) => {
    // Obsługa ewentualnego błędu:
    if (err) {
        console.log("Uwaga błąd!", err.message);
        return
    }

    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})


