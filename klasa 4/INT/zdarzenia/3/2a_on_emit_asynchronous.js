/*  NODE.JS EVENTS
    Klasa EventEmitter.
    Asynchroniczne wywołanie listenerów.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

const events = require('events');

// Utworzenie instancji (obiektu) klasy EventEmitter:
const eventEmitter = new events.EventEmitter();

// Określenie nazwy zdarzenia:
const eventName = "event_name";

// Rejestracja pierwszego listenera:
eventEmitter.on(
    eventName, // nazwa zdarzenia
    () => { // definicja pierwszej funkcji obsługi (listenera)
        setImmediate(() => {
            console.log("Wywołanie pierwszego listenera ...");
        });
    }
);
/* UWAGA
    Standardowo, listenery są wywoływane w kolejności ich rejestracji, czyli synchronicznie
    - jeden po drugim. Zmniejsza to ryzyko popełnienia różnych błędów logicznych, czy też
    powstania tzw. "wyścigu".

    Jednakże istnieje możliwość, aby to zmienić i sprawić, że funkcje obsługi będą wywoływane
    w sposób asynchroniczny. Można to zrealizować przy wykorzystaniu funkcji setImmediate().

    Wywołanie funkcji setImmediate() powoduje, że kod obsługi zdarzenia jest wykonywany asynchronicznie.
 */
/* UWAGA
    Zadaniem funkcji setImmediate() jest, aby funkcja zwrotna (callback) stanowiąca jej argument
    została wykonana (dopiero) w następnej iteracji pętli zdarzeń (event loop).
    Oznacza to wprowadzenie asynchroniczności do wykonywanego kodu.

    Patrząc z kolei z punktu widzenia callbacka (stanowiącego argument setImmediate()),
    zostanie on wykonany dopiero pozakończeniu wykonywania jego funkcji nadrzędnej,
    czyli setImmediate().
    Rola setImmediate() jest analogiczna jak funkcji setTimeout() z czasem opóźnienia 0.
    Nie zmienia to jednak faktu, że callback stanowiący argument setTimeout() zostanie
    wykonany dopiero po zakończeniu wykonywania setTimeout().
 */

// Rejestracja drugiego listenera:
eventEmitter.on(
    eventName, // nazwa zdarzenia
    () => { // definicja drugiej funkcji obsługi (listenera)
        setImmediate(() => {
            console.log("Wywołanie drugiego listenera ...");
        });
    }
);


// Rejestracja trzeciego listenera:
eventEmitter.on(eventName, () => {
        console.log("Wywołanie trzeciego (synchronicznego) listenera ...");
});
/* UWAGA
    Funkcja zwrotna stanowiąca argument metody on() powyżej jest zwykłą
    funkcją synchroniczną!
 */

// Wyświetlenie liczby zarejestrowanych (aktywnych) listenerów:
console.log(eventEmitter.listenerCount(eventName));

// Publikacja - zgłoszenie zdarzenia:
eventEmitter.emit(eventName);




