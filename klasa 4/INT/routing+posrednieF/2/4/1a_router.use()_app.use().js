/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)

    Oprogramowanie pośrednie poziomu routera i aplikacji.
    Metody: router.use() oraz app.use() i app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const app = express(); // obiekt aplikacji
const router = express.Router(); // obiekt routera

const PORT = 8048; // w razie potrzeby należy zmienić

const f = (req, res, next) => {
    console.log('Komunikat od funkcji pośredniej f() ...');
    next();
}

const f1 = (req, res, next) => {
    console.log('Komunikat od funkcji pośredniej f1() ...');
    next();
}
const f2 = (req, res, next) => {
    console.log('Komunikat od funkcji pośredniej f2() ...');
    next();
}


// Skojarzenie funkcji pośredniej f() z routerem:
router.use(f)
/* UWAGA
    Funkcja pośrednia f() nie została skojarzona (powiązana) w sposób jawny z żadną podścieżką.
    Tym samym, zostanie ona wykonana dla każdego żądania do routera - niezależnie od adresu URL żądania
    i typu żądania (GET, POST).
 */

// Skojarzenie funkcji pośrednich f1() i f2() z podścieżką '/app':
router.use(
    '/app', // określenie podścieżki
    f1, f2 // wykaz funkcji pośrednich w zadanej kolejności
)
/* UWAGA
    Funkcje pośrednie f1() i f2() zostaną wykonane w zadanej kolejności jedynie dla żądania HTTP
    na podścieżce /app.
 */

// Powiązanie routera ze ścieżką / aplikacji:
app.use('/', router);

// Rejestracja i obsługa żądania HTTP GET na roucie (ścieżce) '/app':
app.get(
    '/app', // określenie ścieżki
    (req, res) => { // funkcja pośrednia
        // Wysłanie odpowiedzi do klienta:
        res.send("Zawartość odpowiedzi do klienta ...");
    }
    /* UWAGA
        Funkcja pośrednia skojarzona ze ścieżką '/app' stanowi ostatnią funkcję pośrednią
        w łańcuchu funkcji pośrednich. Funkcja ta stanowi funkcję obsługi routa.
     */
)

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}/app`);
});