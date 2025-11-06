/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie zasobów modułu events:
const events = require('events');

// Utworzenie instancji klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
let eventName = "event_name";

// Skojarzenie funkcji obsługi - listenerów dla zdarzenia eventName:
eventEmitter.on(
    eventName, // nazwa zdarzenia
    function eventHandler1(data) { // funkcja obsługi
        console.log("Wyniki z eventHandler1: ", data);
    }
    /* UWAGA
        Funkcję obsługi (listener) stanowi zwykła funkcja nazwana (named function)
        z parametrem (wejściowym).
     */
);
eventEmitter.on(eventName, function eventHandler2(data) {
    console.log("Wyniki z eventHandler2: ", data + 1);
});
eventEmitter.on(eventName, function eventHandler3(data) {
    console.log("Wyniki z eventHandler3: ", data + 2);
});
/* UWAGA
    Rolę argumentów metody on() w powyższych wywołaniach pełnią funkcje nazwane
    z parametrami.
 */

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName, 1);


