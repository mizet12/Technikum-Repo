/*  NODE EXPRESS - EJS (Embedded JavaScript Templating)
    Renderowanie pliku widoku (view file).

    Dodawanie do strony HTML dynamicznej zawartości (dynamic content) - danych dynamicznych .
    Wstrzyknięcie na stronę kodu JavaScript.

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 4001;

// Określenie silnika szablonów (template engine):
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie zawartości pliku index.ejs i przesłanie wynikowego HTML do przeglądarki:
    res.render(
        'index',    // plik widoku
        {           // dane, które zostaną przesłane (wstrzyknięte) do wynikowego HTML
            marka: "vw",
            model: "golf"
        }
    );
    /* UWAGA
        Do renderowanego pliku widoku (index.ejs) są przesyłane dane dynamiczne: marka i model.
        Dane te odpowiadają właściwościom obiektu w notacji literałowej.
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