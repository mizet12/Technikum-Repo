/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

const events = require('events');

// Określenie nazwy zdarzenia:
let eventName = "event_name";

// Utworzenie instancji (obiektu) klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Rejestracja listenera:
eventEmitter.on(
    eventName, // nazwa zdarzenia
    (bok1, bok2) => { // funkcja obsługi zdarzenia
        console.log("Pole wynosi ", bok1 * bok2);
        console.log("Obwód wynosi ", 2 * bok1 + 2 * bok2);
    }
);
/* UWAGA
    Listener (funkcja obsługi) zdarzenia może mieć jeden lub więcej parametrów - jak powyżej.
 */

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName, 1, 2);
/* UWAGA
    Funkcja obługi zdarzenia eventName została wywołana z argumentami 1 i 2.
    Argumenty zostały przekazane do metody emit().
 */




