/* NODE.JS FILE SYSTEM
    Zamknięcie otwartego pliku - metoda close().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane1.txt';

// Utworzenie nowego pliku:
fs.open(
    fileName,           // nazwa pliku ze ścieżką
    'w+',               // Flaga oznaczająca, że plik został otwarty do zapisu i odczytu.
                        // Jeśli plik o podanej nazwie nie istnieje, wówczas zostanie utworzony.
                        // Jeśli taki plik już istnieje, to jego dotychczasowa zawartość zostanie obcięta.
    (err, fd) => {    // funkcja typu callback
        if (err) throw err; // w przypadku błędu zostanie wygenerowany (wyrzucony) wyjątek,
                            // po czym funkcja kończy działanie

        // Wyświetlenie komunikatu o pomyślnym wykonaniu operacji:
        console.log(`Utworzenie pliku ${fileName} zakończone sukcesem ...`);

        // Zamknięcie otwartego pliku:
        fs.close(
            fd, // deskryptor pliku zwracany przez metodę fs.open()
            (err) => {// funkcja callback
                if (err) {
                    console.log("Uwaga błąd!", err.message);
                } else {
                    console.log(`Plik ${fileName} został zamknięty ...`);
                }
            });
        /* UWAGA
            Plik otwarty za pomocą metody open() należy po przetworzeniu zamknąć za pomocą metody close().
         */
    }
);
