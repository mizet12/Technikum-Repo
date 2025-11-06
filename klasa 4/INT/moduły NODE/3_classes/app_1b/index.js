

// Dołączenie do aplikacji zasobów publicznych modułu kolo:
const f = require('./custom_modules/kolo');
console.log(f); // test

const r = 1; // promień koła

// Utworzenie klasy Kolo na bazie klasy f.Kolo:
const Kolo = f.Kolo;
// Utworzenie nowego obiektu k1 klasy Kolo:
const k1 = new Kolo(r);

console.log("Promień: ", r);
// Wywołanie metod instancyjnych z klasy Kolo:
console.log("Pole = ", k1.poleKolo());
console.log("Obwód = ", k1.obwodKolo());