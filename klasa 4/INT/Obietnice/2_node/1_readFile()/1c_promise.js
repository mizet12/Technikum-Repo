/*  NODE.JS PROMISES
    Kontrola przepływu sterowania. Wykorzystanie promisa.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

const fs = require('fs');

// Definicja funkcji pomocniczej:
const readingFile = (fileName) => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(
            fileName,           // nazwa pliku
            (err, data) => {    // funkcja zwrotna (callback)
                if (err)
                    // Przesłanie danych do funkcji obsługi stanu rejected:
                    reject(err);
                else
                    // Przesłanie danych do funkcji obsługi stanu resolved:
                    resolve(data);
            }
        )
    })
    return promise; // funkcja readingFile() zwraca promisa
}
/* UWAGA
    Zdefiniowana funkcja readingFile() ma jeden parametr/argument -
    - nazwę pliku tekstowego do odczytu.
 */

// Utworzenie promisa:
const promise = readingFile("./files/dane.txt");
/* UWAGA
    Funkcja readdingFile() zwraca promisa, co wynika z jej definicji.
    Dlatego też, jej wywołanie skutkuje utworzeniem promisa.
 */
promise
    // Obsługa stanu resolved:
    .then(data =>
        console.log(data.toString())
    )
    // Obsługa stanu rejected:
    .catch(err =>
        console.log("Uwaga! Wystąpił błąd: ", err.message)
    )
/* UWAGA
    Przeprowadzić test działania aplikacji dla błędnej nazwy pliku.
 */