/* NODE EXPRESS - PLIKI STATYCZNE.
    Konfigurowanie wielu katalogów publicznych.
    Definicja i wykorzystanie ścieżek wirtualnych.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Konfiguracja aplikacji do obsługi plików statycznych:
app.use(express.static(path.join(__dirname, '/static/css')));
app.use(express.static(path.join(__dirname, '/static/images')));
/* UWAGA
    A aplikacji Node można zdefiniować wiele katalogów publicznych zawierających
    zasoby statyczne: pliki CSS, obrazki, pliki JS.
    Express przeszukuje te katalogi w takiej samej kolejności, w jakiej zdefiniowano
    funkcje middleware express.static().

    Tutaj zdefiniowano dwie lokalizacje, które będą przeszukiwane w celu serwowania plików statycznych:
    1) /static/css
    2) /static/images
 */
// Konfiguracja aplikacji do obsługi dowolnych żądań na ścieżce wirtualnej /images:
app.use("/images", express.static(path.join(__dirname, '/static/images')));
/* UWAGA
    Ścieżka /images faktycznie nie istnieje. Jednakże w wyniku wywołania metody app.use() powyżej
    zostanie utworzona ścieżka wirtualna, która odpowiada lokalizacji obrazków, jako plików statycznych.
    Dzięki temu, każde żądanie HTTP rozpoczynające się od /images, a kończące nazwą pliku graficznego,
    np. http://localhost:PORT/images/jelcz.jpg, otrzyma jako odpowiedź plik jelcz.jpg.
 */

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Przesłanie pojedynczego pliku do przeglądarki:
    res.sendFile("index.html", {root: __dirname + "/views"});
})


// Urochomienie serwera HTTP aplikacji:
const server = app.listen(PORT, (err) => {
    if (err) throw (err);
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/images/jelcz.jpg`);
});

/* ĆWICZENIE
   Zmodyfikować strukturę katalogów aplikacji - przenieść kakalogi css i images do foldera root aplikacji.
   Zmienić odpowiednio kod app.js oraz index.html, aby je dostosować do wprowadzonych zmian.
 */

