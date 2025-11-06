/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicje klasycznych funkcji nazwanych (ES5):
function pole(a, b) {
	return a * b;
}
function obwod(a, b) {
	return 2 * a + 2 * b;
}

// Eksport funkcji nazwanych pole() i obwod() jako właściwości obiektu exports:
exports.pole = pole;
exports.obwod = obwod;
/* UWAGA
	Funkcje pole() i obwod() zostały wyeksportowane jako właściwości obiektu,
	a nie jako niezależne funkcje. Tym samym, na zewnątrz modułu są one dostępne
	tylko jako właściwości modułu, a nie jako odrębne - niezależne funkcje.
 */