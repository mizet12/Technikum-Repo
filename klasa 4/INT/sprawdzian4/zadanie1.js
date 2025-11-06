const http = require('http');
const mysql = require('mysql');
const { parse } = require('querystring');

const dbPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'baza_auto'
});

function fetchDataFromDatabase(brand, model, price) {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM auto';

        if (brand) {
            query += ` WHERE marka = '${brand}'`;
            if (model) {
                query += ` AND model = '${model}'`;
                if (price) {
                    query += ` AND cena <= ${price}`;
                }
            } else if (price) {
                query += ` AND cena <= ${price}`;
            }
        } else if (model) {
            query += ` WHERE model = '${model}'`;
            if (price) {
                query += ` AND cena <= ${price}`;
            }
        } else if (price) {
            query += ` WHERE cena <= ${price}`;
        }

        dbPool.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            await new Promise((resolve, reject) => {
                req.on('end', resolve);
                req.on('error', reject);
            });

            const formData = parse(body);
            const { brand, model, price } = formData;

            const results = await fetchDataFromDatabase(brand, model, price);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(results));
        } else {
            res.write(`
                <!doctype html>
                <html lang="pl">
                <body>
                    <form action="/" method="post">
                        Marka <input type="text" name="brand" /> <br />
                        Model <input type="text" name="model" /> <br />
                        Cena do <input type="number" name="price" /> <br />
                        <button>Znajdź samochody</button>
                    </form>
                </body>
                </html>
            `);

            res.end();
        }
    } catch (error) {
        console.error('Błąd obsługi żądania:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Błąd obsługi żądania.');
    }
});

const PORT = 8001;
server.listen(PORT);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
