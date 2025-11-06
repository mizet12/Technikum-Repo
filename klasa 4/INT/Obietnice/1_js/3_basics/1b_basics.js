/*  NODE.JS PROMISES
    Tworzenie i obsługa promisów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicje funkcji z promisami:
function polePr(b1, b2) {
    // Utworzenie obiektu promise klasy Promise:
    const promise = new Promise(
        (resolve, reject) => { // funkcja zwrotna w postaci funkcji strzałkowej
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
    console.log("Promis z funkcji polePr(): ", promise);
    return promise; // funkcja zwraca utworzony promis
}
function obwodPr(b1, b2) {
    const promise = new Promise(
        (resolve, reject) => {
            if ((b1 > 0) && (b2 > 0))
                    resolve(2 * b1 + 2 * b2);
                else
                    reject("Błędne parametry prostokąta!");
        }
    );
    console.log("Promis z funkcji obwodPr(): ", promise);
    return promise; // funkcja zwraca utworzony promis
}

// Definicja interfejsu (wyjścia):
let wyswietlPole = (value) => {
    console.log("Pole wynosi ", value);
}
let wyswietlObwod = (value) => {
    console.log("Obwód wynosi ", value);
}
let wyswietlBlad = (message) => {
    console.log(message);
}

// KONSUMPCJA PROMISÓW

// Próba obliczenia pola prostokąta:
polePr(1, 2)
    // Kompleksowa obsługa obu stanów promisa - resolved i rejected:
    .then(
        wyswietlPole, // dla stanu resolved
        wyswietlBlad // dla stanu rejected
    );
/* UWAGA
    Pierwszym argumentem metody then() jest referencja do funkcji wywoływanej w stanie resolved - tutaj:
    do funkcji wyswietlPole(). Wartość spełnionego promisu stanowi pierwszy argument tej funkcji.

    Drugi argument metody then() stanowi referencja do funkcji wywoływanej w stanie rejected - tutaj:
    do funkcji wyswietlBlad(). Analogicznie jak powyżej - pierwszy argument tej funkcji stanowi informacja
    o powodzie niespełnienia obietnicy, np. komunikat o ewentualnym błędzie.
*/

// Próba obliczenia obwodu prostokąta:
let promise = obwodPr(1, -1); // celowo błędne dane wejściowe
/* UWAGA
    Funkcja obwodPr() - zgodnie z jej definicją - zwraca promisa.
 */
console.log("Promis zwrócony przez funkcję obwodPr(): ", promise);

// Obsługa promisa dla obu stanów (resolved i rejected):
promise
    .then(
        wyswietlObwod, // dla stanu resolved
        wyswietlBlad // dla stanu rejected
    );

