/* NODE EXPRESS - PLIKI STATYCZNE.
   Serwowanie plików statycznych HTML z różnych lokalizacji.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8003; // w razie potrzeby należy zmienić

// Definicja obiektu opcji metody res.sendFile():
const options = {
    root: path.join(__dirname, "/views")
    /* UWAGA
        Katalog /views został określony jako umowny root, względem którego będzie określana ścieżka względna
        przesyłanego pliku, jako argument metody res.sendFile().
     */
};

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Odpowiedź HTTP - przesłanie pliku statycznego do przeglądarki:
    res.sendFile("./home/home.html", options);
    /* UWAGA
        Jako argument metody res.sendFile() użyto ścieżki względnej (statycznej).
        Plik statyczny home.html jest serwowany z foldera ./home patrząc z punktu widzenia
        foldera okreslonego we właściwości root obiektu options.
     */
})

// Obsługa żądania GET na roucie /about:
app.get('/about', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./about/about.html", options); // plik statyczny about.html jest udostępniany w folderze ./about
})

// Obsługa żądania GET na roucie /help:
app.get('/help', (req, res) => {
    // Przesłanie pliku do przeglądarki:
    res.sendFile("./help/help.html", options); // plik help.html jest udostępniany w folderze ./help
})


// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, (err) => {
    // Obsługa ewentualnego błędu:
    if (err) throw (err);

    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

