/*  NODE.JS PROMISES
    Kontrola przepływu sterowania. Wykorzystanie łańcucha promisów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

const fs = require('fs');

// Zmienne pomocnicze:
const fileName1 = './files/dane1.txt';
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
                // Przesłanie danych do funkcji obsługi stanu rejected:
                reject(err);
                //return;
            }
        // Przesłanie danych do funkcji obsługi stanu resolved:
            resolve(data);
        })
    })
    return promise; // funkcja zwraca na zewnątrz promisa
}

// Definicje funkcji obsługujących wyjście aplikacji:
function wyswietlDane(data) {
    console.log(data.toString());
}
function wyswietlBlad(err) {
    console.log(err.message);
}

// UTWORZENIE I OBSŁUGA PROMISÓW
// ==============================

// Odczyt zawartości pliku 'dane1.txt' i utworzenie promisa:
const promise = readingFile(fileName1)
    // Obsługa promisa skojarzonego z odczytem pliku 'dane1.txt':
    .then(
        // Obsługa stanu resolved:
        (data) => {
            wyswietlDane(data);
            // Odczyt zawartości pliku 'dane2.txt' i utworzenie nowego promisa:
            return readingFile(fileName2);
        },
        // Obsługa stanu rejected:
        (err) => {
            wyswietlBlad(err);
            // Odczyt zawartości pliku 'dane2.txt' i utworzenie nowego promisa:
            return readingFile(fileName2);
        }
    )
    // Obsługa promisa skojarzonego z odczytem pliku 'dane2.txt':
    .then(
        // Obsługa stanu resolved:
        (data) => {
            wyswietlDane(data);
            // Odczyt zawartości pliku 'dane3.txt' i utworzenie nowego promisa:
            return readingFile(fileName3);
        },
        // Obsługa stanu rejected:
        (err) => {
            wyswietlBlad(err);
            return readingFile(fileName3);
        }
    )
    // Obsługa promisa skojarzonego z odczytem pliku 'dane3.txt':
    .then(
        (data) => {
            wyswietlDane(data);
        },
        (err) => {
            wyswietlBlad(err);
        }
    )
/* UWAGA
    Ze względu na fakt, że funkcja then() zwraca promisa, można promisy łączyć w łańcuch
    - jak to pokazano powyżej. W ten sposób unika się głębokiego zagnieżdżania.
 */



