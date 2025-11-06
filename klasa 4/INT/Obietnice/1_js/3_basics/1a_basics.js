/*  NODE.JS PROMISES
    Tworzenie i obsługa promisów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicje funkcji z promisami:
function polePr(b1, b2) {
    // Utworzenie obiektu promise klasy Promise:
    const promise = new Promise(
    /* UWAGA
        Konstruktor Promise() posiada argument funkcyjny (funkcję zwrotną)
        w postaci funkcji strzałkowej.
     */
        (resolve, reject) => {
        /* UWAGA
            Funkcja strzałkowa ma dwa argumenty funkcyjne: resolve i reject,
            reprezentujące stany (odpowiednio): resolved i rejected, promisa.
         */
            if ((b1 > 0) && (b2 > 0)) // obietnicę stanowi dodatnia wartość obu boków prostokąta
                // Przesłanie wyniku do funkcji obsługi then():
                resolve(b1 * b2);
            else
                // Przesłanie wyniku do funkcji obsługi then(), jeśli obietnica została odrzucona:
                reject("Uwaga błąd! Nieprawidłowe parametry prostokąta!");
        }
    );
    // Wyświetlenie zawartości promisu w celach pomocniczych:
    console.log("Promis z funkcji polePr(): ", promise);
    return promise; // funkcja zwraca utworzony promis
}
function obwodPr(b1, b2) {
    const promise = new Promise(
        (resolve, reject) => {
            if ((b1 > 0) && (b2 > 0)) // jesli obietnica jest spełniona
                    resolve(2 * b1 + 2 * b2);
                else
                    reject("Uwaga błąd! Nieprawidłowe parametry prostokąta!");
        }
    );
    console.log("Promis z funkcji obwodPr(): ", promise);
    return promise; // funkcja zwraca utworzony promis
}
/* UWAGA
    Funkcje polePr() i obwodPr() zwracają obiekty należące do klasy Promise.
    Obiekty te przechowują stan:
        a) albo resolved (obietnica spełniona);
        b) albo rejected (obietnica niespełniona).
    Obietnicę stanowi spełnienie warunku: ((b1 > 0) && (b2 > 0)) .

    W stanie resolved obiekt zawiera obiecaną wartość (wartośc pola lub obwodu).
    W stanie rejected obiekt zawiera informację o powodzie niespełnienia (odrzucenia) obietnicy.
*/

// Obsługa interfejsu (wyjścia):
let wyswietlPole = (value) => {
    console.log("Pole wynosi " + value);
}
let wyswietlObwod = (value) => {
    console.log("Obwód wynosi " + value);
}
let wyswietlBlad = (message) => {
    console.log(message);
}

// KONSUMPCJA PROMISÓW
// Próba obliczenia pola prostokąta:
polePr(1, 2)
    // Obsługa stanu resolved:
    .then((data) => {
    /* UWAGA
        Dla spełnionej obietnicy do funkcji obsługi jest przekazywana wartość promisa.
        Tutaj: obietnica jest spełniona ponieważ oba boki mają wartości większe od zera.
     */
        console.log("Pole wynosi ", data);
    })
    // Obsługa stanu rejected:
    .catch((message) =>{
        console.log(message);
    });

// Próba obliczenia obwodu prostokąta:
obwodPr(1, -1)
    // Obsługa stanu resolved:
    .then((data) => {
        /* UWAGA
            Dla spełnionej obietnicy do funkcji obsługi jest przekazywana wartość promisa.
            Tutaj: obietnica nie jest spełniona ponieważ drugi bok ma wartość ujemną.
         */
        console.log("Obwód wynosi ", data);
    })
    // Obsługa stanu rejected:
    .catch((message) =>{
        console.log(message);
    });
