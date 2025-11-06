/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie zasobów modułu events:
const events = require('events');

// Definicje funkcji pełniących rolę funkcji obsługi zdarzenia (listenerów):
function eventHandler1(dane) {
    console.log(dane);
}
function eventHandler2(dane) {
    console.log(dane);
}
function eventHandler3(dane) {
    console.log(dane);
}
/* UWAGA
    Zdefiniowane powyżej listenery posiadają parametry (wejściowe).
 */

// Utworzenie instancji klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
let eventName = "event_name";

// Skojarzenie funkcji obsługi - listenerów dla zdarzenia eventName:
eventEmitter.on(
    eventName, // nazwa zdarzenia
    () => { // funkcja obsługi zdarzenia
        const temp = 1;
        // Wywołanie funkcji eventHandler() z argumentem 1:
        eventHandler1(temp);
        /* UWAGA
            Wywołanie funkcji eventHandler() nie powoduje jej wykonania!
            Metoda on umożliwia jedynie skojarzenie funkcji obsługi ze zdarzeniem.
            Wykonanie funkcji obsługi zdarzenia jest związane z wykonaniem metody emit().
         */
        console.log("Komunikat z pierwszej funkcji obsługi ...");
});
eventEmitter.on(eventName, () => {
    eventHandler2(2);
    console.log("Komunikat z drugiej funkcji obsługi ...");
});
eventEmitter.on(eventName, () => {
    eventHandler3(3);
    console.log("Komunikat z trzeciej funkcji obsługi ...");
});
/* UWAGA
    W powyższych wywołaniach metody on() rolę arumentów pełnią funkcje anonimowe
    zaimplementowane jako funkcje strzałkowe.
 */

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName);
/* UWAGA
    Jeśli funkcja obsługi (listener) zdarzenia o podanej nazwie zostanie zdefiniowana,
    wówczas publikacja (zgłoszenie) tego zdarzenia uruchamia mechanizm jego nasłuchiwania.
    Dane są przekazywane do listenera w chwili jego wywołania.
 */

// Wyświetlenie liczby zarejestrowanych (aktywnych) listenerów:
console.log("Liczba listenerów: ", eventEmitter.listenerCount(eventName));

// Wyświetlenie tablicy zarejestrowanych listenerów:
console.log("Tablica listenerów: ", eventEmitter.listeners(eventName));



