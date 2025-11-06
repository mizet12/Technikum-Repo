/*  NODE.JS MYSQL/MARIADB
    Wstawienie rekordu z danymi do tabeli (INSERT INTO).
    Wykorzystanie funkcji.

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

const mysql = require('mysql');

// Nazwa bazy danych:
const dbName = 'auto_database_2';
// Nazwa tabeli:
const tableName = 'auto_table';
// Określenie danych:
let values =  ['VW', 'Golf', 2010, 20000, 'GD12345'];
/* UWAGA
    W tabeli 'tableName' wartości w kolumnie 'nr_rejestracyjny' muszą być unikatowe!
 */

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: dbName
});

// Definicja funkcji umożliwiającej dopisanie pojedynczego rekordu:
const insertRow = (connectionObject, tableName, data) => {
    let dbCommand = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?)';
    /* UWAGA
        W MySQL/MariaDB istnieje możliwość przygotowania polecenia przed jego wykonaniem.
        W tym celu wybrane identyfikatory i wartości w zapytaniu zastępuje się
        znakami specjalnymi ?? - dla identyfikatorów i ? - dla wartości.
        Następnie tak zaimplementowane polecenie należy sformatować przy wykorzystaniu
        metody mysql.format(), wpisując w miejsce placeholderów ?? i ? odpowiednie
        identyfikatory i wartości.
     */
    const dbQuery = mysql.format(
        dbCommand,
        [
            tableName, // nazwa tabeli
            'marka', 'model', 'rok_produkcji', 'cena', 'nr_rejestracyjny', // nazwy pól w tabeli
            data // wartości wpisywane do kolejnych (odpowiednich) pól
        ]
    );

    // Wykonanie komendy MySQL-a:
    connectionObject.query(dbQuery, (err, data) => {
        if (err) {
            console.log("Uwaga błąd!");
            console.log(err.message);
            return
        }
        console.log('Komunikat kontrolny: dane zostały pomyślnie wpisane do tabeli ...');
        console.log("Id dopisanego rekordu: ", data.insertId);
    });
}

// Nawiązanie połączenia z serwerem MySQL/MariaDB:
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!");
        console.log(err.message);
        return
    }
    console.log("Komunikat kontrolny: nawiązano połączenie z serwerem MySQL ...");

    // Wstawienie nowego rekordu z danymi values do tabeli tableName:
    insertRow(dbConnection, tableName, values);
});
