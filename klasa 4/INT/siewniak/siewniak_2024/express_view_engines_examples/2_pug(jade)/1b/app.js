/* NODE EXPRESS - Jade (Pug) Template Engine.
   Wykorzystanie plików statycznych CSS, JPG.

   © Piotr Siewniak, wersja: 22.IV.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8085;

// Określenie silnika widoków:
app.set("view engine", "pug");
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");
// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(__dirname + '/public'));
/* UWAGA
    Określenie foldera z plikami statycznymi jest tutaj konieczne, ponieważ serwowane są
    pliki statyczne: obrazek oraz plik ze stylami CSS.
    Pliki statyczne mogą być udostępniane zarówno bezpośrednio z katalogu publicznego /public,
    jak również z poziomu jego podkatalogów.
 */

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Renderowanie widoku i przesłanie wynikowego HTML do klienta:
    res.render('index');
    /* UWAGA
        Powyżej: ścieżka do pliku widoku została określona w sposób wględny w odniesieniu
        do foldera widoków /views.
     */
});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE 1
    Zmodyfikować plik widoku index.pug: dane ciężarówki Jelcz przedstawić w postaci tabelarycznej.
 */

/* ĆWICZENIE 2
    Utworzyć stronę widoku o takiej samej funkcjonalności przy wykorzystaniu silnika EJS.
 */