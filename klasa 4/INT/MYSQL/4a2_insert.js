/*  NODE.JS MYSQL/MARIADB
    Dopisanie pojedynczego rekordu do tabeli (INSERT INTO).
    Wykorzystanie symboli zastępczych w komendach MySQL'a.

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie zasobów modułu mysql:
const mysql = require('mysql');

// Parmametry połączenia z serwerem MySQL (MariaDB):
const connParameters = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000'
}
// Nazwa bazy danych i tabeli:
const databaseName = 'auto_database';
const tableName = 'auto_table';

// Przygotowanie (prepare) polecenia pozwalającego na wybór bazy danych:
const dbCommand1 = 'USE ??';
const dbQuery1 = mysql.format(dbCommand1, databaseName);
/* UWAGA
    Istnieje możliwość przygotowania polecenia MySQL przed jego wykonaniem.
    W tym celu wybrane identyfikatory i wartości w zapytaniu zastępuje się znakami specjalnymi:
    ?? - dla identyfikatorów i ? - dla wartości.
    Następnie polecenie należy sformatować przy wykorzystaniu metody mysql.format(),
    wpisując w miejsce placeholderów ?? i ? odpowiednie identyfikatory i wartości.
 */

// Przygotowanie polecenia pozwalającego na dopisanie nowego rokoru do tabeli w bazie danych:
const dbCommand2 = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?)';
const values =  ['VW', 'Golf', 2010, 20000, 'SG12342']; // dane do wpisania
/* UWAGA
    W tabeli 'tableName' wartości w kolumnie 'nr_rejestracyjny' muszą być unikatowe!
 */
const dbQuery2 = mysql.format(
        dbCommand2,
        [tableName, 'marka', 'model', 'rok_produkcji', 'cena', 'nr_rejestracyjny', values]);

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection(connParameters);
/* UWAGA
    Parametry połączenia są pobierane ze zmiennej (obiektu) connParameters.
 */

// Nawiązanie połączenia z serwerem MySQL/MariaDB:
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!");
        console.log(err.message);
        return
    }
    console.log("Komunikat kontrolny: nawiązano połączenie z serwerem MySQL ...");

    // Wybór bazy danych:
    dbConnection.query(dbQuery1, (err) => {
        if (err) {
            console.log("Uwaga błąd!");
            console.log(err.message);
            return
        }
        console.log(`Komunikat kontrolny: wybrano bazę danych '${databaseName}' ...`);

        // Dopisanie nowego rekordu do tabeli w bazie danych:
        dbConnection.query(dbQuery2, (err, data) => {
            if (err) {
                console.log("Uwaga błąd!");
                console.log(err.message);
                return
            }
            console.log('Komunikat kontrolny: dane zostały pomyślnie wpisane do tabeli ...');
            console.log("Id dopisanego rekordu: ", data.insertId);
        });
    });
});
