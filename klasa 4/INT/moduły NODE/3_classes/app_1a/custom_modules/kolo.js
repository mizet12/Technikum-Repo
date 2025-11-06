
// Definicja klasy Kolo w formie deklaracji:
class Kolo  {
    // Deklaracja konstruktora:
    constructor(r) {
        // Deklaracja i inicjalizacja właściwości instancyjnej _r:
        this._r = r;

        // Definicja metody instancyjnej:
        this.obwodKolo = function() {
            return (2 * Math.PI * this._r);
        }
    }

    // Deklaracja metody instancyjnej na zewnątrz konstruktora:
    poleKolo() {
        return (Math.PI * Math.pow(this._r, 2));
    }
}

// Eksport klasy Kolo jako zasobu publicznego modułu kolo:
module.exports = {
    Kolo
}