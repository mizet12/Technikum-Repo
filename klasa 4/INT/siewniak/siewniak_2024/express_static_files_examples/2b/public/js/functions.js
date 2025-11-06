// Definicje klasycznych funkcji nazwanych (named functions) (ES5):
function KM_na_KW(km) {
	return 0.736 * km;
}
function KW_na_KM(kw) {
	return kw/0.736;
}

// Eksport zdefiniowanych funkcji jako właściwości obiektu exports:
exports.KM_na_KW = KM_na_KW;
exports.KW_na_KM = KW_na_KM;
/* UWAGA
	Funkcje KM_na_KW() oraz KW_na_KM stanowią zasoby publiczne modułu functions,
	czyli zasoby dostępne na zewnątrz tego modułu.
 */