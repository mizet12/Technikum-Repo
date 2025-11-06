/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników,
    Wykorzystanie sesji i ciasteczek.
    Wykorzystanie plików EJS.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require('express');
const router = express.Router();
const connection  = require('../config/db');


// Menu aplikacji:
const links =
    '<p>' +
    '<a href="/register"> Rejestracja nowego użytkownika </a>' + '<br />' +
    '<a href="/login"> Logowanie </a>' +
    '</p>';

// Obsługa żądania GET na roucie /:
router.get('/', (req, res) => {
    res.send(links);
})

// Obsługa żądania GET na roucie /login:
router.get('/login', (req, res) => {
    // Renderowanie pliku login.ejs:
    res.render('login', {
        title: 'Login',
        name: '',
        password: ''
    })
})

// // Obsługa żądania POST na roucie /login:
router.post('/login', (req, res) => {
    // Odczyt wartości name i password z formularza (zapamiętanych w req.body):
    const name = req.body.name;
    const password = req.body.password;
    //console.log(name);
    //console.log(password);

    // Wykonanie zapytania SQL z parametrami:
    connection.query(
        'SELECT * FROM accounts WHERE name = ? AND password = ?', // parametryzowane zapytanie SQL
        [name, password], // argumenty zapytania
        (err, rows) => { // funkcja obsługi
            if (err) throw err;

            if (rows.length > 0) { // jeśli w bazie danych istnieje użytkownik o podanej nazwie
                req.session.logged_in = true;
                req.session.name = name;
                res.redirect('/home');
            }
            else {
                console.log("Nie znaleziono takiego użytkownika!");
                res.send(links);
            }
        })
})

// Obsługa żądania GET na roucie /register:
router.get('/register', (req, res) => {
    // Renderowanie pliku register.ejs:
    res.render('register', {
        title: 'Registration Page',
        name: '',
        email: '',
        password: ''
    })
})

// Obsługa żądania POST na roucie /register:
router.post('/register', (req, res) => {
    // Pobranie wartości z pól formularza rejestracyjnego (zapamiętanych w req.body):
    const user ={
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }

    // Wykonanie polecenia SQL:
    connection.query(
        'INSERT INTO accounts SET ?', // polecenie SQL z parametrami
        user, // argumenty odpowiadające parametrom zapytania
        (err, result) => { // funkcja obsługi (callback)
            if (err) {
                // Przesłanie odpowiedzi do klieanta:
                res.send("Uwaga! Wystąpił błąd zapisu użytkownika w bazie danych");                
            } else {
                // Przekierowanie na stronę logowania:
                res.redirect('/login');
            }
        })
})

// Obsługa żądania GET na roucie /home:
router.get('/home', (req, res) => {
    // Renderowanie pliku home.ejs:
    res.render('home', {
        name: req.session.name
    })
});

// Obsługa żądania GET na roucie /logout:
router.get('/logout', (req, res) => {
    // Zniszczenie sesji:
    req.session.destroy();
    // Przesłanie odpowiedzi do klienta:
    res.send("Dziękujemy za skorzystanie z naszej aplikacji ...");
});

module.exports = router;
