/* NODE.JS FILE SYSTEM
    Utworzenie nowego pliku - metoda open().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
const fs = require('fs');
const fileName = __dirname + '/files/dane.txt';
fs.open(
    fileName, // nazwa pliku ze ścieżką
    'w+',               // Flaga oznaczająca, że plik został otwarty do zapisu i odczytu.
    (err) => {  // funkcja zwrotna
        if (err) throw err; // w przypadku błędu zostanie wygenerowany (wyrzucony) wyjątek
        console.log(`Nowy plik ${fileName} został utworzony ...`);
    }
);
