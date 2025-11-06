/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().
    Metody listenerCount(), listeners() i eventNames().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/
const events = require('events');

// Utworzenie instancji (obiektu) klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
let eventName = "event_name";

// Skojarzenie funkcji obsługi (listenerów) dla zdarzenia eventName
// Rejestracja pierwszego listenera:
eventEmitter.on(eventName, () => {
    console.log(`Wywołanie pierwszego listenera zdarzenia '${eventName}'`);
});
// Rejestracja drugiego listenera:
eventEmitter.on(eventName, () => {
    console.log(`Wywołanie drugiego listenera zdarzenia '${eventName}'`);
});
// Rejestracja trzeciego listenera:
eventEmitter.on(eventName, () => {
    console.log(`Wywołanie trzeciego listenera zdarzenia '${eventName}'`);
});
/* UWAGA
    Metoda on() dodaje listenera (funkcję obsługi) dla zdarzenia o podanej nazwie.
    Z danym zdarzeniem może być skojarzonych wiele listenerów - jak tutaj.
    Listenery są zapisywane w tablicy listenerów.
    Listenery skojarzone z danym zdarzeniem są wywoływane w kolejności ich rejestracji.
 */

// Wyświetlenie liczby zarejestrowanych (aktywnych) listenerów:
console.log("Liczba listenerów: ", eventEmitter.listenerCount(eventName));

// Wyświetlenie tablicy zarejestrowanych listenerów:
console.log("Tablica listenerów: ", eventEmitter.listeners(eventName));

// Wyświetlenie tablicy obsługiwanych zdarzeń:
console.log("Tablica zdarzeń: ", eventEmitter.eventNames());

// Publikacja - zgłoszenie zdarzenia:
eventEmitter.emit(eventName);
/* UWAGA
    Publikacja zdarzenia powoduje wywołanie wszystkich zarejestrowanych funkcji
    obsługi (listenerów) dla tego zdarzenia.
 */
/* UWAGA
    Przetwarzanie zdarzeń przy wykorzystaniu emitera zdarzeń jest synchroniczne.
    Innymi słowy, listenery zdarzeń są wywoływane i wykonywane synchronicznie jeden po drugim,
    zgodnie z ich bieżącą pozycją w określonej iteracji pęli zdarzeń.
    Kolejność wykonywania funkcji obsługi (i zapisu w tablicy listenerów) jest zależna
    on kolejności ich rejestracji.
 */



