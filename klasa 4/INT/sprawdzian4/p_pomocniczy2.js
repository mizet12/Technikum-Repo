
const fs = require('fs');

const mysql = require('mysql');

const tableName = 'auto';

const dbPool = mysql.createPool({
    connectionLimit: 10, 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'baza_auto'
});


const fileName = __dirname + '/files/data.json';

    fs.readFile(fileName,         
                'utf8',           
                (err, data) => {  
                    if (err) throw err; 
                    const sCar = data;

                   const data1 =  JSON.parse(sCar);


dbPool.getConnection((err, connection) => {
    if (err) {
        console.log('Uwaga błąd!');
        console.log(err.message);
        return
    }
    console.log("Uwaga! Połączenie zostało nawiązane ...")

    const dbCommand = `
    INSERT INTO ${tableName} (marka, model, rok_produkcji, data_pierwszej_rejestracji, cena, stan, nr_rejestracyjny) 
    VALUES (
      '${data1.marka}', '${data1.model}', ${data1.rok_produkcji}, ${data1.data_pierwszej_rejestracji}, ${data1.cena}, ${data1.stan}, '${data1.nr_rejestracyjny}' 
    )`;
console.log(data1)
    connection.query(dbCommand, (err) => {
        if (err) {
            console.log('Uwaga błąd!!!');
            return console.error(err.message);
        }
        console.log("Komunikat kontrolny: rekord został dopisany do tabeli ...")
    }); 


});
});

