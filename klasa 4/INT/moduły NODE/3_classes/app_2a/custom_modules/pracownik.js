
// Definicja klasy:
class Pracownik  {
    // Definicja konstruktora:
    constructor(imie, nazwisko) {
        if (typeof(imie) == "string") this._imie = imie;
            else console.log("Uwaga! Błędna wartość danej imie!");
        if (typeof(nazwisko) == "string") this._nazwisko = nazwisko;
            else console.log("Uwaga! Błędna wartość danej nazwisko!");
    }
    // Definicje getterów:
    get imie() {
        return this._imie;
    }
    get nazwisko() {
        return this._nazwisko;
    }
    // Definicje setterów:
    set imie(imie) {
        if (typeof(imie) == "string") this._imie = imie;
            else console.log("Uwaga! Błędna wartość danej imie!");
    }
    set nazwisko(nazwisko) {
        if (typeof(nazwisko) == "string") this._nazwisko = nazwisko;
            else console.log("Uwaga! Błędna wartość danej nazwisko!");
    }
}

// Eksport klasy Pracownik jako zasobu publicznego modułu pracownik:
module.exports = {
    Pracownik
}
