/*  NODE EXPRESS - EJS (Embedded JavaScript Templating)
    Dołączanie podszablonów (partials) do szablonów stron - funkcja include().

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8088; // w razie potrzeby należy zmienić

// KONFIGURACJA APLIKACJI
// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(__dirname + '/public'));
// Określenie silnika widoków:
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie pliku szablonu layout.ejs i przesłanie wynikowego HTML do klienta:
    res.render('./pages/layout/layout');
    /* UWAGA
       Ścieżka do pliku widoku layout.ejs została podana jako względna w odniesieniu
       do katalogu widoków /views.

       Do widoku nie są przesyłane żadne dane dynamiczne.
     */
});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE 1
    Zmodyfikować aplikację - wykorzystać routera zdefiniowanego w zewnętrznym pliku (module)
    w oparciu o funkcję (obiekt) router.
 */

/* ĆWICZENIE 2
    Uzupełnić aplikację o blok nav zawierający menu aplikacji.
    Wspomniane menu powinno posiadać 4 opcje odpowiadające ciężarówkom (wywrotkom) wymienionym
    w aktualnym pliku zawartości content.ejs.
    Każdej opcji menu (ciężarówce) powinnien odpowiadać odrębny plik z zawartością  - opisem
    (zdjęciem i krótkimi informacjami tekstowymi) danej ciężarówki.

    Zaprojektować i zrealizować system sterowania menu aplikacji.
 */