/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja funkcji nazwanej (w formie deklaracji)
function test1(komunikat) {
	console.log(komunikat);
}
// Definicja funkcji anonimowej i skojarzenie jej ze zmienną test2:
let test2 = function(komunikat) {
	console.log(komunikat);
}
// Definicja funkcji strzałkowej:
let test3 = (komunikat) => {
	console.log(komunikat);
}

// Eksport funkcji test1(), test2() i test3() jako właściwości obiektu exports:
exports.test1 = test1;
exports.test2 = test2;
exports.test3 = test3;

// Eksport klasycznej (zwykłej) funkcji nazwanej test4() jako właściwości obiektu exports:
exports.test4 = function(komunikat) {
	console.log(komunikat);
}

// Eksport zdefiniowanej funkcji strzałkowej test5() jako właściwości obiektu exports:
exports.test5 = (komunikat) => {
	console.log(komunikat);
}