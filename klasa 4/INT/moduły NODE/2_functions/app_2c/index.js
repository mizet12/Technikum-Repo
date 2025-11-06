/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

const f = require('./prostokat');

// Prezentacja zawartości obiektu f:
console.log(f);

// Wykorzystanie zasobów publicznych modułu prostokat:
let pole = f.polePr(1, 2);
let obwod = f.obwodPr(1, 2);

console.log('Pole wynosi: ', pole);
console.log('Obwód wynosi: ', obwod);
