const fs = require('fs');
const http = require('http');
const fileName1 = 'file1.json';
const fileName2 = 'file2.json';
const fileName3 = 'file3.json';
const rootPath1 = __dirname + "/" + fileName1;
const rootPath2 = __dirname +"/"+ fileName2;
const rootPath3 = __dirname +"/"+ fileName3;
const PORT = 8080;
const data1 = [];
const serv = (req, res) => { 
        fs.readFile(
            rootPath1, 
            'utf8', 
            (err, data) => { 
                if (err) {
                    console.log("err.message: ", err.message);
                    return
                }
                res.writeHead(200, {'Content-Type': 'application/json'});
                

                data1[0] = JSON.parse(data)
        });
        fs.readFile(
            rootPath2, 
            'utf8', 
            (err, data) => { 
                if (err) {
                    console.log("err.message: ", err.message);
                    return
                }
                data1[1] = JSON.parse(data)
        });
        fs.readFile(
                rootPath3, 
                'utf8', 
                (err, data) => { 
                    if (err) {
                        console.log("err.message: ", err.message);
                        return
                    }
                    data1[2] = JSON.parse(data)
        });
        res.write(JSON.stringify(data1))
        return res.end()
}

http.createServer(serv).listen(PORT)
   
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