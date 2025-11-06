/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metody app.use(), app.get(). Metoda res.end().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

const express = require("express");
// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8042;

/* UWAGA
    Wywołanie metody app.get() (podobnie jak innych metod pozwalających na obsługę żądań HTTP,
    np. app.post()) pozwala na dodanie funkcji pośredniej (lub funkcji pośrednich) do tzw.
    wewnętrznego stosu funkcji pośrednich (internal middleware stack).

    Funkcje pośrednie można również dodawać do łańcucha (stosu funkcji pośrednich) za pomocą
    metody app.use().
 */

// Dodanie funkcji pośredniej do stosu funkcji pośrednich na wszystkich ścieżkach:
app.use(
    // Definicja funkcji pośredniej:
    (req, res, next) => {
    /* UWAGA
        Metodę app.use() - w przeciwieństwie np. do app.get(), czy app.post() - można używać
        bez określania pierwszego argumentu, czyli ścieżki (trasy).

        Funkcja pośrednia stanowiąca argument wywołania metody app.use() o postaci:
            app.use(funkcja pośrednia);
        jest wywoływana (i wykonywana) za każdym razem, gdy żądanie jest wysyłane do serwera
        (czyli dla dowolnego żądania, na dowolnej ścieżce).
     */
        console.log('Komunikat z funkcji pośredniej każdego żądania i na każdej ścieżce ...');
        next();
        /* UWAGA
            Metoda next() powinna być wywoływana w każdej funkcji pośredniej w łańcuchu funkcji pośrednich
            oprócz ostatniej. Jej zadaniem jest wywołanie kolejnej funkcji pośredniej w łańcuchu.
            Dlatego też, każda z funkcji pośrednich w łańcuchu (oprócz ostatniej) powinna posiadać
            parametr next. Parametr ten reprezentuje następną funkcję pośrednią w łańcuchu.
         */
    }
)
/* UWAGA
    Funkcja pośrednia zdefiniowana powyżej została dodana do stosu (łańcucha) funkcji pośrednich
    bez określania ścieżki (trasy), ani typu żądania (np. GET, POST).
    Tym samym zostanie ona wykonana dla każdego żądania - dowolnego typu i na dowolnej ścieżce.
 */

// Obsługa żądania HTTP GET na zadanej ścieżce:
app.get(
    "/", // określenie ścieżki żądania

    // DEFINICJE FUNKCJI TWORZĄCYCH ŁAŃCUCH FUNKCJI POŚREDNICH
    // Definicja funkcji pośredniej A w łańcuchu:
    (req, res, next) => {
        console.log("Komunikat kontrolny z funkcji pośredniej A ...");
        // Wywołanie metody next():
        next();
    },
    // Definicja funkcji pośredniej B w łańcuchu:
    (req, res, next) => {
        console.log("Komunikat kontrolny z funkcji pośredniej B ...");
        next();
    },

    // Definicja funkcji pośredniej C w łańcuchu:
    (req, res) => {
        console.log("Komunikat kontrolny z funkcji pośredniej C ...");
        // Przesłanie odpowiedzi do klienta:
        res.end();
        /* UWAGA
            Metoda res.end() kończy proces odpowiedzi do klienta. Pochodzi ona z Node -
            odpowiada metodzie response.end() z klasy http.ServerResponse.
            Zwykle metoda ta jest używana do zakończenia odpowiedzi bez przesyłania żadnych danych.
         */

        /* UWAGA
            Zazwyczaj odpowiedź serwera do klienta jest przesyłana przez ostatnią z funkcji pośrednich
            w łańcuchu funkcji pośrednich. Nie jest to jednak formalnie wymagane.

            Funkcja pośrednia, której zadaniem jest przesłanie odpowiedzi do klienta (przeglądarki)
            jest często nazywana funkcją obsługi routa/ścieżki (route handler).

            Tutaj, odpowiedź serwera do klienta jest wysyłana dopiero po wykonaniu funkcji pośrednich.
         */
    }
    /* UWAGA
        Funkcja obsługi ścieżki/trasy (route handler) stanowi funkcję pośrednią specjalną.
        Jej zadaniem jest przesłanie odpowiedzi do klienta (przeglądarki).

        Jedna szkoła programowania uczy, że funkcja obsługi routa powinna być ostatnią funkcją
        w łańcuchu funkcji pośrednich. Dlatego też, nie powinna posiadać parametru 'next'
        i (tym samym) wywołania tej funkcji next() w swoim ciele.

        Z kolei druga szkoła programowania mówi inaczej - że określone działania (operacje) można
        wykonać przed przesłaniem odpowiedzi do klienta oraz po wysłaniu tej odpowiedzi.
        Tym samym, po funkcji obsługi określonego routa można wykonać również kolejne funkcje pośrednie.
     */
);
/* UWAGA
    Skojarzenie (powiązanie) funkcji pośrednich z określonym routem (ścieżką) można uzyskać
    za pomocą metody app.get().
    Powiązanie może być również realizowane dla innych metod obiektu app, np. app.post().

    W ogólności, funkcje pośrednie można wiązać (kojarzyć) z określonym routem przy wykorzystaniu
    metody app.use(), ale również np. app.get(), app.post() itd.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}`);
});






