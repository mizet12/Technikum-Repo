/*  NODE.JS MYSQL/MARIADB
    Dopisanie wielu rekordów do tabeli (INSERT INTO).

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

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
const dbCommand = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES ?';
const values = [
    ['VW', 'Golf', 2010, 20000, 'SM12345'],
    ['Opel', 'Astra', 2012, 22000, 'SK12345'],
    ['Ford', 'Focus', 2014, 26000, 'SO12345'],
    ['Peugeot', '308', 2016, 28000, 'SD12345'],
    ['Renault', 'Megane', 2018, 29000, 'SJ12345']
];
/* UWAGA
    W tabeli 'tableName' wartości w kolumnie 'nr_rejestracyjny' muszą być unikatowe!
 */
const dbQuery = mysql.format(
        dbCommand,
        [
            tableName, "marka", "model", "rok_produkcji", "cena", "nr_rejestracyjny" ,
            values
        ]
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

    // Wykonanie polecenia MySQL-a o nazwie dbQuery:
    dbConnection.query(dbQuery, (err, data) => {
        if (err) {
            console.log("Uwaga błąd!");
            console.log(err.message);
            return
        }
        console.log('Komunikat kontrolny: dane zostały pomyślnie wpisane do tabeli ...');
        console.log("Liczba dopisanych rekordów: ", data.affectedRows);
    });
});

