/* NODE EXPRESS
   Obsługa żądań GET i POST z parametrami.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

const express = require('express');
const app = express();
const PORT = 8050;

/* UWAGA
    Wykorzystane poniżej metody express.json() oraz express.urlencoded()
    stanowią wbudowane funkcje pośrednie ułatwiające obsługę żądań HTTP POST.
 */

app.use(express.json());
/* UWAGA
    Metoda express.json() zwraca middleware, które analizuje wyłącznie JSON
    i sprawdza tylko takie żądania, w których nagłówek zawartości (content-type header)
    jest zgodny z opcjonalnym argumentem.
 */

app.use(express.urlencoded({extended: true}));
/* UWAGA
    Opcja extended z wartością false pozwala na parsowanie danych zakodowanych w adresie URL
    za pomocą biblioteki querystring. W przeciwnym przypadku (true), parsowanie danych
    jest realizowane przy wykorzystaniu biblioteki qs.
 */

// Obsługa żądania HTTP GET na roucie /app/users:
app.get('/app/users', (req, res) => {

    // Pobranie właściwości z ciągu zapytania:
    const user_id = req.query.id;
    const country = req.query.country;
    /* UWAGA
        Obiekt req.query zawiera właściwości dla każdego parametru ciągu zapytania w roucie
        (route query string parameter).
     */

    // Przesłanie odpowiedzi HTTP do przeglądarki w postaci obiektu (JSON):
    res.send({
        'user_id': user_id,
        'country': country
    });
});

// Dodanie triggera (wyzwalacza) typu callback do parametru 'name' routa:
app.param('name', (req, res, next, name) => {
    // Zmiana wszystkich małych liter w zmiennej 'name' na duże:
    const temp = name.toUpperCase();
    // Zapis zmodyfikowanej zmiennej do właściwości req.name:
    req.name = temp;
    // Wywołanie następnej funkcji pośredniej ze stosu:
    next();
});

// Obsługa żądania GET na roucie /app/users/:name:
app.get('/app/users/:name', function(req, res) {
    /* UWAGA
         Parametry routa (route parameters) stanowią zmienne uzyskiwane z nazwanych sekcji adresu URL.
         Tutaj parametrem routa /app/users/ jest zmienna 'name'.
         Można ją uzyskać wpisując w pasku adresu przeglądrki np. "http://localhost:8050/app/users/piotr".

         Cokolwiek zostanie wpisane w URL po sekcji http://localhost:8050/app/users/
         zostanie przechwycone i zapamiętane w req.params.name.
     */

    // Wyświetlenie informacji pomocniczej w konsoli:
    console.log("\nreq.params: ", req.params);
    /* UWAGA
        Obiekt req.params zawiera pary klucz-wartość odpowiadające
        parametrom żądania.
     */

    // Wysłanie odpowiedzi do klienta:
    res.send(req.name + ', Dziękujemy za skorzystanie z naszej aplikacji ...');
});

// Obsuga żądania HTTP POST na roucie '/app/users':
app.post('/app/users', (req, res) => {
    // Pobranie wartości z treści żądania na roucie '/app/users':
    const user_id = req.body.id;
    const country = req.body.country;
    /* UWAGA
        Właściwość req.body zawiera pary klucz-wartość danych przesłanych w treści żądania.
     */

    // Wysłanie do klienta odpowiedzi HTTP w postaci JSON:
    res.send({
        'user_id': user_id,
        'country': country
    });
});

app.listen(PORT);
console.log('Serwer nasłuchuje na porcie:', PORT);

console.log("\n1. Wpisz najpierw w pasku adresu przeglądarki np.:");
console.log("http://localhost:8050/app/users?id=10&country=poland");

console.log("\n2. Następnie wpisz np.:");
console.log("http://localhost:8050/app/users/piotr");