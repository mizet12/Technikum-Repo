/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników z użyciem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require('express');
const router = express.Router();


// Obsługa żądania GET na roucie /logout:
router.get('/logout', (req, res) => {
    // Zniszczenie (usunięcie) sesji:
    req.session.destroy();
    // Przesłanie odpowiedzi do klienta
    res.send("Dziękujemy za skorzystanie z naszej aplikacji ...");
});

module.exports = router;
