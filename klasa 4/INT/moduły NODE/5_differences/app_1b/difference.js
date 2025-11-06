/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

let a = 1;
let b = 2;
let c = 3;

exports.a = a;
exports.b = b;
module.exports = {
    c
};
/* UWAGA
    Wyeksportowana zostanie jedynie zmienna c.
    Wcześniejsze wywołania exports zostaną zignorowane.

    Wynika to z tego, że w ostatniej linii wyeksportowano obiekt,
    który przesłonił poprzednią zawartość obiektu exports.
 */