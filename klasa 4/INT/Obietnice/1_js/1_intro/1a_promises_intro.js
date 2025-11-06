/*  NODE.JS PROMISES
    Wprowadzenie, wiadomości ogólne.
    Stany promisu: pending, resolved, rejected.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

/* UWAGA
    Aplikacje Javascript (i Node) są jednowątkowe (single-threaded).
    Oznacza to, że wszystko (np. obługa zdarzeń) jest realizowane w tym samym,
    pojedynczym wątku (procesie).

    Jeśli wątek jest zajęty wykonywaniem jakiegoś złożonego (długotrwałego) zadania,
    wówczas aplikacja może działać powoli (czyli mało wydajnie).
    Problem ten można rozwiązać stosując np.
    1) funkcje zwrotne (callbacks) użyte łącznie z funkcją setTimeout();
    2) "obietnice" (promises) z odpowiednio zaprojektowanymi callbackami;
    3) funkcje async, await.
 */

/* UWAGA
    Wykorzystanie "promisa" jest powiązane zwykle z kodem (zadaniem) asynchronicznym.
    Promis - jako taki - stanowi pewnego rodzaju symbol zastępczy (proxy) określonej wartości,
    która będzie (lub nie będzie) dostępna później - w przyszłości.
    Dzięki temu, wynik zadania asynchronicznego może zostać obsłużony już po jego zakończeniu.
    Podsumowując, przepływ sterowania (control flow) oparty na obietnicach odbywa się
    asynchronicznie. Jest tak pomimo tego, że kod zawarty wewnątrz promisów jest synchroniczny.

    Formalnie "promis" jest obiektem, który przechowuje stan "obietnicy":
    1) albo obietnica została spełniona - promis został spełniony (fulfilled, resolved);
    2) albo obietnica nie została spełniona - promis został odrzucony (rejected).
    Jeśli obietnica została spełniona, wówczas we wspomnianym powyżej obiekcie
    przechowywana jest oczekiwana (obiecana) wartość.
 */

/* UWAGA
    Wywołanie promisa powoduje jego przejście w tzw. stan oczekiwania (pending state).
    Funkcja wywołująca (caller) kontynuuje działanie. W tym czasie promis jest aktywny.
    Jest tak aż do chwili, w której promis zostanie rozwiązany/rozstrzygnięty (resolved).
    Promis może być rozwiązany jako spełniony (fulfilled) albo odrzucony (rejected).

    Rozwiązanie (w sensie spełnienia) obietnicy powoduje przekazanie przez niego danych do
    funkcji obsługi. Stan ten jest nazywany (jak wspomniano powyżej) - stanem  rozwiązanym
    (resolved state). Stan przeciwny nazywany jest z kolei stanem odrzuconym (rejected state).

    Wystąpienie każdego z ww. stanów (resolved albo rejected) powoduje wywołanie skojarzonej
    z nim funkcji zwrotnej (callback'a):
    1) albo funkcji then() - dla stanu resolved;
        promise.then(fulfillment),
            gdzie fulfillment() jest funkcją zwrotną (callback) obsługi odpowiedzi
            dla spełnionej obietnicy

    2) albo funkcji catch() - dla stanu rejected.
        promise.catch(rejection),
            gdzie rejection() jest callbackiem obsługującym przypadek niespełnionej obietnicy.
    Dany promis może być obsługiwany przez wiele funkcji then() i catch().

    W ogólnym przypadku pełna obsługa promisa (wraz z obługą błędów) może zostać zrealizowana
    za pomocą funkcji then() - czyli bez potrzeby użycia funkcji catch():
        promise.then(fulfillment, rejection),
            gdzie fulfillment i rejection mają takie samo znaczenie jak powyżej.

    Wywołania:
        promise.then(fulfillment)
        promise.catch(rejection)
    jest równoważne wywołaniom:
        promise.then(fulfillment)
        promise.then(null, rejection)

    Zarówno metoda then(), jak również catch() zwracają za każdym razem nowe obietnice.
    Jest to bardzo ważne!

    Wywołanie:
        promise.then(fulfillment, rejection)
    nie jest zatem równoważne wywołaniom podanym powyżej!

    Jeśli obietnica zostanie rozstrzygnięta, to jej wyniku nie można już zmienić!
 */


function mileGodz_na_kmGodz(predkosc) {
    return 1.609344 * predkosc;
}
// Zmienna pomocnicza:
const predkosc = -60;    // predkosc >= 0 - obietnica spełniona,
// Utworzenie "promisu" o nazwie promis:
const promise = new Promise((resolve, reject) => {
    if (predkosc >= 0) { // przejście w stan resolved (rozwiązany)
        // Określenie danej do przekazania (do funkcji obsługi then()) w stanie resolved:
        const data = mileGodz_na_kmGodz(predkosc); // do funkcji obsługi może zostać zwrócona wyłacznie pojedyncza dana
        // Przekazanie danej do funkcji obsługi then():
        resolve(data);
    } else { // przejście w stan rejected (odrzucony)

        // Określenie danej do przekazania (do funkcji catch()) w stanie rejected:
        const err = 'Uwaga błąd: prędkość nie może być ujemna!';
        // Przekazanie danej do funkcji obsługi catch():
        reject(err);
    }
})

// Obsługa promisa:
const checking = () => {
    promise
        // Funkcja obsługi stanu resolved:
        .then((data) => { // funkcja callback jako argument funkcji then()
            console.log(data);
        })
        // Funkcja obsługi stanu rejected:
        .catch((err) => { // funkcja callback jako argument funkcji catch()
            console.error(err);
        })
}
// Wywołanie funkcji checking():
checking();
