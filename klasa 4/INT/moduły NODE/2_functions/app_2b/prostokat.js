/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Eksport zasobów publicznych modułu prostokat:
module.exports.polePr = (a, b) => {
	return (a * b);
}

module.exports.obwodPr = (a, b) => {
	return (2 * a + 2 * b);
}
/* UWAGA
	Eksport funkcji strzałkowych polePr() i obwodPr() jest realizowany
	za pośrednictwem właściwości exports obiektu module.
 */
