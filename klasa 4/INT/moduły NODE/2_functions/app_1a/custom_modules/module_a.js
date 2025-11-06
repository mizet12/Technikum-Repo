/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja funkcji test() za pomocą deklaracji:
function test(komunikat) {
	console.log(komunikat);
}

// Eksport funkcji test() jako właściwości obiektu exports:
exports.test = test;
