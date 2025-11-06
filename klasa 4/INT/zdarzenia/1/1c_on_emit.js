/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie zasobów modułu events:
const events = require('events');

// Definicje niezależnych funkcji:
function eventHandler1() {
    console.log('Wywołanie funkcji eventHandler1() ...');
}
function eventHandler2() {
    console.log('Wywołanie funkcji eventHandler2() ...');
}
function eventHandler3() {
    console.log('Wywołanie funkcji eventHandler3() ...');
}
/* UWAGA
    Zdefiniowane powyżej funkcje pełnią rolę funkcji obsługi zdarzenia/zdarzeń.
    Należy zwrócić uwagę, że są one bezparametrowe.
    W ogólnym przypadku, funkcje obsługi zdarzeń mogą posiadać parametry.
 */

// Utworzenie instancji (obiektu) klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
let eventName = "event_name";

// Rejestracja funkcji obsługi - listenerów dla zdarzenia eventName:
eventEmitter.on(eventName, eventHandler1);
eventEmitter.on(eventName, eventHandler2);
eventEmitter.on(eventName, eventHandler3);
/* UWAGA
    Dla zdarzenia eventName dodano trzy funkcje obsługi - listenery.
 */

// Ponowne dodanie pierwszego listenera do zdarzenia eventName:
eventEmitter.on(eventName, eventHandler1);
/* UWAGA
    Pomimo tego, że funkcja eventHandler() została już wcześniej zapisana
    w tablicy listenerów, tutaj została ona dopisana ponownie.
 */

// Wyświetlenie liczby zarejestrowanych (aktywnych) listenerów:
console.log("Liczba listenerów: ", eventEmitter.listenerCount(eventName));

// Wyświetlenie tablicy zarejestrowanych listenerów:
console.log("Tablica listenerów: ", eventEmitter.listeners(eventName));

// Publikacja - zgłoszenie zdarzenia eventName:
eventEmitter.emit(eventName);
/* UWAGA
    Publikacja zdarzenia powoduje wywołanie wszystkich zarejestrowanych funkcji
    obsługi (listenerów) dla tego zdarzenia.
 */


