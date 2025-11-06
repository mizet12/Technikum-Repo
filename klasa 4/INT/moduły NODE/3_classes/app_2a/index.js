
// Dołączenie do aplikacji zasobów publicznych modułu pracownik:
const f = require('./custom_modules/pracownik');

// Wyswietlenie zawartości obiektu zwróconego przez funkcję require():
console.log("f = ", f);

let argImie = 5; // celowo błędna wartość (liczba zamiast łańcucha znaków)
let argNazwisko = "Siewniak";

// Utworzenie klasy Pracownik na podstawie klasy f.Pracownik:
const Pracownik = f.Pracownik;

// Utworzenie obiektu pracownik, jako instancji klasy Pracownik:
let pracownik = new Pracownik(argImie, argNazwisko);

// Wyświetlenie danych pracownika:
console.log("Imię i nazwisko pracownika: ", pracownik.imie, pracownik.nazwisko);

// Modyfikacja wartości właściwości imie:
pracownik.imie = "Piotr";
console.log("Imię i nazwisko pracownika: ", pracownik.imie, pracownik.nazwisko);