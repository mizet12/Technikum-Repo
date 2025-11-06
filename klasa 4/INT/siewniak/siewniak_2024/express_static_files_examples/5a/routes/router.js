/* NODE EXPRESS - PLIKI STATYCZNE.
   Serwowanie plików statycznych HTML, CSS i JPG - MODUŁ ROUTERA.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require("path");

// UTWORZENIE OBIEKTU (FUNKCJI) ROUTERA:
const router = express.Router();

// Określenie katalogu nadrzędnego nad /routes:
let parentDirPath = path.resolve(__dirname, '..');

// Określenie ścieżki do foldera publicznego /public:
const publicDirPath = parentDirPath + "/public";
/* UWAGA
    Ścieżka do zasobów statycznych CSS i JPG została zdefiniowana jako bezwzględna.
    W szczególności, pliki CSS są zapisane w katalogu /public/css, a JPG - /public/images.
 */
// Ścieżka dostępu do plików HTML:
const htmlDirPath = parentDirPath + "/views";
/* UWAGA
    Ścieżka do zasobów statycznych HTML została zdefiniowana jako bezwzględna.
 */

// Konfiguracja aplikacji do użycia plików statycznych:
router.use(express.static(publicDirPath));
/* UWAGA
    Podścieżka do zasobów statycznych została zdefiniowana jako bezwzględna.
 */


// Obsługa żądania GET na roucie (podścieżce) /:
router.get('/', (req, res) => {
    // Odpowiedź HTTP - przesłanie pliku statycznego do przeglądarki:
    res.sendFile("home.html", {root: htmlDirPath});
})

// Obsługa żądania GET na roucie /about:
router.get('/about', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("about.html", {root: htmlDirPath});
})

// Obsługa żądania GET na roucie /help:
router.get('/help', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("help.html", {root: htmlDirPath});
})

/* UWAGA
    Wszystkie przesyłane pliki statyczne HTML znajdują się w różnych lokalizacjach.
 */

module.exports = router;