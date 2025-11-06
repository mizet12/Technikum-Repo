/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie zasobów publicznych modułu prostokat:
let f = require('./prostokat');
// Zawartość obiektu f:
console.log(f);

// Wykorzystanie funkcji polePr() i obwodPr() jako zasobów publicznych modułu prostokat:
let pole = f.polePr(1, 2);
console.log('Pole wynosi: ', pole);

let obwod = f.obwodPr(1, 2);
console.log('Obwód wynosi: ', obwod);
