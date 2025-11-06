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
eventEmitter.on(eventName, (dane) => {
    console.log(dane);
});
eventEmitter.on(eventName, (dane) => {
    console.log(dane);
});
eventEmitter.on(eventName, (dane) => {
    console.log(dane);
});
/* UWAGA
    Rolę argumentów metody on() w powyższych wywołaniach pełnią funkcje strzałkowe
    z paramerami.
 */

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName, 1);
// Ponowna publikacja zdarzenia eventName:
eventEmitter.emit(eventName, 10);
// Ponowna publikacja zdarzenia eventName:
eventEmitter.emit(eventName, 100);
/* UWAGA
    Dane do funkcji obsługi zdarzenia (tutaj: eventName) mogą być również
    dostarczone jako argumenty metody emit().
    Tutaj:
    najpierw wszystkie funkcje obsługi są wykonywane z argumentem 1,
    potem (znowu wszystkie) z argumentem 10, a na końcu (wszystkie)
    - z argumentem 100.
 */


