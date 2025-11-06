/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicje funkcji:
function polePr(a, b) {
	return (a * b);
}

obwodPr = (a, b) => {
	return (2 * a + 2 * b);
}

// Eksport funkcji polePr() i obwodPr() jako składników obiektu,
// za pośrednictwem właściwości exports obiektu module:
module.exports = {
	polePr,
	obwodPr
}
