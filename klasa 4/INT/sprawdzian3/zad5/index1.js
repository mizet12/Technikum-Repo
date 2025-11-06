const http = require('http');
const fs = require('fs')
const PORT = 8090;
const fileName = __dirname + "/files/main.html"
const server = http.createServer((req, res) => {
    if (req.url == '/') { 
        fs.readFile(
            fileName,
            (err, data) => { 
                if (err) {
                    res.writeHead(500);
                    res.end("Uwaga!", err.message);
                    return;
                }
                res.statusCode = 200; 
                res.setHeader('Content-Type', 'text/html'); 
                res.end(data);
            });
        res.end();
    }
    else
        if (req.url == "/cieza") { 
        fs.readFile(
            __dirname + "/files/u1.html",
            (err, data) => { 
                if (err) {
                    res.writeHead(500);
                    res.end("Uwaga!", err.message);
                    return;
                }
                res.statusCode = 200; 
                res.setHeader('Content-Type', 'text/html'); 
                res.end(data);
            });
        res.end();
    }
    else
        res.end('Uwaga! Taka podstrona nie istnieje!');
});
server.listen(PORT);
