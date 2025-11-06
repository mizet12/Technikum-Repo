/*  NODE.JS MYSQL/MARIADB
    Tworzenie bazy danych i tabeli (CREATE DATABASE, CREATE TABLE).

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie zasobów modułu mysql:
const mysql = require('mysql');

// Opis bazy danych i tabeli:
const databaseName = 'auto_database'; // nazwa bazy danych

const charset = 'utf8'; // system kodowania znaków
const collate = 'utf8_polish_ci'; // zestaw zasad porównywania znaków określonego zestawu znaków
                                // przy użyciu odpowiadającego im kodowania.
const tableName = 'auto_table'; // nazwa tabeli

// Treść polecenia MySQL, którego zadaniem jest utworzenie bazy danych (o ile nie istnieje):
const sqlCommand1 = `CREATE DATABASE IF NOT EXISTS ${databaseName}
DEFAULT CHARACTER SET = ${charset} 
DEFAULT COLLATE = ${collate}
`;

// Treść polecenia MySQL, którego zadaniem jest wybór bazy danych:
const sqlCommand2 = `USE ${databaseName}`;

// Treść polecenia MySQL, którego zadaniem jest utworzenie tabeli (o ile nie istnieje):
const sqlCommand3 = `CREATE TABLE IF NOT EXISTS ${tableName} (
id INT(3) NOT NULL AUTO_INCREMENT,
marka VARCHAR(20),
model VARCHAR(20),
rok_produkcji INT(4),
cena INT(6),
nr_rejestracyjny CHAR(8) NOT NULL UNIQUE,
PRIMARY KEY (id)
)`;

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection({
    // Określenie parametrów połączenia:
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000'
});

// Połączenie z serwerem MySQL:
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!\n", err.message);
        return
    }
    console.log("Połączenie z serwerem MySQL zostało nawiązane pomyślnie ...");

    // Utworzenie bazy danych (o ile nie istnieje):
    dbConnection.query(sqlCommand1, (err, result) => {
        if (err) {
            console.log("Uwaga błąd!\n", err.message);
            return
        }
        console.log(`Baza danych '${databaseName}' została utworzona (lub już istnieje) ...`);

        // Wybór bazy danych:
        dbConnection.query(sqlCommand2, (err, result) => {
            if (err) {
                console.log("Uwaga błąd!\n", err.message);
                return
            }
            console.log(`Wybrano bazę danych '${databaseName}' ...`);

            // Utworzenie tabeli (o ile nie istnieje):
            dbConnection.query(sqlCommand3, (err, result) => {
                if (err) {
                    console.log("Uwaga błąd!\n", err.message);
                    return
                }
                console.log(`Tabela '${tableName}' została utworzona (lub już istnieje) ...`);
            });
        });
    });
});