/*  NODE EXPRESS
    EJS (Embedded JavaScript Templating)

    Dodawanie dynamicznej zawartości (danych) na stronę HTML.
    Osadzanie kodu JS na statycznej stronie HTML.

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 4002;

// Określenie silnika widoków (view engine):
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");

// Definicja zmiennej pomocniczej:
const dane_studenta = {
    imie: "PIOTR",
    nazwisko: "SIEWNIAK",
    przedmioty: ['j.polski', 'j.angielski', 'matematyka', 'informatyka']
}
/* UWAGA
    Zmienna pomocnicza dane_studenta została zdefiniowana w celu przechowania w niej danych.
    Dane te zostaną przesłane z serwera aplikacji do pliku widoków (index.ejs) przy wykorzystaniu
    metody res.render(), a nastepnie zostaną osadzone w wynikowym HTML (czyli przesłane do klienta).
 */

// Obsługa żądania GET na roucie (ścieżce)  /:
app.get('/', (req, res)=>{
    // Renderowanie zawartości pliku widoku i przesłanie wynikowego HTML do klienta:
    res.render('index', {data: dane_studenta});
    /* UWAGA
        Do renderowanego pliku widoku index.ejs zostanie przesłany obiekt data.
     */
});

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

/* ĆWICZENIE
    Po uruchomieniu aplikacji monitoruj w przeglądarce zawartość wynikowego, statycznego kodu HTML.
    Zinterpretuj rezulaty.
 */