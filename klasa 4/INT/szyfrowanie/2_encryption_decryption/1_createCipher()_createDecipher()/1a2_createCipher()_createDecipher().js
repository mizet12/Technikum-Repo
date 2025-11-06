/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metody createCipher(), createDecipher().
   Wykorzystanie samodzielnie zdefiniowanych funkcji: szyfrującej i deszyfrującej.

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

const crypto = require('crypto');

const inputData = "Piotr"; // dana tekstowa, która ma być zaszyfrowana
console.log("Dana wejściowa = ", inputData);

const password = 'password';    // hasło wymagane do utworzenia instancji klasy
                                // Cipher i Decipher
const algorithm = 'aes192';     // algorytm kodowania/dekodowania wymagany

const textEncoding = 'utf8';
const encoding = 'hex';

// Definicja funkcji szyfrującej:
function encrypt(inputData, algorithm, password, textEncoding, encoding) {
    // Utworzenie obiektu klasy Cipher:
    const cipher = crypto.createCipher(algorithm, password);

    // Aktualizacja obiektu cipher::
    let encryptedData = cipher.update(inputData, textEncoding, encoding);
    // Zakończenie szyfrowania - wygenerowanie zaszyfrowanej danej:
    encryptedData += cipher.final(encoding);

    return encryptedData; // funkcja zwraca zaszyfrowaną wartość danej
}

// Definicja funkcji deszyfrującej:
function decrypt(encryptedData, algorithm, password, textEncoding, encoding) {
/* UWAGA
    Parametry funkcji:
        encryptedData - zaszyfrowana dana wejściowa,
        algorithm - algorytm szyfrowania,
        password - tajne hasło potrzebne do utworzenia obiektu klasy Cipher,
        textEncoding - system kodowania znaków,
        encoding - typ kodowania.
 */
    // Utworzenie obiektu klasy Decipher:
    const decipher = crypto.createDecipher(algorithm, password);

    // Aktualizacja zawartości obiektu decipher:
    let decryptedData = decipher.update(encryptedData, encoding, textEncoding);
    // Zakończenie procesu deszyfrowania:
    decryptedData += decipher.final(textEncoding);

    return decryptedData; // funkcja zwraca wynik deszyfrowania
}

// Zaszyfrowanie danej wejściowej:
let encryptedData = encrypt(inputData, algorithm, password, textEncoding, encoding);
console.log("Zaszyfrowana dana wejściowa = ", encryptedData);

// Deszyfrowanie danej zaszyfrowanej:
let decryptedData = decrypt(encryptedData, algorithm, password, textEncoding, encoding);
console.log("Deszyfrowana dana = ", decryptedData);