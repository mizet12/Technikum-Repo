

const express = require('express');
const router = express.Router();

router.get('/desktop', (req, res) => {

    if (req.session.logged_in) { // jeśli użytkownik jest zalogowany
        // Renderowanie zawartości pliku desktop.ejs z parametrem username:
        res.render('desktop', {username: req.session.username});

    } else { // jeśli użytkownik NIE został zalogowany
        // Przekierowanie na podstronę logowania:
        res.redirect('/login');
    }
});

// Eksport modułu:
module.exports = router;
