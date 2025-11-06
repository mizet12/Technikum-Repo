const mysql = require('mysql');

// Ustalenie parametrów połączenia z serwerem MySQL:
const connection = mysql.createConnection({
    host: 'localhost', // host
    user: 'root',      // użytkownik
    password: '',      // hasło
    database: 'database__' // nazwa bazy danych
});

// Połączenie z bazą danych:
connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;

