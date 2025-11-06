/*  NODE EXPRESS - PODSTAWY ROUTINGU

    Wykorzystanie jednego routera do obsługi różnych punktów końcowych aplikacji.
    Metody: app.use() oraz router.use(), router.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
// Obiekt aplikacji:
const app = express();
// Numer portu:
const PORT = 8092; // w razie potrzeby należy zmienić

// Utworzenie routera:
const router = express.Router();

// Skojarzenie zdefiniowanego routera ze ścieżką (routem) /main:
app.use(
    '/main', // określenie ścieżki
    router // funkcja pośrednia (router)
);
/* UWAGA
    Funkcja pośrednia (router) jest montowana (bind, mount) na podanej ścieżce/trasie (route) '/main'.
 */

// Skojarzenie funkcji pośredniej z routerem:
router.use((req, res, next) => {
    /* UWAGA
        Metoda router.use() pozwala na zamontowanie funkcji pośredniej (lub funkcji pośrednich)
        1) albo dla zadanej podścieżki lub podścieżek;
        2) albo dla wszystkich podścieżek (jak tutaj)
        obsługiwanych przez OKREŚLONY router.
        Brak określonej podściezki oznacza, że jako obowiązująca przyjmowana jest podścieżka domyślna /.

        Z kolei app.use() montuje middleware dla ścieżek, a nie podścieżek jak router.use().

        Ze względu na fakt, że w metodzie router.use() nie określono pierwszego argumentu,
        funkcja zwrotna stanowiąca jej parametr zostanie wykonana dla każdej podścieżki,
        ale zgodnie z ustaleniami dokonanymi za pomocą metody app.use().

        Tutaj router został skojarzony z punktem końcowym (ścieżką) '/main'.
        Tym samym, dla każdego żądania rozpoczynającego się od ścieżki /main, np.
            /main/,
            /main/about,
            /main/bzdura
        czyli nawet wtedy, gdy podścieżka w żądaniu nie zostanie podana prawidłowo,
        funkcja pośrednia stanowiąca argument router.use() zostanie wykonana.
        Innymi słowy, funkcja pośrednia zostanie wykonana nawet dla takich podścieżek,
        dla których nie zdefiniowano dedykowanych funkcji obsługi.

        Z drugiej strony, funkcja obsługi nie zostanie wykonana dla tych ścieżek, które nie zostały
        uwzględnione w wywołaniu metody app.use() - czyli nie zostanie wykonana dla każdej ścieżki,
        która nie rozpoczyna się od /main, np. /bzdura.
     */

    // Wyświetlenie informacji pomocniczej w konsoli:
    console.log("Funkcja pośrednia będąca argumentem router.use() została wywołana ...");

    // Przekazanie sterowania do następnego następnej funkcji obsługi:
    next();
    /* UWAGA
        W ogólności, można zdefiniować wiele funkcji pośrednich i mogą one być skojarzone
        z różnymi ścieżkami.
        Każda funkcja pośrednia oprócz ostatniej powinna zawierać parametr funkcyjny next
        oraz wywołanie tej funkcji w kodzie, które powoduje przeniesienie sterowania
        do kolejnej funkcji pośredniej.
     */
});

// Obsługa żądania GET na podścieżce '/':
router.get(
    '/', // podścieżka
    (req, res) => { // funkcja obsługi żądania GET na podścieżce

        // Wysłanie odpowiedzi do klienta (przeglądarki):
        res.send("<h4 style='color: red'>Zawartość strony głównej aplikacji ...</h4>");
    }
);

// Obsługa żądania GET na podścieżce /about:
router.get(
    '/about', // podścieżka
    (req, res) => {
        res.send("<h4 style='color: blue'>Zawartość podstrony /about aplikacji ...</h4>");
    }
);

// Obsługa żądania GET na roucie /help:
router.get(
    '/help', // podścieżka
    (req, res) => {
        res.send("<h4 style='color: green'>Zawartość podstrony /help aplikacji ...</h4>");
    }
);
/* UWAGA
    Podstawowa różnica pomiędzy router.get(), a app.get() polega na tym, że router.get()
    odności się do podścieżek, a app.get() do ścieżek.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, (err) => {
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log("Wpisz kolejno w pasku adresu przeglądarki:");
    console.log(`http://localhost:${PORT}/main/`);
    console.log(`http://localhost:${PORT}/main/about`);
    console.log(`http://localhost:${PORT}/main/bzdura`);
    console.log(`http://localhost:${PORT}/bzdura`);
});

/* UWAGA
    Zalecanym sposobem obsługi routingu jest oddzielenie definicji routera
    od właściwego kodu aplikacji. Zaprezentowano to w przykładzie w folderze 2.
 */

/* UWAGA
    SZCZEGÓŁOWE OMÓWIENIE METOD: app.use() i router.use() JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> MIDDLEWARE
 */

/* ĆWICZENIE
    Zmodyfikuj fragment kodu źródłowego aplikacji.
    Mianowicie, zamiast
        app.use('/main', router);
    napisz
        app.use(router);

    Wykonaj testy działania aplikacji. Zinterpretuj uzyskane rezulaty.

    Powtórz ćwiczenie dla aplikacji, w której modyfikowana linia przyjuje postać:
        app.use('/', router);
 */

