/*  NODE.JS MYSQL/MARIADB
    Selekcja wybranych rekordów w tabeli (SELECT-WHERE).
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
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'node_baza_auto_2'
});

// Nawiązanie połączenia:
dbPool.getConnection((err, connection) => {
    if (err) {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    }
    console.log("Uwaga! Połączenie zostało nawiązane ...")

    // Definicja parametryzowanego polecenia MySQL'a:
    const sqlCommand = `SELECT ??, ??, ?? FROM ${tableName} WHERE ?? = ?`;

    // Określenie danych:
    const data = [
        // Nazwy kolumn do wyświetlenia:
        'model',
        'rok_produkcji',
        'cena',
        // Nazwa pola (kolumny) w klauzuli WHERE:
        'marka',
        // Wartość zadana w klauzuli WHERE:
        'Opel'
    ];

    // Wykonanie polecenia sqlCommand dla zadanych danych 'data':
    connection.query(sqlCommand, data, (err, results) => {
        if (err) {
            console.log('Uwaga błąd!');
            return console.error(err.message);
        }
        console.log('Dane: ', results);
    });

    // Zwolnienie połączenia:
    connection.release((err) => {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    });
});
