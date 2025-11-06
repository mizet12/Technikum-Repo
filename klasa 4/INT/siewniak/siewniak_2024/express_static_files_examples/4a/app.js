/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML, CSS i JPG.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

/* UWAGA
    Pliki statyczne HTML, CSS i JPG odpowiadające każdej podstronie aplikacji są zapisane
    w osobnych katalogach - podkatalogach katalogu files: /home, /aboyt i /help.

    Dla każdego routa (ścieżki żądania) został skonfigurowany odmienny katalog publiczny,
    przeznaczony na pliki statyczne. Tym samym, dla każdego routa można serwować pliki statyczne
    o tych samych nazwach, ale różnej zawartości - index.html, style.css, jelcz.jpg.
 */

const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8009; // w razie potrzeby należy zmienić


// Określenie ścieżki bezwzględnej do foldera z plikami HTML i CSS:
const filesDirPath = __dirname + "/files";

// Ścieżki bezwzględne do katalogów odpowiadających podstronom:
const homeDirPath = filesDirPath + "/home";
const aboutDirPath = filesDirPath + "/about";
const helpDirPath = filesDirPath + "/help";


// Konfiguracja aplikacji do użycia plików statycznych dla dowolnych żądań na ścieżce /:
app.use('/', express.static(homeDirPath));
// Konfiguracja aplikacji do użycia plików statycznych dla dowolnych żądań na ścieżce /about:
app.use('/about', express.static(aboutDirPath));
// Konfiguracja aplikacji do użycia plików statycznych dla dowolnych żądań na ścieżce /help:
app.use('/help', express.static(helpDirPath));
/* UWAGA
    Tutaj, dla każdego routa (ścieżki) pliki statyczne są zapisane w różnych katalogach publicznych.
    Innymi słowy, z każdym routem jest skojarzony indywidualny katalog publiczny.

    Funkcja pośrednia express.static() została tutaj zamontowana dla każego żądania, np. GET, POST.
*/


// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Odpowiedź HTTP - przesłanie pliku statycznego do przeglądarki:
    res.sendFile("./html/index.html", {root: homeDirPath});
    /* UWAGA
        Jako odpowiedź HTTP do klienta przesyłany jest plik index.html.

        Ścieżka do pliku została zdefiniowana jako względna w odniesieniu do katalogu
        podanego we właściwości root obiektu opcji, czyli względem homeDirPath.
     */
})

// Obsługa żądania GET na roucie /about:
app.get('/about', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./html/index.html", {root: aboutDirPath});
    /* UWAGA
        Ścieżka do pliku została zdefiniowana jako względna w odniesieniu do katalogu
        podanego we właściwości root obiektu opcji, czyli względem aboutDirPath.
     */
})

// Obsługa żądania GET na roucie /help:
app.get('/help', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./html/index.html", {root: helpDirPath});
    /* UWAGA
        Ścieżka do pliku została zdefiniowana jako względna w odniesieniu do katalogu
        podanego we właściwości root obiektu opcji, czyli względem helpDirPath.
     */
})

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

