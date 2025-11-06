/*  NODE.JS MYSQL/MARIADB
    Tworzenie bazy danych (CREATE DATABASE).

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie zasobów modułu mysql:
const mysql = require('mysql');

const dbName = 'auto_database';
const dbQuery = "CREATE DATABASE" + " " + dbName;

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection({
    // Określenie parametrów połączenia:
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000'
});

// Nawiązanie połączenia z serwerem MySQL:
dbConnection.connect(
    (err) => {
        if (err) {
            console.log("Uwaga błąd!", err.message);
            return
        }
        console.log("Uwaga! Połączenie z serwerem MySQL zostało nawiązane pomyślnie ...");

        // Wykonanie komendy MySQL query:
        dbConnection.query(
            dbQuery, // zapytanie MySQL
            (err, result) => { // funkcja zwrotna
                if (err) { // jeśli wystąpił błąd
                    // Obsługa ewentualnego błędu:
                    console.log("Uwaga błąd! \n", err.message);
                    return
                }
                // Jeśli baza została utworzona pomyślnie:
                console.log(`Baza danych '${dbName}' została utworzona ...`);
            }
        );
        /* UWAGA
            Metoda query() pozwala na wykonanie polecenia MySQL w odniesieniu do bazy danych.
            Polecenie może się zakończyć sukcesem lub porażką.
            W pierwszym przypadku rezultat zostanie zwrócony za pośrednictwem parametru result
            funkcji zwrotnej, a w drugim - poprzez parametr err.
         */
    }
);