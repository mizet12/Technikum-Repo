/* NODE.JS - PODSTAWY KRYPTOGRAFII
   Moduł crypto - metoda createHash().

    © Piotr Siewniak, wersja: 28.IV.2022 r.
*/

/* UWAGA
    Przed wykonaniem aplikacji należy zainstalować moduł crypto.
 */

/* UWAGA
    Zasoby modułu crypto pozwalają na haszowanie (hashing), szyfrowanie (encryption)
    i deszyfrowanie (decryption) danych.
    W przypadku konieczności mocniejszego haszowania należy użyć modułu bycrypto.

    Operacje/mechanizmy kryptograficzne
    -----------------------------------
    Haszowanie (hashing)
    Haszowanie polega na konwersji zwykłego tekstu (np. hasła) na jego postać zaszyfrowaną.
    Proces haszowania jest nazywany inaczej mieszaniem lub tworzeniem skrótu.

    Operacja haszowania jest jednokierunkowa - nie jest możliwe odtworzenie zaszyfrowanego tekstu
    do jego postaci pierwotnej (oryginalnej).

    Mechanizm haszowania (haszowanie kryptograficzne) jest stosowany głównie przy zapisie
    haseł użytkowników w bazie danych w procesie ich uwierzytelniania (user authentication).
    Inne zastosowania kryptograficznych funkcji (algorytmów) haszujących:
    - wykrywanie złośliwego oprogramowania (np. do tworzenia czarnych list złośliwego oprogramowania);
    - sprawdzanie, czy dane pliki nie stanowią zagrożenia bezpieczeństwa;
    - wykrywanie utworów (np. filmów) chronionych prawem autorskim;
    - zapewnienie integralności wiadomości przesyłanych w sieci.

    Przykłady algorytmów haszujących (inaczej: funkcji haszujących, funkcji skrótu):
    MD5, SHA-1, SHA-256.

    Ważną cechą haszowania jest to, że dla danych wejściowych o różnej długości ich postacie haszowane
    mają taką samą długość (dla tej samej funkcji skrótu i tego samego kodowania).

    Szyfrowanie/deszyfrowanie
    Szyfrowanie polega na wygenerowaniu danej zaszyfrowanej na podstawie danej pierwotnej
    oraz losowo wygenerowanego tajnego klucza (secret key).
    Zaszyfrowana dana nazywana jest tekstem zaszyfrowanym (cipher text).
    Operacja szyfrowania jest dwukierunkowa - odwracalna. Na podstawie zaszyfrowanego tekstu
    oraz tego samego tajnego klucza można odtworzyć daną pierwotną.
    Proces odwrotny do szyfrowania nazywa się deszyfrowaniem.

    Nie należy mylić ze sobą pojęć haszowania i szyfrowania!
 */

/* UWAGA
    Haszowanie (mieszanie) danych w Node jest realizowane przy wykorzystaniu zasobów klas:
    1) Hash;
    2) Hmac.
 */

// Dołączenie zasobów modułu crypto:
const crypto = require('crypto');

// Dana wejściowa (przeznaczona do zakodowania):
const inputData = 'Piotr';
console.log("Dana wejściowa:", inputData);

// Utworzenie obiektu hash, jako instancji klasy Hash:
const hash = crypto.createHash('md5');
/* UWAGA
    Metoda crypto.createHash() zwraca obiekt klasy Hash utworzony przy użyciu zadanego algorytmu.
    Przykłady algorytmów mieszających (haszujących): md4, sha1, sha256, sha512.
    Dostępne typy kodowania: hex, binary, base64.
 */

// Aktualizacja zawartości obiektu hash (hash content) na podstawie danej wejściowej:
const hashUpdated = hash.update(inputData);
/* UWAGA
    W ogólności, w celu aktualizacji obiektu hash metoda update() może być wywoływana wiele razy.
    Wynika to ze sposobu pobierania danych przez tę metodę, która jest realizowana strumieniowo.
 */

// Wyznaczenie wyniku:
const result = hashUpdated.digest('hex');
/* UWAGA
    Metoda digest() jest nazywana funkcją skrótu (digest function).
    Funkcja ta jest wywoływana w celu wyznaczenia wartości wynikowej zahaszowanej danej.
    Podanie argumentu (np. 'hex') sprawia, że wynikiem jest dana typu String,
    brak argumentu powoduje, że wynik jest buforem.
 */
console.log("Dana zakodowana (md5, hex): ", result);
console.log("Liczba znaków:", result.length);





