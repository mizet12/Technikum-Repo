/*  NODE EXPRESS - PODSTAWY ROUTINGU
    Wykorzystanie kilku routerów w celu obsługi różnych punktów końcowych.

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require('express');
const PORT = 8091; // w razie potrzeby należy zmienić

// Obiekt aplikacji:
const app = express();

// Definicje niezależnych routerów:
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

// Obsługa żądania HTTP GET skojarzonego z podścieżką /:
router1.get('/main', (req, res) => {
    console.log("Router obsługujący stronę główną /main aplikacji (router1) pracuje ...");

    // Wysłanie odpowiedzi do klienta wpostaci łańcucha zawierającego kod HTML strony głównej:
    res.send("<h4 style='color: red;'>Zawartość strony głównej /main aplikacji ...</h4>");
});
/* UWAGA
    Wywołanie metody router1.get() powoduje zarejestrowanie zdefiniowanej funkcji pośredniej,
    jako funkcji obsługi podścieżki /main aplikacji oraz obsługa tej podścieżki.
    Wspomniana funkcja obsługi będzie wywoływana za każdym razem, gdy klient wyśle żądanie GET
    na podścieżce /main aplikacji - z zastrzeżeniem ustawień dotyczących ścieżek aplikacji
    obsługiwanych przez poszczególne routery, dokonanych w wywołaniu metody app.use() poniżej.
 */

// Obsługa żądania GET na podścieżce '/about':
router2.get('/about', (req, res) => {
    console.log("Router podstrony /about (router2) pracuje ...");
    // Wysłanie odpowiedzi do klienta:
    res.send("<h4 style='color: blue;'>Zawartość podstrony /about aplikacji ...</h4>");
});

// Obsługa żądania GET na podścieżce '/help' z użyciem routera3:
router3.get('/help', (req, res) => {
    console.log("Router podstrony /help (router3) pracuje ...");

    res.send("<h4 style='color: green;'>Zawartość podstrony /help aplikacji ...</h4>");
});

// Skojarzenie routerów ze ścieżkami (trasami) i odpowiadającymi im funkcjami obsługi:
app.use(router1);
app.use(router2);
app.use(router3);
/* UWAGA
    W ogólności metoda app.use() montuje middleware dla wszystkich tras w aplikacji albo tych,
    które są wymienione jako pierwsze argumenty jej wywołań.

    Tutaj, ścieżki zostały pominięte. Dlatego też, funkcje pośrednie (router1, router2 i router3)
    zostaną zamontowane dla wszystkich ścieżek. Tym samym, funkcje pośrednie zostaną wykonane
    dla każdego adresu URL żądania - niezależnie od typu żądania (GET, POST itp.).
    Nie zmienia to jednak ustaleń dokonanych w wywołaniach metody get() dla routerów.
    W wywołaniach tych ustalono konkretne podścieżki, które będą obsługiwane: /main, /about i /help.
    Inne podścieżki nie są obsługiwane.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log("Wpisz kolejno w pasku adresu przeglądarki:");
    console.log(`http://localhost:${PORT}/main/`);
    console.log(`http://localhost:${PORT}/about`);
    console.log(`http://localhost:${PORT}/help`);
    console.log(`http://localhost:${PORT}/main/bzdura`);
    console.log(`http://localhost:${PORT}/`);
    console.log(`http://localhost:${PORT}/bzdura`);
});

/* UWAGA
    SZCZEGÓŁOWE OMÓWIENIE METOD: app.use() i router.use() JEST ZAMIESZCZONE W FOLDERZE:
        EXPRESS -> MIDDLEWARE
 */

/* ĆWICZENIE
    Zinterpretować uzyskane rezultaty działania aplikacji.

 */