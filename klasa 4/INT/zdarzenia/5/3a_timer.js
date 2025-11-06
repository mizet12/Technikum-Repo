/*  NODE.JS EVENTS
    Przechwytywanie i obsługa zdarzeń - podejście obiektowe.
    Obsługa błędów.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/
// Dołączenie zasobów modułu events:
const {EventEmitter} = require('events');

// Definicja klasy CountTimeEmitter, pochodnej względem klasy EventEmitter:
class CountTimeEmitter extends EventEmitter {
    // Definicja konstruktora klasy:
    constructor(cT) { // cT - czas, po upływie którego nastąpi zatrzymanie timera
        // Wywołanie konstruktora klasy nadrzędnej:
        super();

        // Definicje właściwości:
        this.countTime = cT; // czas, po którym timer się wyłącza
        this.cTime = 0; // czas bieżący
    }
    // Definicja metody (funkcji instancyjnej):
    timerStart() {
        const timer = setInterval(() => {
            // Obsługa ewentualnego błędu argumentu konstruktora:
            if (this.countTime < 2) {
                // Publikacja zdarzenia 'error':
                this.emit('error', new Error("Nieprawidłowa wartość argumentu!"));
                clearInterval(timer);
                this.emit('end');
            }
            /* UWAGA
                Korzystając z obiektów należacych do klasy EventEmitter lub jej klasy pochodnej,
                standardową nazwą zdarzenia błędu jest 'error'.
                Zdarzenie (błąd) 'error' powinno stanowić instancję klasy Error.
                Wartość argumentu konstruktora klasy CountTimeEmitter musi być większa od 1.
             */
            else {
                this.cTime++;
                this.emit('update', this.cTime);

                if (this.cTime === this.countTime) {
                    clearInterval(timer);
                    this.emit('end');
                }
            }

        }, 1000);
    }
}

// Utworzenie obiektu, jako instancji klasy CountTimeEmitter:
const countSec = new CountTimeEmitter(0); // celowo błędna wartość argumentu konstruktora

// Definicja i rejestracja funkcji obsługi dla zdarzenia error:
countSec.on('error', (err) => {
    console.log('Uwaga błąd!', err.message);
});
/* UWAGA
    Funkcja obsługi (listener) błędu powinna mieć argument umożliwiający przechwycenie,
    a następnie obsługę obiektu należącego do klasy Error.
 */

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


