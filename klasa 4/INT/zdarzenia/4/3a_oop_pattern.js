/*  NODE.JS EVENTS
    Przechwytywanie i obsługa zdarzeń - podejście obiektowe ES6.
    Obsługa błędów.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

const EventEmitter = require('events');

// Rozszerzenie klasy EventEmitter:
class ControlVariable extends EventEmitter {
    // Definicja konstruktora:
    constructor(endNumber) {
        // Wywołanie konstruktora klasy bazowej:
        super();
        // Deklaracja zmiennej pomocniczej:
        const current = this;

        // Definicja funkcji - argumentu funkcji setTimeout():
        setTimeout(() => {
            if (endNumber <= 0) { // jeśli końcowa liczba nie jest dodatnia
                // Publikacja błędu - zdarzenia 'error':
                current.emit('error', new Error('Argument musi być większy od zera!'))
            }
            /* UWAGA
                Korzystając z obiektów należacych do klasy EventEmitter lub jej klasy pochodnej,
                standardową nazwą zdarzenia błędu jest 'error' (błąd stanowi instancję
                klasy Error).

                Wartość argumentu konstruktora klasy ControlVariable musi być większa od 0.
             */
            let i = 1;
            while (i <= endNumber) {
                // Zgłoszenie (publikacja) zdarzenia o nazwie beforeEvent:
                current.emit("beforeEvent", i);

                // Wykonanie zadanej operacji w pętli:
                console.log("   Wykonanie operacji: ");
                console.log("   kwadrat zmiennej sterującej = " + (i * i));

                // Zgłoszenie zdarzenia o nazwie afterEvent:
                current.emit("afterEvent", i);

                i++;
                console.log();
            }
        }, 100);

        // Funkcja zwraca obiekt klasy ControlVariable:
        return this;
    }
}

// Utworzenie obiektu cV, jako instancji klasy ControlVariable:
const cV = new ControlVariable(0); // celowo błędna wartość argumentu konstruktora

// Skojarzenie zdarzenia beforeEvent z funkcją obługi:
cV.on('beforeEvent', (data) => {
    console.log('Przed operacją nr ' + data + " ...");
});
// Skojarzenie zdarzenia afterEvent z funkcją obługi:
cV.on('afterEvent', (data) => {
    console.log('Po operacji nr ' + data + " ...");
});

// Definicja i rejestracja funkcji obsługi zdarzenia 'error':
cV.on('error', (err) => {
    console.log("Uwaga błąd!", err);
})
/* UWAGA
    Funkcja obsługi (listener) błędu ma argument umożliwiający przechwycenie,
    a następnie obsługę obiektu należącego do klasy Error.
    Wyrzucenie błędu spowoduje zatrzymanie działania programu i jego obsługę.
 */