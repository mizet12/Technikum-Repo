/*  NODE.JS MYSQL/MARIADB
    Tworzenie bazy danych i tabeli (CREATE DATABASE, CREATE TABLE).

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie zasobów modułu mysql:
const mysql = require('mysql');

// Opis parametrów połączenia:
const connParameters = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    multipleStatements: true // wykonywanie wielu poleceń MySQLa w jednej instrukcji query()
}

// Opis bazy danych:
const db = {
    name: 'auto_database', // nazwa bazy danych
    charset: 'utf8', // system kodowania znaków
    collate: 'utf8_polish_ci'
}

// Nazwa tabeli:
const tableName = 'auto_table';


// Treść polecenia MySQL, którego zadaniem jest utworzenie bazy danych (o ile nie istnieje):
const sql1 = `CREATE DATABASE IF NOT EXISTS ${db.name}
DEFAULT CHARACTER SET = ${db.charset} 
DEFAULT COLLATE = ${db.collate}
`;

// Treść polecenia MySQL, którego zadaniem jest wybór bazy danych:
const sql2 = `USE ${db.name}`;

// Treść polecenia MySQL, którego zadaniem jest utworzenie tabeli (o ile nie istnieje):
const sql3 = `CREATE TABLE IF NOT EXISTS ${tableName} (
id INT(3) NOT NULL AUTO_INCREMENT,
marka VARCHAR(20),
model VARCHAR(20),
rok_produkcji INT(4),
cena INT(6),
nr_rejestracyjny CHAR(8) NOT NULL UNIQUE,
PRIMARY KEY (id)
)`;

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
        console.log(`Baza danych '${db.name}' została utworzona (lub już istnieje) ...`);

        // Wybór bazy danych:
        dbConnection.query(sql2, (err, result) => {
            if (err) {
                console.log("Uwaga błąd!\n", err.message);
                return
            }
            console.log(`Wybrano bazę danych '${db.name}' ...`);

            // Utworzenie tabeli (o ile nie istnieje):
            dbConnection.query(sql3, (err, result) => {
                if (err) {
                    console.log("Uwaga błąd!\n", err.message);
                    return
                }
                console.log(`Tabela '${tableName}' została utworzona (lub już istnieje) ...`);
            });
        });
    });
});