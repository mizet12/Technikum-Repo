/* NODE.JS GLOBAL OBJECTS
   Moduł Timers. Metoda setImmediate().

   © Piotr Siewniak, wersja: 29.IV.2022 r.
*/

// Definicja funkcji pomocniczej:
function info() {
    console.log("Komunikat z funkcji info() ...");
}

console.log("Komunikat z linii na początku kodu (skryptu) ...");

// Wywołanie metody setImmediate():
const timer = setImmediate(info);
/* UWAGA
    Metoda setImmediate() pozwala na wykonania określonej funkcji (określonego kodu) po zakończeniu
    wykonywania pętli zdarzeń (event loop).
    Innymi słowy, metoda ta jest wykonywana PO wykonaniu wszystkich (blokujących - synchronicznych)
    instrukcji w skrypcie.

    Taki sam rezultat można uzyskać wywołując metodę setTimeout() z zerowym opóźnieniem.
 */

// Zestaw instrukcji blokujących - synchronicznych:
for (let i = 0; i < 5; i++) {
    console.log("Numer iteracji: " + (i+1));
}

console.log("Komunikat z linii na końcu kodu (skryptu) ...");

/* UWAGA
    Rezultat wykonania programu:

    Komunikat z linii na początku kodu (skryptu) ...
    Numer iteracji: 1
    Numer iteracji: 2
    Numer iteracji: 3
    Numer iteracji: 4
    Numer iteracji: 5
    Komunikat z linii na końcu kodu (skryptu) ...
    Komunikat z funkcji info() ...

    Jak widać, kod zawarty w funkcji zwrotnej info() został wykonany na samym końcu -
    - już po wykonaniu wszystkich instrukcji blokujących (synchronicznych).
 */