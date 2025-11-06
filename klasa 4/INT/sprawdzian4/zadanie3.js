const http = require('http');
const fs = require('fs');
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

function updateCarPrice(nrRejestracyjny, newPrice) {
    return new Promise((resolve, reject) => {
        const dbCommand = `
            UPDATE auto
            SET cena = ?
            WHERE nr_rejestracyjny = ?`;

        dbPool.query(dbCommand, [newPrice, nrRejestracyjny], (err, results) => {
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
        if (req.method === 'POST' && req.url === '/updatePrice') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });

            await new Promise((resolve, reject) => {
                req.on('end', resolve);
                req.on('error', reject);
            });

            const formData = parse(body);

            if (!formData.nr_rejestracyjny || !formData.new_price) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Nieprawidłowe dane.');
                return;
            }

            const updateResult = await updateCarPrice(formData.nr_rejestracyjny, formData.new_price);

            if (updateResult.affectedRows > 0) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html lang="pl">
                    <body>
                        <h1>Cena samochodu zostala zaktualizowana!</h1>
                        <p><a href="/">Powrot do formularza</a></p>
                    </body>
                    </html>
                `);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Nie znaleziono samochodu o podanym numerze rejestracyjnym.');
            }
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html lang="pl">
                <body>
                    <h1>Modyfikacja ceny samochodu</h1>
                    <form method="post" action="/updatePrice">
                        <label for="nr_rejestracyjny">Numer rejestracyjny:</label>
                        <input type="text" id="nr_rejestracyjny" name="nr_rejestracyjny" required><br>

                        <label for="new_price">Nowa cena:</label>
                        <input type="number" id="new_price" name="new_price" required><br>

                        <button type="submit">Aktualizuj cene</button>
                    </form>
                </body>
                </html>
            `);
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
