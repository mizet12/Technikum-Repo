/*  NODE.JS EVENTS
    Wykorzystanie zasobów modułu Timers: metody setInterval(), clearInterval().

    Przechwytywanie i obsługa zdarzeń - podejście funkcyjne.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie konstruktora klasy EventEmitter:
const {EventEmitter} = require('events');

function CountTime(cT) {
/* UWAGA
    Funkcja CountTime() pełni rolę konstruktora obiektu.
    Parametr cT określa po jakim czasie ma być zatrzymany timer.
 */
    // Utworzenie obiektu klasy EventEmitter:
    const eventEmitter = new EventEmitter();

    let cTime = 0; // bieżący czas
    const timer = setInterval(() => {
        cTime++;
        // Publikacja zdarzenia update z parametrem cTime:
        eventEmitter.emit('update', cTime);

        if (cTime === cT) {
            // Zatrzymanie timera:
            clearInterval(timer);

            // Publikacja zdarzenia end:
            eventEmitter.emit('end');
        }
        /* UWAGA
            Jeśli czas bieżący jest równy zadanemu czasowi cTime, wówczas wywoływana jest
            predefiniowana funkcja clearInterval(), która zatrzymuje timer.
         */

    },
        1000 // // 1000 ms = 1 s
);
    return eventEmitter;
};

// Utworzenie obiektu coutSec poprzez wywołanie konstruktora CountTime():
const countSec = new CountTime(3);
/* UWAGA
    Funkcja CountTime() została wywołana z argumentem odpowiadającym 3 sekundom.
 */

// Definicja i rejestracja funkcji obsługi dla zdarzenia update:
countSec.on('update', (time) => {
    console.log("Czas od rozpoczęcia programu: ", time, " sekund");
});
// Definicja i rejestracja funkcji obsługi dla zdarzenia end:
countSec.on('end', () => {
    console.log('Program zakończył działanie ...');
});


