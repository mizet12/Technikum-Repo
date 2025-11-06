/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)

    Oprogramowanie pośrednie poziomu routera i aplikacji.
    Metody: router.use() oraz app.use() i app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const app = express(); // obiekt aplikacji
const router = express.Router(); // obiekt routera

const PORT = 8049; // w razie potrzeby należy zmienić

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

// Powiązanie routera ze ścieżką '/app':
app.use('/app', router);
/* UWAGA
    Bazę dla wszystkich podścieżek zdefiniowanych poniżej za pomocą routera stanowi ścieżka '/app'.
 */


// Skojarzenie funkcji pośredniej f() z routerem:
router.use(f)
/* UWAGA
    Funkcja pośrednia f() nie została skojarzona (powiązana) w sposób jawny z żadną podścieżką.
    Tym samym, zostanie ona wykonana dla każdego żądania do routera - niezależnie od adresu URL żądania
    i typu żądania (GET, POST).
 */

// Skojarzenie funkcji pośrednich f1() i f2() z podścieżką '/main':
router.use(
    '/main', // określenie podścieżki
    f1, f2 // wykaz funkcji pośrednich w zadanej kolejności
)
/* UWAGA
    Funkcje pośrednie f1() i f2() zostaną wykonane w zadanej kolejności jedynie dla żądania HTTP
    na podścieżce /main. Tym samym zostaną one wykonane na każdej podścieżce rozpoczynającej się od '/main',
    np. '/main/bzdura'.
    Jednocześnie należy zwrócić uwagę, że baza dla podścieżki /main została określona wcześniej jako '/app'.
 */

// Rejestracja i obsługa żądania HTTP GET na podścieżce '/main':
router.get(
    '/main', // określenie podścieżki
    (req, res) => { // funkcja pośrednia
        // Wysłanie odpowiedzi do klienta:
        res.send("Zawartość odpowiedzi do klienta ...");
    }
    /* UWAGA
        Funkcja pośrednia została skojarzona z podścieżką '/main'.
        Jednocześnie należy zwrócić uwagę, że router został skojarzony wcześniej ze ścieżką /app.
     */
)

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log(`Serwer aplikacji nasłuchuje na porcie ${PORT} ...`);
    console.log(`Wpisz w pasku adresu przeglądarki:`);
    console.log(`http://localhost:${PORT}/app/main`);
    console.log(`http://localhost:${PORT}/app/main/bzdura`);
    console.log(`http://localhost:${PORT}/app`);
});