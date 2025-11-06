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
exports.fA = fA;
exports.fB = fB;

module.exports.fC = fC;
/* UWAGA
    Wyeksportowane zostaną wszystkie funkcje.
    Wynika to z faktu, że poszczególne funkcje zostaną wyeksportowane
    jako niezależne składniki (właściwości) obiektu exports.
 */