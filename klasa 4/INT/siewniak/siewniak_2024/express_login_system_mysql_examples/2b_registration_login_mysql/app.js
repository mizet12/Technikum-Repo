/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników bez użycia sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

// Import funkcji obsługi (kontrolerów) logowania i rejestracji:
const loginController = require('./controllers/login');
const registerController = require('./controllers/register');

const PORT = 8032;

const app = express();

// Konfiguracja parsowania (analizy) treści żądania POST:
app.use(bodyParser.json()); // umożliwienie analizy treści żądania w formacie JSON
app.use(bodyParser.urlencoded({extended:true})); // umożliwienie analizy treści żądania jako łańcucha lub tablicy

// Zezwolenie na przesyłanie plików statycznych zawartych w folderze public:
app.use(express.static(path.join(__dirname, 'public')));

// Menu aplikacji:
const links =
    '<p>' +
    '<a href="/register"> Rejestracja nowego użytkownika </a>' + '<br />' +
    '<a href="/login"> Logowanie </a>' +
    '</p>';

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    lastPage = req.route.path;

    // Przesłanie do klienta zmiennej pomocniczej z menu:
    res.send(links);
});

// Obsługa żądania GET na roucie /register:
app.get('/register', (req, res) => {
    // Przesłanie do klienta zawartości pliku statycznego register.html:
    res.sendFile(__dirname + "/public/register.html" );
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html" );
})

app.get('/app', (req, res) => {
    res.sendFile(__dirname + "/public/app.html" );
})

app.post('/register', registerController.register);
app.post('/login', loginController.login);

app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie:', PORT);
    console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/');
});
