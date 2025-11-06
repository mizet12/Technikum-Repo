/* NODE EXPRESS - PLIKI STATYCZNE.
   Serwowanie plików statycznych HTML, CSS i JPG - MODUŁ ROUTERA.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require("path");
// Dołączenie zasobów publicznych modułu cookie-parser:
const cookieParser = require('cookie-parser');

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

// Konfiguracja routera do użycia plików statycznych:
router.use(express.static(publicDirPath));
// Konfiguracja routera do obsługi cookies:
router.use(cookieParser());


// Obsługa żądania GET na roucie (podścieżce) /:
router.get('/', (req, res) => {
    const cookies = req.cookies; // zmienna pomocnicza
    for (let property in cookies) {
        if (!cookies.hasOwnProperty(property)) continue;

        // Aktualizacja aktywnych cookies - usunięcie wszystkich cookies:
        res.cookie(
            property, // nazwa cookie
            null, // wartość cookie
            {expires: new Date(Date.now())} // ustalenie daty ważności cookie
        );
        /* UWAGA
            Aktualizacja aktywnych cookies jest w tym przypadku równoważna ich usunięciu.
            Wynika to z ustalenia dla nich nowej daty ważności.
         */
    }

    res.cookie('visit_home', 'true');
    // Wyświetlenie informacji pomocniczych w konsoli:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);

    // Odpowiedź HTTP - przesłanie pliku statycznego do przeglądarki:
    res.sendFile("home.html", {root: htmlDirPath});
})

// Obsługa żądania GET na roucie /about:
router.get('/about', (req, res) => {
    res.cookie('visit_about', 'true');
    // Wyświetlenie informacji pomocniczych w konsoli:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);

    // Przesłanie pliku do przeglądarki:
    res.sendFile("about.html", {root: htmlDirPath});
})

// Obsługa żądania GET na roucie /help:
router.get('/help', (req, res) => {
    res.cookie('visit_help', 'true');
    // Wyświetlenie informacji pomocniczych w konsoli:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);

    // Przesłanie pliku do przeglądarki:
    res.sendFile("help.html", {root: htmlDirPath});
})

module.exports = router;