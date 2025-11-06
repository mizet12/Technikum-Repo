/*  NODE.JS MYSQL/MARIADB
    Modyfikacja danych w tabeli (UPDATE).
    Pula połączeń.

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie (import) modułu mysql:
const mysql = require('mysql');

const tableName = 'tabela_2'; // nazwa tabeli w bazie danych

// Utworzenie obiektu puli połączeń z serwerem MySQL/MariaDB:
const dbPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'node_baza_auto_2' // nazwa bazy danych
});

// Nawiązanie połączenia:
dbPool.getConnection((err, connection) => {
    if (err) {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    }
    console.log("Uwaga! Połączenie zostało nawiązane ...")

    // Definicja komenty MySQL'a:
    const sqlCommand = `UPDATE ${tableName}
           SET nr_rejestracyjny = ?
           WHERE nr_rejestracyjny = ?`;

    // Określenie danych:
    const data = [
        'SJ88888', // nowa wartość
        'SK00007' // wartość istniejąca
    ];

    // Wykonanie polecenia sqlCommand:
    connection.query(sqlCommand, data, (err, results) => {
        if (err) {
            console.log('Uwaga błąd!');
            return console.error(err.message);
        }
        console.log('Liczba zmienionych rekordów: ', results.affectedRows);
    });

    // Zwolnienie połączenia:
    connection.release((err) => {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    });
});

