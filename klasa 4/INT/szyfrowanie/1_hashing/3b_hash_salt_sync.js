/*  NODE.JS HASHING
    Szyfrowanie danych - haszowanie metodą synchroniczną.
    Funkcje genSaltSync(), hashSync().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

// Import modułu bcrypt:
const bcrypt = require("bcrypt");

// Hasło użytkownika:
const password = "password";
console.log("Hasło: ", password);

// Liczba rund:
const rounds = 5;

// Wygenerowanie saltu za pomocą metody synchronicznej:
let salt = bcrypt.genSaltSync(rounds);
console.log("Salt: ", salt);

// Wywołanie funkcji haszującej:
let hash = bcrypt.hashSync(password, salt);
console.log("Hasło zaszyfrowane: ", hash);


