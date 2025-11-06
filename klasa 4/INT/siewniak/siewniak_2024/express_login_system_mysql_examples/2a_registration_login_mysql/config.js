/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników bez użycia sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

const mysql = require('mysql');

// Konfiguracja połączenia z bazą danych MySQL/MariaDB:
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000', // w razie potrzeby należy zmienić
    database : 'database____'
});

// Połączenie z bazą danych z uwzględnieniem parametrów połączenia:
connection.connect((err) => {
    if (!err) {
        console.log(`Nawiązano połączenie z bazą danych ...`);
    } else {
        console.log(`Uwaga! Wystąpił błąd w połączeniu z bazą danych!`);
    }
});

// Eksport obiektu połączenia z bazą danych:
module.exports = connection;
