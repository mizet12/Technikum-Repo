/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie zasobów publicznych modułu prostokat:
const prostokat = require('./prostokat');
// Prezentacja zawartości obiektu prostokat:
console.log(prostokat);

const a = 1, b = 2; // boki prostokąta

// Wykorzystanie funkcji polePr() i obwodPr() zdefiniowanych w module prostokat:
console.log('Pole wynosi: ', prostokat.polePr(a, b));
console.log('Obwód wynosi: ', prostokat.obwodPr(a, b));
