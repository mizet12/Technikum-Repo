/*  NODE.JS BUFFERS

    © Piotr Siewniak, wersja: 13.IV.2022 r.
*/

/* UWAGA
    Bufor (buffer) stanowi obszar pamięci operacyjnej o stałym rozmiarze (fixed-size).
    Jest to obszar przydzielony poza silnikiem V8 JavaScript.

    Bufory (buffers) w Node.js (JavaScripcie) są wykorzystywane do przetwarzania danych binarnych (binary data).
*/
/* UWAGA
    Należy podkreślić, że bufory w Node.js (oraz w JavaScripcie) nie są w żaden sposób związane
    z buforowaniem danych. Buforowanie danych to całkiem inny mechanizm!
*/

/* UWAGA
    Standardowo, Node.js (JavaScript) umie przetwarzać dane kodowane w systemie (standardzie) UNICODE,
    a w tym w jego najpopularniejszej implementacji UTF-8.
    Jednak w przypadku danych binarnych (pochodzących np. z plików w procesie ich zapisu/odczytu)
    istnieje konieczność przetwarzania tzw. strumieni oktetowych (octet streams).
    Strumienie oktetowe to inaczej strumienie bajtów. Oktet odpowiada 8-bitowemu bajtowi.

    Pliki typu "octet stream" stanowią binarną wersję plików MIME-type. MIME to identyfikator formatu pliku.
    Mówiąc inaczej, pliki Octet-Stream są dowolnymi plikami danych binarnych.

    W praktyce są one używane jako załączniki plikowe, jeśli nie jest znany ich format (rozszerzenie).
    W ogólności, format takiego pliku może być dowolny, np. JPG.

    Podsumowując, strumienie octetowe należy rozumieć jako strumienie bajtów.
 */

/* UWAGA
    Klasa Buffer umożliwia przetwarzanie danych binarnych.
    Technicznie, obiekt (instancja) klasy Buffer odnosi się do określonej lokalizacji (obszaru)
    w pamięci operacyjnej - podobnie jak tablice liczb całkowitych, w której każda liczba
    jest pamiętana w jednym bajcie.

    Najważniejsza różnica pomiędzy buforem, a tablicą polega na tym, że tablica może zawierać dane
    dowolnego typu (np. liczby, znaki), natomiast bufor odnosi się wyłącznie do danych binarnych.
    Ponadto, tablicę można modyfikować, bufory - nie. Rozmiar bufora jest stały i nie można go zmienić.
 */

/* UWAGA
    Klasa Buffer jest klasą globalną. Wynika stąd, że z metod klasy Buffer można korzystać
    bez potrzeby importowania jakiegolowiek modułu.
 */

/*  ZASTOSOWANIE KLASY BUFFER
    Klasa Buffer jest używana w praktyce do przetwarzania dużych ilości danych binarnych,
    nazywanych strumieniami binarnymi (binary streams). Uwzgledniając ich dużą pojemność,
    strumienie binarne nie są przetwarzane w całości - są one "cięte" na mniejsze kawałki.
    Dane, które mnie mogą zostać przetworzone (np. odczytane, zapisane) są przechowywane w buforze.

    Klasa Buffer pozwala na przechowywanie danych w pamięci poza silnikiem V8.
    To samo dotyczy operacji przetwarzania danych binarnych, które również są realizowane poza silnikiem V8.
*/


// UTWORZENIE OBIEKTÓW (INSTANCJI) KLASY Buffer

// Utworzenie bufora o rozmiarze 8 oktetów (bajtów):
const buffer1 = Buffer.alloc(8);
/* UWAGA
    Obiekt bufor1 został zainicjowany zerami (0) po utworzeniu.

    Zamiast metody alloc() można użyć również metody allocUnsafe().
    Wówczas bufor nie zostanie zainicjowany.

    Używanie metody allocUnsafe() może być niebezpieczne, ponieważ utworzony bufor
    może zawierać stare dane, które mogą należeć do danych wrażliwych.
 */


// Utworzenie bufora na podstawie łańucha znaków kodowanego w systemie UTF-8:
const buffer2 = new Buffer("Node.js Buffer", "utf-8");
/* UWAGA
    Kodowanie UTF-8 jest domyślne, zatem w instrukcji powyżej można go pominąć.
 */


// Utworzenie bufora z tablicy liczbowej:
const buffer3a = Buffer.from([1, 10, 100, 1000]);
/* UWAGA
    Zadaniem metody Buffer.from() jest utworzenie obiektu klasy Buffer na podstawie
    łańcucha znaków, tablicy, innego obiektu klasy Buffer lub obiektu klasy ArrayBuffer.
 */
/* UWAGA
    Jak widać powyżej, metoda from() pozwala na inicjalizację bufora na podstawie zadanej wartości.
 */


// Utworzenie bufora na podstawie łańcucha znaków:
const buffer3b = Buffer.from("Node.js Buffer");
// ===============================================================================



