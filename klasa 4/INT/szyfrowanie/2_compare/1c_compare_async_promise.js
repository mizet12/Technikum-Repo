/*  NODE.JS DATA COMPARE
    Porównywanie danych (haseł) - metoda asynchroniczna.
    Wykorzystanie stylu promisów.

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/
const bcrypt = require("bcrypt");

// Hasło użytkownika (zapisane w postaci zaszyfrowanej w bazie danych):
const password_db = "password";
// Liczba rund podczas szyfrowania:
const rounds = 5;

// Hasło podane w formularzu logowania:
const password_login = "password";

bcrypt
    .hash(password_db, rounds)
    .then((hash_db) => {
        /* UWAGA
            W rzeczywistości, (zaszyfrowane) hasło hash_db powinno być
            wcześniej odczytane z bazy danych, a nie tak jak tutaj -
            - deklarowane i haszowane powyżej.
         */
        return bcrypt.compare(password_login, hash_db)
            .then((result) => {
                console.log("Czy hasła są zgodne? ", result); // true
            });
        /* UWAGA
            Wynik porównania haseł jest zwracany na zewnątrz przez funkcję then().
         */
    })
    .catch((err) => {
        console.log(err.message);
    });