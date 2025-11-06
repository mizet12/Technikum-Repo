/*  NODE EXPRESS
    Obsługa formularzy. Metoda HTTP GET.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

const express = require('express');

const app = express();
const PORT = 8030;

// Konfiguracja aplikacji dotycząca plików statycznych:
app.use(express.static(__dirname + '/public'));
/* UWAGA
    Pliki statyczne to pliki HTML, CSS, JS i inne (np. obrazki), które klient może pobrać z serwera.
    W celu umożliwienia pobierania plików statycznych z serwera należy utworzyć specjalny katalog
    przeznaczony na pliki statyczne, np. '/public' i wykonać instrukcję:
        app.use(express.static('public'));

    Uwagi
    1) Katalog 'public' nie jest częścią adresu URL.
    2) Po wykonaniu instrukcji powyżej katalog ten będzie odpowiadał folderowi root aplikacji.
    3) Można również wykorzystywać inne katalogi publiczne, np. images, data itp.

    TEMATYKA OBSŁUGI PLIKÓW STATYCZNYCH JEST OMAWIANA OSOBNO.
 */

// Rejestracja i obsługa żądania GET na roucie (ścieżce) /index.html:
app.get(
    // Określenie routa:
    '/index.html',
    // Definicja funkcji obsługi routa:
    (req, res) => {
        // Przesłanie do klienta pliku statycznego index.html:
        res.sendFile(__dirname + "/public/index.html");
        /* UWAGA
            Metoda sendFile() pozwala na przesłanie pliku na zadanej ścieżce.

            Zmienna środowiskowa (environment variable) __dirname określa ścieżkę bezwzględną
            do katalogu zawierającego przetwarzany plik.
         */
})

// Rejestracja i obsługa żądania GET na roucie /auto:
app.get(
    // Określenie routa:
    '/auto',
    // Definicja funkcji obsługi routa:
    (req, res) => {
        // Wyświetlenie danych w konsoli (pomocnicze):
        console.log("Obiekt req.query = ", req.query);

        // Przesłanie odpowiedzi do klienta:
        res.send(
            "<h4 style='color: blue'>Dane samochodu</h4>" +
            "<p> Marka: " + req.query.marka + "</p>" +
            "<p> Model: " + req.query.model + "</p>"
        );
    /* UWAGA
        Funkcja zwrotna zostanie wywołana, gdy pojawi się żądanie HTTP GET na ścieżce /auto.
     */
})

// Uruchomienie serera aplikacji:
const server = app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/index.html`);
})
