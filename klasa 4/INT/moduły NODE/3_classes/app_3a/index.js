/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport klas. Mechanizm dziedziczenia.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie do aplikacji zasobów publicznych modułu kolo:
const f = require('./custom_modules/pracownicy');
// Wyświetlenie zawartości obiektu zwróconego przez funkcję require():
console.log("f = ", f);


const Pracownik = f.Pracownik;

const pracownik = new Pracownik("Piotr", "Siewniak");
console.log(pracownik);

const Nauczyciel = f.Nauczyciel;
const nauczyciel = new Nauczyciel("Jan", "Nowak", "elektronika");
console.log(nauczyciel);

const Wychowawca = f.Wychowawca;
let wychowawca = new Wychowawca("Maria", "Kowalska", "matematyka", "2f");
console.log(wychowawca);