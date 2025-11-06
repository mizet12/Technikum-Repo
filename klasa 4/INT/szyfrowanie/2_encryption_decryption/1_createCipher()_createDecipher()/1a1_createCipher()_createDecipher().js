/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto: metody crypto.createCipher(), crypto.createDecipher().

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/
/* UWAGA
    Szyfrowanie (encryption) polega na wygenerowaniu danej zaszyfrowanej (encrypted data)
    na podstawie:
        1) danej pierwotnej;
        2) tajnego klucza (secret key) wygenerowanego losowo.
    Zaszyfrowana dana nazywana jest tekstem zaszyfrowanym (cipher text).

    Operacja szyfrowania (w przeciwieństwie do haszowania) jest dwukierunkowa - odwracalna.
    Daną wejściową można odtworzyć na podstawie jej postaci zaszyfrowanej oraz tego samego tajnego klucza,
    który był użyty w procesie szyfrowania.
    Proces odwrotny do szyfrowania nazywa się deszyfrowaniem (decryption).

    Nie należy mylić ze sobą pojęć haszowania (mieszania) z szyfrowaniem!
 */

/* UWAGA
    Metody createCipher() i createDecipher() są zdeprecjonowane, chociaż nadal są wykorzystywane bardzo często.
    Zalecane jest, aby zamiast nich używać metody:
    - createCipheriv()
    - createDecipheriv()
    Przykład zastosowania metod wymienionych powyżej - w katalogu ...
 */

/* UWAGA
    W praktyce, metody createCipher() i createDecipher() stosuje się na dwa sposoby:
    1) w połączeniu z metodami crypto.update() i crypto.final();
    2) przy wykorzystaniu strumienia zapisywalnego i odczytywalnego, do którego najpierw
       zapisuje się (niezaszyfrowane) dane wejściowe, a następnie odczytuje się z niego
       dane zaszyfrowane.

       Tutaj zaprezentowano sposób pierwszy.
 */

const crypto = require("crypto");

// KODOWANIE
// Określenie algorytmu kodowania:
const algorithm = 'aes128';
// Tajne hasło używane w procesie kodowania/dekodowania:
const password = "password";

// Utworzenie obiektu należącego do klasy Cipher:
const cipher = crypto.createCipher(algorithm, password);
/* UWAGA
    Obiekt cipher został utworzony na podstawie algorytmu kodowania i tajnego hasła.
    W ogólności, zasoby klasy Cipher pozwalają na szyfrowanie danych.
 */

const inputData = "Piotr"; // dana wejściowa do zakodowania
console.log("Dana wejściowa: ", inputData);

// Ustalenie typu (formatu) kodowania wejściowego:
const textEncoding = 'utf8';
// Ustalenie typu (formatu) kodowania wyjściowego:
const encoding = 'hex';

// Aktualizacja obiektu cipher:
let encryptedData = cipher.update(inputData, textEncoding, encoding);
/* UWAGA
    Aktualizacja zawartości obiektu cipher została zrealizowana zgodnie podaną daną wejściową (inputData)
    oraz typem kodowania wejściowego (textEncoding) - tutaj 'utf8' i typem kodowania wyjściowego (encoding)
    - tutaj 'hex', podanymi jako argumenty metody cipher.update().
 */

// Zakończenie procesu szyfrowania:
encryptedData += cipher.final(encoding);
/* UWAGA
    Metoda cipher.final() zwraca wartość obiektu cipher (tutaj: zwraca zaszyfrowaną daną wejściową).
    Jeżeli podano typ kodowania (jak tutaj), zwracana wartość należy do typu String.
    W przeciwnym przypadku (metoda wywołana beż żadnych argumentów), zwraca ona bufor.
 */
console.log("Dana zaszyfrowana: ", encryptedData);


// DEKODOWANIE
// Utworzenie obiektu dekodowania (Decipher object):
const decipher = crypto.createDecipher(algorithm, password);
/* UWAGA
    Obiekt decipher - jako instancja klasy Decipher - został utworzony na podstawie zadanego
    algorytmu kodowania i tajnego hasła.
    W ogólności, zasoby klasy Decipher pozwalają na deszyfrowanie danych.
 */

// Aktualizacja zawartości obiektu decipher:
let decryptedData = decipher.update(encryptedData, encoding, textEncoding);
/* UWAGA
    Aktualizacja zawartości obiektu decipher została wykonana zgodnie podaną daną wejściową encryptedData
    oraz typem kodowania wejściowego (encoding) - tutaj 'hex' i typem kodowania wyjściowego (textEncoding)
    - tutaj 'utf8', podanymi jako argumenty metody cipher.update().
 */

// Zakończenie procesu dekodowania:
decryptedData += decipher.final(textEncoding);
/* UWAGA
    Metoda decipher.final() zwraca wartość obiektu decipher (tutaj: daną po wykonanej deszyfracji).
    Jeżeli podano typ kodowania wejściowego (jak tutaj), zwracana wartość należy do typu String.
    W przeciwnym przypadku (metoda wywołana beż żadnych argumentów), zwraca ona bufor.
 */
console.log("Deszyfrowana dana: ", decryptedData);

