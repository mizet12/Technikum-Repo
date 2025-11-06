/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników z użyciem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const express = require('express');
const path = require('path');
const db = require('../database');

const app = express();
const router = express.Router();

// Obsługa żądania GET na roucie /register:
router.get('/register', (req, res) => {
    // Renderowanie zawartości pliku registration.ejs:
    res.render('registration');
});

// Obsługa żądania POST na roucie /register:
router.post('/register', (req, res) => {
    // Odczyt danych z formularza rejestracyjnego (zawartych w req.body):
    const inputData = {
        username: req.body.username,
        password: req.body.password
        /* UWAGA
            Właściwość req.body zawiera zestaw par klucz-wartość (key-value) danych
            przesłanych w treści żądania.
            Domyślnie właściwość ta jest niezdefiniowana (undefined).
            Pary klucz wartość są definiowane (wypełniane danymi), jako skutek wywołania
            funkcji pośrednich express.urlencoded() oraz express.json().
            Tutaj funkcje te są wywoływane w app.js.
         */
    }
    // Definicja zapytania SQL z parametrem:
    const sql = 'SELECT * FROM registration WHERE username = ?';
    /* UWAGA
        Zdefiniowane zapytanie ma na celu znalezienie w bazie danych rekordu, który w polu username
        zawiera zadaną wartość - daną podaną w formularzu w polu input username (req.body.username).
     */
    // Wykonanie komendy SQL:
    db.query(
        sql, // polecenie SQL z parametrem
        [inputData.username], // argument odpowiadający parametrowi
        (err, data) => { // funkcja obsługi
            if (err) throw err;

            if (data.length > 1) { // jeśli w bazie danych znaleziono rekord zawierający zadany username
                const msg = "Użytkownik " + inputData.username + " już istnieje";
            } else { // jeśli w bazie danych NIE znaleziono rekordu zawierającego zadany username

                // Definicja zapytania SQL z parametrem:
                const sql = 'INSERT INTO registration SET ?';
                /* UWAGA
                    Zdefiniowana komenda ma na celu zapisanie w tabeli bazy danych nowego rekordu.
                    W polach username i password zostaną zapisane wartości pobrane z formularza
                    rejestracyjnego (w polach input username i password).
                 */
                // Wykonanie polecenia SQL:
                db.query(sql, inputData, (err, data) => {
                    if (err) throw err;
                });
                const msg ="Rejestracja przebiegła pomyślnie ...";
            }
            // Renderowanie zawartości pliku registration.ejs z parametrem:
            res.render('registration', {alertMsg:msg});
            console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/login');
    })
});

// Eksport modułu:
module.exports = router;
