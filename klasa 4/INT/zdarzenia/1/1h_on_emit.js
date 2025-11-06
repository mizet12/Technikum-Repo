/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

const events = require('events');

// Utworzenie instancji (obiektu) klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Nazwa zdarzenia:
let eventName = "event_name";

// Rejestracja listenera dla zdarzenia eventName::
eventEmitter.on(
    eventName, // nazwa zdarzenia
    (expr) => { // funkcja obsługi
        console.log(expr);
    }
);

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName, 1);
console.log(1);
eventEmitter.emit(eventName, 1 + 1);
console.log(1 + 1);
eventEmitter.emit(eventName, 1 + 1 + 1);
console.log(1 + 1 + 1);
/* UWAGA
    Przetwarzanie zdarzeń przy wykorzystaniu emitera zdarzeń jest synchroniczne.
    Innymi słowy, listenery zdarzeń są wywoływane i wykonywane synchronicznie jeden po drugim,
    zgodnie z ich bieżącą pozycją w określonej iteracji pęli zdarzeń.
    Kolejność wykonywania funkcji obsługi (i zapisu w tablicy listenerów) jest zależna
    on kolejności ich rejestracji.
 */


