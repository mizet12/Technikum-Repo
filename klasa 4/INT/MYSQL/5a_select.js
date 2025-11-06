/*  NODE.JS MYSQL/MARIADB
    Wybór rekordów w tabeli (SELECT-WHERE).

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie zasobów modułu mysql:
const mysql = require('mysql');

// Parametry połączenia:
const connParameters = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: 'auto_database'
}
// Nazwa tabeli:
const tableName = 'auto_table';

// Przygotowanie komendy MySQL'a:
const dbCommand = 'SELECT * FROM ?? WHERE ?? = ? OR ?? = ?';
const dbQuery = mysql.format(
    dbCommand,
    [tableName, "marka", "Volkswagen", "marka", "VW"]
);

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection(connParameters);

// Nawiązanie połączenia z bazą danych:
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!");
        console.log(err.message);
        return
    }
    console.log("Komunikat kontrolny: nawiązano połączenie z serwerem MySQL ...");

    // Wykonanie komendy dbQuery:
    dbConnection.query(dbQuery, (err, rows) => {
        if (err) {
            console.log("Uwaga błąd!");
            console.log(err.message);
            return
        }

        // Prezentacja odczytanych danych w konsoli:
        console.log("Odczytane dane: ", rows);
    });
});

