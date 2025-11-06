/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)

    Pomijanie wybranych funkcji pośrednich - wywołanie next('route').

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
    Funkcje pośrednie na poziomie routera działają w taki sam sposób, jak na poziomie aplikacji,
    ale wykorzystują instancję 'express.Router()' zamiast instancji 'express'.
 */

const express = require('express');
const app = express();
const router = express.Router();
const PORT = 8033;

// Powiązanie podścieżki '/user/:id' z funkcjami pośrednimi dla żądania GET:
router.get(
    '/user/:id', // określenie podściezki z parametrem
    // Definicja pierwszej funkcji pośredniej:
    function f1(req, res, next) {
        if (req.params.id === '0') {
            next('route'); // pominięcie następnej funkcji pośredniej
            return;
        }

        // Instrukcje, które zostaną wykonane jedynie w przypadku, jeśli parametr id jest rożny od 0:
        console.log("Wywołanie funkcji pośredniej f1()");
        next();
    },
    // Definicja drugiej funkcji pośredniej:
    function f2(req, res, next) {
        console.log("Wywołanie funkcji pośredniej f2()");

        // Wysłanie odpowiedzi do przeglądarki:
        res.send("Treść odpowiedzi serwera aplikacji do klienta");
    }
)

router.get(
    '/user/:id',
    function f3(req, res) {
        console.log("Wywołanie funkcji pośredniej f3()");
        res.end("Uwaga! Wpisano id = " + req.params.id);
    }
)
// Skojarzenie routera z aplikacją:
app.use('/', router);


app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie:', PORT);

    console.log("Wpisz w pasku adresu przeglądarki np.:");
    console.log(`http://localhost:${PORT}/user/0`);
    console.log(`http://localhost:${PORT}/user/1`);
});

/* UWAGA
    Jeżeli użytkownik wpisze żądanie:
        http://localhost:PORT/user/1
    wówczas w konsoli pojawią się komunikaty z funkcji pośrednich f1() i f2() łańcucha funkcji pośrednich,
    a do klienta (przeglądarki) zostanie wysłana odpowiedź: "Treść odpowiedzi serwera aplikacji do klienta".
    Funkcja pośrednia f3() nie zostanie wywołana, ponieważ w treści funkcji f2() nie ma wywołania metody next().

    Jeżeli użytkownik wpisze żądanie:
        http://localhost:PORT/user/0
    wówczas w konsoli pojawi się komunikat:
        Wywołanie funkcji pośredniej f3()
    a do przeglądarki zostanie wysłana odpowiedź: "Uwaga! Wpisano id = 0".
    Wywołanie funkcji pośredniej f2() zostanie pominięte, jako skutek wywołania next('route') w funkcji f1().

    W taki sam sposób działa pomijanie funkcji pośrednich w łańcuchu na poziomie aplikacji.
 */