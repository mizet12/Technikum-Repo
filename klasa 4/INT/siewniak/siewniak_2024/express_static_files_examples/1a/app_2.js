/* NODE EXPRESS - PLIKI STATYCZNE.
   Serwowanie plików statycznych HTML z tej samej lokalizacji.
   Wykorzystanie ścieżek względnych do przesyłanych plików.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

/* UWAGA
    Do plików statycznych zalicza się np. pliki HTML, CSS, JS, obrazki (JPG, PNG).
    Framework Express pozwala na serwowanie plików statycznych.

    Istnieją dwa sposoby obsługi plików statycznych:
    1) w odpowiedzi HTTP - udostępnianie pojedynczego pliku poprzez skonfigurowanie
       ścieżki do tego zasobu;
    2) skonfigurowanie katalogu publicznego przeznaczonego na pliki statyczne.
 */

/* UWAGA
    W aplikacji wszystkie przesyłane pliki statyczne HTML znajdują się w tej samej lokalizacji - folderze views.
    Wykorzystanie ścieżki względnej jako argumentu metody res.sendFile().
 */

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8002; // w razie potrzeby należy zmienić

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res, next) => {
    // Odpowiedź HTTP - przesłanie pliku statycznego HTML do przeglądarki:
    res.sendFile(
        "home.html", // ścieżka względna do pliku home.html
        {root: path.join(__dirname, "/views")} // obiekt opcji
    );
})

// Obsługa żądania GET na roucie /about:
app.get('/about', (req, res, next) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile(path.join("about.html"), {root: path.join(__dirname, "/views")});
    /* UWAGA
        Wykorzystanie opcji
            root: path.join(_dirname, "/views")
        pozwala na ustalenie katalogu głównego (roota) dla przesyłanego każdorazowo pliku statycznego HTML
        jako miejsce, z którego rozpoczyna się ścieżka względna.
        Dzieki temu, jako argument metody res.sendFile() można podać ścieżkę względną do przesyłanego pliku
        określaną względem roota podanego we właściwości root obiektu opcji options.

        Wykorzystanie opcji root dla przesyłanych plików statycznych jest rozwiązaniem bezpieczniejszym
        od używania ścieżek bezwzglednych do zasobów.
     */
})

// Obsługa żądania GET na roucie /help:
app.get('/help', (req, res, next) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile(path.join("help.html"), {root: path.join(__dirname, "/views")});
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




