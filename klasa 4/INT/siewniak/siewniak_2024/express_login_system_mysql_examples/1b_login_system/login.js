/*  NODE.JS, MySQL
    System logowania użytkowników z wykorzystaniem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 8031;

// Konfiguracja połączenia z serwerem MySQL/MariaDB:
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'login_data_2'
});

const app = express();

// Konfiguracja parametrów sesji:
app.use(session({
    secret: 'secret_key',
    resave: true,
    saveUninitialized: true
}));

// Ustawienia związane z żądaniem POST
// Umożliwienie parsowania treści żądania w formacie JSON:
app.use(bodyParser.json());
// Umożliwienie analizy treści żądania w postaci łańcucha lub tablicy:
app.use(bodyParser.urlencoded({extended : true}));
/* UWAGA
    W Express wersji wyższej niż 4.16 można stosować metody:
    - express.json()
    - express.urlencoded()
 */

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Przesłanie pliku statycznego (login.html) do klienta:
    res.sendFile(path.join(__dirname + '/login.html'));
});

// Obsługa żądania POST na roucie /login:
app.post('/login', (req, res) => {
    // Pobranie danych użytkownika ze strony logowania:
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    // Wykonanie zapytania SQLa z dwoma parametrami:
    connection.query(
        'SELECT * FROM data_table WHERE username = ? AND password = ?', // polecenie SQL z parametrami
        [user.username, user.password],                                 // argumenty polecenia SQL
        (error, results) => {                                           // funkcja callback
            if (error) {
                console.log(error.sqlMessage);
                res.end("Uwaga! Wystąpił błąd podczas wykonywania zapytania SQL!");
                return;
            }

            if (results.length > 0) { // jeśli użytkownik o podanej nazwie istnieje
                // Nadanie wartości zmiennym sesyjnym logged_in oraz username:
                req.session.logged_in = true;
                req.session.username = user.username;
                // Wyświetlenie informacji pomocniczych w konsoli:
                console.log(req.session.logged_in);
                console.log(req.session.username);

                // Przekierowanie na routa (podstronę) /main:
                res.redirect('/main');
            } else { // jeśli użytkownik o podanej nazwie NIE istnieje
                // Wysłanie informacji do klienta:
                res.send('Uwaga! Wystąpił błąd w czasie uwierzytelniania użytkownika!');
            }            
        }
    )});

// Obsługa żądania GET na roucie /main:
app.get('/main', (req, res) => {
    if (req.session.logged_in == true) { // jeśli użytkownik jest zalogowany
        // Przesłanie odpowiedzi do klienta w postaci kodu HTML:
        res.send(`<h4> 
                    Witamy na naszej stronie ${req.session.username.toUpperCase()} 
                 </h4>`);
    } else { // jeśli użytkownik NIE jest zalogowany
        // Przesłanie odpowiedzi do klienta w postaci kodu HTML:
        res.send(`<h4> 
                    Uwaga! Przed wejściem na stronę ${req.route.path} musisz być zalogowany! 
                  </h4>`);
    }    
});

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie:', PORT);
    console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/');
});
