const http = require('http')
const fs = require('fs');
const { buffer } = require('stream/consumers');
const filename = 'date.txt'
const path = __dirname + '/files/' + filename;
PORT = 8080

http.createServer((req, res) =>{
res.writeHead(200, {'ContentType':'application/json'})
const date = new Date();
    const currentDate = {
        dzien: date.getDate(),
        miesiac: date.getMonth() + 1,
        rok: date.getFullYear() 
    }
    res.write(
        JSON.stringify(currentDate)
    );
    res.end();
    const buffer = Buffer.from(JSON.stringify(currentDate))
    fs.writeFile(
        path,
        buffer,
        (err) =>{
            if(err){
                console.log("Blad z zapisem")
                return;
            }
        }
    )
}).listen(PORT)