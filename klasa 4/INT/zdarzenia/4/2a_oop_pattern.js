/*  NODE.JS EVENTS
    Przechwytywanie i obsługa zdarzeń - podejście obiektowe ES5.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

/* UWAGA
    W aplikacji poniżej został zaprezentowany drugi sposób (wzorzec)
    do obsługi własnych - niestandardowych zdarzeń w Node.
    Sposób ten polega na rozszerzeniu klasy EventEmitter.

    Podejście tradycyjne (ES5).
 */

// Dołączenie konstruktora klasy EventEmitter:
var EventEmitter = require('events').EventEmitter;
//console.log(EventEmitter);

// Dołączenie modułu wbudowanego util:
var util = require('util');
/* UWAGA
    Moduł podstawowy (core module) util zawiera zestaw pomocniczych funkcji narzędziowych.
 */

// Definicja funkcji, która pełni rolę konstruktora:
function ControlVariable(endNumber) {
    // Deklaracja zmiennej pomocniczej:
    var current = this;
    /* UWAGA
        Jeśli this jest używane wewnątrz funkcji, wówczas jego wartość jest określana
        na nowo przed każdym wywołaniem funkcji.
     */

    // Wywołanie funkcji asynchronicznej:
    setTimeout(
        function() {
            var i = 1; // wartość początkowa zmiennej sterującej pętli
            while (i <= endNumber) { // endNumber - wartość końcowa zmiennej sterującej pętli
                // Zgłoszenie zdarzenia o nazwie beforeEvent:
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

// Rozszerzenie klasy EventEmitter:
util.inherits(ControlVariable, EventEmitter);
/* UWAGA
    Jako argumenty metody inherits podano dwa konstruktory.
    Pierwszym z nich jest kontruktor ControlVariable().
    Drugi argument stanowi konstruktor EventEmitter().
    Tym samym, wraz z obiektem klasy ControlVariable można korzystać
    z metod i właściwości należących do klasy EventEmitter.

    Ogólna składnia metody inherits() jest następująca:
        inherits(konstruktor, superKonstruktor);
 */

// Utworzenie obiektu cV za pomocą konstruktora ControlVariable():
const cV = new ControlVariable(5);
/* UWAGA
    Wartość 5 to argument odpowiadający parametrowi endNumber
    w definicji konstruktora.
 */

// Skojarzenie zdarzenia o nazwie beforeEvent z funkcją obługi:
cV.on('beforeEvent', function(data) {
    console.log('Przed operacją nr ' + data + " ...");
});
// Skojarzenie zdarzenia o nazwie afterEvent z funkcją obługi:
cV.on('afterEvent', function(data) {
    console.log('Po operacji nr ' + data + " ...");
});
