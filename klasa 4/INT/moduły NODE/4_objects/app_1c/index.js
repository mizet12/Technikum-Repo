/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie do aplikacji zasobów modułu person, czyli obiektu person:
const f = require('./person');

// Odwołania do obiektu f i jego składników:
console.log("f:\n", f);
console.log("f.person: \n", f.person);

f.person.imie = "Piotr";
f.person.nazwisko = "Siewniak";
console.log(f.person.getPersonalia());
