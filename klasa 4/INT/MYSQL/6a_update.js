/*  NODE.JS MYSQL/MARIADB
    Modyfikacja zawartości rekordu (UPDATE).

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
const dbCommand = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
const dbQuery = mysql.format(
    dbCommand,
    [
        tableName, // nazwa tabeli
        "nr_rejestracyjny", "KSU1235", // nowa wartość w polu nr_rejestracyjny
        "nr_rejestracyjny", "SO12345" // istniejąca (stara) wartość w polu nr_rejestracyjny
    ]
);


// Utworzenie obiektu połączenia:
const dbConnection = mysql.createConnection(connParameters);

// Połączenie z bazą danych:
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!");
        console.log(err.message);
        return
    }
    console.log("Komunikat kontrolny: połączenie z serwerem MySQL zostało nawiązane pomyślnie ...");

    // Wykonanie polecenia MySQL:
    dbConnection.query(dbQuery, (err, data) => {
        if (err) {
            console.log("Uwaga błąd!");
            console.log(err.message);
            return
        }
        if (data.affectedRows > 0) { // jeśli zmodyfikowano jeden lub więcej rekordów
            console.log('Komunikat kontrolny: dane zostały zmodyfikowane pomyślnie ...');
        }
        else {
            console.log('Komunikat kontrolny: dane NIE zostały zmodyfikowane ...');
        }
    });
});

