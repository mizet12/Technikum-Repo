/* NODE.JS FILE SYSTEM
    Zapis danych do pliku - metoda appendFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');
const fileName = __dirname + '/files/dane.txt';
const content = `Pierwsza linia ...
Druga linia ...
Trzecia linia ...`;
fs.appendFile(
    fileName,   // nazwa pliku ze ścieżką
    content,            // zapisywana (dopisywana) zawartość
    (err) => {    // funkcja typu callback
        if (err)
            console.log("Uwaga błąd!", err.message);
        else
            console.log('Funkcja appendFile() została wykonana ...');
    }
);
