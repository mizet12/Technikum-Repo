/*  NODE.JS EVENTS
    Przechwytywanie i obsługa zdarzeń - podejście funkcyjne.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

/* UWAGA
    W praktyce programistycznej najczęściej stosowane są dwa wzorce (sposoby,
    które są używane do kojarzenia i zgłaszania zdarzeń przy wykorzystaniu
    klasy EventEmitter:
    1) podejście funkcyjne, w którym funkcja zwraca obiekt klasy EventEmitter;
    2) podejście obiektowe - rozszerzenie klasy EventEmitter.

    Tutaj zaprezentowano pierwszy z wymienionych powyżej sposobów, tj. podejście funkcyjne.
 */

const events = require('events');

// Definicja funkcji, która zwraca obiekt klasy EventEmitter:
function controlVariable(endNumber) {
    // Utworzenie obiektu klasy EventEmitter:
    const eventEmitter = new events.EventEmitter();

    setTimeout(() => {
    /* UWAGA
        Zadaniem funkcji setTimeout() jest wykonanie określonej funkcji po upływie
        zadanego czasu, czyli z zadanym opóźnieniem.
        Pierwszy parametr setTimeout() stanowi funkcja do wykonania, a dugi -
        czas opóźnienia w ms.
     */
        let i = 1; // wartość początkowa zmiennej sterującej pętli
        while (i <= endNumber) { // endNumber - wartość końcowa zmiennej sterującej pętli
            // Zgłoszenie zdarzenia o nazwie beforeEvent:
            eventEmitter.emit("beforeEvent", i);

            // Wykonanie zadanej operacji w pętli:
            console.log("   Wykonanie operacji: ");
            console.log("   kwadrat zmiennej sterującej = " + (i * i));

            // Zgłoszenie zdarzenia o nazwie afterEvent:
            eventEmitter.emit("afterEvent", i);

            // Zwiększenie wartości zmiennej sterującej pętli:
            i++;
            console.log();
        }
    }, 100);

    // Funkcja zwraca obiekt klasy EventEmitter:
    return eventEmitter;
}

// Wywołanie funkcji controlVariable():
const e = controlVariable(5);
console.log(e);

// Skojarzenie zdarzenia beforeEvent z funkcją obługi:
e.on('beforeEvent', (data) => {
    console.log('Przed operacją nr ' + data + " ...");
});
// Skojarzenie zdarzenia afterEvent z funkcją obługi:
e.on('afterEvent', (data) => {
    console.log('Po operacji nr ' + data + " ...");
});
