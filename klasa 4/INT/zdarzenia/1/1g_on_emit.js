/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().
    Metody once(), prependOnceListener(), prependListener().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie zasobów modułu events:
const events = require('events');

// Utworzenie instancji (obiektu) klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
let eventName = "event_name";

// Skojarzenie funkcji obsługi - listenerów dla zdarzenia eventName:
eventEmitter.on(eventName, function eventHandler1(data) {
    console.log("Wyniki z eventHandler1: ", data);
});
eventEmitter.on(eventName, function eventHandler2(data) {
    console.log("Wyniki z eventHandler2: ", data + 1);
});
eventEmitter.on(eventName, function eventHandler3(data) {
    console.log("Wyniki z eventHandler3: ", data + 2);
});

// Jednokrotne dodanie listenera do zdarzenia eventExample:
eventEmitter.once(
    eventName, // nazwa zdarzenia
    function eventHandler4(data) { // funkcja obsługi z parametrem
        console.log("Wyniki z eventHandler4: ", data + 3);
    }
);
/* UWAGA
    Metoda once() dodaje jednorazowo listenera dla zdarzenia o zadanej nazwie.
    Przy następnym zgłoszeniu zdarzenia, listener ten jest usuwany.
    Metoda once() zwraca obiekt klasy EventEmitter.
 */

// Jednokrotne dodanie listenera do zdarzenia eventExample na początku tablicy listenerów:
eventEmitter.prependOnceListener(
    eventName,
    function eventHandler5(data) {
        console.log("Wyniki z eventHandler5: ", data + 4);
    }
);
/* UWAGA
    Funkcja ta dodaje jednorazowo listenera na początku tablicy listenerów.
    Przy następnym zgłoszeniu zdarzenia, listener ten jest usuwany.

    Należy pamiętać, że listenery są wykonywane w kolejności ich zapisu
    w tablicy listenerów. Tym samym tutaj jako pierwsza powinna zostać
    wykonana funkcja eventHandler5().
 */

// Publikacja - zgłoszenie zdarzenia eventName:
eventEmitter.emit(eventName, 1);
console.log();

// Ponowne zgłoszenie zdarzenia eventName:
eventEmitter.emit(eventName, 11);
console.log();

// Dodanie listenera na początku tablicy listenerów:
eventEmitter.prependListener(eventName, function eventHandler6(data) {
    console.log("Wyniki z eventHandler6: ", data + 5);
});
/* UWAGA
   Funkcja prependListener() dodaje listenera na początku tablicy listenerów.
 */

// Ponowne zgłoszenie zdarzenia eventName:
eventEmitter.emit(eventName, 101);

/* UWAGA
    Wyniki z eventHandler5:  5
    Wyniki z eventHandler1:  1
    Wyniki z eventHandler2:  2
    Wyniki z eventHandler3:  3
    Wyniki z eventHandler4:  4

    Wyniki z eventHandler1:  11
    Wyniki z eventHandler2:  12
    Wyniki z eventHandler3:  13

    Wyniki z eventHandler6:  106
    Wyniki z eventHandler1:  101
    Wyniki z eventHandler2:  102
    Wyniki z eventHandler3:  103
 */



