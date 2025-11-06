/*  NODE.JS DATA COMPARE
    Porównywanie danych (haseł) - metoda asynchroniczna.
    Funkcja compare().

    © Piotr Siewniak, wersja: 31.III.2022 r.
*/

const bcrypt = require("bcrypt");


// Hasło użytkownika (zapisane w bazie danych w postaci zaszyfrowanej):
const password_db = "password";
/* UWAGA
    Tutaj powyższe hasło zostało podane wyłącznie w celach pomocniczych!
 */

// Liczba rund podczas szyfrowania:
const rounds = 5;

// Hasło podane w formularzu i przesłane na serwer w procesie logowania:
const password_login = "password";

bcrypt.hash(
    password_db, // hasło zapisywane w bazie danych (po zaszyfrowaniu):
    rounds, // liczba rund
    (err, hash_db) => { // funkcja callback
        /* UWAGA
            W rzeczywistości, (zaszyfrowane) hasło hash_db powinno być
            wcześniej odczytane z bazy danych, a nie tak jak tutaj -
            - deklarowane i haszowane powyżej.
         */
        console.log("Hasło oryginalne, zapisane w bazie danych po zaszyfrowaniu: ", password_db);
        console.log("Zaszyfrowane hasło zapisane w bazie danych: ", hash_db);

        // Porównanie haseł:
        bcrypt.compare(
            password_login, // oryginalne hasło podane w formularzu w procesie logowania
            hash_db, // zaszyfrowane hasło pobrane z bazy danych
            (err, result) => { // funkcja callback
                console.log("Hasło podane podczas logowania: ", password_login);
                console.log("Czy hasła są zgodne? ", result); // true
            });
});

/* UWAGA
    Wyniki w konsoli:
    $2b$05$mJ2/oDHFo2QyZzkqzcTyyeZfpPMlCz3gK0YocEv.oSiAfLtRS8Jz2
    true
 */