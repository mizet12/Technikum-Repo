const http = require('http')
PORT = 8080
const powiat = []
http.createServer((req, res) =>{
res.writeHead(200, {'ContentType':'application/json'})
const date = new Date();
    const rejestrationdate = {
        dzien: 12,
        miesiac: 9,
        rok: 2001 
    }
    
    powiat[0] = "powiat1";
    powiat[1] = "powiat2";
    powiat[2] = "powiat3";
    powiat[3] = "powiat4";
    powiat[4] = "powiat5";
    const CarData = {
        marka: 'Volkswagen',
        model: 'golf',
        rokprod: 1999,
        cena: 10000,
        rejdate: rejestrationdate,
        powiaty: powiat
    }
    res.write(
        JSON.stringify(CarData)
    );
    res.end();

}).listen(PORT)