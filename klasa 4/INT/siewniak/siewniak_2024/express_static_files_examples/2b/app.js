/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML, CSS, JS i JPG.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8021; // w razie potrzeby należy zmienić

// Określenie ścieżki bezwzględnej do katalogu z zasobami statycznymi /public:
const publicDirPath = __dirname + "/public";

// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(publicDirPath)); // wykorzystanie ścieżki bezwzględnej do katalagu public
/* UWAGA
    Katalog public, w którym są zapisane pliki statyczne został tutaj skonfigurowany przy wykorzystaniu
    ścieżki bezwzględnej. Jest to pomocne, jeśli aplikacja ma być uruchamiana z poziomu dowolnego katalogu,
    a nie tylko tego, w którym jest zapisany program app.js.
 */


// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Przesłanie pojedynczego pliku do przeglądarki:
    res.sendFile("./html/index.html", {root: publicDirPath});
    /* UWAGA
        W wywołaniu metody res.sendFile() powyżej, plik statyczny index.html został przesłany
        do klienta (przeglądarki) przy wykorzystaniu ścieżki względnej do tego zasobu.
        Ścieżka względna została określona w odniesieniu do foldera określonego we właściwości
        root obiektu opcji.
     */
})


// Import zewnętrznego skryptu (modułu) JS:
const f = require('./public/js/functions');


// Urochomienie serwera HTTP aplikacji:
const server = app.listen(PORT, (err) => {
    if (err) throw (err);
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
    console.log();

    // Wykorzystanie kodu pochodzącego z modułu functions:
    const mocKM = 240; // moc silnika
    console.log("Moc silnika (KM): ", mocKM);
    // Wykorzystanie funkcji zdefiniowanej w module functions:
    console.log('Moc silnika (kW): ', f.KM_na_KW(mocKM));
});

/* ĆWICZENIE
    Zaprojektować i wykonać aplikację Express pozwalającą na prezentację na stronie WWW galerii kilku zdjęć
    polskich ciężarówek marki JELCZ w latach 70-tych XX wieku.
    Poniżej każdego zdjęcia w galerii podać parametry prezentowanej ciężarówki (moc i moment obrotowy)
    wyrażonej w KM i kW - wykorzystać zewnętrzny plik (moduł) JS zawierający funkcje do przeliczenia
    jednostek mocy i momentu obrotowego.
 */




