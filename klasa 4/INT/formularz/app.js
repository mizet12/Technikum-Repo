const http = require('http');
const {parse} = require('querystring');

// Definicja funkcji pomocniczej:
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if (request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}
// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log("result:", result);
            res.end(`
            Marka ${result.marka}, 
            model ${result.model},
            rok produkcji ${result.rok_produkcji},
            cena ${result.cena}
            `);
        });
        return
    }
    // Przesłanie danych (odpowiedzi) do klienta:
    res.write(`
        <!doctype html>
        <html lang="pl">
        <body>
            <form action="/form" method="post">
                Marka <input type="text" name="marka" /> <br />
                Model <input type="text" name="model" /> <br />
                Rok produkcji <input type="number" name="rok_produkcji" /> <br />
                Cena <input type="number" name="cena" /> <br />                     
                <button> 
                    Zapisz 
                </button>
            </form>
        </body>
        </html>
    `);
    // Zakończenie odpowiedzi:
    res.end();
});

const PORT = 8001;
// Uruchomienie serwera HTTP:
server.listen(PORT);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/form`);

