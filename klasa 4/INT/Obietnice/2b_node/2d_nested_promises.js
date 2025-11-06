/*  NODE.JS PROMISES
    Kontrola przepływu sterowania.
    Wykorzystanie promisów zagnieżdżonych.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/


const readingFile = require('./local_modules/readingfile');

const fileName1 = __dirname + '/files/dane1.txt';
const fileName2 = __dirname + '/files/dane2.txt';
const fileName3 = __dirname + '/files/dane3.txt';
/* UWAGA
    Wykonać testy działania programu dla różnych kombinacji błędnych nazw
    plików tekstowych.
 */

function displayInfo(info) {
    console.log(info);
}


// UTWORZENIE I OBSŁUGA PROMISÓW
// ==============================

// Odczyt zawartości pliku 'dane1.txt' oraz utworzenie promisa:
const promise1 = readingFile(fileName1);


// Obsługa promisa skojarzonego z odczytem pliku 'dane1.txt' (fileName1)
// i utworzenie nowego promisa:
const promise2 = promise1.then(
/* UWAGA
    Metoda then() zwraca promisa, który zostaje zapisany w zmiennej promise2.
 */
        // Obsługa stanu resolved:
        (data) => {
            displayInfo(data.toString());
            // Odczyt zawartości pliku 'dane2.txt' oraz utworzenie i zwrócenie promisa:
            return readingFile(fileName2);

        },
        // Obsługa stanu rejected:
        (err) => {
            displayInfo(err.message);
            return readingFile(fileName2);
        }
);
// Obsługa promisa skojarzonego z odczytem pliku 'dane2.txt' (fileName2)
// i utworzenie nowego promisa:
const promise3 = promise2.then(
    // Obsługa stanu resolved:
    (data) => {
        displayInfo(data.toString());
        // Odczyt zawartości pliku 'dane3.txt', utworzenie i zwrócenie promisa:
        return readingFile(fileName3);
    },
    // Obsługa stanu rejected:
    (err) => {
        displayInfo(err.message);
        return readingFile(fileName3);
    }
);
// Obsługa promisa skojarzonego z odczytem pliku 'dane3.txt':
promise3.then(
    (data) => {
        displayInfo(data.toString());
    },
    (err) => {
        displayInfo(err.message);
    }
);
/* UWAGA
    Ze względu na fakt, że funkcja then() zwraca promisa, można zagnieżdżać promisy
    - jak to pokazano powyżej. Jest to jednak trudny sposób, wymagający dużej uwagi
    w programowaniu.
 */

console.log("Komunikat kontrolny w ostatniej linii kodu programu ....");
/* UWAGA
    Pytanie:
    o czym świadczy kolejność wykonywania operacji w programie?
 */