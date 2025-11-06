/* NODE EXPRESS - PLIKI STATYCZNE.
   Serwowanie plików statycznych HTML z tej samej lokalizacji.
   Wykorzystanie ścieżek bezwzględnych do przesyłanych plików.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

/* UWAGA
    Do plików statycznych zalicza się np. pliki HTML, CSS, JS, obrazki (JPG, PNG).
    Framework Express pozwala na serwowanie plików statycznych.

    Istnieją dwa sposoby obsługi plików statycznych:
    1) w odpowiedzi HTTP - udostępnianie (przesłanie do klienat) pojedynczego pliku
       poprzez skonfigurowanie ścieżki do tego zasobu;
    2) skonfigurowanie katalogu publicznego przeznaczonego na pliki statyczne.
 */



/* UWAGA
    W aplikacji wszystkie przesyłane pliki statyczne HTML znajdują się w tej samej lokalizacji
    - folderze views.
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
        /* UWAGA
            Metoda sendFile() pozwala na przesłanie pliku o podanej nazwie na zadanej ścieżce.
            Pole nagłówka odpowiedzi: HTTP Content-type, zostaje wówczas ustawione automatycznie
            na podstawie rozszerzenia pliku (tutaj: html).
         */
       __dirname + "/views/home.html", // ścieżka bezwzględna do pliku home.html
        /* UWAGA
            Zmienna globalna __dirname określa ścieżkę bezwzględną do katalogu,
            w którym jest zapisany uruchamiany program - tutaj: plik app.js.
         */
        /* UWAGA
           W przypadku ogólnym, podawanie ścieżki bezwzględnej do lokalizacji przesyłanego zasobu (jak tutaj)
           może być rozwiązaniem mało bezpiecznym, ponieważ ścieżka ta może zawierać dane chronione,
           np. dane wejściowe użytkownika. Ponadto użytkownik może próbować manipulować ścieżką do innego zasobu,
           który może być chroniony (poufny).
         */
        (err, next) => {
            if (err) {
                console.log(`Uwaga błąd! ${err.message}`);
                res.end(err.message);
                next();
            }
        }
    );
})

// Obsługa żądania GET na roucie /about:
app.get('/about', (req, res, next) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile(__dirname + "/views/about.html", (err, next) => {
        if (err) {
            console.log(`Uwaga błąd! ${err.message}`);
            res.end(err.message);
            next();
        }
    })
})

// Obsługa żądania GET na roucie /help:
app.get('/help', (req, res, next) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile(__dirname + "/views/help.html", (err, next) => {
        if (err) {
            console.log(`Uwaga błąd! ${err.message}`);
            res.end(err.message);
            next();
        }
    })
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

/* UWAGA
    Ze względu na fakt, że za pomocą metody res.sendFile() przesyłany jest WYŁĄCZNIE pojedynczy plik,
    w jego kodzie źródłowym (TUTAj: home.html, help.html, about.html) nie należy umieszczać linków (odnośników)
    do żadnych plików CSS, skryptów JS, ani nie wyświetlać żadnych obrazków.

    Np. jeśli tutaj plik ze stylami zostałby umieszczony w folderze /views a mastępnie dołączony (w kodzie HTML)
    do plików: home.html, help.html, about.html, to byłoby to działanie nieskuteczne (błędne) -
    Express nie mógłby zlokalizować położenia pliku .CSS.

    Aby rozwiązać ten problem należy skonfigurować aplikację do obsługi plików statycznych za pomocą
    metody express.static(...)); TEMATYKA TA BĘDZIE OMAWIANA PÓŹNIEJ.
 */

/* ĆWICZENIE
    Zredagowć przekładowy plik .CSS pozwalający na prostą stylizację znaczników zawartych w plikach HTML:
    home.html, help.html, about.html.
    Zapisać plik
 */
