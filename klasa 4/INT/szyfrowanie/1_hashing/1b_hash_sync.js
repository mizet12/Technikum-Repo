/*  NODE.JS HASHING
    Szyfrowanie danych - haszowanie.
    Funkcja synchroniczna hashSync().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

// Import modułu bcrypt:
const bcrypt = require("bcrypt");

// Hasło użytkownika:
const password = "password";
console.log("Hasło: ", password);

// Liczba rund podczas szyfrowania:
const rounds = 5;

// Wywołanie funkcji haszującej:
let hash = bcrypt.hashSync(password, rounds);
console.log("Hasło zaszyfrowane: ", hash);
/* UWAGA
   Funkcja hashSync() jest funkcją synchroniczną. Tym samym, wszelkie inne operacje
   realizowane przez aplikację zostają zamrożone aż do zakończenia wykonywania
   tej funkcji.
 */

