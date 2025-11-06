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

function deleteCarByRegistrationNumber(registrationNumber) {
    return new Promise((resolve, reject) => {
        const dbCommand = `
            DELETE FROM auto
            WHERE nr_rejestracyjny = ?`;

        dbPool.query(dbCommand, [registrationNumber], (err, results) => {
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
        if (req.method === 'POST' && req.url === '/deleteCar') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            await new Promise((resolve, reject) => {
                req.on('end', resolve);
                req.on('error', reject);
            });

            const formData = parse(body);

            if (!formData.nr_rejestracyjny) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Nieprawidłowe dane do usunięcia samochodu.');
                return;
            }

            const deleteResult = await deleteCarByRegistrationNumber(formData.nr_rejestracyjny);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Samochód został usunięty z bazy danych.', affectedRows: deleteResult.affectedRows }));
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html lang="pl">
                <body>
                    <h1>Usuń Samochód</h1>
                    <form method="post" action="/deleteCar">
                        <label for="nr_rejestracyjny">Numer rejestracyjny samochodu:</label>
                        <input type="text" id="nr_rejestracyjny" name="nr_rejestracyjny" required><br>

                        <button type="submit">Usuń Samochód</button>
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
