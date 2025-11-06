/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników z użyciem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require('express');
const router = express.Router();
const db = require('../database');

// Obsługa żądania GET na roucie /login:
router.get('/login', (req, res) => {
    // Renderowanie pliku login.ejs:
    res.render('login');
});

// Obsługa żądania POST na roucie /login:
router.post('/login', (req, res) => {
    // Odczyt danych pobranych z formularza logowania:
    const username = req.body.username;
    const password = req.body.password;
    /* UWAGA
        Dane logowania są pobierane z pól input username i password i przesłane
        do serwera aplikacji za pomocą metody POST.
     */

    // Definicja zapytania SQL:
    const sql = 'SELECT * FROM registration WHERE username = ? AND password = ?';
    /* UWAGA
        Zdefiniowane zapytanie ma na celu wyszukanie w tabeli bazy danych rekordu,
        który w polach username i password ma zapisane zadane wartości - te które
        zostały pobrane z formularza i przesłane na serwer.
     */

    // Wykonanie zapytania SQL:
    db.query(sql, [username, password], (err, data) => {
        if (err) throw err;

        if (data.length > 0) { // jeśli w bazie danych znaleziono rekord spełniający zadane kryteria
            // Utworzenie sesji i ustalenie wartości zmiennych sesyjnych logged_in oraz username:
            req.session.logged_in = true;
            req.session.username= username;

            // Przekierowanie na podstronę /desktop:
            //res.redirect('/desktop');

            // Renderowanie zawartości pliku login.ejs z parametrem alertMsq:
            res.render('login', {alertMsg:"Dziękujemy za zalogowanie się w naszej aplikacji ..."});

            console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/desktop');
        } else { // jeśli w bazie danych NIE znaleziono rekordu spełniającego zadane kryteria
            // Renderowanie zawartości pliku login.ejs z parametrem alertMsq:
            res.render('login', {alertMsg:"Uwaga! Nazwa użytkownika lub hasło jest błędne!"});
        }
    })
})

module.exports = router;
