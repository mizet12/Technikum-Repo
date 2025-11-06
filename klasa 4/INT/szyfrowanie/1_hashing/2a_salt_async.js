/*  NODE.JS HASHING
    Szyfrowanie danych - haszowanie metodą asynchroniczną.
    Funkcja asynchroniczna genSalt().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

const bcrypt = require("bcrypt");

// Hasło użytkownika:
const password = "password";

// Liczba rund:
const rounds = 5;


/* UWAGA
    Funkcja haszująca hash() wymaga dodania do procesu szyfrowania tzw. "soli" (salt).
    Salt stanowi dodatkową - wygenerowaną losowo daną, która jest używana jako
    dodatkowa dana wejściowa dla funkcji mieszającej.
    Ma to na celu zabezpieczenia hasła.

    Jeśli saltu nie wygenerujemy samodzielnie, wówczas zostanie on wygenerowany
    automatycznie - "po cichu", przy wywołaniu funkcji hash().
 */

// Wygenerowanie saltu, jako dodatkowej danej wejściowej do procesu haszowania:
bcrypt.genSalt(
    rounds, // liczba rund
    (err, salt) => { // funkcja callback
        if (err) {
            console.log(err.message);
            return;
        }

        // Wyświetlenie saltu w postaci łańcucha znaków:
        console.log(salt);
});

