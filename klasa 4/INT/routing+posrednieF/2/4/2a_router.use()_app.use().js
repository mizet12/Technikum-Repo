/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)

    Oprogramowanie pośrednie poziomu routera i aplikacji.
    Metody: router.use() oraz app.use() i app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const app = express();
const router = express.Router();
const PORT = 8047; // w razie potrzeby należy zmienić

// Skojarzenie z routerem funkcji pośredniej:
router.use((req, res, next) => {
    console.log('Zarejestrowano żądanie do routera!');
    next();
})
/* UWAGA
    Zdefiniowana powyżej funkcja pośrednia nie została skojarzona z żadną podścieżką.
    Tym samym zostanie ona wykonana dla każdego żądania do routera - niezależnie
    od adresu URL żądania i typu żądania (GET, POST).
 */

// Skojarzenie dwóch funkcji pośrednich z podścieżką '/user/:login':
router.use(
    // Określenie podścieżki z parametrem:
    '/user/:login',
    // Definicje funkcji pośrednich:
    (req, res, next) => {
        console.log('URL żądania:', req.originalUrl);
        next();
    },
    (req, res, next) => {
        console.log('Rodzaj żądania:', req.method);
        next();
    }
)

// Powiązanie routera ze ścieżką '/' aplikacji:
app.use('/', router);

// Obsługa żądania HTTP GET na ścieżce '/user/:login':
app.get(
    '/user/:login', // określenie ścieżki z parametrem
    (req, res) => { // funkcja pośrednia
        // Wysłanie odpowiedzi do klienta:
        res.send("Dzień Dobry " + req.params.login);
    }
    /* UWAGA
        Funkcja pośrednia skojarzona ze ścieżką '/user/:login' jest ostatnią w łańcuchu funkcji pośrednich.
        Stanowi ona funkcję obsługi tej ścieżki.
     */
)

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}/user/piotr`);
});
