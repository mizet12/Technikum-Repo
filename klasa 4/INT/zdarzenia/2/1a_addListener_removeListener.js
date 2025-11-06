/*  NODE.JS EVENTS
    Klasa EventEmitter.
    Metody addListener() / on() oraz removeListener() / off().
    Metody: listenerCount(), rawListeners().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie zasobów modułu wbudowanego events:
const events = require('events');

// Definicje funkcji nazwanych:
function eventHandlerA() {
    console.log('Została wykonana funkcja eventHandlerA ...');
}
function eventHandlerB() {
    console.log('Została wykonana funkcja eventHandlerB ...');
}
/* UWAGA
    Funkcje eventHandlerA() i eventHandlerB() pełnią rolę
    funkcji obsługi (listenerów) zadanego zdarzenia.
 */

// Utworzenie obiektu klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
const eventName = "event_name";

// Skojarzenie funkcji obsługi - listenerów ze zdarzeniem eventName:
eventEmitter.addListener(eventName, eventHandlerA);
eventEmitter.addListener(eventName, eventHandlerB);
/* UWAGA
    Metoda addListener() stanowi alias metody on().
 */

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName);

// Określenie liczby zarejestrowanych listenerów zdarzenia eventName:
console.log("Liczba zarejestrowanych listenerów: ", eventEmitter.listenerCount(eventName));


// Wyświetlenie zarejestrowanych listenerów:
console.log(eventEmitter.listeners(eventName));
// Wyświetlenie zarejestrowanych listenerów:
// console.log(eventEmitter.rawListeners(eventName));
/* UWAGA
    Metoda rawListeners() stanowi alias metody listeners().
 */

// Usunięcie powiązania listenera eventHandlerA ze zdarzeniem eventName:
eventEmitter.removeListener(eventName, eventHandlerA);
console.log("Pierwszy listener został dezaktywowany ...");
/* UWAGA
    Alias metody removeListener() to metoda off().
 */

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName);

// Określenie liczby zarejestrowanych listenerów zdarzenia eventName:
console.log("Liczba zarejestrowanych listenerów: ", eventEmitter.listenerCount(eventName));

// Wyświetlenie zarejestrowanych listenerów:
console.log(eventEmitter.listeners(eventName));

// Usunięcie wszystkich listenerów zdarzenia eventName::
eventEmitter.removeAllListeners();

// Wyświetlenie zarejestrowanych listenerów:
console.log(eventEmitter.listeners(eventName));

console.log("Program zakończył działanie ...");