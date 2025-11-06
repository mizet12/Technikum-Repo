/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

const f = require('./person');
console.log("Obiekt f: \n", f);
console.log();

// Utworzenie obiektu person1 na podstawie obiektu f.person:
const person1 = f.person;
// Przypisanie wartości właściwościom obiektu person1:
person1.imie = "Piotr";
person1.nazwisko = "Siewniak";
console.log("person1: \n", person1); // { imie: 'Piotr', nazwisko: 'Siewniak' }


// Utworzenie obiektu person2a przy wykorzystaniu konstruktora f.Person:
const person2a = new f.Person("Maria", "Kowalska");
console.log("person2a: \n", person2a); // { imie: 'Maria', nazwisko: 'Kowalska' }

// Utworzenie obiektu person2b przy wykorzystaniu konstruktora f.Person:
const person2b = new f.Person("Tadeusz", "Nowak");
console.log("person2b: \n", person2b); // { imie: 'Tadeusz', nazwisko: 'Nowak' }


