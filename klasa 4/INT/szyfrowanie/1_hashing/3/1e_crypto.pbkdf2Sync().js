/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metoda pbkdf2Sync().

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

/* UWAGA
    Metoda pbkdf2Sync() pozwala na synchroniczną implementację funkcji pochodnej (derivation function)
    "Password-Based Key Derivation Function 2".
 */

const crypto = require('crypto');

// Zmienne pomocnicze:
const data = "secret_password"; // tajna dana, np. hasło
const salt = '12345678';        // (inaczej: ciąg zaburzający) dane dodawane do hasła podczas obliczania
                                // funkcji haszującej (zaleca się, aby sól miała co najmniej 16 bajtów)
const iterations = 10;          // liczba iteracji przy obliczaniu funkcji haszującej
const keyLength = 8;            // wymagana długość klucza w bajtach (im wyższa wartość tym klucz będzie bezpieczniejszy)
const algorithm = 'sha256';     // algorytm haszujący

// Wyznaczenie wartości funkcji haszującej:
let key = crypto.pbkdf2Sync(data, salt, iterations, keyLength, algorithm);
// Wyświetlenie wyniku:
console.log("key = ", key.toString('hex'));


