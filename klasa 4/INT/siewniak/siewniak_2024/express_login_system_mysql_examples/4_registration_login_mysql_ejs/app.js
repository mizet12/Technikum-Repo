/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników,
    Wykorzystanie sesji i ciasteczek.
    Wykorzystanie plików EJS.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

// Utworzenie routera:
const router = require('./routes/router');

const PORT = 8050;

// Utworzenie obiektu aplikacji:
const app = express();

// Konfiguracja położenia plików z szablonami ejs:
app.set('views', path.join(__dirname, 'views'));
// Ustawienie silnika widoków ejs:
app.set('view engine', 'ejs');

// Konfiguracja parsowania (analizy) treści żądania POST:
app.use(bodyParser.json()); // umożliwienie parsowania w formacie JSON
app.use(bodyParser.urlencoded({extended:true})); // umożliwienie parsowania łańcucha lub tablicy

// Konfigurowanie położenia plików statycznych:
app.use(express.static(path.join(__dirname, 'public')));

// Konfigurowanie sesji (i ciasteczek):
app.use(session({
    secret: 'secter_key',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

// Ustawienie routera dla aplikacji:
app.use('/', router);

// Uruchomienie serera aplikacji:
app.listen(PORT, function () {
    console.log('Serwer nasłuchuje na porcie', PORT);
});

module.exports = app;
