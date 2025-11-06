/*  NODE EXPRESS - OBSŁUGA FORMULARZY.
    Metoda HTTP POST.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

const express = require('express');
const path = require('path');

const f = require('./custom_modules/prostokat');

const app = express();

const publicDir = path.join(__dirname, 'public');

// Konfiguracja foldera przeznaczonego na pliki statyczne:
app.use(express.static(publicDir));

// Obsługa żądania GET na zadanej ścieżce:
app.get('/index.html', (req, res) => {
    res.sendFile("index.html", {root: publicDir});
})

// Konfiguracja aplikacji do treści żądania za pomocą biblioteki query-string:
app.use(express.urlencoded({extended: false}));
/* UWAGA
    Funkcja express.urlencoded() stanowi wbudowany middleware w Express.
    Pozwala ona na analizę treści (body parsing) przychodzącego żądania.
    Funkcja ta jest oparta na middleware body-parser.
    Opcja extended pozwala na dokonanie wyboru pomiędzy parsowaniem danych
    zawartych w URL za pomocą biblioteki query-string (dla extended: false)
    lub biblioteki qs (dla extended: true).
 */
const PORT = 8040; // w razie potrzeby należy zmienić

// Umożliwienie pobrania plików statycznych z serwera:
app.use(express.static('public'));

// Obsługa żądania GET na zadanym roucie:
app.get('/index.html', (req, res) => {
    res.sendFile( __dirname + "/" + "index.html" );
})

// Rejestracja i obsługa żądania POST na roucie (ścieżce) /results:
app.post(
    // Określenie ścieżki:
    '/results',
    // Definicja funkcji obsługi routa:
    (req, res) => {
        // Przygotowanie danych:
        let b1 = req.body.bok_1;
        let b2 = req.body.bok_2;

        res.send(
            "<h4 style='color: blue'>Wyniki:</h4>" +
            "<p>Pole wynosi " + String(f.polePr(b1, b2)) + "</p>" +
            "<p>Obwód wynosi " + String(f.obwodPr(b1, b2)) + "</p>"
        );
    /* UWAGA
        Funkcja zwrotna zostanie wywołana, gdy pojawi się żądanie HTTP POST na ścieżce /results.
     */
})

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/index.html`)
})  