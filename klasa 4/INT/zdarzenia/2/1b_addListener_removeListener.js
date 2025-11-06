/*  NODE.JS EVENTS
    Klasa EventEmitter.
    Metody on() i emit(). Metody addListener(), removeListener().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie zasobów modułu wbudowanego events:
const events = require('events');

// Definicje funkcji obsługi zdarzenia (listenerów):
function eventHandler(expr1, expr2) {
    console.log(expr1);
    console.log(expr2);
}

// Utworzenie obiektu klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
const eventName = "event_name";

// Rejestracja listenerów dla zdarzenia eventName:
eventEmitter.addListener(
    eventName, // nazwa zdarzenia
    (expr1, expr2) => { // funkcja obsługi zdarzenia
        eventHandler(expr1, expr2);
    }
);

// Publikacja zdarzenia eventName z zadanymi argumentami:
eventEmitter.emit(eventName, 1 + 1, 10 + 10);

console.log("Program zakończył działanie ...");