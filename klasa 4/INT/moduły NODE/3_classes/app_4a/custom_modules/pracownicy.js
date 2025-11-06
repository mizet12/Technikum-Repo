/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport klas. Mechanizm dziedziczenia i polimorfizm.

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
    zwrocDane() {
        return `imię: ${this._imie}, nazwisko: ${this._nazwisko}`;
    }
}

// Definicja klasy potomnej Nauczyciel dla klasy bazowej Pracownik:
class Nauczyciel extends Pracownik {
    // Definicja konstruktora klasy potomnej:
    constructor(imie, nazwisko, przedmiot) {
        // Wywołanie konstruktora klasy bazowej:
        super(imie, nazwisko);
        // Inicjacja właściwości natywnej klasy Nauczyciel:
        this._przedmiot = przedmiot;
    }

    // Definicja metody instancyjnej o takiej samej nazwie jak w klasie bazowej:
    zwrocDane() {
        return `${super.zwrocDane()}, przedmiot: ${this._przedmiot}`;
    }
    /* UWAGA
        Metoda zwrocDane() zdefiniowana tutaj jest metodą polimorficzną.
     */
}

// Definicja klasy Wychowawca, która stanowi klasę potomną klasy Nauczyciel:
class Wychowawca extends Nauczyciel {
    constructor(imie, nazwisko, przedmiot, klasa) {
        super(imie, nazwisko, przedmiot);
        this._klasa = klasa;
    }

    zwrocDane() {
        return `${super.zwrocDane()}, klasa: ${this._klasa}`;
    }
    /* UWAGA
        Metoda zwrocDane() zdefiniowana tutaj jest metodą polimorficzną.
     */
}

// Eksport zasobów publicznych modułu pracownicy:
module.exports = {
    Pracownik,
    Nauczyciel,
    Wychowawca
}