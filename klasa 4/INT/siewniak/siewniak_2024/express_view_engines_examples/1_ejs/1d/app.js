/*  NODE EXPRESS - EJS (Embedded JavaScript Templating)

    Dodawanie dynamicznej zawartości (danych) na stronę HTML.
    Osadzanie kodu JS na statycznej stronie HTML.

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/

const express = require('express');

// Utworzenie serwera aplikacji:
const app = express();

const PORT = 4004;

// Określenie silnika szablonów (template engine):
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res)=>{
    // Renderowanie zawartości pliku index.ejs i przesłanie wynikowego HTML do klienta:
    res.render(
        'index',    // plik widoku
        {           // dane, które zostaną przesłane (wstrzyknięte) do wynikowego HTML
            marka: "VW",
            model: "" // celowo pusty łańcuch znaków
        }
    );
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