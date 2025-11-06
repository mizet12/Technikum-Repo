/* NODE.JS FILE SYSTEM
    Obcięcie pliku - metoda truncate().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane.txt';

// Określenie rozmiaru bufora na dane:
let buffer = new Buffer.alloc(1024);


// OTWARCIE PLIKU:
fs.open(fileName, 'r+', (err, fd) => {
    /* UWAGA
        Argumenty metody open():
        - fileName - nazwa pliku ze ścieżką;
        - flaga (plik do odczytu i zapisu);
        (err, fd) - parametry funkcji callback (err - błąd, fd - deskryptor pliku)
     */
    if (err) { // w przypadku błędu w czasie otwarcia pliku
        return console.error(err);
    }
    // Wyświetlenie informacji pomocniczej po pomyślnym otwarciu pliku:
    console.log(`Otwarcie pliku ${fileName} zakończone sukcesem ...`);

    // ODCZYT ZAWARTOŚCI PLIKU:
    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
        if (err) {
            return console.error(err);
        }
        // Wyświetlenie danych z pliku po konwersji na łańcuch znaków:
        if (bytes > 0) {
            console.log(`Zawartość pliku: ${fileName}: `);
            console.log(buffer.slice(0, bytes).toString());
        }

        // Obcięcie pliku po 10 znakach:
        fs.ftruncate(fd, 10, (err) => {
             if (err) {
                 return console.error(err);
             }

             console.log("Obcięcie zawartości pliku zakończone sukcesem ...");
             // Ponowny odczyt zawartości pliku:

            fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
                if (err) {
                    console.log(err);
                }
                 // Wyświetlenie danych po konwersji na łańcuch znaków:
                 if (bytes > 0) {
                     console.log(`Bieżąca zawartość pliku ${fileName}: `);
                     console.log(buffer.slice(0, bytes).toString());
                 }
                // Zamknięcie pliku:
                fs.close(fd, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("Plik został zamknięty ....");
                });
             });
        });
    });
});
