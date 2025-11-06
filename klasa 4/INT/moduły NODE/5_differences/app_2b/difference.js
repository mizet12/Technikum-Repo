/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

function fA() {
    console.log("fA");
}
function fB() {
    console.log("fB");
}
function fC() {
    console.log("fC");
}
exports = {
    fA,
    fB
}
module.exports.fC = fC;
/* UWAGA
    Wyeksportowana zostanie jedynie funkcja fC.
    Wynika to z faktu, że w ostatniej linii ustalono nową zawartość
    obiektu module.exports (exports).
 */