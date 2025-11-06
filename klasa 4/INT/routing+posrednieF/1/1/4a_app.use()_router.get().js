/*  NODE EXPRESS - PODSTAWY ROUTINGU.
    Wykorzystanie jednego routera, ale wielu funkcji obsługi danego żądania.
    Metody app.use() i router.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

// Podstawy routingu
//

const express = require('express');
const app = express();
const PORT = 8089; // w razie potrzeby należy zmienić
const router = express.Router();


// Obsługa żądania GET na zadanym roucie:
router.get(
    '/', // podścieżka
    /* UWAGA
        Podścieżka / odnosi się do ścieżki aplikacji zdefiniowanej za pomocą metody app.use(),
        czyli ścieżki /main.
     */
    // Definicja pierwszej funkcji obsługi:
    (req, res, next) => {
        console.log('Komunikat z pierwszej funkcji obsługi ...');
        next();
    },
    // Definicja drugiej funkcji obsługi:
    (req, res) => {
        console.log('Komunikat z drugiej funkcji obsługi ...');

        // Wysłanie odpowiedzi do klienta:
        res.send("Odpowiedź aplikacji na żądanie GET klienta");
});
/* UWAGA
    W aplikacji obsługiwane jest jedynie żądanie GET na podścieżce / ścieżki /main aplikacji.
    Inne podścieżki nie są tutaj obsługiwane.

    Z podścieżką '/' skojarzono tutaj dwie funkcje pośrednie, które można uznać za funkcje obsługi.

    W przypadku ogólnym, jeżeli dane żądanie należy obsłużyć za pomocą wielu funkcji obsługi,
    wówczas każda z tych funkcji (oprócz ostatniej) powinna posiadać parametr funkcyjny next,
    odpowiadający funkcji next().
    Dodatkowo, w każdej z funkcji posiadającej parametr next należy wywołać metodę next(),
    aby przekazać sterowanie do kolejnej funkcji obsługi.
 */

// Skojarzenie zdefiniowanego routera ze ścieżką aplikacji:
app.use(
    '/main', // ścieżka aplikacji
    router // funkcja pośrednia (router)
);

// Uruchomienie serwera:
app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log("Wpisz w pasku adresu przeglądarki:");
    console.log(`http://localhost:${PORT}/main/`);
});

/* UWAGA
    SZCZEGÓŁOWE OMÓWIENIE METOD: app.use() i router.use() JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> MIDDLEWARE
 */

