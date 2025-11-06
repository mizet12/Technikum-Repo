/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda synchroniczna readFileSync().
    Kod blokujący - synchroniczny.

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
// Dołączenie zasobów modułu fs:
const fs = require('fs');

// Deklaracja i inicjalizacja zmiennych pomocniczych:
const fileName = 'dane.txt';
const rootPath = __dirname + '/files/' + fileName;

console.log("Pierwsza instrukcja wykonawcza w kodzie programu ...");

// Odczyt zawartości pliku w sposób synchroniczny:
const data = fs.readFileSync(
    rootPath, // ścieżka dostępu do pliku
    'utf8' // system kodowania znaków
    /* ĆWICZENIE
        Usunąć argument określający system kodowania znaków. Wykonać program.
     */
);
/* UWAGA
    Metoda readFileSync() zwraca:
    a) albo zawartość bufora z danymi po odczytaniu całości pliku,
    b) albo łańcuch znaków.
    Jest to zależne od tego, czy system kodowania zostanie określone, czy nie.
    Jeśli system kodowania zostanie podany, wówczas metoda zwraca łańcuch znaków.

    Należy zwrócić uwagę na to, że metoda readFileSync() najpierw pobierze całą zawartość pliku do pamięci,
    a dopiero później przekaże sterowanie do środowiska wykonawczego.
    Jest to sposób polegający na buforowaniu danych (ale w znaczeniu klasy Buffer).
    Żadna inna instrukcja nie może być wykonywana w trakcie odczytu pliku.
 */
console.log("data:", data);
console.log("data.toString():", data.toString());
/* UWAGA
    Synchroniczne odczytywanie zawartości pliku nie jest zalecane, ponieważ dalsze wykonywanie aplikacji
    zostaje wstrzymane, aż cały plik zostanie odczytany.
 */

// Kolejne instrukcje w programie:
console.log("Kolejna instrukcja w kodzie programu ...");
console.log("Ostatnia instrukcja w kodzie programu ...");
/* UWAGA
    Instrukcje powyżej nie zostaną wykonane przed zakończeniem procesu odczytu pliku,
    ponieważ jest on realizowany w sposób synchroniczny - blokujący.
 */
