/*  NODE.JS FILE SYSTEM
    Otwarcie i odczyt pliku - funkcje open() i read() z pakietu fs.

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
// Dołączenie zasobów modułu fs:
const fs = require('fs');

// Określenie rozmiaru bufora przeznaczonego na dane:
const buffer = new Buffer.alloc(1024); // rozmiar bufora: 1kB
/* UWAGA
    Bufory (buffers) w Node.js (JavaScripcie) nie są w żaden sposób związane z buforowaniem danych
    Buforowanie danych to całkiem inny mechanizm.
    Bufory w Node.js (JS) są wykorzystywane w Node do przetwarzania danych binarnych (binary data).

    Bufor stanowi obszar pamięci operacyjnej o stałym rozmiarze (fixed-size).
    Jest to obszar przydzielony poza silnikiem V8 JavaScript.


    Standardowo, Node.js (JavaScript) umie "współpracować" (przetwarzać) dane UNICODE.
    Jednak w przypadku danych binarnych (pochodzących np. z plików w procesie ich zapisu/odczytu)
    istnieje konieczność przetwarzania tzw. octet streams.
    Strumienie oktetowe to inaczej strumienie bajtów. Oktet odpowiada 8-bitowemu bajtowi.

    Pliki typu "octet stream" stanowią binarną wersję plików MIME-type. MIME to identyfikator
    formatu pliku. Mówiąc inaczej, pliki Octet-Stream są dowolnymi plikami danych binarnych.

    Podsumowując, strumienie octetowe są znane jako strumienie bajtów.
 */
/* UWAGA
    Jak wspomniano powyżej zasoby klasy Buffer są używane do przetwarzanie danych binarnych.

    DLA PRZYPOMNIENIA:
    Obrazowo, obiekt klasy Buffer odnosi się do określonej lokalizacji (obszaru) w pamięci operacyjnej,
    podobnie jak tablice zawierające liczby całkowite.
    Przy czym, każda liczba całkowita jest pamiętana w jednym bajcie.
    Najważniejsza różnica pomiędzy buforem, a tablicą polega na tym, że tablica może zawierać
    dane dowolnego typu (np. liczby, znaki), natomiast bufor odnosi się wyłącznie do danych binarnych.
    Ponadto, tablicę można modyfikować, bufory - nie. Rozmiar bufora jest stały i nie można go zmienić.
 */

// Określenie nazwy pliku (ze ścieżką):
const fileName = __dirname + '/files/dane.txt';

// Otwarcie pliku:
fs.open(
    fileName,               // nazwa pliku ze ścieżką
    'r+',                   // tryb otwarcia pliku w trybie do odczytu i zapisu
    /* UWAGA
        W metodzie open() z pakietu fs można używać wielu flag, np.
        w  - otwarcie pliku do zapisu. Jeśli plik już istnieje, to zostanie pokryty;
        r  - otwarcie pliku do odczytu, jeśli plik nie istnieje zostanie wygenerowany wyjątek;
        r+ - otwarcie do odczytu i zapisu, jeśli plik nie istnieje zostanie wygenerowany wyjątek;
        a  - otwarcie pliku do dopisania, jeśli plik nie istnieje, to zostanie utworzony;
        a+ - otwarcie do dopisania i odczytu, jeśli plik nie istnieje, to zostanie utworzony;
        itd.
     */
    (err, fd) => {  // funkcja callback (err reprezentuje ewentualny błąd,
                    // a fd - deskryptor pliku zwrócony przez metodę open()
                    /* UWAGA
                        Deskryptor pliku do identyfikator pliku używany przez system operacyjny.
                     */
            // W przypadku błędu funkcja callback zwraca błąd:
            if (err) return console.error(err);

            // Wyświetlenie informacji pomocniczej po pomyślnym otwarciu pliku:
            console.log(`Otwarcie pliku ${fileName} zakończone sukcesem ...`);

            // Odczyt zawartości pliku:
            fs.read(
                fd,                 // deskryptor pliku zwrócony przez metodę open()
                buffer,             // bufor, do którego są zapisywane dane
                0,                  // offset pozycja w buforze, od której
                                    // zapisywane są dane
                buffer.length,      // ilość bajtów do odczytu
                                    // (tutaj: całkowita długość bufora)
                0,                  // pozycja, od której plik jest odczytywany
                                    // 1_throw_error - oznacza, że odczyt jest realizowany od początku pliku
                                    // null lub -1 - odczyt od bieżącej pozycji w pliku.
                                    // W tym drugim przypadku, bieżąca pozycja w pliku
                                    // jest aktualizowana
                (err, bytes) => {   // funkcja callback
                    if (err) console.log(err);

                    // Wyświetlenie informacji o ilości odczytanych danych:
                    console.log("Liczba odczytanych bajtów (bytes): ", bytes);

                    // Wyświetlenie danych po konwersji na typ String:
                    if (bytes > 0) {
                        console.log("Zawartość pliku: ");
                        console.log(buffer.slice(0, bytes).toString());
                        /* UWAGA
                            Metoda buffer.slice() zwraca nowy bufor, który odnosi się
                            do tego samej przestrzeni pamięci co bufor oryginalny,
                            ale z uwzględnieniem przesunięcia i przycięcia za pomocą
                            indeksu początkowego (tutaj 1_throw_error) i końcowego (tutaj bytes).
                         */
                    }
                }
            );
        }
);


