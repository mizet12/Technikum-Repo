/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metoda cryptoHmac().

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

/* UWAGA
    MAC to skrót od Message Authentication Code (kod uwierzytelniania wiadomości).
    Jest to niewielki blok danych, który służy do uwierzytelniania wiadomości.
    Skrótem MAC określa się również zestaw algorytmów używaych do konstrukcji
    kodu uwierzytelniającego i późniejszego weryfikowania tego kodu.

    HMAC to skrót od Hash-based Message Authentication Code.
    Stanowi on odmianę MAC, która w celu uzyskania funkcji haszującej (hash function) wykorzystuje
    tajny klucz (secret key).
    Implementacje HMAC są oparte na standardowych funkcjach haszujących, np. MD5, SHA-1, SHA-256.

    HMAC jest wykorzystywany w praktyce do uzyskiwania podpisów cyfrowych (digital signatures)
    przy wykorzystaniu wspólnego tajnego hasła/klucza (shared secret password/key).
 */

const crypto = require('crypto');

// Dana wejściowa (przeznaczona do zakodowania):
const inputData = 'Piotr';
console.log("Dana wejściowa: ", inputData);

// Tajny klucz Hmac (HMAC secret key):
const secretKey = "secret_key";

// Kodowanie (haszowanie) HMAC danej wejściowej:
const hmac1 = crypto.createHmac('sha256', secretKey) // utworzenie obiektu klasy Hmac
/* UWAGA
    Zadaniem metody createHmac() jest utworzenie obiektu HMAC na podstawie
    zadanego algorytmu i tajnego klucza HMAC.
 */
    .update(inputData) // aktualizacja zawartości obiektu hmac1
    .digest('hex'); // wyznaczenie skrótu (wyniku) typu String  z kodowaniem 'hex'

// Wyświetlenie danej po wykonanym haszowaniu:
console.log("Dana po haszowaniu HMAC (string): ", hmac1);

// Kodowanie (haszowanie) HMAC danej wejściowej:
const hmac2 = crypto.createHmac('sha256', secretKey) // utworzenie obiektu klasy Hmac
    .update(inputData) // aktualizacja zawartości obiektu hmac
    .digest(); // wyznaczenie skrótu (wyniku) typu Buffer

// Wyświetlenie danej po wykonanym haszowaniu:
console.log("Dana po haszowaniu HMAC (buffer): ", hmac2);


