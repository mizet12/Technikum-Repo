/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników z użyciem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require('express');
const router = express.Router();

// Obsługa żądania GET na roucie /desktop:
router.get('/desktop', (req, res) => {
    if (req.session.logged_in) { // jeśli użytkownik jest zalogowany
        // Renderowanie zawartości pliku desktop.ejs z parametrem username:
        res.render('desktop', {username: req.session.username});

        console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/logout');
    } else { // jeśli użytkownik NIE został zalogowany
        // Przekierowanie na podstronę logowania:
        res.redirect('/login');
    }
});

// Eksport modułu:
module.exports = router;
