/* NODE EXPRESS - Jade (Pug) Template Engine.
   Wykorzystanie plików statycznych CSS, JPG.
   Wykorzystanie skryptów JS: inline, wbudowanych i zewnętrznych.

   © Piotr Siewniak, wersja: 22.IV.2022 r.
*/

/* UWAGA
   Uruchomić aplikację najpierw z silnikiem JADE, a dopiero potem PUG.
 */

const express = require('express');
const path = require('path');

// Utworzenie serwera aplikacji:
const app = express();

const PORT = 8088;

// Określenie silnika widoków:
app.set("view engine", "jade");
//app.set("view engine", "pug");
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");

// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(__dirname + '/public'));
/* UWAGA
    Określenie foldera z plikami statycznymi jest tutaj konieczne, ponieważ serwowane są pliki statyczne:
    obrazek, plik ze stylami CSS oraz plik ze skryptem JavaScript.
 */

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie widoku i przesłanie wynikowego HTML do klienta:
    res.render('index');
});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE 1
    Wykonać testy działania aplikacji wykorzystując silnik:
    a) PUG (wariant I);
    b) JADE (wariant II).
   Zinterpretować uzyskane rezulaty.
 */

/* ĆWICZENIE 2
    Zmodyfikować plik widoku index.jade (index.pug):
    1) Moc silnika zaprezentować również w kilowatach. W tym celu zdefiniować funkcję JS,
       która pozwala na przeliczenie mocy wyrażonej w KM na kW. Wywołać tę funkcję w pliku widoku.
    2) Dane ciężarówek przedstawić w postaci tabelarycznej.
 */

/* ĆWICZENIE 3
    Zmodyfikować plik widoku - wszystkie elementy (znaczniki) HTML na stronie widoku utworzyć
    w kodzie JavaScript (łącznie z atrybutami, stylami itd.).
    Utworzone elementy powinny zostać wstawione na pustą stronę po naciśnięciu widocznego
    przycisku sterującego.
 */
