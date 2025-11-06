/*  NODE.JS MYSQL/MARIADB
    Tworzenie tabeli (CREATE TABLE).
    Pula połączeń.

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie (import) modułu mysql:
const mysql = require('mysql');

const tableName = 'tabela_2';

// Utworzenie obiektu puli połączeń z serwerem MySQL/MariaDB:
const dbPool = mysql.createPool({
    // Ustalenie limitu w (puli) połączeń:
    connectionLimit: 10,
    /* UWAGA
        Limit połączeń oznacza liczbę użytkowników, którzy mogą równocześnie
        korzystać z bazy danych na serwerze.
     */
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
    console.log("Komunikat kontrolny: połączenie zostało nawiązane pomyślnie ...")

    // Definicja komendy MySQL'a:
    const sqlCommand = `CREATE TABLE IF NOT EXISTS ${tableName} (
                            id INT(3) NOT NULL AUTO_INCREMENT,
                            marka VARCHAR(20),
                            model VARCHAR(20),
                            rok_produkcji INT(4),
                            cena INT(6),
                            nr_rejestracyjny CHAR(8) NOT NULL UNIQUE,
                            PRIMARY KEY (id)
    )`;
    // Wykonanie komendy MySQL'a:
    connection.query(sqlCommand, (err, results) => {
        if (err) {
            console.log('Uwaga błąd!');
            console.log(err.message);
            return
        }
        results.message = `Komunikat kontrolny: tabela '${tableName}' została utworzona lub już istnieje ...`;
        console.log(results.message);
    });

    // Zwolnienie połączenia:
    connection.release((err) => {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    });
});

