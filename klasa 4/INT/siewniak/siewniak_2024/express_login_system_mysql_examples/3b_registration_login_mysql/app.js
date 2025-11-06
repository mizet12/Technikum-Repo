/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników z użyciem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 8043;

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
*/


app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

/*
const links =
    '<p>' +
    '<a href="/register"> Rejestracja nowego użytkownika </a>' + '<br />' +
    '<a href="/login"> Logowanie </a>' +
    '</p>';
*/

var startRouter = require('./routes/start-route');
var registrationRouter = require('./routes/registration-route');
var loginRouter = require('./routes/login-route');
var desktopRouter = require('./routes/desktop-route');
var logoutRouter = require('./routes/logout-route');

app.use('/', startRouter);
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', desktopRouter);
app.use('/', logoutRouter);

app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie:', PORT);
    console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/');
});
