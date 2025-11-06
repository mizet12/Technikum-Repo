/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto - metoda createHash().

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/



// Dołączenie zasobów modułu crypto:
const crypto = require('crypto');

// Dana wejściowa (przeznaczona do zakodowania):
const inputData1 = 'Piotr';
/* UWAGA
    Daną wejściową stanowi zwykły tekst (plain text).
 */
console.log("Dana wejściowa:", inputData1);

// Utworzenie obiektu hash1 należącego do klasy Hash:
const hash1 = crypto.createHash('md5')

    // Aktualizacja obiektu hash1 na podstawie danej wejściowej:
    .update(inputData1)

    // Wyznaczenie skrótu (wyniku) haszowania:
    .digest('hex');

console.log("Dana po haszowaniu (md5, hex): ", hash1);
console.log("Liczba znaków:", hash1.length);
console.log();


// Dana wejściowa (przeznaczona do wymieszania):
const inputData2 = 'Piotrek';
console.log("Dana wejściowa:", inputData2);

// Haszowanie danej wejściowej:
const hash2 = crypto.createHash('md5')
    .update(inputData2)
    .digest('hex');
console.log("Dana po haszowaniu (md5, hex): ", hash2);
console.log("Liczba znaków:", hash2.length);

/* UWAGA
    Jak widać w konsoli, jeżeli algorytm haszowania i typ kodowania są takie same,
    to niezależnie od danej wejściowej, długość haszowanych danych jest taka sama.
 */

