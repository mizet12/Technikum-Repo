/*  NODE EXPRESS - EJS (Embedded JavaScript Templating).

    Wykorzystanie osobnych widoków dla różnych żądań GET.
    Wykorzystanie w kodzie widoku danych dynamicznych oraz kodu JavaScript.

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/
const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8086;

// Określenie silnika widoków:
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");

// Zmienna pomocnicza:
const user = {
    imie: 'Piotr',
    nazwisko: 'Siewniak',
    stanowisko: 'nauczyciel'
}

// Zmienna pomocnicza:
const users = [
    {login: 'piotr', stanowisko: 'nauczyciel' },
    {login: 'maciej', stanowisko: 'kierownik' },
    {login: 'edyta', stanowisko: 'nauczyciel' },
    {login: 'aneta', stanowisko: 'nauczyciel' },
    {login: 'izabela', stanowisko: 'nauczyciel' }
]

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie widoku index.ejs (wraz z daną dynamiczną)
    // i przesłanie wynikowego HTML do klienta:
    res.render(
        './pages/index', { // widok (plik widoku)
        user: user // dana dynamiczna
    })
})

// Obsługa żądania GET na roucie /users:
app.get('/users', (req, res) => {
    // Renderowanie widoku index.ejs (wraz z danymi dynamicznymi)
    // i przesłanie wynikowego HTML do klienta:
    res.render(
        'pages/users', { // widok
        users: users // dana dynamiczna
    })
})

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

