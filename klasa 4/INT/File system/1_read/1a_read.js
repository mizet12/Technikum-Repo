/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda asynchroniczna readFile().
    Kod nieblokujący - asynchroniczny.

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
// Dołączenie zasobów modułu fs:
const fs = require('fs');

// Deklaracja i inicjalizacja zmiennych pomocniczych:
const fileName = 'dane.txt';
const rootPath = __dirname + '/files/' + fileName;
/* UWAGA
    Zmienna środowiskowa __dirname określa pełną ścieżkę dostępu do katalogu,
    w którym jest zapisany uruchamiany skrypt.
 */

console.log("Pierwsza instrukcja w kodzie programu ....");

// Asynchroniczny odczyt zawartości pliku na zadanej ścieżce:
fs.readFile(
    /* UWAGA
        Metoda readFile() pozwala na odczyt zawartości pliku w sposób asynchroniczny.

        Asynchroniczny odczyt zawartości pliku polega na tym, że wykonanie skryptu (kodu) JavaScript
        będzie kontynuowane bez przerwy - bez żadnego oczekiwania na zakończenie metody readFile().
        Jednakże należy zwrócić uwagę na to, że metoda readFile() najpierw pobierze całą
        zawartość pliku do pamięci, a dopiero później zwróci dane do otoczenia.
        Innymi słowy, metoda ta buforuje (w zanczeniu buforów należących do klasy Buffer) całą zawartość pliku
        do pamięci operacyjnej. Tym samym, odczytanie zawartości dużego pliku może zająć dużo czasu.
        W granicznym przypadku może się to okazać w ogóle nieskuteczne.
        Dlatego też, w przypadku konieczności odczytu zawartości dużego pliku lepiej jest
        wykorzystać sposób wykorzystujący strumienie danych (data streams), a nie sposób
        polegający na buforowaniu danych (jak tutaj).

        Asynchroniczny sposób odczytu zawartości pliku jest preferowany względem synchronicznego,
        ponieważ nigdy nie blokuje wykonywania programu (tj. głównego wątku programu).
        Po rozpoczęciu czytania pliku za pomocą metody readFile() sterowanie zostaje przekazane
        do środowiska wykonawczego (czyli na stos wywołań funkcji (function execution stack)).
        Dlatego też, następne instrukcje w programie mogą być wykonywane niezależnie od odczytu pliku.
        Używając z kolei metody synchronicznej - czyli fs.readFileSync() - wykonywanie głównego wątku (programu)
        zostaje wstrzymane aż do chwili, w której całość pliku zostanie odczytana.

        Metody asynchroniczne są preferowane nie tylko przy odczytywaniu plików, ale również w innych
        - czasochłonnych operacjach.
    */
    rootPath, // ścieżka dostępu do pliku
    'utf8', // system kodowania znaków
    /* UWAGA
        Domyślnie (jeśli nie zostanie podany system kodowania znaków) dane są buforem (należą do klasy Buffer).

        ĆWICZENIE
        Przetestować działanie programu po usunięciu systemu kodowania znaków.
     */

    (err, data) => { // funkcja zwrotna (callback)
    /* UWAGA
        Funkcja wywołania zwrotnego zostanie wykonana dopiero wtedy, gdy asynchroniczna funkcja nadrzędna
        względem niej zakończy swoje działanie. Tutaj funkcją nadrzędną jest fsReadFile().
    */
        if (err) { // w przypadku błędu
            console.log("Uwaga błąd: ", err.message);
        } else {
            // Prezentacja danych w konsoli:
            console.log("data:", data);
            // Prezentacja danych poddanych konwersji do typu String:
            console.log("data.toString():", data.toString()); // lub np. process.stdout.write(data.toString());
        }
        /* UWAGA
            Powyższy kod funkcji callback można oczywiście zapisać inaczej, np.
            if (err) {
                console.error(err);
                return;
            }
            console.log(data.toString());
         */
    }
);

// Kolejne instrukcje w programie:
console.log("Kolejna instrukcja w kodzie programu ....");
console.log("Ostatnia instrukcja w kodzie programu ...");
/* UWAGA
    Instrukcje powyżej zostaną wykonane przed zakończeniem procesu odczytu pliku,
    ponieważ są to zwykłe instrukcje synchroniczne.
    Odczyt zawartości pliku jest realizowany w sposób asynchroniczny - nieblokujący.
    Inne instrukcje w programie mogą być wykonywane niezależnie od procesu odczytu pliku.
 */

