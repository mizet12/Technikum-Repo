const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'database____'
});

connection.connect((err) => {
    if (!err) {
        console.log(`Nawiązano połączenie z bazą danych ...`);
    } else {
        console.log(`Uwaga! Wystąpił błąd w połączeniu z bazą danych!`);
    }
});

module.exports = connection;
