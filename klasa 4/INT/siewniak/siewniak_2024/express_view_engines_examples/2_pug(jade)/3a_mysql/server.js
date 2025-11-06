/* NODE EXPRESS.
   Jade (Pug) Template Engine.
   Wykorzystanie bazy danych MySQL.

   © Piotr Siewniak, wersja: 22.IV.2022 r.
*/

const express = require('express');
const path = require('path');
const mysql = require('mysql');

// Utworzenie obiektu aplikacji:
const app = express();
const PORT = 8084;

// KONFIGURACJA APLIKACJI DO UŻYCIA WIDOKÓW I PLIKÓW STATYCZNYCH
// Określenie silnika widoków:
app.set("view engine", "jade");
// Określenie foldera zawierającego pliki widoków:
app.set('views', path.join(__dirname, 'views'));
// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(path.join(__dirname, 'public')));

// Parametry połączenia z bazą danych na serwerze MySQL:
const connParameters = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: 'node_baza_auto'
}
// Nazwa tabeli w bazie danych:
const tableName = 'tabela';

// Przygotowanie komendy MySQL'a:
const dbCommand = 'SELECT * FROM ?? WHERE ?? = ?';
/* UWAGA
    Powyżej wykorzystano parametryzowane zapytanie MySQL-a.
 */

// Ustalenie wartości parametrów w zapytaniu MySQL:
let dbQuery = mysql.format(
    dbCommand,
    [tableName, "marka", "VW"]
);

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection(connParameters);

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Nawiązanie połączenia z bazą danych na serwerze MySQL/MariaDB:
    dbConnection.connect((err) => {
        if (err) {
            console.log("UWAGA! Wystąpił błąd!");
            console.log(err.message);
            return
        }
        console.log("Połączenie z serwerem MySQL zostało nawiązane ...");

        // Wykonanie komendy MySQL:
        dbConnection.query(dbQuery, (err, data) => {
            if (err) {
                console.log("UWAGA! Wystąpił błąd!");
                console.log(err.message);
                return
            }
            // Renderowanie zawartości pliku index.jade i przesłanie HTML do klienta:
            res.render("index", {auto_list: data})
            /* UWAGA
                Do renderowanej zawartości pliku są przesyłane dane dynamiczne.
                Dane te pochodzą z bazy danych MySQL.
             */
        });
    });
});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})



