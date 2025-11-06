/*  NODE.JS EVENTS
    Wykorzystanie zasobów modułu Timers: metody setInterval(), clearInterval().
    Przechwytywanie i obsługa zdarzeń - podejście obiektowe.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

const {EventEmitter} = require('events');

// Definicja klasy CountTime, pochodnej względem klasy EventEmitter:
class CountTimeEmitter extends EventEmitter {
    // Definicja konstruktora klasy:
    constructor(cT) {
        // Wywołanie konstruktora klasy bazowej:
        super();

        // Definicje właściwości:
        this.countTime = cT; // czas, po którym timer się wyłącza
        this.cTime = 0; // czas bieżący
    }
    // Definicja metody instancyjnej:
    timerStart() {
        const timer = setInterval(() => {
            this.cTime++;
            // Publikacja zdarzenia update:
            this.emit('update', this.cTime);

            if (this.cTime === this.countTime) {
                // Zatrzymanie timera:
                clearInterval(timer);
                // Publikacja zdarzenia end:
                this.emit('end');
            }
        }, 1000);
    }
}

// Utworzenie obiektu, jako instancji klasy CountTimeEmitter:
const countSec = new CountTimeEmitter(3);

// Definicja i rejestracja funkcji obsługi dla zdarzenia update:
countSec.on('update', (time) => {
    console.log("Czas od rozpoczęcia programu: ", time, " sekund");
});
// Definicja i rejestracja funkcji obsługi dla zdarzenia end:
countSec.on('end', () => {
    console.log('Program zakończył działanie ...');
});

// Wywołanie metody instancyjnej timerStart():
countSec.timerStart();


