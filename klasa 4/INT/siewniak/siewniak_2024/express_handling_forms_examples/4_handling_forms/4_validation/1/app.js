const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const prostokat = require('./custom_modules/prostokat');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended : false });

// Rejestracja funkcji pośredniej i obsługa żądania GET na ścieżce /prostokat.html:
app.get('/prostokat.html', (req, res) => {
    res.sendFile("prostokat.html", {root: path.join(__dirname, 'views')});
})

// Rejestracja funkcji pośredniej i obsługa żądania POST na ścieżce /results:
app.post(
    '/results', // ścieżka żądania POST
    urlencodedParser,
    // Walidacja danych wejściowych:
    [
        // Walidacja długości pierwszego boku:
        check('bok_1')
            .exists()
            .isNumeric({ min: 1, max: 100 }) // dana powinna mieć wartośc liczbową w zadanym zakresie
                .withMessage('Długość pierwszego boku powinna być liczbą dodatnią z przedziału <1, 100>'),
        // Walidacja długości drugiego boku:
        check('bok_2', 'Uwaga błąd! Wprowadź poprawną długość drugiego boku!')
            .exists()
            .isNumeric({ min: 1, max: 100 })
                .withMessage('Długość drugiego boku powinna być liczbą dodatnią z przedziału <1, 100>'),
    ],
    (req, res) => { // definicja funkcji obsługi
        const errors = validationResult(req);
        if (!errors.isEmpty()) { // w przypadku wystąpienia błędu/błędów podczas walidacji danych wejściowych
            return res.json({errors: errors.array()})
        } else {
            // JEŚLI WALIDACJA DANYCH WEJSCIOWYCH ZAKOŃCZYŁA SIĘ SUKCESEM:
            const b1 = req.body.bok_1;
            const b2 = req.body.bok_2;
            res.send({
                pole: prostokat.pole(b1, b2),
                obwod: prostokat.obwod(b1, b2)
            })
        }
    }
)
const PORT = 8041;
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/prostokat.html`)
})  