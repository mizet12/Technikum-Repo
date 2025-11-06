/*  NODE EXPRESS - PODSTAWY ROUTINGU
    Oddzielenie kodu routingu od kodu aplikacji.

    Definicja modułu routera.

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');

// Utworzenie obiektu routera:
const router = express.Router();

// Obsługa żądania GET na podścieżce /:
router.get(
    '/', // określenie podścieżki
    (req, res) => { // funkcja obsługi żądania GET na zadanej podścieżce
    /* UWAGA
        Każde żądanie klienta na podścieżce '/' jest obsługiwane przez router
        za pośrednictwem zdefiniowanej funkcji zwrotnej.
        Funkcja zwrotna stanowi tutaj tzw. funkcję pośrednią (middleware function),
        która jest wywoływana za każdym razem, gdy klient wyśle żądanie GET na podścieżce /.
        Wspomniana podścieżka jest skojarzona ze ścieżką aplikacji zdefiniowaną za pomocą
        metody app.use().
     */

        // Wysłanie odpowiedzi do klienta:
        res.send('Komunikat ze strony głównej aplikacji ...');
    }
)

// Obsługa żądania GET na podścieżce /about aplikacji:
router.get('/about', (req, res) => {
    /* UWAGA
        Analogicznie jak wcześniej, każde żądanie GET klienta na podścieżce '/about'
        jest obsługiwane przez zdefiniowaną funkcję zwrotną (funkcję pośrednią).
     */
    res.send("Komunikat z podstrony /about aplikacji ...");
})

// Obsługa żądania GET na ścieżce /help aplikacji:
router.get('/help', (req, res) => {
    res.send("Komunikat z podstrony /help aplikacji ...");
})

// Eksport modułu:
module.exports = router;
/* UWAGA
    Zdefiniowanie routera w osobnym pliku - module, jest zalecanym sposobem
    oddzielenia kodu routingu od kodu aplikacji.
 */
