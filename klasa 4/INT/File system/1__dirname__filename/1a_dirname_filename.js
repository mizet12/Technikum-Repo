/*  NODE.JS GLOBAL OBJECTS
    Zmienne globalne __dirname i __filename.

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/


/* UWAGA
    Node.js dostarcza zestaw obiektów, które mają charakter globalny. Oznacza to,
    że są dostępne we wszystkich modułach i plikach aplikacji bez potrzeby ich dołączania.
    Obiekty globalne mogą stanowić np. zmienne, funkcje, łańcuchy znaków, moduły.
    Należy zwrócić uwagę, że niektóre z obientów globalnych mają zasięg (scope)
    ograniczony do modułu.

    Lista wybranych obiektów globalnych w Node:
    - zmienna __dirname;
    - zmienna __filename;
    - funkcje Timera (modułu timer), np. setTimeout(), setInterval();
    - obiekt (moduł) console;
    - elementy członkowskie klasy Buffer;
    - obiekt process.
 */
// Wyświetlenie nazwy katalogu (ze ścieżką), w którym jest zapisany wykonywany skrypt:
console.log("Nazwa katalogu ze ścieżką: ", __dirname);

// Wyświetlenie nazwy pliku (ze ścieżką), który zawiera wykonywany skrypt:
console.log("Nazwa pliku ze ścieżką: ", __filename);
