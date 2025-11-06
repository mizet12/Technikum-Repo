/*  NODE.JS EVENTS
    Przechwytywanie i obsługa zdarzeń.
    Wykorzystanie modułu wbudowanego Timers.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

/* UWAGA
    Jawne dołączenie do programu modułu Timers nie jest potrzebne,
    ponieważ funkcje zawarte w tym module są dostępne globalnie
    w celu emulowania API przeglądarki.
 */

// Dołączenie konstruktora klasy EventEmitter:
const {EventEmitter} = require('events');
// Utworzenie instancji klasy EventEmitter:
const eventEmitter = new EventEmitter();

// Publikacja zdarzenia update:
eventEmitter.emit("update");

let cTime = 0; // bieżący czas
// Wywołanie predefiniowanej funkcji setInterval():
setInterval(() => {
    cTime++;
    eventEmitter.emit('update', cTime);
}, 1000);
/* UWAGA
    Wywołanie funkcji powyżej spowoduje aktualizację zdarzenia update co 1000ms.

    Funkcja setInteval() powoduje wykonanie funkcji stanowiącej jej pierwszy argument
    nieskończoną liczbę razy. Drugi argument określa opóźnienie pomiędzy kolejnymi
    wykonaniami funkcji - pierwszego argumentu.
 */

// Definicja i rejestracja funkcji obsługi zdarzenia update:
eventEmitter.on('update', (time) => {
    console.log("Czas od rozpoczęcia programu: ", time, " sekund");
});

