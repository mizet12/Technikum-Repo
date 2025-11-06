/*  NODE.JS MYSQL/MARIADB
    Dopisanie pojedynczego rekordu do tabeli (INSERT INTO).

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie zasobów modułu mysql:
const mysql = require('mysql');

const connConfig = {
    // Określenie parametrów połączenia:
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000'
}

const databaseName = 'auto_database';
const tableName = 'auto_table';

// Definicja komendy SQL'a pozwalającej na wybór bazy danych:
const sqlCommand1 = `USE ${databaseName}`;

// Definicja komendy SQL'a pozwalającej na dopisanie jednego rekordu do tabeli:
const sqlCommand2 = `INSERT INTO ${tableName} (
marka, model, rok_produkcji, cena, nr_rejestracyjny
)
VALUES (
'VW', 'Golf', 2010, 20000, 'SG13347'
)`;
/* UWAGA
    W tabeli 'tableName' wartości w kolumnie 'nr_rejestracyjny' muszą być unikatowe!
 */

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection(connConfig);

// Nawiązanie połączenia z serwerem MySQL/MariaDB:
dbConnection.connect((err) => {
    if (err) {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    }
    console.log("Komunikat kontrolny: połączenie z serwerem MySQL zostało nawiązane pomyślnie...");

    // Wybór bazy danych:,
    dbConnection.query(sqlCommand1, (err) => {
        if (err) {
            console.log('Uwaga błąd!');
            console.log(err.message);
            return
        }
        console.log(`Komunikat kontrolny: wybrano bazę danych '${databaseName}' ...`);

        // Dopisanie nowego rekordu do tabeli w bazie danych:
        dbConnection.query(sqlCommand2, (err) => {
            if (err) {
                console.log('Uwaga błąd!');
                console.log(err.message);
                return
            }
            console.log(`Komunikat kontrolny: dane zostały pomyślnie wpisane do tabeli '${tableName}' ...`);
        });
    });
});
