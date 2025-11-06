/*  NODE EXPRESS - PODSTAWY ROUTINGU
    Wykorzystanie wielu funkcji obsługi danego żądania.
    Metody app.use() i router.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const app = express();
const PORT = 8061; // w razie potrzeby należy zmienić
const router = express.Router();

// Definicje funkcji obsługi żądania:
const f1 = function(req, res, next) {
    console.log('Komunikat z pierwszej funkcji obsługi ...');
    next();
}
const f2 = function(req, res, next) {
    console.log('Komunikat z drugiej funkcji obsługi ...');
    next();
};
const f3 = (req, res) => {
    console.log('Komunikat z trzeciej funkcji obsługi ...');

    // Wysłanie odpowiedzi do klienta:
    res.send("Odpowiedź na żądanie GET na ścieżce / ...");
};
/* UWAGA
    W przypadku ogólnym, jeżeli dane żądanie należy obsłużyć za pomocą wielu funkcji obsługi,
    wówczas każda z tych funkcji oprócz ostatniej powinna mieć parametr obiektowy (funkcyjny) 'next'.
    Dodatkowo, w każdej z funkcji posiadającej parametr 'next' należy wywołać metodę next(),
    aby przekazać sterowanie do kolejnej funkcji obsługi.
 */

// Obsługa żądania GET na zadanej podścieżce:
router.get('/', [f1, f2, f3]);
/* UWAGA
    Dla żądania GET na podścieżce '/' wywoływane są trzy funkcje obsługi: f1(), f2() oraz f3().
    Funkcje te są elementami składowymi tablicy, która stanowi drugi argument metody router.get().
 */

// Skojarzenie zdefiniowanego routera (funkcji pośredniej) ze ścieżką aplikacji:
app.use('/', router);

// Uruchomienie serwera aplikacji:
app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log("Wpisz w pasku adresu przeglądarki:");
    console.log(`http://localhost:${PORT}/`);
});

/* UWAGA
    SZCZEGÓŁOWE OMÓWIENIE METOD: app.use() i router.use() JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> MIDDLEWARE
 */

