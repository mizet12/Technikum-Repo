/*  NODE.JS EVENTS
    Klasa EventEmitter. Metody on() i emit().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

const events = require('events');

// Określenie nazwy zdarzenia:
let eventName = "event_name";

// Definicja klasy pochodnej klasy EventEmitter:
class Emitter extends events.EventEmitter {
    // Definicja metody instancyjnej:
    info = () => {
        console.log("Komunikat z metody instancyjnej zdefiniowanej w klasie Emitter");
    }
};
/* UWAGA
    Klasa Emitter dziedziczy od klasy EventEmitter właściwości i metody
    umożliwiające obsługę zdarzeń.
    Ponadto, w klasie Emitter zdefiniowano jej natywną metodę instancyjną.
 */

// Utworzenie instancji (obiektu) klasy Emitter:
const eventEmitter = new Emitter();

// Rejestracja listenera:
eventEmitter.on(eventName, (expr) => {
    console.log(expr);
});

// Publikacja zdarzenia eventName:
eventEmitter.emit(eventName, 1);
/* UWAGA
    Funkcja obługi zdarzenia eventName zostanie wywołana z argumentem 1.
 */
console.log();

for (let i = 0; i < 10; i++){
    eventEmitter.emit(eventName, i);
}
/* UWAGA
    Jak to zademonstrowano powyżej, zdarzenie jest obsługiwane każdorozowo,
    kiedy zostanie ono zgłoszone (opublikowane).
 */

// Wywołanie metody instancyjnej należącej do klasy Emitter:
eventEmitter.info();


