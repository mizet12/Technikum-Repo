/* NODE.JS FILE SYSTEM
    Określenie informacji o pliku - metoda stat().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane.txt';

// Określenie informacji o pliku:
fs.stat(
    fileName, // nazwa pliku ze ścieżką
    (err, stats) => { // funkcja zwrotna (callback)
        if (err) {
            return console.error(err);
        }
        // Wyświelenie zawartości obiektu stats:
        console.log("Obiekt stats: ", stats);

        if (stats.isFile()) { // czy badany składnik jest plikiem
            // Wyświetlenie rozmiatu pliku:
            console.log("Rozmiar pliku: ", stats.size);
        } else {
            console.log("Badany obiekt nie jest plikiem!");
        }
    }
);