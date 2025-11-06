/* NODE.JS FILE SYSTEM
    Utworzenie nowego pliku - metoda writeFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
const fs = require('fs');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane.txt';

// Określenie zawartości pliku:
const content = `Zawartość pierwszej linii ...
Zawartość drugiej linii ...
Zawartość trzeciej linii ...`;
/* UWAGA
    Zmienna content została zdefiniawana przy wykorzystaniu literału szablonowego (template literal).
 */
/* UWAGA
    Jeśli plik nie istnieje, to można go utworzyć przy wykorzystniu metody writeFile() z pakietu fs.
    W takim przypadku - oprócz utworzenia pliku - zostanie do niego zapisana określona zawartość.
    Jeśli plik o zadanej nazwie już istnieje, to jego poprzednia zawartość zostanie zastąpiona nową.

    Użycie funkcji writeFile() stanowi drugi sposób - po metodzie open() - utworzenia nowego pliku.
 */

// Utworzenie nowego pliku - wykorzystanie funkcji asynchronicznej writeFile():
fs.writeFile(
    fileName, // nazwa pliku ze ścieżką
    content,            // zawartość pliku
    (err) => {    // funkcja typu callback
        if (err) throw err;

        console.log('Funkcja writeFile() została wykonana ...');
    }
);
