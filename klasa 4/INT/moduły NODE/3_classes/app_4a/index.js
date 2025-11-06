/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport klas. Mechanizm dziedziczenia i polimorfizm.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie do aplikacji zasobów publicznych modułu kolo:
const f = require('./custom_modules/pracownicy');
// Wyświetlenie zawartości obiektu zwróconego przez funkcję require():
console.log("f = ", f);

// Utworzenie i przetwarzanie obiektów wchodzących w skład łańcucha dziedziczenia:
let pracownik = new f.Pracownik("Piotr", "Siewniak");
console.log(pracownik.zwrocDane());

let nauczyciel = new f.Nauczyciel("Jan", "Nowak", "elektronika");
console.log(nauczyciel.zwrocDane());

let wychowawca = new f.Wychowawca("Maria", "Kowalska", "matematyka", "2f");
console.log(wychowawca.zwrocDane());
/* UWAGA
    Funkcja zwrocDane() wywołana powyżej w odniesieniu do obiektów stanowiących
    instancje różnych klas wchodzących w skład łańcucha dziedziczenia jest
    funkcją polimorficzną.
 */