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
    fB,
    fC
}
module.exports = {
    fC
};
/* UWAGA
    Wyeksportowana zostanie jedynie funkcja fC.
    W ostatniej linii przesłonięto poprzednią zawartość obiektu
    module.exports.
 */