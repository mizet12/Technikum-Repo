const http = require('http')
PORT = 8080;

http.createServer((req, res) => {

        res.writeHead(200, {'Content-Type':'text/html'}) //text/html | application/json
        res.write(
            '<html>' + 
            '<head>' +
            '<title="doc">'+
            '</head>'+
            '<body>'+
            '<h1> Gówno </h1>'+
            '</body>'+
            '</html>'
        )
}).listen(PORT)
