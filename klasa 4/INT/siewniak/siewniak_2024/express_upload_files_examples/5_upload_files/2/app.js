/*  NODE EXPRESS. Metoda HTTP POST - upload wielu plików.

    © Piotr Siewniak, wersja: 24.II.2022 r.
*/


const express = require('express');
const path = require('path');
const multer  = require('multer');

const PORT = 8037; // w razie potrzeby należy zmienić

// Utworzenie obiektu aplikacji:
const app = express();

app.use(express.static('public'));
app.get('/index.html', (req, res) => {
    res.sendFile( __dirname + "/public/html/index.html" );
})

// Konfiguracja parametrów (opcji) multera:
const storage = multer.diskStorage({
    // Ustalenie katalogu docelowego dla przekazywanego obrazka:
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './public/uploads/'));
    },
    // Ustalenie nazwy przekazywanego obrazka:
    filename: (req, file, cb) => {
        cb(null, file.originalname); // file.originalname oznacza oryginalną nazwę obrazka
    }
});

// Konfiguracja multera do przesyłania wielu plików:
let upload = multer({storage: storage})
        .array( // można przekazać wiele plików
            'files', // nazwa (name) pola input w formularzu HTML z opcją multi
            5 // maksymalna liczba uploadowanych plików
        );

// Rejestracja i obsługa żądania POST na roucie /upload:
app.post(
    '/upload', // ścieżka żądania
    (req, res) => { // funkcja obsługi żądania na zadanej ścieżce
        upload(req, res, (err) => {
            // W przypadku błędu:
            if (err) {
                return res.end("Uwaga błąd! Nie przekazano żadnych plików!");
            }

            // Komunikat kontrolny:
            console.log("Pliki zostały zapisane w katalogu docelowym ...");
            // Wyswietlenie informacji pomocniczych w konsoli:
            console.log("Obiekt req.files = ", req.files);

            // Zakończenie odpowiedzi wraz z wyświetleniem informacji pomocniczej:
            res.end("Pliki zostały zapisane w katalogu docelowym ...");
        });
    }
);

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/index.html`)
})
