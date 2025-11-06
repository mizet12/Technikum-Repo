/*  NODE.JS PROMISES
    Kontrola przepływu sterowania.
    Wykorzystanie promisów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

/* UWAGA
    W celu obsługi kodu asynchronicznego w Node, zamiast funkcji zwrotnych (callback'ów)
    można wykorzystać promisy.
 */


const fs = require('fs');

// Definicja funkcji do odczytu zawartości pliku, która zwraca promis:
function readingFile(fileName) {
    // Utworzenie obiektu promisa:
    const promise = new Promise((resolve, reject) => {
        fs.readFile(
            fileName,               // nazwa pliku
                (err, data) => {    // funkcja zwrotna (callback)
                    if (err) {
                        // Przesłanie danej err do funkcji obsługi stanu rejected:
                        reject(err);
                    }
                    else  {
                        // Przesłanie danej err do funkcji obsługi stanu resolved:
                        resolve(data);
                    }
                }
                /* UWAGA
                    Funkcja zwrotna zostanie wykonana dopiero po zakończeniu wykonywania
                    funkcji nadrzędnej, czyli funkcji asynchronicznej readFile().
                 */
        )
    })
    return promise; // funkcja zwraca zdefiniowanego promisa
}

// Definicje funkcji obsługujących wyjście aplikacji:
function wyswietlDane(data) {
    console.log(data.toString());
}
function wyswietlBlad(err) {
    console.log(err.message);
}

// Utworzenie promisów:
const promise1 = readingFile('./files/dane1.txt');
/* UWAGA
    Funkcja readingFile() zwraca promisa. Tym samym, jej wywołanie powoduje
    utworzenie promisa.
 */
const promise2 = readingFile('./files/dane2.txt')
const promise3 = readingFile('./files/dane3.txt')


// Obsługa zdefiniowanych promisów:
promise1.then(
    wyswietlDane, // funkcja obsługi stanu resolved (jako callback)
    wyswietlBlad // funkcja obsługi stanu rejected (jako callback)
);
promise2.then(wyswietlDane, wyswietlBlad);
promise3.then(wyswietlDane, wyswietlBlad);

console.log("Komunikat kontrolny w ostatniej linii kodu programu ....");
/* UWAGA
    Pytanie kontrolne: o czym świadczy kolejność wykonywania operacji w programie?

    Zinterpretować ewentualne różnice w sposobie działania aplikacji dla zmodyfikowanego kodu:
    let promise = readingFile('./files/dane1.txt')
        .then(wyswietlDane, wyswietlBlad);

    promise = readingFile('./files/dane2.txt')
        .then(wyswietlDane, wyswietlBlad);

    promise = readingFile('./files/dane3.txt')
        .then(wyswietlDane, wyswietlBlad);
 */
