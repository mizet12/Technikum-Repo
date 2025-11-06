
// Definicja klasy Kolo:
class Kolo  {
    constructor(r) {
        this._r = r;
    }
    // Deklaracje metod instancyjnych - wykorzystanie składni funkcji strzałkowych:
    poleKolo = () => {
        return (Math.PI * Math.pow(this._r, 2));
    }
    obwodKolo = () => {
        return (2 * Math.PI * this._r);
    }

}

// Eksport klasy Kolo jako zasobu publicznego modułu kolo:
exports.Kolo = Kolo;
