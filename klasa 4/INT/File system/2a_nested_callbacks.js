/*  NODE.JS PROMISES
    Kontrola przepływu sterowania.
    Wykorzystanie zagnieżdżonych callback'ów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

const fs = require('fs');

/* UWAGA
    Najprostszy sposób obsługi kodu asynchronicznego w Node stanowi wykorzystanie
    mechanizmu wywołań zwrotnych (callback'ów).

    Tutaj kod asynchroniczny jest reprezentowany przez trzykrotne wywołanie metody
    asynchronicznej readFile().
*/
// SYSTEM ZAGNIEŻDŻONYCH WYWOŁAŃ ZWROTNYCH

// Wywołanie funkcji asynchronicznej readFile():
const readFile = fs.readFile(
    './files/dane1.txt',
    (err, data) => { // funkcja zwrotna (callback)
    /* UWAGA
        Wykonywanie funkcji zwrotnej rozpocznie się dopiero po zakończeniu wykonywania
        funkcji nadrzędnej, czyli funkcji asynchronicznej readFile().
     */
        if (err)
            console.log("Uwaga błąd: ", err.message);
        else
            console.log(data.toString());

        // Wywołanie funkcji asynchronicznej readFile():
        fs.readFile(
            './files/dane2.txt',
            (err, data) => { // funkcja zwrotna (callback)
            /* UWAGA
                Wykonywanie funkcji zwrotnej rozpocznie się dopiero po zakończeniu wykonywania
                funkcji nadrzędnej, czyli funkcji asynchronicznej readFile().
             */
                if (err)
                    console.log("Uwaga błąd: ", err.message);
                else
                    console.log(data.toString());

            // Wywołanie funkcji asynchronicznej readFile():
            fs.readFile(
                './files/dane3.txt',
                (err, data) => { // funkcja zwrotna (callback)
                /* UWAGA
                    Wykonywanie funkcji zwrotnej rozpocznie się dopiero po zakończeniu wykonywania
                    funkcji nadrzędnej, czyli funkcji asynchronicznej readFile().
                 */
                    if (err)
                        console.log("Uwaga błąd: ", err.message);
                    else
                        console.log(data.toString());
                }
            )}
        )
    }
);

console.log("Komunikat kontrolny w ostatniej linii kodu programu ....");

/* UWAGA
    Pytania kontrolne:
    1) O czym świadczy kolejność wykonywania poszczególnych operacji w programie?
    2) W jakiej kolejności są wykonywane funkcje callback stanowiące argumenty wywołań
       metody readFile()?
 */
