/*  NODE EXPRESS - OBSŁUGA FORMULARZY.
    Metoda HTTP POST.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/



const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')


// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8090; // w razie potrzeby należy zmienić

const publicDir = path.join(__dirname, 'public');

// Konfiguracja foldera przeznaczonego na pliki statyczne:
app.use(express.static(publicDir));

// Obsługa żądania GET na zadanej ścieżce:
app.get('/index.html', (req, res) => {
    res.sendFile("index.html", {root: publicDir});
    /* UWAGA
        Metoda sendFile() pozwala na przesłanie pliku podanego na zadanej ścieżce
        (z uwzględnieniem konfiguracji foldera przeznaczonego na pliki statyczne).

        Tutaj przesyłany jest plik statyczny index.html (z foldera /public),
        zawierający kod HTML strony WWW zawierającej formularz.
     */
})

/* UWAGA
    Analiza (przetwarzanie) treści żądania HTTP może być realizowana na kilka sposobów,
    przy wykorzystaniu funkcji pośrednich:
    1. body-parser.urlencoded() /express.urlencoded() -
            analiza zakodowanych danych zawartych w adresie URL żądania;
    2. body-parser.json() / express.json() -
            analiza tekstu jako


    Przetwarzanie żądań POST wymaga użycia funkcji pośrednich:
        1. express.urlencoded();
        2. express.json()
    w Express wersji wyższej niż 4.16, albo:
        1. bodyParser.urlencoded();
        2. bodyParser.json()
    w starszych wersjach Express.
 */

// Konfiguracja aplikacji do użycia analizatorów treści żądania body-parser:
app.use(bodyParser.urlencoded({extended: false}));
/* UWAGA
    Metoda bodyParser.urlencoded() pozwala na rozpoznanie przychodzącego
    obiektu żądania jako ciągu znaków (string) lub tablicy (array).

    Opcja extended z wartością false pozwala na parsowanie danych zakodowanych
    w adresie URL za pomocą biblioteki QueryString.

    /* UWAGA
    W Express wersji powyżej 4.16 parser JSON został dodany do metody express.urlencoded().
    Tym samym, powyższy kod można przekształcić do postaci:
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
 */
app.use(bodyParser.json());
/* UWAGA
   Metoda bodyParser.json() pozwala na rozpoznanie przychodzącego obiektu
   żądania (request object) jako obiektu w formacie JSON.
   Użycie metody bodyParser.json() zwraca moddleware, które analizuje JEDYNIE JSON.
   Ten parser akceptuje dowolne kodowanie Unicode obiektu req.body.
 */

/* UWAGA
    W Express wersji powyżej 4.16 parser JSON został dodany do metody express.json().
 */


// Obsługa żądania POST na roucie (ścieżce) '/auto':
app.post('/auto', async (req, res, next) => {
    try {
        // Pobranie zawartości (właściwości) obiektu req.body:
        const auto = {
            marka: req.body.marka,
            model: req.body.model,
            nr_rejestracyjny: req.body.nr_rejestracyjny,
        }
        /* UWAGA
            Dane pobrane z obiektu req.body zostały zapisane w postaci obiektu JS
            przy wykorzystaniu notacji literałowej (czyli w formacie JSON).
         */
           // Przesłanie odpowiedzi do klienta:
        await res.send(
            "<h4 style='color: blue'>PRZESŁANE DANE SAMOCHODU</h4>" +
            "<p>Marka: " + req.body.marka + "</p>" +
            "<p>Model: " + req.body.model + "</p>" +
            "<p>Numer rejestracyjny: " + req.body.nr_rejestracyjny + "</p>"
        );
    }
    catch (error) {
        return next(error);
    }
});

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/index.html`)
})