/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metody createCipheriv(), createDecipheriv().

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

const crypto = require('crypto');

const inputData = "Piotr"; // dana, która ma być zaszyfrowana
console.log("Dana wejściowa = ", inputData);

const algorithm = 'aes-256-cbc';    // algorytm szyfrowania/deszyfrowania
const encoding = "hex";             // typ (format) kodowania
const textEncoding = 'utf8';        // system kodowania znaków

// Wygenerowanie zaszyfrowanego, tajnego klucza:
const key = crypto.randomBytes(32);
/* UWAGA
    Tajny klucz (encrypted key) powinien mieć 32 znaki lub 32 bajty, ponieważ wykorzystany tutaj
    algorytm aes-256-cbc operuje na 256 bitach.

    Metoda randomBytes() (wywołana bez funkcji zwrotnej jako argument) zwraca bufor (Buffer)
    składający się z losowo wygenerowanych bajtów (danych) o zadanym (łącznie) rozmiarze.
 */
console.log("Klucz (hex): ", key.toString(encoding));

// Definicja funkcji szyfrującej:
function encrypt(inputData, algorithm, key, textEncoding, encoding) {
    // Utworzenie wektora inicjalizacyjnego (initialization vector):
    let iv = crypto.randomBytes(16);
    console.log("[encrypt] Wektor inicjalizacyjny (hex): ", iv.toString(encoding));
    /* UWAGA
        Wektor inicjujący stanowi wygenerowaną liczbę losową w celu zwiększenia bezpieczeństwa
        szyfrowania i deszyfrowania. Wektor inicjujący nie musi być tajny.
     */

    // Utworzenie obiektu klasy Cipher:
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key, encoding), iv);
    /* UWAGA
        Obiekt klasy Cipher został utworzony na podstawie zadanego algorytmu szyfrowania,
        klucza (z uwzględnieniem typu kodowania) i wektora inicjalizacyjnego.
     */
    /* UWAGA
        Metoda Buffer.from() pozwala na utworzenie bufora wypełnionego zadanym łańcuchem znaków,
        tablicą albo buforem (ewentualnie tablicą buforów). Zwraca obiekt bufora.
     */

    // Aktualizacja zawartości obiektu cipher:
    let encryptedData = cipher.update(inputData);
    // Zakończenie procesu szyfrowania:
    encryptedData = Buffer.concat([encryptedData, cipher.final()]);
    /* UWAGA
        Metoda Buffer.concat() łączy wszystkie obiekty bufora będące składnikami tablicy
        w jeden obiekt bufora.
     */

    return (iv.toString(encoding) + '|' + encryptedData.toString(encoding));
    /* UWAGA
        Funkcja przekazuje na zewnątrz wektor inicjalizacyjny oraz zaszyfrowaną daną,
        które są od siebie oddzielone znakiem |.
        Dołączenie do wyniku wektora inicjalizacyjnego wynika z tego, że jest on potrzebny
        do deszyfracji danej.
     */
}

// Definicja funkci deszyfrującej:
function decrypt(iv_encryptedData, algorithm, key, textEncoding, encoding) {
    // Rozdzielenie od siebie wektora inicjalizacyjnego i zaszyfrowanej danej:
    let parts = iv_encryptedData.split('|');
    /* UWAGA
       Użycie metody split() wynika z konieczności oddzielenia od siebie wektora inicjalizacyjnego
       oraz zaszyfrowanej danej. Wynika to z tego, że parametr/argument iv_encryptedData
       to pojedyncza dana składająca się z dwóch części oddzielonych od siebie znakiem | -
       jako wynik wywołania funkcji encrypt().

       Metoda split() zwraca tutaj tablicę złożoną z dwóch elementów składowych:
       1) wektora inicjalizacyjnego;
       2) zaszyfrowanej danej.
     */
    console.log("[decrypt] parts: ", parts);

    // Wygenerowanie wektora inicjalizacyjnego na podstawie pierwszej części tablicy parts:
    let iv = Buffer.from(parts.shift(), encoding);
    console.log("[decrypt] Wektor inicjalizacyjny (hex): ", iv.toString(encoding));
    /* UWAGA
        Metoda shift() modyfikuje tablicę wyrzucając jej pierwszy element.
        Zwraca ten wyrzucony element.
     */

    // Wygenerowanie zaszyfrowanej danej na podstawie drugiej części pierwotnej tablicy parts:
    let encryptedData = Buffer.from(parts.join('|'), encoding);
    console.log("[decrypt] Zaszyfrowana dana (hex): ", encryptedData.toString(encoding));

    // Utworzenie obiektu klasy Decipher:
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, encoding), iv);
    /* UWAGA
        Obiekt klasy Decipher został utworzony na podstawie zadanego algorytmu szyfrowania,
        klucza (z uwzględnieniem typu kodowania) i wektora inicjalizacyjnego.
     */

    // Aktualizacja zawartości obiektu decipher:
    let decryptedData = decipher.update(encryptedData);
    decryptedData = Buffer.concat([decryptedData, decipher.final()]);
    /* UWAGA
        Metoda Buffer.concat() łączy wszystkie obiekty bufora będące składnikami tablicy
        w jeden obiekt bufora.
     */

    return decryptedData.toString(textEncoding); // funkcja zwraca zdeszyfrowaną daną tekstową
}

// Szyfrowanie danej wejściowej:
let iv_encryptedData = encrypt(inputData, algorithm, key, textEncoding, encoding);
console.log("Wektor inicjalizacyjny|Zaszyfrowana dana wejściowa: ", iv_encryptedData);

// Deszyfrowanie zaszyfrowanej danej:
let decryptedData = decrypt(iv_encryptedData, algorithm, key, textEncoding, encoding);
console.log("Dana wejściowa: ", decryptedData);

