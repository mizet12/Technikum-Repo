/*  NODE.JS EVENTS
    Przechwytywanie i obsługa zdarzeń - podejście obiektowe ES6.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

/* UWAGA
    W aplikacji poniżej zostało zaprezentowane drugi sposób (wzorzec) do obsługi
    własnych - niestandardowych zdarzeń w Node.
    Sposób ten polega na rozszerzeniu klasy EventEmitter.

    Podejście ES6.
 */
const EventEmitter = require('events');

// Rozszerzenie klasy EventEmitter:
class ControlVariable extends EventEmitter {
/* UWAGA
    Klasa EventEmitter stanowi klasę bazową dla klasy (pochodnej) ControlVariable.
    Tym samym, klasa ControlVariable rozszerza klasę EventEmitter.
    Klasa ta dziedziczy od klasy EventEmitter wszystkie właściwości i metody.
 */
    // Definicja konstruktora z parametrem:
    constructor(endNumber) {
        // Wywołanie konstruktora klasy bazowej:
        super();
        // Deklaracja zmiennej pomocniczej:
        const current = this;

        // Wywołanie metody asynchronicznej:
        setTimeout(() => {
            let i = 1; // zmienna sterująca pętli
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

        // Konstruktor zwraca obiekt klasy ControlVariable:
        return this;
    }
}

// Utworzenie obiektu cV, jako instancji klasy ControlVariable:
const cV = new ControlVariable(5);
/* UWAGA
    Dla przypomnienia: klasa ControlVariable stanowi klasę pochodną
    klasy bazowej EventEmitter.
 */

// Skojarzenie zdarzenia o nazwie beforeEvent z funkcją obługi:
cV.on('beforeEvent', (data) => {
    console.log('Przed operacją nr ' + data + " ...");
});
// Skojarzenie zdarzenia o nazwie afterEvent z funkcją obługi:
cV.on('afterEvent', (data) => {
    console.log('Po operacji nr ' + data + " ...");
});
