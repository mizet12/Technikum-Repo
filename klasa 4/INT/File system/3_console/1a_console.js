/*  NODE.JS GLOBAL OBJECTS
    Klasa Console.

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/

/* UWAGA
    Moduł console stanowi w Node obiekt globalny. Moduł ten może być używany w programie bez potrzeby
    dołączania go za pomocą funkcji require(). Moduł console zawiera również klasę Console.
    Moduł console zawiera wiele metod konsoli pozwalających na wyświetlanie różnych informacji -
    analogicznie jak w konsoli przeglądarki dla JS.
 */

// Wyświetlenie informacji pomocniczej w konsoli:
console.log("Pierwsza linia w kodzie programu ...");
/* UWAGA
    Metoda console.log() służy do wyświetlania informacji (strumienia) na standardowym wyjściu (konsoli).
    Metoda ta może mieć wiele argumentów.

    Inne metody o takim samym działaniu w odniesieniu do konsoli (terminala lub przeglądarki:
    - console.info();
    - console.debug().
 */


// Start timera o nazwie interval_while:
console.time('interval_while');
/* UWAGA
    Metoda time() uruchamia licznik czasu - timer, natomiast metoda timeEnd() zatrzymuje go.
    Metody time() i timeEnd() wykorzystuje się w celach testowych - w celu sprawdzenia czasu
    wykonania określonych operacji.

    Timerowi można nadać nazwę własną, podając ją jako argument metody time().
 */

// Testowe przetwarzanie danych:
let i = 1, s = 0;
while (i <= 1e6) {
    s += i;
    i++;
}
// Wyświetlenie informacji w konsoli:
console.info("Suma wynosi: %d", s);
/* UWAGA
    Metoda console.info() ma taką samą rolę jak metoda console.log().
 */
// Zatrzymanie timera interval_while:
console.timeEnd('interval_while');


// Start timera interval_for:
console.time('interval_for');
// Testowe przetwarzanie danych:
s = 0;
for (i = 1; i <= 1e6; i++) {
    s += i;
}
// Wyświetlenie informacji w konsoli:
console.info("Suma wynosi: %d", s);
// Zatrzymanie timera interval_for:
console.timeEnd('interval_for');


const mianownik = 0;
// Wyświetlenie komunikatu ostrzegawczego (warning message):
console.warn("Uwaga ostrzeżenie! Zaraz może nastąpić próba dzielenia przez zero!");
if (mianownik == 0) {
    const err = new Error("Uwaga błąd! Próba dzielenia przez zero!");
    // Wyświetlenie komunikatu o błędzie:
    console.error(err.message);
}
else {
    console.log("Iloraz = ", 1/mianownik);
}
/* UWAGA
    Działanie metod console.error() i console.warn() jest podobne.
 */

// Definicja tablicy:
const table = [1, 2, 3, 4, 5];
// Wyświetlenie tablicy:
console.table("Zawartość tablicy: ", table);
/* UWAGA
    Metoda console.table() służy do wyświetlania tablic. Można ją również wykorzystać
    do wyświetlania obiektów - jako to pokazano poniżej.
 */

// Definicja obiektu:
const object = {
    imie: "Piotr",
    nazwisko: "Siewniak",
    wiek: 50,
}
// Wyświetlenie obiektu:
console.table(object);
console.dir(object);
/* UWAGA
    Zawartość obiektów można wyświetlać:
    a) w postaci tabelarycznej - metoda console.table();
    b) w formacie JSON - metoda console.dir().
 */

console.log("Ostatnia linia w kodzie programu ...");

/* UWAGA
    Klasa console zawiera również szereg innych metod, ktorych tutaj nie uwzględniono.
 */


