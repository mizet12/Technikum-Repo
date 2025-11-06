/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

let a = 1;
let b = 2;
let c = 3;

exports.a = a;
exports.b = b;
module.exports.c = c;

/* UWAGA
    Wyeksportowane zostaną wszystkie zmienne.
    Wynika to z faktu, że poszczególne zmienne zostaną wyeksportowane
    jako niezależne składniki (właściwości) obiektu exports.
 */
