/*  NODE.JS PROMISES
    Tworzenie i obsługa promisów.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicja funkcji pozwalającej na sprawdzenie poprawności wartości boków prostokąta:
function check(b1, b2) {
    // Utworzenie obiektu promisa:
    const promise = new Promise(
        (resolve, reject) => {
            if ((b1 > 0) && (b2 > 0)) { // obietnicę stanowi dodatnia wartość obu boków
                let bok1 = 100 * b1; // długość boku wyrażona w centymetrach (ważne!)
                let bok2 = 100 * b2; // dł. boku wyrażona w cm

                // Przesłanie danych do funkcji obsługi stanu resolved:
                resolve([bok1, bok2]); // dana p
                /* UWAGA
                    Do funkcji obługi promisa można przesłać (zwrócić) tylko jedną wartość -
                    analogicznie jak funkcja, która może zwracać na zewnątrz pojedynczą wartość.
                    Tutaj: długości boków prostokąta (wyrażone w cm) zostały przesłane jako
                    elementy składowe tablicy.
                 */
            }
            else {
                // Przesłanie danej (komunikatu) do funkcji obsługi stanu rejected:
                reject("Uwaga błąd! Nieprawidłowe dane wejściowe!");
            }
        }
    );
    return promise; // funkcja zwraca promisa
}

// Definicje funkcji pomocniczych:
function polePr(b1, b2) {
    return (b1 * b2)
}
function obwodPr(b1, b2) {
    return (2 * b1 + 2 * b2);
}

// Definicja interfejsu wyjścia:
let wyswietlPole = (value) => {
    console.log("Pole wynosi ", value);
}
let wyswietlObwod = (value) => {
    console.log("Obwód wynosi: ", value);
}
let wyswietlBlad = (err) => {
    console.log(err);
}

// Parametry prostokąta:
const a = 1; // długość boku wyrażona w metrach (ważne!)
const b = 2; // dł. boku wyrażona w m
/* UWAGA
    Wykonać testy działania aplikacji dla błędnych danych wejściowych.
 */

// Sprawdzenie poprawności parametrów prostokąta:
const promise = check(a, b);
/* UWAGA
    Zgodnie z definicą, funkcja check() zwraca promisa, czyli:
    a) tablicę złożoną z długości boków prostokąta wyrażonych w cm (dla stanu resolved);
    b) albo komunikat o błędzie (dla stanu rejected);
 */

// Obsługa promisa:
promise
    // Obsługa stanu resolved:
    .then(([bok1, bok2]) => { // do funkcji obsługi dostarczane są parametry prostokąta
    /* UWAGA
        Do funkcji obsługi stanu resolved została przekazana pojedyncza dana - tablica.
     */
        wyswietlPole(
            polePr(bok1, bok2) // argument wywołania funkcji stanowi funkcja zwrotna polePr()
        );
        wyswietlObwod(
            obwodPr(bok1, bok2) // argument wywołania funkcji stanowi funkcja zwrotna obwodPr()
        );
    })
    // Obsługa stanu rejected:
    .catch((message) => {
        wyswietlBlad(message);
    })



