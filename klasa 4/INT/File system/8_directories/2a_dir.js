/* NODE.JS FILE SYSTEM
    Operacje plikowe i katalogowe.

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require("fs");
const path = require('path');

// Nazwa katalogu ze ścieżką:
const dirName = __dirname + '/files';

// Odczyt zawartości katalogu:
fs.readdir(dirName,          // nazwa katalogu ze ścieżką
            (err, files) => {   // funkcja callback
                if (err) { // w przypadku błędu
                    return console.error(err);
                }

            // Wyświetlenie zawartości katalogu:
            files.forEach((file) => {
                console.log(file);
            });

            // Zmiana nazwy katalogu:
            fs.rename(dirName + '/temp',  // stara nazwa
                      dirName + '/tmp',    // nowa nazwa
                      (err) => {        // funkcja callback
                            if (err) {
                                return console.error(err);
                            }

                            // Zmiana nazwy pliku:
                            fs.rename(dirName + '/temp' + '/dane.dat',   // stara nazwa
                                      dirName + '/temp' + '/dane.txt',   // nowa nazwa
                                      (err) => {                // funkcja callback
                                            if (err) {
                                                return console.error(err);
                                            }
                            });
            });


});
/* UWAGA
    Usunięcie określonego katalogu można zrealizować za pomocą metody rmdir() zawartej w pakiecie fs.
 */