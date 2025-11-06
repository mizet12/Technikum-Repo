/*  JAVASCRIPT.
    Kod synchroniczny (synchronous code).
    Funkcje zwrotne (callback functions).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

// Funkcja pomocnicza:
function ocenaRound(ocenaSrednia) {
    return Math.round(ocenaSrednia); // zaokrąglenie do liczby całkowitej
}
// Funkcja pomocnicza:
function ocenaCeil(ocenaSrednia) {
    return Math.ceil(ocenaSrednia);
    /* UWAGA
        Funkcja ceil() pozwala na zaokrąglenie liczby w górę do najbliższej liczby całkowitej.
     */
}
// Funkcja pomocnicza:
function ocenaFloor(ocenaSrednia) {
    return Math.floor(ocenaSrednia);
    /* UWAGA
        Funkcja floor() pozwala na zaokrąglenie liczby w w dół do najbliższej liczby całkowitej.
     */
}
// Definicja funkcji z parametrem funkcyjnym (callback):
function wykazOcenSemestralnych(tablicaOcenSrednich, callback) {
    let tablicaOcenPelnych = [];
    for (i = 0; i < 4; i++) {
        tablicaOcenPelnych[i] = callback(tablicaOcenSrednich[i]);
    }
    return tablicaOcenPelnych;
}
/* UWAGA
    Parametr callback funkcji wykazOcenSemestralnych() stanowi funkcja zwrotna.
 */

// Dane wejściowe (wyliczone oceny średnie z cztechech przedmiotów):
const tablicaOcenSrednich = [2.1, 3.6, 3, 4.5];

// Wywołanie funkcji wykazOcenSemestralnych() z argumentem, który stanowi funkcja ocenaRound():
console.log(wykazOcenSemestralnych(tablicaOcenSrednich, ocenaRound));
// Wywołanie funkcji wykazOcenSemestralnych z argumentem, który stanowi funkcja ocenaCeil():
console.log(wykazOcenSemestralnych(tablicaOcenSrednich, ocenaCeil));
// Wywołanie funkcji wykazOcenSemestralnych z argumentem, który stanowi funkcja ocenaFloor():
console.log(wykazOcenSemestralnych(tablicaOcenSrednich, ocenaFloor));

/* UWAGA
    Funkcja nadrzędna wykazOcenSemestralnych() została wywołana trzykrotnie - za każdym razem
    z innym argumentem funkcyjnym.
    Tym samym, funkcje ocenaRound(), ocenaCeil() i ocenaFloor() pełnią rolę funkcji wywołań
    zwrotnych (callbacks) względem funkcji wykazOcenSemestralnych().
 */