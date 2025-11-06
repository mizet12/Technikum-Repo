
const mysql = require('mysql');

const dbName = 'baza_auto';
const tableName = "auto"
const dbQuery1 = "CREATE DATABASE" + " " + dbName;

const dbConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
});
const dbPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'baza_auto' 
});
dbConnection.connect(
    (err) => {
        if (err) {
            console.log("Uwaga błąd!", err.message);
            return
        }
        console.log("Uwaga! Połączenie z serwerem MySQL zostało nawiązane pomyślnie ...");

        dbConnection.query(
            dbQuery1, 
            (err, result) => {
                if (err) {
                    console.log("Uwaga błąd! \n", err.message);
                    return
                }
                console.log(`Baza danych '${dbName}' została utworzona ...`);
            }
        );
        const sqlCommand = `CREATE TABLE IF NOT EXISTS ${tableName} (
            id INT(3) NOT NULL AUTO_INCREMENT,
            marka VARCHAR(20),
            model VARCHAR(20),
            rok_produkcji INT(4),
            data_pierwszej_rejestracji VARCHAR(20),
            cena INT(6),
            stan VARCHAR(20),
            nr_rejestracyjny CHAR(8) NOT NULL UNIQUE,
            PRIMARY KEY (id)
        )`;
        dbPool.query(sqlCommand, (err, results) => {
        if (err) {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
        }
        results.message = `Komunikat kontrolny: tabela '${tableName}' została utworzona lub już istnieje ...`;
        console.log(results.message);
        });

        
    }
);