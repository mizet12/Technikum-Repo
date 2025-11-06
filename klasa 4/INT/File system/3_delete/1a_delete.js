/* NODE.JS FILE SYSTEM
    Usunięcie pliku - metoda open().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');
const fileName = __dirname + '/files/dane.txt';
fs.unlink(
    fileName, // nazwa pliku ze ścieżką
    function (err) { // funkcja typu callback
        if (err) {
            console.log("Uwaga błąd!", err.message);
        } else {
            console.log('Zadany plik został usunięty ...');
        }
    }
);
