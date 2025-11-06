/*  NODE.JS DATA COMPARE
    Porównywanie danych (haseł) - metoda synchroniczna.
    Funkcja compareSync().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

const bcrypt = require("bcrypt");

// Hasło użytkownika zapisane w bazie danych po zaszyfrowaniu:
const password_db = "password";
// Liczba rund podczas szyfrowania:
const rounds = 5;

// Szyfrowanie hasła (które jest zapisane w bazie danych:
const hash_db = bcrypt.hashSync(password_db, rounds);

// Hasło podane w formularzu logowania:
const password_login = "password";

// Porównanie haseł:
const result = bcrypt.compareSync(password_login, hash_db);
console.log("Czy hasła są zgodne? ", result); // true