/*  NODE.JS EVENTS
    Klasa EventEmitter. Asynchroniczne wywołanie listenerów.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

const events = require('events');

// Definicje funkcji obsługi zdarzenia wykonywanych asynchronicznie:
let f1 = function() {
    setImmediate(
        () => {
            console.log("Wywołanie pierwszego listenera (setImmediate()) ...");
        }
    )
}
let f2 = function() {
    setTimeout(
        () => {
            console.log("Wywołanie drugiego listenera (setTimeout()) ...");
        }, 0)
}
let f3 = function() {
    console.log("Wywołanie trzeciego (synchronicznego) listenera ...");
}

// Utworzenie instancji (obiektu) klasy EventListener:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
let eventName = "eventExample";

// Rejestracja listenerów:
eventEmitter.on(eventName, f1);
eventEmitter.on(eventName, f2);
eventEmitter.on(eventName, f3);

// Wyświetlenie liczby zarejestrowanych (aktywnych) listenerów:
console.log(eventEmitter.listenerCount(eventName));

// Publikacja - zgłoszenie zdarzenia:
eventEmitter.emit(eventName);




