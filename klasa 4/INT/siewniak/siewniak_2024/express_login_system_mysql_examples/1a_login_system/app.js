/*  NODE.JS, MySQL
    System logowania użytkowników z wykorzystaniem sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/


/* UWAGA
    Uwierzytelnianie użytkownika (user authentication) polega na sprawdzeniu jego tożsamości,
    czyli czy użytkownik jest tym, za kogo się podaje.
    Uwierzytelnianie przeprowadza się często za pomocą nazw użytkowników i haseł.
    Jeśli użytkownik wprowadzi poprawne dane, wówczas zakłada się, że jego tożsamość
    została potwierdzona (jest ważna) i przyznaje się dostęp do określonego zasobu.

    Autoryzacja użytkownika (user autorization) polega na nadawaniu użytkownikowi uprawnień
    dostępu do określonego zasobu. Termin ten jest często używany zamiennie z kontrolą dostępu
    lub uprawnieniami użytkownika.


    Uwierzytelnianie użytkownika  [źródło: https://docs.oracle.com/]
    ================================================================
    Uwierzytelnianie podstawowe HTTP:
    1) Klient żąda dostępu do chronionego zasobu.
    2) Serwer sieci Web zwraca okno dialogowe z żądaniem podania nazwy użytkownika i hasła.
    3) Klient przesyła nazwę użytkownika i hasło do serwera.
    4) Serwer weryfikuje poświadczenia i, jeśli się powiedzie, zwraca żądany zasób.

    Uwierzytelnie oparte na formularzu HTML:
    1) Klient żąda dostępu do chronionego zasobu.
    2) Jeśli klient jest nieuwierzytelniony, serwer przekierowuje klienta do strony logowania.
    3) Klient przesyła formularz logowania do serwera.
    4) Jeśli logowanie się powiedzie, serwer przekierowuje klienta do zasobu.
       Jeśli logowanie się nie powiedzie, klient jest przekierowywany do strony błędu.
 */


const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const PORT = 8012; // w razie potrzeby należy zmienić

// Konfiguracja połączenia z bazą danych MySQL/MariaDB:
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '0000', // w razie potrzeby należy zmienić
    database : 'login_data'
});

// Utworzenie obiektu aplikacji:
const app = express();

// Konfiguracja sesji:
app.use(session({
    secret: 'secret_key',
    /* UWAGA
        Klucz używany do uwierzytelnienia sesji do obliczenia ID sesji.
        Jest on przechowywany w zmiennej środowiskowej i nie jest udostępniany publicznie.
     */
    resave: true,
    /* UWAGA
        Wartość true wymusza zapisanie sesji w magazynie sesji przy każdym żądaniu.
        Sesja zostanie zapisana nawet wówczas, jeśli nie została zmodyfikowana podczas żądania.
     */
    saveUninitialized: true
    /* UWAGA
        Jeśli sesja zostanie utworzona (ale nie została zmodyfikowana) przyjmuje się,
        że ma ona status uninitialized. Wartość true wymusza zapisanie nowej sesji.
     */
}));

// Ustawienia związane z żądaniem POST:
app.use(express.json());
/* UWAGA
    Metoda express.json() umożliwia parsowanie (analizę) treści (body parsing) żądania w formacie JSON.
    Mówiąc inaczej, pozwala na rozpoznanie przychodzącego obiektu żądania (request object) jako obiektu JSON.
    Funkcja ta jest oparta na middleware body-parser.

    Metoda express.json() w Express wersji wyższej niż 4.16 odpowiada metodzie bodyParser.json()
    w starszych wersjach Express.
    Aby użyć bodyParser.json(), tj.:
        app.use(bodyParser.json());)
    należy wcześniej zaimportować moduł body-parser:
        const bodyParser = require('body-parser');
 */
