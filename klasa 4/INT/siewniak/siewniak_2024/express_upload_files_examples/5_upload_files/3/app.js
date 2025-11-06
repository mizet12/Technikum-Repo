/*  NODE EXPRESS. Metoda HTTP POST - upload obrazków.

    © Piotr Siewniak, wersja: 24.II.2022 r.
*/


const express = require("express");
const app = express();
const {upload} = require("./custom_modules/multer");

const PORT = 8071;

app.use(express.static('public'));
app.get('/index.html', (req, res) => {
    res.sendFile( __dirname + "/public/html/index.html" );
})

app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file)
    res.end("Komunikat kontrolny: przekazano pomyślnie plik obrazka ...");
})

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/index.html`)
})