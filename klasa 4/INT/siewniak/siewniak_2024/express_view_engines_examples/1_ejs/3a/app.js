/*  NODE EXPRESS - EJS (Embedded JavaScript Templating)
    Dołączanie podszablonów (partials) do szablonów stron - funkcja include().

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8082; // w razie potrzeby należy zmienić

// KONFIGURACJA APLIKACJI
// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(__dirname + '/public'));
/* UWAGA
    Określenie foldera z plikami statycznymi jest tutaj konieczne,  ponieważ serwowany jest obrazek
    oraz plik ze stylami CSS, które stanowią pliki statyczne.
    Wymienione pliki statyczne są zapisane w katalogu /public, jako podkatalogu roota aplikacji.
 */
// Określenie silnika widoków:
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");
/* UWAGA
    Widoki są zbudowane przy wykorzystaniu silnika EJS. Folder widoków został określony jako /views.
    Pliki widoków są przechowywane w podkatalogach /pages i /partals katalogu /views.
 */


// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie pliku widoku index.ejs i przesłanie wynikowego HTML do klienta:
    res.render('./pages/index');
    /* UWAGA
        Położenie pliku szablonu (widoku) index.ejs zostało określone przy użyciu ścieżki względnej
        w odniesieniu do foldera widoków /views.
     */
});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE
   Korzystając z metodologii przedstawionej w przykładzie zaprojektować złożony 3-kolumnowy szablon strony,
   w którym poszczególne kolumny odpowiadają:
   1) lewa kolumna - blok nawigacji/menu (nav);
   2) środkowa kolumna - blok główny (main);
   3) prawa kolumna - blok reklam (mp. aside).
   Zawartość dynamiczną każdej z części składowych szablonu pobrać i wstawić do szablonu
   z odpowiadających im - przygotowanych plików.
 */