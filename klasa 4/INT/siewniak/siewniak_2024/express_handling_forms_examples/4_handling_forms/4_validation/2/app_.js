const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Validator = require('validatorjs');
const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

const prostokat = require('./custom_modules/prostokat');
const app_ = express();
const urlencodedParser = bodyParser.urlencoded({ extended : false });

const validationRules = {
    "bok_1": "required|min: 1|max: 100"
}
const validationRules2 = {
    "bok_2": "required|min: 1|max: 100"
}
const customMessages1 = [
    'Długość pierwszego boku powinna być liczbą dodatnią z przedziału <1, 100>',
];
const customMessages2 = [
    'Długość drugiego boku powinna być liczbą dodatnią z przedziału <1, 100>',
];

// Rejestracja funkcji pośredniej i obsługa żądania GET na ścieżce /prostokat.html:
app_.get('/prostokat.html', (req, res) => {
    res.sendFile("prostokat.html", {root: path.join(__dirname, 'views')});
})

// Rejestracja funkcji pośredniej i obsługa żądania POST na ścieżce /results:
app_.post(
    '/results', // ścieżka żądania POST
    urlencodedParser,
    (req, res) => { // definicja funkcji obsługi
        const validation1 = new Validator(req.body, validationRules, customMessages);
        if (validation.fails()) {
            res.send(validation.messages.customMessages);
        } else {
            // JEŚLI WALIDACJA DANYCH WEJSCIOWYCH ZAKOŃCZYŁA SIĘ SUKCESEM:
            const b1 = req.body.bok_1;
            const b2 = req.body.bok_2;
            res.send(
                "<h4 style='color: blue'>WYNIKI</h4>" +
                "<p>Pole wynosi " + String(prostokat.pole(b1, b2)) + "</p>" +
                "<p>Obwód wynosi " + String(prostokat.obwod(b1, b2)) + "</p>"
            );
        }
})
const PORT = 8043;
const server = app_.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/prostokat.html`)
})  