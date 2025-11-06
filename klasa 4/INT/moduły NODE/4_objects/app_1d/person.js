/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

person = {
	imie: "", // właściwość
	nazwisko: "", // właściwość
	getPersonalia: function() { // metoda
		return this.imie + ' ' + this.nazwisko;
	}
	
}

// Eksport obiektu person jako właściwości obiektu module.exports:
module.exports.person = person;
