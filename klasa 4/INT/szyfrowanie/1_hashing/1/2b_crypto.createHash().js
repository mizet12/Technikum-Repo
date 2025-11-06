/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metoda createHash().
   Różne algorytmy kodowania: md5, sha256 itp.

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

// Dołączenie zasobów modułu crypto:
const crypto = require('crypto');

// Dana wejściowa (przeznaczona do zakodowania):
const inputData = 'Piotr';
console.log("Dana wejściowa: ", inputData);

const hash1 = crypto.createHash('md5')
    .update(inputData)
    .digest('hex');
console.log("Dana po haszowaniu (algorytm md5, kodowanie hex): ", hash1);
console.log("Liczba znaków:", hash1.length);

const hash2 = crypto.createHash('sha1')
    .update(inputData)
    .digest('hex');
console.log("Dana po haszowaniu (algorytm sha1, kodowanie hex): ", hash2);
console.log("Liczba znaków:", hash2.length);

const hash3 = crypto.createHash('sha256')
    .update(inputData)
    .digest('hex');
console.log("Dana po haszowaniu (algorytm sha256, kodowanie hex): ", hash3);
console.log("Liczba znaków:", hash3.length);

/* UWAGA
    Długość danej po wykonanym haszowaniu - dla tej samej danej wejściowej oraz typu kodowania,
    ale różnego algorytmu kodowania - jest odmienna.
 */
