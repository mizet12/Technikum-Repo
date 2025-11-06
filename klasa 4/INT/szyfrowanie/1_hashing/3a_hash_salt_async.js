/*  NODE.JS HASHING
    Szyfrowanie danych - haszowanie metodą asynchroniczną.
    Funkcje genSalt(), hash().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

const bcrypt = require("bcrypt");

// Hasło użytkownika:
const password = "password";
console.log("Hasło: ", password);

// Liczba rund:
const rounds = 5;

// Wygenerowanie saltu do procesu haszowania:
bcrypt.genSalt(rounds, (err, salt) => {
    console.log("Salt: ", salt);
    // Szyfrowanie hasła:
    bcrypt.hash(password, salt, (err, hash) => {
        console.log("Hasło zaszyfrowane: ", hash);
    });
});

