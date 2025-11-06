/*  NODE.JS MYSQL/MARIADB
    Wstawienie nowego rekordu z danymi do tabeli (INSERT INTO).
    Pula połączeń.

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

const mysql = require('mysql');

// Nazwa tabeli:
const tableName = 'tabela_2';

// Dane do wpisania do rekordu tabeli tableName:
const data = {
    marka: 'Opel',
    model: 'Astra',
    rok_produkcji: 2020,
    cena: 60000,
    nr_rejestracyjny: 'SK00007'
}

// Utworzenie obiektu puli połączeń z serwerem MySQL/MariaDB:
const dbPool = mysql.createPool({
    connectionLimit: 10, // ustalenie limitu w (puli) połączeń
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

    // Definicja komenty SQL-a:
    const dbCommand = `
    INSERT INTO ${tableName} (
      marka, model, rok_produkcji, cena, nr_rejestracyjny
    ) 
    VALUES (
      '${data.marka}', '${data.model}', ${data.rok_produkcji}, ${data.cena}, '${data.nr_rejestracyjny}' 
    )`;

    console.log(dbCommand);

    // Wstawienie nowego rekordu do tabeli:
    connection.query(dbCommand, (err) => {
        if (err) {
            console.log('Uwaga błąd!');
            return console.error(err.message);
        }
        console.log("Komunikat kontrolny: rekord został dopisany do tabeli ...")
    });

    // Zwolnienie połączenia:
    connection.release((err) => {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    });
});
