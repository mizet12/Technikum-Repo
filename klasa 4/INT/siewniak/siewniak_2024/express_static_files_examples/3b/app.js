/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML i CSS. Pliki HTML są zapisane w różnych lokalizacjach.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8007; // w razie potrzeby należy zmienić


// Określenie ścieżek do katalogu, w którym są zapisane pliki statyczne:
const staticAbsolutePath = __dirname + "/public"; // ścieżka bezwzględna
/* UWAGA
    Zmienna globalna __dirname określa ścieżkę aktualnie uruchomionego pliku, tutaj: app.js.
 */
const staticRelativePath = "./public"; // ścieżka względna

// Konfiguracja aplikacji do użycia plików statycznych:
app.use(express.static(staticAbsolutePath));
/* UWAGA
    Folder publiczny /public został zdefiniowany jako ten, z którego są serwowane pliki statyczne
    (tutaj: plik ze stylami CSS style.css).
 */


// Określenie ścieżki do foldera z plikami HTML:
const htmlAbsolutePath = __dirname + "/views";
//const htmlRelativePath = "./views";

// Określenie ścieżki do foldera z plikami HTML:
const htmlDirPath = htmlAbsolutePath; // ścieżka bezwzględna
/* UWAGA
    Pliki statyczne HTML są zapisane w podkatalogach katalogu /views.
 */

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Odpowiedź HTTP - przesłanie pliku statycznego do przeglądarki:
    res.sendFile("./home/home.html", {root: htmlDirPath});
    /* UWAGA
        Za pomocą metody sendFile(), do klienta (w odpowiedzi HTTP) wysyłany jest pojedynczy plik,
        (tutaj: home.html). W odpowiedzi HTTP można obsłużyć tylko jeden plik.

        Jako pierwszy argument metody sendFile() wykorzystano ścieżkę względną (./home/home.html)
        w odniesieniu do zadeklarowanego foldera root, który stanowi drugi argument:
        {root: htmlDirPath}.
        Takie podejście jest zalecanym sposobem przesyłania plików, ze względu na aspekty
        związane z bezpieczeństwem.
     */
})

// Obsługa żądania GET na roucie /about:
app.get('/about', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./about/about.html", {root: htmlDirPath});
})

// Obsługa żądania GET na roucie /help:
app.get('/help', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./help/help.html", {root: htmlDirPath});
})

/* UWAGA
    Tutaj: wszystkie przesyłane pliki statyczne HTML (jako odpowiedzi HTTP)
    znajdują się w różnych lokalizacjach: w podkatalogach /home, /help i /about.

    Ze względu na fakt, że wcześniej skonfigurowany został katalog publiczny przeznaczony na pliki statyczne
    w aplikacji można serwować pliki statyczne - tutaj: style.css.
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

