const http = require('http')
PORT = 8080;
const fs = require('fs')
const Root = __dirname + "kod.html"
http.createServer((req, res) => {
        fs.readFile(
            Root,
            'utf-8',
            (err, data) => {
                if(err){
                    return
                }
                res.writeHead(200, {'Content-Type':'text/html'}) //text/html | application/json
                res.write(data)

                return res.end()
            })
        
}).listen(PORT)
