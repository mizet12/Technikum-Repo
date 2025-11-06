/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników z użyciem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 8042; // w razie potrzeby należy zmienić

// Utworzenie obiektu aplikacji:
const app = express();

// Konfiguracja parsowania (analizy) treści żądania POST
// Umożliwienie analizy treści żądania w formacie JSON:
app.use(bodyParser.json());
// Umożliwienie analizy treści żądania jako łańcucha lub tablicy:
app.use(bodyParser.urlencoded({extended:true}));

/*
app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
*/

// Konfiguracja położenia plików ejs (plików z widokami):
app.set('views', path.join(__dirname, 'views'));
// Konfiguracja silnika dla plików ejs:
app.set('view engine', 'ejs');
// Konfiguracja położenia plików statycznych:
app.use(express.static(path.join(__dirname, 'public')));
// Konfiguracja sesji i ciasteczek:
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

// Import routerów:
const registrationRouter = require('./routes/registration-route');
const loginRouter = require('./routes/login-route');
const desktopRouter = require('./routes/desktop-route');
const logoutRouter = require('./routes/logout-route');

// Powiązanie routerów z aplikacją:
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', desktopRouter);
app.use('/', logoutRouter);

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie:', PORT);
    console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/register');
});
