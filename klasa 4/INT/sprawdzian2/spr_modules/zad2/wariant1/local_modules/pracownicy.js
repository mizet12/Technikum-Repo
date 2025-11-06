class Pracownik {

    constructor(imie, nazwisko) {
        this._imie = imie
        this._nazwisko = nazwisko
    }

    getInfo() {
        return `Dane pracownika: ${this._imie} ${this._nazwisko}`
    }
}

class Lekarz extends Pracownik {
    WSPOLCZYNNIK = 3

    constructor(imie, nazwisko, specjalizacja) {
        super(imie, nazwisko)
        this._specjalizacja = specjalizacja
    }

    getInfo() {
        return `${super.getInfo()}, specjalizacja: ${this._specjalizacja}`
    }
}

class Ordynator extends Lekarz {
    WSPOLCZYNNIK = 4
    
    constructor(imie, nazwisko, specjalizacja, biuro) {
        super(imie, nazwisko, specjalizacja)
        this._biuro = biuro
    }

    getInfo() {
        return `${super.getInfo()}, biuro ordynatora: ${this._biuro}`
    }
}

class Pielegniarka extends Pracownik {
    WSPOLCZYNNIK = 1

    constructor(imie, nazwisko, sala) {
        super(imie, nazwisko)
        this._sala = sala
    }

    getInfo() {
        return `${super.getInfo()}, sala pielęgniarki: ${this._sala}`
    }
}

class PielegniarkaOddzialowa extends Pielegniarka {
    WSPOLCZYNNIK = 2

    constructor(imie, nazwisko, sala, oddzial) {
        super(imie, nazwisko, sala)
        this._oddzial = oddzial
    }

    getInfo() {
        return `${super.getInfo()}, oddział: ${this._oddzial}`
    }
}

module.exports = {
    Lekarz,
    Ordynator,
    Pielegniarka,
    PielegniarkaOddzialowa,
}
