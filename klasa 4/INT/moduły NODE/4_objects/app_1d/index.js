/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie zasobów publicznych modułu person z pliku person.js:
const f = require('./person');

// Wykorzystanie zasobów dołączonego modułu person.
console.log("f.person: \n", f.person);

f.person.imie = "Piotr";
f.person.nazwisko = "Siewniak";
console.log(f.person.getPersonalia());
