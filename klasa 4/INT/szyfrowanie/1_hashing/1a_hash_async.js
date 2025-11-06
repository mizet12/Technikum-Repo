/*  NODE.JS HASHING
    Szyfrowanie danych - haszowanie.
    Funkcja asynchroniczna hash().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

/* UWAGA
    "Haszowanie" to inaczej szyfrowanie danych.

    Szyfrowanie danej poprzez jej haszowanie jest procesem jednokierunkowym.
    Tym samym, nie jest możliwe na jej podstawie odtworzenie originału danej.
 */

// Import modułu bcrypt:
const bcrypt = require("bcrypt");

// Hasło użytkownika:
const password = "password";
console.log("Hasło: ", password);

// Liczba rund podczas szyfrowania:
const rounds = 5;
/* UWAGA
   Liczba rund wykonywanych w celu zabezpieczenia hasła zwykle wynosi od 5 do 15.
   Zbyt duża liczba zadeklarowanych rund może spowodować znaczne wydłużenie
   procesu haszowania. Np. dla 30 rund haszowanie może trwać nawet jeden dzień!
 */

// Wywołanie funkcji haszującej:
bcrypt.hash(
    password, // argument, który zostanie zaszyfrowany
    rounds, // liczba "rund" wykonywanych w celu zabezpieczenia hasła
    (err, hash) => {      // funkcja callback
        if (err) {
            console.log(err.message);
            return;
        }
        // Wyświetlenie zaszyfrowanego hasła:
        console.log("Hasło zaszyfrowane: ", hash);
});
/* UWAGA
   Funkcja hash() jest funkcją asynchroniczną, ponieważ funkcja callback
   zostanie wykonana po zakończeniu procesu szyfrowania danej.
   Tym samym, inne operacje realizowane przez aplikację są kontynuowane
   również w trakcie wykonywania funkcji hash().
 */

