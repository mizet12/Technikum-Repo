/*  NODE EXPRESS - FUNKCJE POŚREDNIE (MIDDLEWARE FUNCTIONS)
    Oprogramowanie pośrednie poziomu aplikacji (application-level middleware).

    Metoda app.get().

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
    W aplikacjach Express wykorzystuje się funkcje pośrednie/pośredniczące (middleware functions).
    Funkcje pośrednie są wykonywane po odebraniu określonego żądania HTTP (HTTP request) przez serwer,
    - np. GET, POST -  ale (zwykle) przed wysłaniem odpowiedzi (response) do klienta.
    Mówiąc inaczej, funkcje pośrednie mogą przetworzyć żądanie klienta przed wysłaniem do niego
    odpowiedzi przez serwer.

    Funkcje pośrednie mają zapewniony nieograniczony dostęp do obiektu żądania (czyli req)
    oraz obiektu odpowiedzi (res).

    W ogólności, żądanie może być obsługiwane (przetwarzane) przez wiele funkcji pośrednich.
    W takim przypadku funkcje te tworzą łańcuch funkcji pośrednich (middleware functions chain).
    Funkcje wchodzące w skład wspomnianego łańcucha są wykonywane kolejno jedna po drugiej - sekwencyjnie.
    Odpowiedź do klienta jest przesyłana (zazwyczaj) przez ostatnią funkcję w łańcuchu.

    Kolejne (następne) funkcje w łańcuchu funkcji pośrednich są wywoływane poprzez użycie (wykonanie)
    metody next(). Tym samym, wywołanie next() powinno się znaleźć w każdej funkcji pośredniej w łańcuchu
    oprócz ostatniej. Użycie funkcji next() wymusza obecność dodatkowego parametru w nagłówku definicji
    funkcji pośredniej (oprócz req i res), który reprezentuje tę funkcję.

    Funkcje pośrednie mogą przetwarzać obiekt żądania wielokrotnie, zanim serwer udzieli klientowi odpowiedzi.
    Na przykład, przy wykorzystaniu funkcji pośrednich można zaimplementować skuteczny system rejestrowania
    i uwierzytelniania użytkowników aplikacji.

    Podsumowując, jeśli serwer Express otrzyma żądanie, wówczas wykonuje jedną lub więcej funkcji pośrednich.
    Ich zadaniem jest obsługa żądania oraz tworzenie odpowiedzi dla klienta.
 */

/* UWAGA
    Funkcje middleware mogą wykonywać różne zadania, np.
    1) wykonać dowolny kod pomocniczy przed- lub po- wysłaniu odpowiedzi do klienta;
    2) modyfikację obiektu żądania (req) i/lub obiektu odpowiedzi (res);
    3) wywołać kolejną funkcję pośrednią (next);
    4) zakończyć cykl żądanie-odpowiedź.
 */

const express = require("express");

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8041; // w razie potrzeby można zmienić

// Rejestracja i obsługa żądania HTTP GET na zadanym roucie:
app.get(
    "/", // określenie ścieżki/trasy:

    // DEFINICJE FUNKCJI TWORZĄCYCH ŁAŃCUCH FUNKCJI POŚREDNICH
    // Definicja pierwszej funkcji pośredniej:
    (req, res, next) => {
        console.log("Komunikat kontrolny z pierwszej funkcji pośredniej ...");
        // Wywołanie metody next():
        next();
        /* UWAGA
            Metoda next() jest wywoływana w każdej funkcji pośredniej w łańcuchu oprócz ostatniej.
            Jej zadaniem jest wywołanie kolejnej funkcji pośredniej wchodzącej w skład łańcucha.
            Stąd, każda z funkcji pośrednich w łańcuchu (oprócz ostatniej) powinna posiadać parametr next.
         */
    },

    // Definicja drugiej funkcji pośredniej w łańcuchu:
    (req, res, next) => {
        console.log("Komunikat kontrolny z drugiej funkcji pośredniej ...");
        next();
    },

    // Definicja trzeciej (ostatniej) funkcji pośredniej w łańcuchu:
    (req, res) => {
        console.log("Komunikat kontrolny z trzeciej (ostatniej) funkcji pośredniej ...");
        // Przesłanie odpowiedzi do klienta:
        res.send(`
            <div>
                <h4>Odpowiedź serwera na żądanie GET przesłana z trzeciej funkcji pośredniej</h4>                
            </div>
        `);
        /* UWAGA
            Odpowiedź serwera do klienta jest przesyłana zazwyczaj przez ostatnią z funkcji pośrednich
            wchodzących w skład łańcucha funkcji pośrednich.
            W ostatniej funkcji łańcucha metoda next() nie jest wywoływana.
            Tym samym, ostatnia funkcja w łańcuchu nie musi posiadać parametru next.

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
    Metoda app.get() pozwala na skojarzenie (powiązanie) funkcji pośrednich z określoną ścieżką.
    Powiązanie to jest realizowane również dla innych metod obiektu app, np. app.post().

    W ogólności, funkcje pośrednie można wiązać (kojarzyć) z określoną ścieżką przy wykorzystaniu
    metody app.use().
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki http://localhost:${PORT}`);
});

