/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja obiektu przy wykorzystaniu notacji literałowej:
let pracownik = {
	imie: "",
	nazwisko: "",
	getPersonalia: function() {
		return (this.imie + ' ' + this.nazwisko);
	}
}

// Definicja funkcji - konstruktora:
function PracownikConstructor(pImie, pNazwisko) {
	this.imie = pImie;
	this.nazwisko = pNazwisko;
	this.getPersonalia = function() {
		return (this.imie + ' ' + this.nazwisko);
	}
	
}

// Definicja klasy:
class Pracownik {
	// Definicja konstruktora:
	constructor(pImie, pNazwisko) {
		this.imie = pImie;
		this.nazwisko = pNazwisko;		
	}
	// Definicja metody instancyjnej:
	getPersonalia() {
			return (this.imie + ' ' + this.nazwisko);
	}
}

// Eksport obiektu pracownik, konstruktora PracownikConstructor() i klasy Pracownik
// jako składników obiektu przypisanego do właściwości exports obiektu module:
module.exports = {
	pracownik,
	PracownikConstructor,
	Pracownik
}

/* UWAGA
 	Eksport można również zrealizować za pomocą instrukcji cząstkowych:
 		module.exports.pracownik = pracownik;
		module.exports.PracownikConstructor = PracownikConstructor;
		module.exports.Pracownik = Pracownik;
 */

