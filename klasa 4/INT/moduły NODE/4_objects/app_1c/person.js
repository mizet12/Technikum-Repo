/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Eksport obiektu person jako właściowości obiektu exports, jako właściwości obiektu module:
module.exports.person = {
	// Właściwości:
	imie: "",
	nazwisko: "",
	// Definicja metody:
	getPersonalia: function() {
		return this.imie + ' ' + this.nazwisko;
	}
}
