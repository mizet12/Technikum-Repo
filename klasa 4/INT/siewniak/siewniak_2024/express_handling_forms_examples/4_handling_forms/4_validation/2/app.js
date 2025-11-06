const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator');

const prostokat = require('./custom_modules/prostokat');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended : false });
app.get('/prostokat.html', (req, res) => {
    res.sendFile("prostokat.html", {root: path.join(__dirname, 'views')});
})
app.post(
    '/results',
    urlencodedParser,
    // Walidacja danej na podstawie zdefiniowanego walidatora:
    body('bok_1').custom((bok_1) => {
            if (bok_1 === '')
                throw new Error("Wprowadź długość pierwszego boku!");
            if (isNaN(bok_1))
                throw new Error("Wprowadź długość pierwszego boku jako liczbę!");
            if ((bok_1 < 1) || (bok_1 > 100))
                throw new Error("Długość pierwszego boku powinna być liczbą należącą do przedziału <1, 100>!");
            else return true;
        }) ,
    // Walidacja danej na podstawie zdefiniowanego walidatora:
    body('bok_2').custom((bok_2) => {
            if (bok_2 === '')
                throw new Error("Wprowadź długość drugiego boku!");
            if (isNaN(bok_2))
                throw new Error("Wprowadź długość drugiego boku jako liczbę!");
            if ((bok_2 < 1) || (bok_2 > 100))
                throw new Error("Długość drugiego boku powinna być liczbą należącą do przedziału <1, 100>!");
            else
                return true;
        }),
    (req, res) => { // definicja funkcji obsługi
        const errors = validationResult(req);
        if (!errors.isEmpty()) { // w przypadku wystąpienia błędu/błędów podczas walidacji danych wejściowych
            const errorsArray = errors.array();
            var errorsMessages = ``;
            errorsArray.forEach((element) => {
                if (element.msg !== '') errorsMessages +=
                    `<p style="color: red"> Uwaga! ${element.msg} </p>`;
            })
            res.send(errorsMessages);
        } else {

            const b1 = req.body.bok_1;
            const b2 = req.body.bok_2;
            res.send(
                "<h4 style='color: blue'>WYNIKI</h4>" +
                "<p>Pole wynosi " + prostokat.pole(b1, b2) + "</p>" +
                "<p>Obwód wynosi " + prostokat.obwod(b1, b2) + "</p>"
            );
        }
    }
)
const PORT = 8043;
const server = app.listen(PORT, () => {
    console.log(`Wpisz w pasku adresu przeglądarki:`);
    console.log(`http://127.0.0.1:${PORT}/prostokat.html`);
})  