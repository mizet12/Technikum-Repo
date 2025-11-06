/* NODE.JS FILE SYSTEM
    Zamknięcie otwartego pliku - metoda close().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');
const path = require('path');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane2.txt';

// Określenie rozmiaru bufora na dane:
const buffer = new Buffer.alloc(1024);

// OTWARCIE PLIKU:
fs.open(fileName,               // nazwa pliku ze ścieżką
        'r+',                   // tryb otwarcia pliku w trybie do odczytu i zapisu
        (err, fd) => {          // funkcja callback
            if (err) // w przypadku błędu
                return console.error(err);

            // Wyświetlenie informacji pomocniczej po pomyślnym otwarciu pliku:
            console.log(`Otwarcie pliku ${fileName} zakończone sukcesem ...`);

            // ODCZYT ZAWARTOŚCI PLIKU:
            fs.read(fd,                 // deskryptor pliku zwrócony przez metodę open()
                    buffer,             // bufor, do którego są zapisywane dane
                    0,                  // offset
                    buffer.length,      // ilość odczytanych bajtów
                    0,                  // pozycja, od której plik jest odczytywany
                    (err, bytes) => {   // funkcja callback
                        if (err) console.log(err);

                        // Wyświetlenie informacji o ilości odczytanych danych:
                        console.log("Liczba odczytanych bajtów: ", bytes);

                        // Wyświetlenie danych po konwersji na łańcuch znaków:
                        if(bytes > 0){
                            console.log(`Zawartość pliku: ${fileName}: `);
                            console.log(buffer.slice(0, bytes).toString());
                        }

                        // ZAMKNIĘCIE PLIKU:
                        fs.close(fd,        // deskryptor pliku zwrócony przez metodę open()
                                (err) => {  // funkcja callback
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log(`Plik ${fileName} został zamknięty ...`);
                                    }
                                }
                        );
                    }
            );
        }
);

