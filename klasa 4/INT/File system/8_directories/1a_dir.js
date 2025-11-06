/* NODE.JS FILE SYSTEM
    Operacje katalogowe - metoda mkdir().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require("fs");

// Utworzenie katalogu (o ile nie istnieje):
fs.mkdir('./subfolder',
        (err) => {
            if (err) {
                return console.error(err);
            }
        console.log("Utworzenie katalogu zakończone sukcesem ...");

        // Utworzenie katalogu (o ile nie istnieje):
        fs.mkdir('./subfolder/subfolder',
            (err) => {
                if (err) {
                    return console.error(err);
                }
                console.log("Utworzenie katalogu zakończone sukcesem ...");
        });
});