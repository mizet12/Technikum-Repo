/*  NODE EXPRESS - PODSTAWY ROUTINGU

    Definicja pojedynczego routera przy użyciu obiektu router.
    Metoda router.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
    Routing określa w jaki sposób aplikacja odpowiada (responds) na żądania klienta (client requests)
    w określonym punkcie końcowym (endpoint) - czyli na roucie (inaczej: ścieżce/podścieżce, trasie).

    Punkt końcowy jest rozumiany, jako adres URL (lub ścieżka) wraz z rodzajem żądania (np. GET, POST) itp.
    Z każdym routem może być skojarzona jedna lub więcej funkcji obsługi (route handlers).
    Funkcja obsługi skojarzona z danym routem (ścieżką/podścieżką) jest wykonywana, jeśli adres podany
    w żądaniu HTTP klienta jest zgodny z tym routem.

    Oprócz obiektu aplikacji (czyli app) routing może być obsługiwany przy wykorzystaniu obiektu router.
    Obiekt ten jest definiowany następująco:
        const router = express.Router();


   Rejestracja i obsługa danego punktu końcowego (routa) może być zrealizowana za pomocą metody router.get():
        router.get(podścieżka, funkcja obsługi)
    gdzie:
        - podścieżka określa trasę do punktu końcowego, np. do strony głównej, podstrony /about itp.;
        - funkcja obsługi jest funkcją zwrotną (callback), która jest wykonywana, jeśli aplikacja
          otrzyma żądanie GET na trasie zgodnej ze zdefiniowanym routem (czyli podścieżką).
 */

const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();
const PORT = 8082; // w razie potrzeby należy zmienić port

// Utworzenie obiektu routera:
const router = express.Router();
/* UWAGA
    Obiekt - funkcja router została utworzona w celu obsługi żądania GET, określonego poniżej.
    W plikacji zdefiniowano pojedynczy router (w ogólności można zdefiniować wiele routerów).
 */

// Rejestracja i obsługa żądania HTTP GET skierowanego do strony głównej aplikacji:
router.get('/', (req, res) => {
    /* UWAGA
        Każde żądanie klienta na podścieżce/trasie '/' jest obsługiwane przez funkcję zwrotną.
     */

    // Komunikat pomocniczy:
    console.log("Odpowiedź serwera aplikacji do klienta została wysłana ...");

    // Wysłanie odpowiedzi HTTP do klienta:
    res.send("Odpowiedź serwera aplikacji na żądanie HTTP GET klienta ... ");
})

// Skojarzenie routera z aplikacją:
app.use(router);
/* UWAGA
    Metoda app.use() służy do skojarzenia/powiązania określonej funkcji pośredniej (middleware function)
    z aplikacją albo zadaną ścieżką.
    Tutaj nie określono żadnej ścieżki (żadnego adresu URL żądania), zatem funkcja pośrednia (router)
    zostanie wywołana dla każdego żądania - niezależnie od jego typu (np. GET, POST), jak również ścieżki.
    Innymi słowy, funkcja pośrednia stanowiąca argument metody app.use() zostanie tutaj wykonana
    dla każdego żądania HTTP klienta.

    TEMATYKA DEFINIOWANIA I WYKORZYSTANIA FUNKCJI POŚREDNICH JEST OMAWIANA OSOBNO.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log(`Wpisz http://localhost:${PORT} w pasku adresu przeglądarki`);
});

/* UWAGA
    Zalecanym sposobem obsługi routingu jest oddzielenie definicji routera
    od kodu właściwego aplikacji - czyli inaczej niż tutaj.
    Zaprezentowano to w przykładzie w folderze 2.
 */

/* UWAGA
    SZCZEGÓŁOWE OMÓWIENIE ŻĄDANIA HTTP GET JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> GET_REQUEST
 */
/* UWAGA
    SZCZEGÓŁOWE OMÓWIENIE METOD: app.use() i router.use() JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> MIDDLEWARE
 */

/* ĆWICZENIE
    Zmodyfikuj fragment kodu źródłowego aplikacji.
    Mianowicie, zamiast
        app.use(router);
    napisz
        app.use('/app', router);

    Po modyfikacji kodu wpisz w pasku adresu przeglądarki:
        http://localhost:8082/app
    a następnie
         http://localhost:8082/

    Zinterpretuj uzyskane rezulaty.
 */