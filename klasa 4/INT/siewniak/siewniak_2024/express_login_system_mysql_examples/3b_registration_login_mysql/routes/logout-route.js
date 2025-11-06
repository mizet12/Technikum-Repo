

const express = require('express');
const router = express.Router();


// Obsługa żądania GET na roucie /logout:
router.get('/logout', (req, res) => {
    // Zniszczenie sesji:
    req.session.destroy();

    res.send("Dziękujemy za skorzystanie z naszej aplikacji ...");
});

module.exports = router;
