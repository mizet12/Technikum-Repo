/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport klas. Mechanizm dziedziczenia.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja klasy bazowej:
class Pracownik {
    // Definicja konstruktora klasy bazowej:
    constructor(imie, nazwisko) {
        // Deklaracja (i inicjacja właściwości):
        this._imie = imie;
        this._nazwisko = nazwisko;
    }
    // Definicja metody instancyjnej klasy bazowej:
    danePracownik() {
        // Wykorzystanie literału szablonowego (template literal):
        return `imię: ${this._imie}, nazwisko: ${this._nazwisko}`;
    }
}
// Definicja klasy potomnej Nauczyciel względem klasy bazowej Pracownik:
class Nauczyciel extends Pracownik {
    constructor(imie, nazwisko, przedmiot) {
        super(imie, nazwisko);
        this._przedmiot = przedmiot;
    }
    daneNauczyciel() {
        return `${super.daneOsoba()}, przedmiot: ${this._przedmiot}`;
    }
}
// Definicja klasy Wychowawca, która stanowi klasę potomną dla klasy Nauczyciel:
class Wychowawca extends Nauczyciel {
    constructor(imie, nazwisko, przedmiot, klasa) {
        super(imie, nazwisko, przedmiot);
        this._klasa = klasa;
    }
    daneWychowawca() {
        return `${super.daneNauczyciel()}, klasa: ${this._klasa}`;
    }
}

// Eksport klas Pracownik, Nauczyciel i Wychowawca:
module.exports = {
    Pracownik,
    Nauczyciel,
    Wychowawca
}
/* UWAGA
    Wymienione powyżej klasy zostały wyeksportowane jako zawartość
    właściwości (obiektu) exports obiektu module.
 */