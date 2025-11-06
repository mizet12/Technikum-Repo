/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie zasobów modułu objects:
const f = require('./objects');
/* UWAGA
    Obiekt zwrócony przez funkcję require() zostaje skojarzony z obiektem f.
 */

// Wykorzystanie obiektu f i jego elementów składowych:
console.log("f:\n", f);
console.log("f.person:\n", f.person);

f.person.imie = "Piotr";
f.person.nazwisko = "Siewniak";
console.log("f.person:\n", f.person);

console.log("Imię: ", f.person.imie);
console.log("Nazwisko: ", f.person.nazwisko);
