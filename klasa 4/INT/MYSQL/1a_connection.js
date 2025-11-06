/*  NODE.JS MYSQL/MARIADB
    Połączenie z serwerem MySQL/MariaDB.

    © Piotr Siewniak, wersja: 21.XII.2021 r.
*/

// Dołączenie (import) zasobów modułu mysql:
const mysql = require('mysql');
/* UWAGA
    Moduł 'mysql' należy najpierw zainstalować za pomocą npm.
 */

// Utworzenie obiektu połączenia z serwerem MySQL/MariaDB:
const dbConnection = mysql.createConnection({
    // Określenie parametrów połączenia:
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000' // sprawdzić hasło root'a na lokalnym MariaDB (w XAMPP) i ewentualnie zmienić
});
/* UWAGA
    Przetestować działanie aplikacji dla innych (błędnych) parametrów połączenia.
 */

// Nawiązanie połączenia z serwerem MySQL:
dbConnection.connect(
    // Definicja funkcji zwrotnej:
    (err) => {
        if (err) {
            console.log("Uwaga błąd! ", err.message);
            return // funkcja zwrotna kończy działanie i zwraca undefined
        }
        console.log("Połączenie z serwerem MySQL zostało nawiązane pomyślnie ...");
    }
);
/* UWAGA
    Jak widać powyżej, metoda connect() akceptuje jako argument funkcję typu callback.
    Argumentem tej funkcji jest obiekt err, który dostarcza informacji o ewentualnym
    błędzie w czasie nawiązywania połączenia.

    Jeśli połączenie się powiodło, metoda connect() pozwala na wykonanie polecenia (zapytania)
    do bazy danych na serwerze.
 */

// Zamknięcie połączenia:
dbConnection.end();
/* UWAGA
    Wywołanie metody end() gwarantuje wykonanie pozostałych zapytań przed zamknięciem
    połączenia z bazą danych.

    Metoda end() obiektu połączenia dopuszcza argument w postaci funkcji callback, np.
        connection.end(function(err) {
            if (err) {
                return console.log('Uwaga błąd! ' + err.message);
            }
            console.log('Połączenie z serwerem MySQL zostało zamknięte');
        });

    Aby zakończyć połączenie natychmiast (bezzwłocznie) należy wywołać metodę destroy().
    Wykonanie tej metody gwarantuje, że nie będą już zgłaszane i obsługiwane żadne zdarzenia
    i żadna funkcja callback nie zostanie wykonana.
 */