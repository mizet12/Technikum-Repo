/* NODE.JS FILE SYSTEM
    Zapis danych do pliku - metoda writeFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');
const fileName = __dirname + '/files/dane.txt';
const content = `Pierwsza linia ...
Druga linia ...
Trzecia linia ...`;
fs.writeFile(
    fileName, // nazwa pliku ze ścieżką
    content, // zawartość zapisywana w pliku
    (err) => { // funkcja typu callback
        if (err)
            console.log("Uwaga błąd!", err.message);
        else
            console.log('Funkcja writeFile() została wykonana ...');
    }
);
/* UWAGA
    Dane do pliku można zapisać również za pomocą innych metod, np.:
    a) fs.writeFileSync() - zapis synchroniczny;
    b) fsPromises.writeFile() - przy użyciu "promisów" opartych na API
 */