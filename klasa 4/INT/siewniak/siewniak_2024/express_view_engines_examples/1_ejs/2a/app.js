/*  NODE EXPRESS - EJS (Embedded JavaScript Templating).

    Przesyłanie do klienta danych dynamicznych.
    Wykorzystanie kodu JS.

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8081;

// Określenie silnika widoków/szablonów:
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");

// Określenie danych, które zostaną przesłane do klienta:
const user = {
    imie: 'Piotr',
    nazwisko: 'Siewniak',
    stanowisko: 'nauczyciel'
}

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Renderowanie zawartości pliku widoku index.ejs (wraz z daną dynamiczną user)
    // i przesłanie wynikowego HTML do przeglądarki:
    res.render(
        './pages/index', { // nazwa pliku widoku ze ścieżką
        /* UWAGA
           Ścieżka do pliku widoku została zdefiniowana jako względna w odniesieniu do foldera widoków views.
        */
        user: user // dane przesyłane do klienta (w postaci obiektu)
    })

})

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

