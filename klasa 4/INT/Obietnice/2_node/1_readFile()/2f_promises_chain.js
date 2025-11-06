/*  NODE.JS PROMISES
    Kontrola przepływu sterowania. Wykorzystanie łańcucha promisów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

const fs = require('fs');

// Zmienne pomocnicze:
const fileName1 = './files/dae1.txt';
const fileName2 = './files/dane2.txt';
const fileName3 = './files/dane3.txt';
/* UWAGA
    Wykonać testy działania programu dla różnych kombinacji błędnych nazw
    plików tekstowych.
 */

// Definicja funkcji do odczytu zawartości pliku tekstowego, która zwraca promis:
function readingFile(fileName) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
                return; // w przypadku błędu funkcja zwraca undefined
            }
            resolve(data); // dla spełnionego promisa funkcja go zwraca na zewnątrz
        })
    })
    return promise; // funkcja zwraca promisa
}

// Definicje funkcji obsługujących wyjście aplikacji:
function wyswietlDane(data) {
    console.log(data.toString());
}
function wyswietlBlad(err) {
    console.log(err.message);
}

// UTWORZENIE I OBSŁUGA PROMISÓW:
// ==============================

// Próba odczytu zawartości pliku "dane1.txt":
const promise = readingFile(fileName1)
    // Obsługa promisa skojarzonego z odczytem pliku 'dane1.txt':
    .then(
        (data) => {
            wyswietlDane(data);
            // Próba odczytu zawartości pliku 'dane2.txt':
            return readingFile(fileName2);
        }
    )
    // Obsługa stanu resolved promisa skojarzonego z odczytem pliku 'dane2.txt'
    .then(
        (data) => {
            wyswietlDane(data);
            // Odczyt zawartości pliku 'dane3.txt' i utworzenie nowego promisa:
            return readingFile(fileName3);
        }
    )
    // Obsługa stanu resolved promisa skojarzonego z odczytem pliku 'dane3.txt'
    .then(
        (data) => {
            wyswietlDane(data);
        }
    )
    .catch(
        (err) => {
        wyswietlBlad(err);
        //console.log(promise);
    }
)
/* UWAGA
    Tutaj:
    a) jeśli promise1 nie zostanie spełniony, wówczas żaden z pozostałych promisów
    nie zostanie spełniony;
    b) jeśli promise2 nie zostanie spełniony, to również promise3 nie będzie spełniony.
 */

/* UWAGA
    Przedstawiony program jest błędny pomimo tego, że na pozór działa prawidłowo.
    W ramach ćwiczenia należy zlokalizować i naprawić te błędy.
 */



