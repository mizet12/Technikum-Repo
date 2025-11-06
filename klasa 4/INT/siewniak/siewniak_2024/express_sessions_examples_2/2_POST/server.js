/*  NODE EXPRESS
    Obsługa formularzy. Metoda HTTP GET.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");

const app = express();
const PORT = 8042;

// Konfiguracja aplikacji do użycia analizatorów treści żądania:
app.use(bodyParser.urlencoded({extended: false}));
/* UWAGA
    Metoda bodyParser.urlencoded() pozwala na analizę "surowej" (nieprzetworzonej) zawartości żądania,
    jako danych zakodowanych w adresie URL. Wynik stanowi obiekt req.body.
    Opcja extended z wartością false pozwala na parsowanie danych za pomocą biblioteki querystring.
 */

// Konfiguracja aplikacji do użycia sesji:
app.use(session({
    // Konfiguracja sesji:
    secret: 'klucz', // klucz wykorzystywany do obliczania ID sesji
    resave: true, // sesja będzie modyfikowana (zapisywana w magazynie) przy każdym żądaniu
    saveUninitialized: true, // nowa sesja zostanie zapisana
    cookie: {
        expires: 1000 * 60 * 60, // 1 godzina
        httpOnly: true, // JS nie ma dostępu do cookie
        path: "/" // ścieżka cookie
    }
}))


// Rejestracja i obsługa żądania GET na roucie (ścieżce) /login:
app.get('/login', (req, res) => {
    // Przesłanie do klienta pliku statycznego index.html:
    res.sendFile(__dirname + "/views/index.html");
})

// Rejestracja i obsługa żądania GET na roucie /login:
app.post('/app', (req, res) => {
    // Wyświetlenie danych w konsoli (pomocnicze):
    console.log("req.body: ", req.body);
    /* UWAGA
        Obiekt req.body pozwala na dostęp do danych przesłanych z formularza za pomocą metody POST
        po przetworzeniu (analizie, parsowaniu) treści żądania za pomocą funkcji pośredniej
        body-parser.urlencoded().
        Obiekt ten zawiera zestaw par klucz-wartość (key-value) reprezentujących przetworzone dane
        z treści żądania.

        Zamiast metody body-parser.urlencoded() można zastosować metodę express.urlencoded(),
        w Express wersji 4.16+.
     */

    // Definicje zmiennych sesyjnych:
    req.session.user = req.body.login;
    req.session.country = req.body.country;
    req.session.city = req.body.city;
    /* UWAGA
        Wartości zmiennych sesyjnych zostały nadane przy wykorzystaniu właściwości obiektu req.body.
     */

    // Wyświetlenie informacji pomocniczych w konsoli:
    console.log("req.session: ", req.session);

    // Przesłanie odpowiedzi do klienta:
    res.send(
        "<h4 style='color: blue'>Dane zalogowanego użytkownika</h4>" +
        "<p> Nazwa użytkownika: " + req.session.user + "</p>" +
        "<p> Państwo: " + req.session.country + "</p>" +
        "<p> Miejscowość: " + req.session.city + "</p>"
    );
    /* UWAGA
        Odpowiedź do klienta w postaci łańcucha HTML zawiera wartości zmiennych sesyjnych:
        user, country i city.
     */
})

// Rejestracja i obsługa żądania GET na roucie /login:
app.get('/logout', (req, res) => {
    // Usunięcie sesji:
    req.session.destroy((err) => {
        if (err) {
            res.send("Uwaga błąd!", err.message);
            return
        }

        // Przesłanie odpowiedzi do klienta:
        if (req.session) res.send("req.session: " + req.session)
        else res.send("Nastąpiło wylogowanie! Sesja została usunięta!") ;

        // Wyświetlenie w konsoli terminala informacji pomocniczych:
        console.log("req.session: ", req.session);
    });
})

// Uruchomienie serera aplikacji:
const server = app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/login`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/logout`);
})

/* ĆWICZENIE
   Zmodyfikuj kod aplikacji - oprócz sesji wykorzystaj ciasteczka.
 */
