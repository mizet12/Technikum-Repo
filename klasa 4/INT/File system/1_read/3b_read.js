/*--NODE.JS
    Otwarcie i odczyt pliku - funkcje open() i read() z pakietu fs.

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
const fs = require('fs');

// Określenie nazwy pliku (ze ścieżką):
const fileName = __dirname + '/files/dane.txt';

fs.stat(fileName, (err, stats) => {
/* UWAGA
    Metoda fs.stat() pozwala na określenie informacji o podanym pliku lub katalogu (tutaj: pliku).
    Metoda ta zwraca obiekt fs.Stat, który zawiera różne użyteczne właściwości i metody.
 */
    fs.open(fileName, 'r+', (err, fd) => {
        if (err) return console.error(err);

        console.log(`Otwarcie pliku ${fileName} zakończone sukcesem ...`);
        const buffer = new Buffer(stats.size);

        // Odczyt zawartości pliku:
        fs.read(fd, buffer, 0, buffer.length, null, (err, bytes, buffer) => {
            if (err) console.log(err);

            // Wyświetlenie danych (po ich konwersji na łańcuch znaków):
            const data = buffer.toString("utf8");
            console.log(data);
        });
    });
});