app.use(express.urlencoded({extended: true}));
/* UWAGA
    Metoda express.urlencoded() pozwala na analizę treści żądania w postaci łańcucha lub tablicy.
    Innymi słowy umożliwia rozpoznanie przychodzącego obiektu żądania jako łańcucha znaków lub tablicy.
    Funkcja ta jest oparta na middleware body-parser.

    Opcja extended pozwala na dokonanie wyboru pomiędzy parsowaniem danych zawartych w URL za pomocą
    biblioteki query-string (dla extended: false) lub biblioteki qs (dla extended: true).

    Metoda express.urlencoded() w Express wersji wyższej niż 4.16 odpowiada metodzie bodyParser.urlencoded()
    w starszych wersjach Express.
    Aby użyć bodyParser.urlencoded(), tj.:
        app.use(bodyParser.urlencoded());
    należy wcześniej zaimportować moduł body-parser:
        const bodyParser = require('body-parser');
 */

// Włączenie obsługi plików statycznych:
app.use(express.static(path.join(__dirname, 'static')));
/* UWAGA
    Do plików statycznych należą np. pliki HTML, CSS, pliki obrazków, skrypty JS.
    Folder static stanowi tutaj katalog główny (root), w którym są zapisane pliki statyczne.
 */

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Przesłanie do klienta (przeglądarki) pliku login.html:
    res.sendFile(path.join(__dirname + '/static/login.html'));
    /* UWAGA
        Pole nagłówka odpowiedzi HTTP (Content-Type response HTTP header) zostaje ustalony
        na podstawie rozszerzenia przesyłanego pliku.
     */
});

// Obsługa żądania POST na roucie /login:
app.post('/login', (req, res) => {
    // Pobranie wartości z pól wejściowych formularza i zapisanie ich w zmiennych pomocniczych:
    const username = req.body.username;
    const password = req.body.password;
    /* UWAGA
        Obiekt (właściwość) req.body używana jest w połączeniu z żądaniami POST (i PUT).
        Pozwala ona na dostęp po stronie klienta (przeglądarki) do danych zawartych
        w treści żądania (request body).
        Obiekt req.body zawiera zestaw par klucz-wartość reprezentujących przesłane dane.
        Tutaj klucze stanowią username i password.
     */

    // Walidacja danych wejściowych:
    if ((username != '') && (password != '')) { // jeśli pola username i password
                                                // w formularzu nie są puste
        // Wykonanie polecenia SQL z dwoma parametrami:
        connection.query('SELECT * FROM data_table WHERE username = ? AND password = ?',
            [username, password], // argumenty odpowiadające parametrom zapytania
            (error, results) => { // funkcja callback
                if (error) throw error; // w przypadku wystąpienia błędu podczas wykonywania zapytania

                if (results.length > 0) { // jeśli podany użytkownik istnieje
                    // Ustalenie wartości zmiennych sesyjnych:
                    req.session.logged_in = true; // użytkownik zalogowany
                    req.session.username = username;

                    // Przekierowanie do strony głównej /home:
                    res.redirect('/home');

                } else { // jeśli użytkownik NIE istnieje
                    res.send('Uwaga! Nieprawidłowe dane logowania!');
                }                
        });
    } else { // jeśli jedno lub dwa pola w formularzu są puste
        // Przesłanie odpowiedzi do klienta:
        res.send('Należy wprowadzić nazwę użytkownika i hasło!');        
    }
});

// Obsługa żądania GET na roucie /home:
app.get('/home', (req, res) => {
    if (req.session.logged_in) { // jeśli użytkownik jest zalogowany
    /* UWAGA
        Zmienna sesyjna logged_in jest wykorzystywana w celu ustalenia,
        czy użytkownik jest zalogowany (true), czy nie (false).
     */
        // Wysłanie odpowiedzi do klienta (jesli JEST zalogowany):
        res.send('Witaj ' + req.session.username + '...  Jesteś zalogowany ...');
    } else { // jeśli użytkownik NIE jest zalogowany
        res.send('Uwaga! Proszę się zalogować!');
    }    
});

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie:', PORT);
    console.log('Wpisz w pasku adresu przeglądarki: http://127.0.0.1:PORT/');
});
