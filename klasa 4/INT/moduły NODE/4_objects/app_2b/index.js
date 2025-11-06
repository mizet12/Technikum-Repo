/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie do aplikacji zasobów publicznych modułu pracownik:
const f = require('./pracownik');

// Utworzenie obiektu pracownik1:
const pracownik1 = f.pracownik;
/* UWAGA
    Obiekt pracownik został utworzony poprzez skopiowanie na niego
    obiektu f.pracownik.
 */
//const pracownik1_ = f.pracownik; // test
//console.log(pracownik1_.getPersonalia()); // test

// Zmiana wartości właściwości imie i nazwisko obiektu pracownik1:
pracownik1.imie = "Adam";
pracownik1.nazwisko = "Nowak";
console.log(pracownik1.getPersonalia());


// Utworzenie obiektu pracownik2 poprzez wywołanie konstruktora PracownikConstructor():
let pracownik2 = new f.PracownikConstructor("Jan", "Kowalski");
console.log(pracownik2.getPersonalia());
// console.log(pracownik2); // test
// console.log();

// Utworzenie obiektu pracownik3 jako instancji klasy Pracownik:
const pracownik3 = new f.Pracownik("Barbara", "Nowakowska");
console.log(pracownik3.getPersonalia());
// console.log(pracownik3); // test
// console.log();

