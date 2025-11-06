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

function insertDataIntoDatabase(data) {
    return new Promise((resolve, reject) => {
        const dbCommand = `
            INSERT INTO auto (marka, model, rok_produkcji, data_pierwszej_rejestracji, cena, stan, nr_rejestracyjny)
            VALUES (?, ?, ?, ?, ?, ?, ?)`;

        dbPool.query(dbCommand, [data.marka, data.model, data.rok_produkcji, data.data_pierwszej_rejestracji, data.cena, data.stan, data.nr_rejestracyjny], (err, results) => {
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

            if (!formData.marka || !formData.model || !formData.rok_produkcji || !formData.cena || !formData.stan || !formData.nr_rejestracyjny) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Nieprawidłowe dane samochodu.');
                return;
            }

            const insertResult = await insertDataIntoDatabase(formData);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html lang="pl">
                <body>
                    <h1>Samochod zostal dodany do bazy danych!</h1>
                    <p><a href="/">Powrot do formularza</a></p>
                </body>
                </html>
            `);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html lang="pl">
                <body>
                    <h1>Dodaj Samochod</h1>
                    <form method="POST">
                        <label for="marka">Marka:</label>
                        <input type="text" id="marka" name="marka" required><br>

                        <label for="model">Model:</label>
                        <input type="text" id="model" name="model" required><br>

                        <label for="rok_produkcji">Rok produkcji:</label>
                        <input type="number" id="rok_produkcji" name="rok_produkcji" required><br>

                        <label for="data_pierwszej_rejestracji">Data pierwszej rejestracji:</label>
                        <input type="date" id="data_pierwszej_rejestracji" name="data_pierwszej_rejestracji" required><br>

                        <label for="cena">Cena:</label>
                        <input type="number" id="cena" name="cena" required><br>

                        <label for="stan">Stan:</label>
                        <select id="stan" name="stan" required>
                            <option value="Nowy">Nowy</option>
                            <option value="Używany">Używany</option>
                        </select><br>

                        <label for="nr_rejestracyjny">Numer rejestracyjny:</label>
                        <input type="text" id="nr_rejestracyjny" name="nr_rejestracyjny" required><br>

                        <button type="submit">Dodaj Samochód</button>
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
