/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport obiektów.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja obiektu personLiteral - notacja literałowa:
const personLiteral = {
	imie: "",
	nazwisko: "",	
}

// Definicja funkcji personConstructor() pełniącej rolę konstruktora:
function personConstructor(pImie, pNazwisko) {
	return {
		imie: pImie,
		nazwisko: pNazwisko,	
	}	
}

// Eksport obiektów personLiteral i funkcji-konstruktora personConstructor():
module.exports.person = personLiteral;
/* UWAGA
	Obiekt personLiteral został wyeksportowany jako właściwość person
	obiektu module.exports.
 */
module.exports.Person = personConstructor;
/* UWAGA
	Funkcja personConstructor została wyeksportowana jako właściwość Person
	obiektu module.exports.
 */
