/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie zasobów publicznych biblioteki (modułu) objects:
const f = require('./objects');

// Odwołania do zasobów bibliotecznych modułu objects:
console.log(f);
console.log(f.person);

console.log(f.person.imie);
console.log(f.person.nazwisko);

f.person.imie = "Piotr";
f.person.nazwisko = "Siewniak";
console.log(f.person);

console.log(f.person.imie);
console.log(f.person.nazwisko);
