/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML, CSS i JPG.
    Moduł routera. Wykorzystanie

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require("path");

// Utworzenie obiektu (funkcji) routera:
const router = express.Router();

// Określenie katalogu głównego aplikacji:
let appRootPath = path.resolve(__dirname, '..');
// Określenie ścieżki do foldera /files:
let filesDirPath = path.join(appRootPath, "files");

// Ścieżki dostępu do katalogów odpowiadających poszczególnym podstronom aplikacji:
let homeDirPath = path.join(filesDirPath, "home");
let aboutDirPath = path.join(filesDirPath, "about");
let helpDirPath = path.join(filesDirPath, "help");

// Konfiguracja routera do użycia plików statycznych:
router.use('/app/home', express.static(homeDirPath));
router.use('/app/about', express.static(aboutDirPath));
router.use('/app/help', express.static(helpDirPath));

// Obsługa żądania GET z parametrem:
router.get('/app/:subPath', (req, res) => {
/* UWAGA
    W wywołaniu metody router.get() powyżej założono, że parametrem żądania GET
    jest podścieżka subPath adresu URL.
 */
    // Wyświetlenie informacji pomocniczych:
    console.log("req.params.subPath: ", req.params.subPath);
    console.log("req.url: ", req.url);
    console.log("req.path: ", req.path);

    // Zmienna pomocnicza:
    const file = "/views/index.html";
    // Przesłanie odpowiednich plików HTML do klienta:
    if (req.url === '/app/home/')
        res.sendFile(file, {root: homeDirPath});
    else if (req.url === '/app/about/')
        res.sendFile(file, {root: aboutDirPath});
    else if (req.url === '/app/help/')
        res.sendFile(file, {root: helpDirPath});
    /* UWAGA
       Wybór plików przesyłanych do klienta jest realizowany na podstawie właściwości url
       obiektu żadania req.
     */
})

module.exports = router;