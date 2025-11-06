/*  NODE.JS HASHING
    Szyfrowanie danych - haszowanie metodą synchroniczną.
    Funkcja synchroniczna genSaltSync().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

// Import modułu bcrypt:
const bcrypt = require("bcrypt");

// Hasło użytkownika:
const password = "password";
// Liczba rund:
const rounds = 5;

// Wygenerowanie saltu za pomocą metody synchronicznej:
let salt = bcrypt.genSaltSync(rounds);
console.log(salt);


