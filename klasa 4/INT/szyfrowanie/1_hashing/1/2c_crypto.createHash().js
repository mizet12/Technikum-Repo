/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metoda createHash().
   Różne typy kodowania: hex, binary itp.

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

// Dołączenie zasobów modułu crypto:
const crypto = require('crypto');

// Dana wejściowa (przeznaczona do haszowania):
const inputData = 'Piotr';

// Haszowanie danej wejściowej:
const hash1 = crypto.createHash('sha256')
    .update(inputData)
    .digest('hex');
console.log("Dana po haszowaniu (string, kodowanie hex): ", hash1);
console.log("Liczba znaków:", hash1.length);

const hash2 = crypto.createHash('sha256')
    .update(inputData)
    .digest('binary');
console.log("Dana po haszowaniu (string, kodowanie binary): ", hash2);
console.log("Liczba znaków:", hash2.length);

const hash3 = crypto.createHash('sha256')
    .update(inputData)
    .digest('base64');
console.log("Dana po haszowaniu (string, kodowanie base64): ", hash3);
console.log("Liczba znaków:", hash3.length);

const hash4 = crypto.createHash('sha256')
    .update(inputData)
    .digest();
console.log("Dana po haszowaniu (bufor): ", hash4);


/* UWAGA
    Jeżeli dana po wykonanym haszowaniu należy do typu String, jej długość - dla tej samej danej wejściowej
    i algorytmu kodowania, ale różnego typu kodowania - jest odmienna.
    Jeżeli nie podano argumentu metody digest() wówczas wynik haszowania nalezy do typu Buffer.
 */
