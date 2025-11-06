/*  NODE.JS PROMISES
    Tworzenie i obsługa promisów.
    Obsługa błędów w danych wejściowych.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

function check(b1, b2) {
    // Utworzenie promisa:
    const promise = new Promise((resolve, reject) => {
        if ((b1 > 0) && (b2 > 0)) {
            let bok1 = 100 * b1; // długość boku wyrażona w centymetrach (ważne!)
            let bok2 = 100 * b2; // dł. boku wyrażona w cm
            // Przekazanie danej do funkcji obsługi stanu resolved:
            resolve([bok1, bok2]);
        }
        else {
            // Utworzenie obiektu błędu:
            const err = new Error();

            // Charakterystyka (opis) błędu:
            if (b1 <= 0) {
                err.message = "Uwaga błąd! Nieprawidłowa długość pierwszego boku!";
                err.code = -1;
            }
            if (b2 <= 0) {
                err.message = "Uwaga błąd! Nieprawidłowa długość drugiego boku!";
                err.code = -2;
            }
            if ((b1 <= 0) && (b2 <= 0)) {
                err.message = "Uwaga błąd! Nieprawidłowe długości obu boków!";
                err.code = -3;
            }
            /* UWAGA
                Zdefiniowany obiekt err pozwala na kompleksową obsługę błędnych
                danych (parametrów) prostokąta.
             */

            // Przekazanie danej (błędu) do funkcji obsługi stanu rejected:
            reject(err);
        }
    });
    return promise; // funkcja check zwraca do otoczenia zdefiniowanego promisa
}

// Definicje funkcji pomocniczych:
function polePr(b1, b2) {
    return (b1 * b2)
}
function obwodPr(b1, b2) {
    return (2 * b1 + 2 * b2);
}

// Obsługa wyjścia:
let wyswietlWynik = (info, value) => {
    console.log(info + " wynosi " + value);
    /* UWAGA
        Parametr info reprezentuje albo łańcuch "Pole" , albo "Obwód".
     */
}
let wyswietlBlad = (err) => {
    console.log(err.message);
    console.log("Kod błędu: ", err.code)
}

// Parametry prostokąta:
const a = 0; // długość boku wyrażona w metrach (ważne!)
const b = 2; // dł. boku wyrażona w m
/* UWAGA
    Wykonać testy działania aplikacji dla różnych (a w tym błędnych) danych wejściowych.
 */


// Utworzenie i obsługa promisa:
check(a, b)
    // Obsługa stanu resolved:
    .then(
        ([a, b]) => { // do funkcji obsługi przekazywana jast tablica
            wyswietlWynik("Pole", polePr(a, b));
            wyswietlWynik("Obwód", obwodPr(a, b));
        }
    )
    // Obsługa stanu rejected:
    .catch(
        (err) => { // do funkcji obsługi przekazywany jest obiekt błędu
            wyswietlBlad(err);
        }
    );


