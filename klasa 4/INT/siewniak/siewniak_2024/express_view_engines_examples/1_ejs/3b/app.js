/*  NODE EXPRESS - EJS (Embedded JavaScript Templating)

    Funkcja include() - wstawianie części składowych (partials) szablonów stron.

    Przesyłanie danych dynamicznych do plików szablonu i podszablonów.
    Wykorzystanie kodu JS osadzonego na stronie widoku (szablonu).

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();
const PORT = 8083; // w razie potrzeby należy zmienić

// KONFIGURACJA APLIKACJI
// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(__dirname + '/public'));
// Określenie silnika widoków:
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");


// Zmienna pomocnicza - określenie danych przesyłanych do klienta:
const wywrotki = [
    {
        marka: "Jelcz",
        model: "W640"
    },
    {
        marka: "Steyr",
        model: "1490"
    },
    {
        marka: "Tatra",
        model: "148"
    },
    {
        marka: "Berliet",
        model: "GBH-12"
    },
]

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie pliku widoku index.ejs i przesłanie wynikowego HTML do klienta:
    res.render('./pages/index', {list: wywrotki});
});
/* UWAGA
    Do pliku widoku index.ejs zostały przesłane dane (obiekt) list.
 */

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE
   Zmodyfikować kod aplikacji - opis pod zdjęciem (marka, model i źródło) wprowadzić przy użyciu formularza
   i przesłać do (serwera) aplikacji za pomocą metody POST.
 */