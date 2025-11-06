/*  NODE.JS PROMISES
    Kontrola przepływu sterowania. Wykorzystanie promisa.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

const fs = require('fs');

// Utworzenie promisa:
const promise = new Promise((resolve, reject) => {
    // Odczyt zawartości pliku - a faktycznie próba odczytu:
    fs.readFile('./files/dane1.txt',
        (err, data) => { // funkcja zwrotna
            if (err) // przechwycenie ewentualnego błędu:
            // Przesłanie danych do funkcji obsługi stanu rejected:
                reject(err);
            else
            // Przesłanie danych do funkcji obsługi stanu resolved:
                resolve(data);
        }
    )
})

// Konsumpcja (obsługa) promisa:
promise.then(
    // Obsługa stanu resolved:
    (data) => {
        console.log(data.toString())
    },
    // Obsługa stanu rejected:
    (err) => {
        console.log(err.message);
    }
);
/* UWAGA
    Pierwszy argument funkcji then stanowi funkcja obsługi stanu resolved (czyli spełnionego promisa).
    Drugi argument stanowi z kolei funkcja obsługi stanu rejected (obietnica odrzucona).
 */

