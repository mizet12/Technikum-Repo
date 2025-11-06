/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML, CSS i JPG.
    Moduł routera. Wykorzystanie

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

// Konfiguracja routera do użycia plików statycznych:
router.use('/home', express.static(homeDirPath));
router.use('/about', express.static(aboutDirPath));
router.use('/help', express.static(helpDirPath));
/* UWAGA
    Tutaj, dla każdego routa (podścieżki) pliki statyczne są zapisane w różnych katalogach publicznych.
    Innymi słowy, z każdym routem jest skojarzony indywidualny katalog publiczny.
*/


// Dodanie triggera (wyzwalacza) do parametru reqURL:
router.param('reqURL', (req, res, next, requestURL) => {
    // Zapis zmodyfikowanej zmiennej (parametru) do obiektu req.params::
    req.params.reqURL = requestURL;
    console.log("Z router.param(): req.params.reqURL = ", req.params.reqURL);
    next();
});

// Obsługa żądania GET z parametrem reqURL:
router.get('/:reqURL', (req, res) => {
    // Wyświetlenie informacji pomocniczych:
    console.log("Z router.get(): req.params.reqURL = ", req.params.reqURL);
    console.log("Z router.get(): req.url = ", req.url);
    console.log("Z router.get(): req.path = ", req.path);

    // Zmienna pomocnicza:
    const file = "/views/index.html";
    /* UWAGA
        Zmienna file oznacza nazwę pliku HTML do przesłania wraz ze ścieżką względną.
        Ścieżka względna została określona w odniesieniu do foldera homeDirPath
        aboutDirPath oraz helpDirPath. Jest ona taka sama względem każdego z wymienionych
        powyżej katalogów.
     */

    // Przesłanie odpowiedniego pliku HTML do klienta:
    if (req.params.reqURL === 'home')
        res.sendFile(file, {root: homeDirPath});
    else if (req.params.reqURL === 'about')
        res.sendFile(file, {root: aboutDirPath});
    else if (req.params.reqURL === 'help')
        res.sendFile(file, {root: helpDirPath});
    /* UWAGA
      Wybór pliku przesyłanego do klienta jest realizowany na podstawie właściwości reqURL
      obiektu parametrów żądania req.params.
    */
})

// Eksport routera:
module.exports = router;