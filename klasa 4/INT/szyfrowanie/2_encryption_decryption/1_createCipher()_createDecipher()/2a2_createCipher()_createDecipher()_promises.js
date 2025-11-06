/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metody createCipher(), createDecipher().
   Wykorzystanie samodzielnie zdefiniowanych funkcji z promisami.

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

const crypto = require('crypto');

const inputData = "Piotr"; // dana, która ma być zaszyfrowana
console.log("Dana wejściowa = ", inputData);

const password = 'password';    // hasło wymagane do tworzenia instancji klas Cipher i Decipher
const algorithm = 'aes192';     // algorytm kodowania/dekodowania wymagany przy tworzeniu
                                // obiektów klas Cipher i Decipher
const encoding = "hex";         // typ (tryb) kodowania
const textEncoding = 'utf8';    // rodzaj kodowania tekstu


// Definicja funkcji szyfrującej:
function encrypt(inputData, algorithm, password, textEncoding, encoding) {
    let encryptedData = ''; // wyjście funkcji - zaszyfrowana dana

    // Utworzenie i zwrócenie promisa:
    return new Promise((resolve, reject) => {
        // Utworzenie obiektu klasy Cipher:
        let cipher = crypto.createCipher(algorithm, password);

        // Zapis danej wejściowej do strumienia:
        cipher.write(inputData, textEncoding);
        cipher.end(); // sygnalizacja, że do strumienia więcej danych nie zostanie zapisanych

        // Rejestracja i obsługa zdarzenia readable skojarzonego z obiektem cipher:
        cipher.on('readable', () => {
        /* UWAGA
            Zdarzenie 'readable' jest emitowane, jeśli dane są dostępne do odczytu.
            Dodanie listenera powoduje, że dane są odczytywane do wewnetrznego bufora.
         */
            // Pobranie i szyfrowanie danej wejściowej:
            let data = cipher.read();
            /* UWAGA
                Metoda read() pozwala na odczytanie danych z wewnętrznego bufora.
                Dane 'data' należą do typu Buffer.
             */
            if (data) { // jeśli 'data' jest różna od null
                encryptedData += data.toString(encoding);
                // console.log(encryptedData);
            }
        });
        // Rejestracja i obsługa zdarzenia end:
        cipher.on('end', () => {
        /* UWAGA
            Zdarzenie 'end' jest emitowane, jeśli nie ma już więcej danych do odczytu.
         */
            // Przekazanie zaszyfrowanej danej do funkcji obsługi then():
            resolve(encryptedData);
        });
        // Rejestracja i obsługa zdarzenia error:
        cipher.on('error', (err) => {
            // Przekazanie błędu do funkcji obsługi catch():
            reject(err);
        });


    });
};

// Definicja funkcji deszyfrującej:
function decrypt(encryptedData, algorithm, password, textEncoding, encoding) {
    let decryptedData = ''; // wyjście - dana zdekodowana

    // Utworzenie i zwrócenie promisa:
    return new Promise((resolve, reject) => {
        // Utworzenie obiektu klasy Decipher:
        let decipher = crypto.createDecipher(algorithm, password);

        // Zapis zaszyfrowanej danej do strumienia:
        decipher.write(encryptedData, encoding);
        decipher.end();

        // Rejestracja i obsługa zdarzenia 'readable' skojarzonego z obiektem decipher:
        decipher.on('readable', () => {
            // Pobieranie i deszyfracja danej wejściowej:
            let data = decipher.read();
            if (data) {
                decryptedData += data.toString(textEncoding);
            }
        });
        decipher.on('end', () => {
            // Przesłanie danej decryptedData do funkcji obsługi then():
            resolve(decryptedData);
        });
        decipher.on('error', (err) => {
            // Przesłanie danej err do funkcji obsługi catch():
            reject(err);
        });

    });
};

// Wywołanie funkcji encrypt():
encrypt(inputData, algorithm, password, textEncoding, encoding) // funkcja zwraca pierwszego promisa
    // Obsługa stanu fulfilled (resolve) pierwszego promisa:
    .then((encryptedData) => {
        console.log("Dana zaszyfrowana = ", encryptedData);

        // Wywołanie funkcji decrypt():
        decrypt(encryptedData, algorithm, password, textEncoding, encoding) // funkcja zwraca drugiego promisa
            /* UWAGA
            Funkcja decrypt() zostanie wywołana dopiero po spełnieniu pierwszego promisa,
            czyli po pomyślnym zaszyfrowaniu danej wejściowej.
         */
            // Obsługa stanu fulfilled drugiego promisa:
            .then((decryptedData) => {
                console.log("Dana zdeszyfrowana = ", decryptedData);
            })
            // Obsługa stanu reject drugiego promisa:
            .catch ((err) => {
                console.log(err.message);
            })
    })
    // Obsługa stanu reject pierwszego promisa:
    .catch ((err) => {
        console.log(err.message);
    })

