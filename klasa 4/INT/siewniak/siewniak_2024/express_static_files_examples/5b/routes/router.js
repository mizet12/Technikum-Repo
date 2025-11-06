/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML, CSS i JPG.
    Moduł routera.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require("path");
const router = express.Router();

// Określenie katalogu głównego aplikacji:
let appRootPath = path.resolve(__dirname, '..');
// Określenie ścieżki do foldera /files:
let filesDirPath = path.join(appRootPath, "files");

// Ścieżki dostępu do katalogów odpowiadających poszczególnym podstronom aplikacji:
let homeDirPath = path.join(filesDirPath, "home");
let aboutDirPath = path.join(filesDirPath, "about");
let helpDirPath = path.join(filesDirPath, "help");

// Konfiguracja routera do użycia plików statycznych dla routa (podścieżki) /:
router.use('/', express.static(homeDirPath));
// Konfiguracja routera do użycia plików statycznych dla routa (podścieżki) /about:
router.use('/about', express.static(aboutDirPath));
// Konfiguracja routera do użycia plików statycznych dla routa (podścieżki) /help:
router.use('/help', express.static(helpDirPath));
/* UWAGA
    Tutaj, dla każdego routa (podścieżki) pliki statyczne są zapisane w różnych katalogach publicznych.
    Innymi słowy, z każdym routem jest skojarzony indywidualny katalog publiczny.
*/

// Obsługa żądania GET na roucie (podścieżce) /:
router.get('/', (req, res) => {
    // Odpowiedź HTTP - przesłanie pliku statycznego do przeglądarki:
    res.sendFile("/views/index.html", {root: homeDirPath});
    /* UWAGA
        Jako odpowiedź HTTP do klienta przesyłany jest pojedynczy plik - index.html.
        Ścieżka do pliku index.html została okrślona jako względna w odniesieniu do
        wartości właściwości root w obiekcie opcji - homeDirPath.
     */
})

// Obsługa żądania GET na roucie /about:
router.get('/about', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./views/index.html", {root: aboutDirPath});
})

// Obsługa żądania GET na roucie /help:
router.get('/help', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./views/index.html", {root: helpDirPath});
})


module.exports = router;