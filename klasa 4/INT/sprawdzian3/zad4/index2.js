const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const PORT = 8080; 
const fileName1 = 'file1.json';
const fileName2 = 'file2.json';
const fileName3 = 'file3.json';
const rootPath1 = __dirname + "/" + fileName1;
const rootPath2 = __dirname +"/"+ fileName2;
const rootPath3 = __dirname +"/"+ fileName3;
const dataC = []
const requestListener = (req, res) => {
    const promise1 = fs.readFile(rootPath1); 
    promise1
        .then((data) => {
            res.writeHead(200,{'Content-Type':'application/json'}); 
            if(data = null){
                throw new NoDataError("Brak danych")
            }
            dataC[0] = JSON.parse(data)
        })
        .catch((err) => {
            return;
        })
        const promise2 = fs.readFile(rootPath2); 
    promise2
        .then((data) => {
            res.writeHead(200,{'Content-Type':'application/json'}); 
            if(data = null){
                throw new NoDataError("Brak danych")
            }
            dataC[1] = JSON.parse(data)
        })
        .catch((err) => {
            return;
        })
        const promise3 = fs.readFile(rootPath3); 
    promise3
        .then((data) => {
            res.writeHead(200,{'Content-Type':'application/json'}); 
            if(data = null){
                throw new NoDataError("Brak danych")
            }
            dataC[2] = JSON.parse(data)
        })
        .catch((err) => {
            return;
        })
        res.write(JSON.stringify(dataC))
}
const server = http.createServer(requestListener).listen(PORT);

class NoDataError extends Error {
    constructor(message) {
        super(message);
        this.name = "NoData";
    }
    }
    class NotNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotANumber";
    }
    }
    class NotStringError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotAString";
    }
    }