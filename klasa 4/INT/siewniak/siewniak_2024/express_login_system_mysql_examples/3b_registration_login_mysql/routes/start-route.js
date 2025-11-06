

const express = require('express');
const router = express.Router();


// Obsługa żądania GET na roucie /logout:
router.get('/', (req, res) => {
    res.render('start');
});

module.exports = router;