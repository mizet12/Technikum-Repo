/*  NODE.JS PROMISES
    Przepływ sterowania (control flow) w programie z promisem.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

/* UWAGA
    Promise stanowi obiekt - funkcję, która obiecuje, że dostarczy (zwróci) określoną wartość
    w późniejszym czasie. Obietnica ta zostaje w przyszłości spełniona lub nie,
    co jest implementowane za pomocą obiektu należącego do klasy Promise.
 */

// Zmienna pomocnicza:
let done = true; // jeśli jakiś warunek został spełniony (true), np. aplikacja uzyskała już żądany zasób z serwera
/* UWAGA
    Wartość false może z kolei oznaczać, że aplikacja wciąż czeka na odpowiedź serwera zawierającą
    żądany zasób (np. zdjęcie).
 */

// Utworzenie promisa:
const promise = new Promise(
    (resolve, reject) => {     // funkcja typu callback
    /* UWAGA
        Argumentem konstruktora Promise() jest funkcja zwrotna (callback).
        Funkcję tę nazywa się czasem egzekutorem (executor).

        Omawiana funkcja ma z kolei dwa argumenty: resolve i reject, które również stanowią
        funkcje typu callback. Funkcja resolve reprezentuje stan resolved promisa, a reject -
        stan rejected.
     */
        // Wywołanie funkcji asynchronicznej:
        setTimeout(
            () => { // pierwszym argumentem setTimeout() jest funkcja typu callback
                if (done === true) {  // jeśli obietnica została spełniona
                    // Przekazanie danych do funkcji obsługi promisu then():
                    resolve({   przedmiot: 'język polski',
                                ocena: 3
                    });
                    /* UWAGA
                        Funkcje resolve() i reject() mają zawsze jeden argument należący
                        do typu string, number, boolean, array lub object.
                     */
                } else {
                    // Przekazanie danych do funkcji obsługi catch():
                    reject(new Error("Uwaga! Wystąpił błąd!"));
                }
            },
            2000 // drugi argument setTimeout() - opóźnienie w ms
        );
    });
/* UWAGA
    Argumentem wywołania konstruktora Promise() jest funkcja typu callback.
    Funkcja ta jest wywoływana natychmiast po utworzeniu promisu (obiektu promise).
    Argumentami wspomnianej powyżej funkcji callback jest referencja do funkcji resolve()
    i referencja do funkcji reject().

    Promis jest rozwiązywany (resolved) poprzez wywołanie funkcji resolve().
    Dzieje się tak wówczas, gdy obietnica została spełniona (tutaj: zmienna done wynosi true).
    W przeciwnym przypadku (done wynosi false) wywoływana jest funkcja reject() -
    obietnica nie została spełniona.
 */

// Obsługa (konsumpcja) promisu za pomocą metod then() i catch():
promise
    // Obsługa stanu resolved:
    .then((data) => {
        console.log(data);
    })
    // Obsługa stanu rejected:
    .catch((error) => {
        console.log(error);
    });

console.log(promise);
console.log("Komunikat kontrolny z instrukcji w ostatniej linii kodu programu ...");

/* UWAGA
    Wyniki działania programu po upływie czasu 2 s:

    Promise { <pending> }
    Komunikat kontrolny w ostatniej linii kodu programu ...
    { przedmiot: 'język polski', ocena: 3 }
 */

/* PYTANIA KONTROLNE
    1) Co oznacza komunikat "Promise { <pending> }" ?
    2) Dlaczego dane { przedmiot: 'język polski', ocena: 3 } zostały wyświetlone po komunikacie
       "Komunikat kontrolny z instrukcji w ostatniej linii kodu programu ..." ?
 */


