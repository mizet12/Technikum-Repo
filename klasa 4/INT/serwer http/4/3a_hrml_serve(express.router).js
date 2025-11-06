/*  NODE - SERVER HTTP.
    WYKORZYSTANIE FRAMEWORKA EXPRESS.
    Wprowadzenie do routingu. Obsługa żądania HTTP GET.

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
   APLIKACJA WYŁĄCZNIE DO CELÓW DEMONSTRACYJNYCH!
   FRAMEWORK EXPRESS JEST OMAWIANY OSOBNO!
   ROUTING JEST OMAWIANY OSOBNO!
 */

/* UWAGA
    Routing określa w jaki sposób aplikacja odpowiada (responds) na żądania klienta (client requests)
    w określonym punkcie końcowym (endpoint) - roucie.
    Punkt końcowy jest rozumiany, jako adres URL (lub ścieżka) wraz z rodzajem żądania (np. GET, POST) itp.
    Z każdym routem może być skojarzona jedna lub więcej funkcji obsługi (route handlers).
    Dana funkcja obsługi jest wykonywana, jeśli adres podany w żądaniu klienta jest zgodny
    ze zdefiniowanym routem.

    Oprócz obiektu aplikacji 'app' routing może być obsługiwany przy wykorzystaniu obiektu 'router'.
    Obiekt ten jest definiowany następująco:
        const router = express.Router();


   Rejestracja i obsługa danego punktu końcowego (routa) może być zrealizowana za pomocą
   metody router.get():
        router.get(ścieżka, funkcja obsługi)
    gdzie:
        - ścieżka określa ścieżkę dostępu (trasę) do punktu końcowego, np. do strony głównej,
          podstrony /about itp.;
        - funkcja obsługi jest funkcją typu callback, która jest wykonywana, jeśli aplikacja
          otrzyma żądanie zgodne z zadanym routem (czyli punktem końcowym).
 */

const express = require('express');
// Utworzenie obiektu aplikacji:
const app = express();
// Definicja zmiennej pomocniczej:
const PORT = 8093; // w razie potrzeby należy zmienić port

// Utworzenie obiektu routera:
const router = express.Router();
/* UWAGA
    Obiekt 'router' został utworzony w celu obsługi żądania GET, określonego poniżej.
    Tutaj zdefiniowano pojedynczy router - w ogólności można zdefiniować wiele routerów.
 */

// Rejestracja i obsługa żądania HTTP GET skierowanego do strony głównej aplikacji:
router.get('/', (req, res) => {
    /* UWAGA
        Każde żądanie klienta na roucie '/' jest obsługiwane przez funkcję callback,
        zdefiniowaną (tutaj), jako funkcja strzałkowa.
        .
     */
    // Wyświetlenie informacji pomocniczej w konsoli:
    console.log("Router do strony głównej aplikacji pracuje ...");

    // Wysłanie odpowiedzi HTTP do klienta:
    res.send("<h1 style='color: blue;'>Odpowiedź na żądanie HTTP GET</h1>");
})

// Skojarzenie zdefiniowanego routa (i jego funkcji obsługi) z aplikacją:
app.use(router);
/* UWAGA
    W ogólności, metoda app.use() służy do skojarzenia określonej funkcji
    pośredniej (middleware function) z aplikacją.
    Temat funkcji pośrednich jest omawiany osobno.
 */

app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});

/* UWAGA
    Zalecanym sposobem obsługi routingu jest oddzielenie definicji routera
    od właściwego kodu aplikacji.
 */
