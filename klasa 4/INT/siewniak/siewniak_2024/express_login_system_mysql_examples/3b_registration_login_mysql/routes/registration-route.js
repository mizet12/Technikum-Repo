const express = require('express');
const path = require('path');
const db = require('../config/database');

const app = express();
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('registration');
});

// Obsługa żądania POST na roucie /register:
router.post('/register', (req, res) => {
    // Odczyt danych z formularza rejestracyjnego:
    const inputData = {
        username: req.body.username,
        password: req.body.password
        /* UWAGA
            Właściwość req.body zawiera zestaw par klucz-wartość (key-value) danych przesłanych
            w treści żądania.
            Domyślnie właściwość ta jest niezdefiniowana (undefined).
            Pary klucz wartość są definiowane (wypełniane danymi), jako skutek wywołania funkcji
            pośrednich express.urlencoded() or express.json().
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
    db.query(sql, [inputData.username], (err, data) => {
        if (data.length > 0) { // jeśli w bazie danych znaleziono rekord zawierający zadany username
            const msg = "Użytkownik " + inputData.username + " już istnieje";
            res.render('registration', {alertMsg:msg});
        } else { // jeśli w bazie danych NIE znaleziono rekordu zawierającego zadany username

            // Definicja zapytania SQL z parametrem:
            const sql = 'INSERT INTO registration SET ?';
            /* UWAGA
                Zdefiniowana komenda ma na celu zapisanie w tabeli bazy danych nowego rekordu.
                W polach username i password zostaną zapisane wartości pobrane z formularza
                rejestracyjnego (w polach input username i password).
             */
            // Wykonanie polecenia SQL:
            db.query(sql, inputData, (err) => {
                if (err) throw err;
            });

            res.redirect('login');
        }
    })
});

// Eksport modułu:
module.exports = router;
