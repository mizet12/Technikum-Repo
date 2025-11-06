/*  NODE.JS MYSQL/MARIADB
    Wykorzystanie procedur składowanych MySQL (MySQl stored procedures).

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie zasobów modułu mysql:
const mysql = require('mysql');

// Opis parametrów połączenia:
const connParameters = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000'
}

// Opis bazy danych:
const db = {
    name: 'auto_database', // nazwa bazy danych
    charset: 'utf8', // system kodowania znaków
    collate: 'utf8_polish_ci'
}

// Nazwa tabeli:
const tableName = 'auto_table';


// Treść polecenia MySQL, którego zadaniem jest wybór bazy danych:
const sql1 = `USE ${db.name}`;


// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection(connParameters);

// Połączenie z serwerem MySQL:
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!\n", err.message);
        return
    }
    console.log("Połączenie z serwerem MySQL zostało nawiązane pomyślnie ...");

    // Utworzenie bazy danych (o ile nie istnieje):
    dbConnection.query(sql1, (err, result) => {
        if (err) {
            console.log("Uwaga błąd!\n", err.message);
            return
        }
        console.log(`Wybrano bazę danych '${db.name}' ...`);
    })

    dbConnection.query(
        'CALL auto_count()', // polecenie MySQL
        (err, rows, fields) => { // funkcja zwrotna
            if (err) {
                return console.log("Uwaga błąd!", err.message);
            }

            // Wyswietlenie wyniku:
            console.log("Liczba samochodów każdej z marek: ", rows[0]);
        }
    );
});