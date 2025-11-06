/* NODE EXPRESS - PLIKI STATYCZNE.
   Serwowanie plików statycznych HTML i CSS - pliki statyczne zapisane w jednej lokalizacji.
   Ścieżki do zasobów statycznych - bezwzględne i względne.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8005; // w razie potrzeby należy zmienić

// Określenie ścieżek do katalogu, w którym są zapisane pliki statyczne:
const staticAbsolutePath = __dirname + "/public"; // ścieżka bezwzględna
const staticRelativePath = "./public"; // ścieżka względna

// Konfiguracja aplikacji Express do obsługi plików statycznych:
app.use(express.static(staticAbsolutePath));
/* UWAGA
    Metoda express.static() stanowi wbudowaną funkcję pośrednią (built-in middleware function).
    Argumentem metody jest nazwa katalogu publicznego, z którego pliki statyczne są serwowane -
    udostępniane aplikacji.

    Tutaj ustalono, że folderem tym jest /public.
    Katalog /public jest zatem traktowany jako root dla zasobów statycznych.
    Pliki statyczne mogą być serwowane zarówno bezpośrednio z foldera public,
    jak również z jego podkatalogów.
 */

// Określenie ścieżki do foldera z plikami HTML:
const htmlAbsolutePath = __dirname + "/public/html";
//const htmlRelativePath = "./public/html";

// Definicja obiektu opcji metody res.sendFile():
const options = {
    root: htmlAbsolutePath
}
/* UWAGA
    Folder publiczny html (jako podkatalog katalogu publicznego /public) zawiera pliki statyczne HTML.
 */

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Odpowiedź HTTP - przesłanie pliku statycznego HTML do przeglądarki:
    res.sendFile("home.html", options);
    /* UWAGA
        Za pomocą metody sendFile(), w odpowiedzi HTTP do klienta wysyłany jest pojedynczy plik (tutaj: plik home.html).
        W ogólności, w danej odpowiedzi HTTP można obsłużyć tylko jeden plik.
     */
})

// Obsługa żądania GET na roucie (ścieżce) /about:
app.get('/about', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("about.html", options);
})

// Obsługa żądania GET na roucie /help:
app.get('/help', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("help.html", options);
})

/* UWAGA
    Tutaj: wszystkie przesyłane pliki statyczne HTML (w odpowiedzi HTTP)
    znajdują się w tej samej lokalizacji - folderze /public.
    W szczególności, pliki HTML są zapisane w folderze html, a style CSS - w folderze css.
    Oba wymienione foldery: html i css, stanowią podkatalogi foldera public.
 */

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

/* ĆWICZENIE
    Uruchomić aplikację:
    1) z poziomu katalogu, w którym jest zapisany program app.js,
    2) z poziomu katalogu różnego od tego, w którym jest zapisany program app.js.
    Zinterpretować uzyskane rezultaty.

    A)
    Zamienić ścieżkę bezwzględną staticAbsolutePath w wywołaniu metody app.use():
        app.use(express.static(staticAbsolutePath));
    na ścieżkę względną staticRelativeePath i powtórzyć testy działania aplikacji.
    Zinterpretować uzyskane rezultaty.

    B)
    Zamienić ścieżkę bezwzględną htmlAbsolutePath we właściowści root obiektu options
    na ścieżkę względną htmlRelativePath i powtórzyć testy działania aplikacji.
    Zinterpretować uzyskane rezultaty.
 */

