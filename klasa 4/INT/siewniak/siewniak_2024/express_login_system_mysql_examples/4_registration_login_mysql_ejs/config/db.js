const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_ejs_1'
});
connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Nawiązano połączenie z bazą danych ...');
    }
});

module.exports = connection;
