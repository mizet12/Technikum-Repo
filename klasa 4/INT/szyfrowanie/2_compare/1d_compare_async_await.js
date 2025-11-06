/*  NODE.JS DATA COMPARE
    Porównywanie danych (haseł) - metoda asynchroniczna.
    Wykorzystanie async, await.

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

const bcrypt = require("bcrypt");


// Hasło podane w formularzu logowania:
const password_login = "password";

// Definicja funkcji asynchronicznej:
async function hashCompareFunction(password_login) {
    // Hasło użytkownika (zapisane w postaci zaszyfrowanej w bazie danych):
    const password_db = "password";
    // Liczba rund podczas szyfrowania:
    const rounds = 5;

    // Haszowanie hasła password_db:
    const hash_db = await bcrypt.hash(password_db, rounds);

    // Porównanie haseł:
    const result = await bcrypt.compare(password_login, hash_db);
    /* UWAGA
        W rzeczywistości, (zaszyfrowane) hasło hash_db powinno być
        wcześniej odczytane z bazy danych, a nie tak jak tutaj -
        - deklarowane i haszowane w ciele funkcji.
     */
    console.log("Czy hasła są zgodne? ", result); // true
}

// Wywołanie funkcji hashCompareFunction():
hashCompareFunction(password_login);