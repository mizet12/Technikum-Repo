/*  NODE EXPRESS - SESSIONS.
    Wprowadzenie.
    Parametry sesji. Zmienne sesyjne.

    © Piotr Siewniak, wersja: 28.II.2022 r.
*/


/* UWAGA
    Protokół HTTP jest bezstanowy. Oznacza to, że każde żądanie klienta wysyłane do serwera
    jest interpretowane niezależnie od innych. Żądania są od siebie niezależne.

    Protokół HTTP nie zawiera żadnego wbudowanego mechanizmu, które pozwala serwerowi
    na zapamiętanie danego użytkownika wysyłającego wiele żądań. Tym samym, uniemożliwia to
    serwerowi sprawdzanie, czy żądania te pochodzą od jednego (tego samego) użytkownika.
    Gdyby uwierzytelniać użytkownika przy każdym żądaniu, byłoby to błędne rozwiązanie,
    ponieważ spowodowałoby to wiele problemów np. z wydajnością, wygodą posługiwania się aplikacją
    i bezpieczeństwem.

    Aby rozwiązać zasygnalizowany problem, dla aplikacji (i witryn/stron WWW) wprowadzony został
    tzw. protokół zarządzania stanem (state-management protocol).
    Dane połączenie nazywa się połączeniem stanowym, jeśli pozwala serwerowi na sprawdzenie,
    które żądania pochodzą od danego (tego samego) użytkownika.
    Implementacja obsługi połączenia stanowego nazywana jest sesją (session).

    Wspomniana implementacje jest realizowana w praktyce najczęściej przy użyciu sesji i ciasteczek.
    Schemat zarządzania stanem na podstawie plików cookie i sesji jest następujący:
    1. Klient chcąc skorzystać z aplikacji (np. sklepu internetowego) wypełnia formularz logowania.
    2. Po przesłaniu formularza na serwer, dane użytkownika (żądanie) jest uwierzytelniane.
    3. Po zakończeniu procesu uwierzytelnienia użytkownika serwer generuje unikalną liczbę losową,
       która stanowi identyfikator sesji. Identyfikator ten jest przechowywany na serwerze.
    4. Identyfikator sesji jest przesyłany do klienta w nagłówku pliku cookie odpowiedzi.
       Dla Node.js jest to plik 'connect.sid'.
    5. Plik cookie jest zapisywany na urządzeniu klienta w magazynie cookies przeglądarki
       (jeśli oczywiście użytkownik zezwala na żywanie plików cookie).
    6. Jeżeli ten sam użytkownik wysyła kolejne żądania do serwera plik cookie (czyli connect.sid)
       jest przesyłany z powrotem do serwera.
       Serwer inicjuje (wznawia) sesję odpowiadającą identyfikatorowi sesji poprzez załadowanie zasobów
       (zainicjowanej wcześniej) sesji.
       Dane sesji są przechowywane w zmiennej globalnej, która stanowi tablicę zawierającą zmienne sesyjne.
       Dzięki temu, uwierzytelniony użytkownik pozostaje zalogowany przez całą sesję (dopóki nie wyloguje się
       ręcznie).
 */

const express = require("express");
const session = require("express-session");
const app = express();

const PORT = 8011;

// Konfiguracja aplikacji do użycia sesji:
app.use(session({
    secret: 'secret_key', // określenie klucza
    /* UWAGA
        Klucz jest używany do uwierzytelnienia sesji. Jest on zazwyczaj generowany losowo.
        Klucz jest przechowywany w zmiennej środowiskowej i nigdy nie jest udostępniany publicznie.
        Jest wykorzystywany do obliczania (wyznaczania) ID sesji.
     */
    resave: true, // ustalenie, kiedy sesja ma zostać zapisana
    /* UWAGA
        Wartość true wymusza zapisanie sesji w magazynie sesji przy każdym żądaniu - nawet wtedy,
        gdy nie została ona zmodyfikowana podczas żądania.
     */
    saveUninitialized: true, // ustalenie, czy niezainicjowana sesja ma być zapisana
    /* UWAGA
        Jeśli sesja zostanie utworzona, ale nie została zmodyfikowana, wówczas przyjmuje się,
        że ma ona status uninitialized. Wartość true wymusza zapisanie nowej sesji.
     */
    cookie: {maxAge: 1000 * 60 * 60 * 24}, // data ważności cookie (tutaj: 1 dzień)
    /* UWAGA
        Opcja cookie umożliwia ustawienie czasu ważności pliku cookie.
        Przeglądarka usunie plik cookie po upływie ustawionego czasu
        i wtedy nie będzie on dołączany do żadnego z żądań.
     */
}))

// Obsługa żądania GET na roucie (ścieżce) /:
app.get("/", (req, res) => {
    // Definicja zmiennej sesyjnej:
    req.session.name = 'piotr'; // klucz (zmienna sesyjna) name, value - 'piotr'

    // Przesłanie odpowiedzi do klienta:
    res.send("Sesja została zainicjowana ...");

    // Wyświetlenie w konsoli terminala informacji pomocniczych:
    console.log("req.session: ", req.session);
})

// Obsługa żądania GET na roucie /get:
app.get("/get", (req, res) => {
    // Wyświetlenie w konsoli terminala informacji pomocniczych:
    console.log("req.session: ", req.session);

    // Wysłanie odpowiedzi do klienta:
    res.send(req.session.name);
})

// Uruchomienie serwera aplikacji:
app.listen(PORT, (err) => {
    if (err) throw error;

    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/get`);
})

/* ĆWICZENIE
   Przeprowadzić testy działania aplikacji dla różnych wartości parametrów sesji.
   Zinterpretować uzyskane rezultaty.
 */