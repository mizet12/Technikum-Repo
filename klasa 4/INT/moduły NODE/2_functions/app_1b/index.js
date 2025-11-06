/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie zasobów publicznych modułu prostokat:
const prostokat = require('./prostokat');
// Wyświetlenie zawartości obiektu prostokat:
console.log(prostokat);

const a = 1, b = 2; // długości boków prostokąta

// Wywołanie funkcji zdefiniowanych w module prostokat:
console.log('Pole wynosi ', prostokat.pole(a, b));
console.log('Obwód wynosi ', prostokat.pole(a, b));

