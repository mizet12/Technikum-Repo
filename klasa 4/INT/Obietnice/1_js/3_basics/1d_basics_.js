/*  NODE.JS PROMISES
    Tworzenie i obsługa promisów. Lańcuch promisów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

function check(bok) {
    const promise = new Promise((resolve, reject) => {
        if (bok > 0)
            resolve(bok);
        else
            reject("Uwaga! Błędny parametr prostokąta!");
    });

    return promise; // funkcja zwraca promisa
}
/* UWAGA
    Zadaniem funkcji check() jest sprawdzenie poprawności pojedynczej danej -
    długości boku prostokąta.
 */

// Definicje funkcji pomocniczych:
function polePr(b1, b2) {
    return (b1 * b2)
}
function obwodPr(b1, b2) {
    return (2 * b1 + 2 * b2);
}

// Obsługa wyjścia:
let wyswietlPole = (value) => {
    console.log("Pole wynosi " + value);
}
let wyswietlObwod = (value) => {
    console.log("Obwód wynosi " + value);
}
let wyswietlBlad = (err) => {
    console.log(err);
}

// Parametry prostokąta:
let bok1 = 0;
let bok2 = 2;
/* UWAGA
    Wykonać testy działania aplikacji dla błędnych danych wejściowych.
 */

// Utworzenie i obsługa łańcucha promisów (promis chain):
const promise1 = check(bok1);
promise1
    .then(
        () => {
            const promise2 = check(bok2);
            return promise2;
        }
    )
    .then(
        () => { // funkcja zwrotna w przypadku sukcesu (resolved)
            wyswietlPole(polePr(bok1, bok2));
            wyswietlObwod(obwodPr(bok1, bok2));
        },
        wyswietlBlad // funkcja zwrotna w przypadku porażki (rejected)
);
/* UWAGA
    Metoda then() zwraca (spełnionego) promisa. Dlatego też, promisy można łączyć w łańcuch.
    Jest to wygodne, ponieważ w ten sposób można uniknąć problemów związanych
    prawidłowym (i skutecznym) zaprojektowaniem struktury wywołań zwrotnych.
 */
