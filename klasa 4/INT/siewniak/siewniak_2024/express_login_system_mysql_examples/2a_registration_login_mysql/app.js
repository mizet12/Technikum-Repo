/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników bez użycia sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

// Import modułu konfiguracyjnego:
const connection = require('./config');

// Import funkcji obsługi - kontrolerów logowania i rejestracji:
const loginController = require('./controllers/login');
const registerController = require('./controllers/register');

const PORT = 8012; // w razie potrzeby należy zmienić

// Utworzenie obiektu aplikacji:
const app = express();

// Ustawienia związane z parsowaniem (analizą) treści żądania POST:
app.use(bodyParser.json()); // umożliwienie analizy treści żądania w formacie JSON
app.use(bodyParser.urlencoded({extended:true})); // umożliwienie analizy treści żądania jako łańcucha lub tablicy

// Umożliwienie przesyłania plików statycznych z foldera public:
app.use(express.static(path.join(__dirname, 'public')));

// Zmienna pomocnicza reprezentująca menu aplikacji:
const links =
    '<p>' +
    '<a href="/register"> Rejestracja nowego użytkownika </a>' + '<br />' +
    '<a href="/login"> Logowanie </a>' +
    '</p>';

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    lastPage = req.route.path;

    // Przesłanie odpowiedzi do klienta w postaci zawartości zmiennej links:
    res.send(links);
});

// Obsługa żądania GET na roucie /register:
app.get('/register', (req, res) => {
    // Przesłanie odpowiedzi do klienta w postaci zawartości pliku statycznego register.html:
    res.sendFile( __dirname + "/public/register.html" );
})

app.get('/login', (req, res) => {
    // Przesłanie odpowiedzi do klienta w postaci zawartości pliku statycznego login.html:
    res.sendFile( __dirname + "/public/login.html" );
})

// Obsługa żądania POST na roucie /register:
app.post(
    '/register', // route
    registerController.register // funkcja obsługi routa
);
// Obsługa żądania POST na roucie /login:
app.post('/login', loginController.login);


// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie:', PORT);
    console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/');
});
