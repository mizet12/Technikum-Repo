/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Eksport funkcji nazwanych (named functions) pole() i obwod():
module.exports.pole = function(a, b) {
	return a * b;
}
module.exports.obwod = (a, b) => {
	return 2 * a + 2 * b;
}
/* UWAGA
	Eksport funkcji pole() i obwod() jest realizowany za pośrednictwem
	właściwości exports obiektu module.
 */
