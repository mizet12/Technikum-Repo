/* NODE.JS MODULES
    Moduły lokalne zdefiniowane przez programistę.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Import (dołączenie) zasobów z lokalnego modułu obiekt:
const object = require('./object');

console.log(object); // wyświetlenie zawartości obiektu
console.log(object.objectLiteral); // wyśw. zawartości obiektu obiekt

console.log(object.objectLiteral.napis);

// Zmiana wartości właściwości napis:
object.objectLiteral.napis = "Morze Bałtycke";
console.log(object.objectLiteral.napis);

console.log(object.objectLiteral.liczba);
