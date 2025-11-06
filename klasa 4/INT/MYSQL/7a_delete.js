/*  NODE.JS MYSQL/MARIADB
    Usunięcie rekordu z tabeli (DELETE).

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
const dbCommand = 'DELETE from ?? where ?? = ?';
const dbQuery = mysql.format(
    dbCommand,
    [tableName, "nr_rejestracyjny", "KSU1235"]);

// Utworzenie obiektu połączenia z bazą danych:
const dbConnection = mysql.createConnection(connParameters);
// Połączenie z bazą danych:
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!");
        console.log(err.message);
        return
    }
    console.log("Komunikat kontrolny: połączenie z serwerem MySQL zostało nawiązane pomyślnie ...");

    // Wykonanie komendy MySQL-a:
    dbConnection.query(dbQuery, (err, data) => {
        if (err) {
            console.log("Uwaga błąd!");
            console.log(err.message);
            return
        }
        if (data.affectedRows > 0) {
            console.log('Komunikat kontrolny: wybrany rekord został usunięty ...');
        }
        else {
            console.log('Uwaga! Wybrany rekord NIE został usunięty ...');
        }
    });
});

