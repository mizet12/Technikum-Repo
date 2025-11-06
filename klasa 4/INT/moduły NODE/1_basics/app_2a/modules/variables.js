/* NODE.JS MODULES
    Moduły lokalne zdefiniowane przez programistę.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Deklaracja i inicjalizacja zmiennych:
const napis1 = "Napis 1";
const napis2 = "Napis 2";
/* UWAGA
    Zmiana wartości zmiennych napis1 i napis2 nie jest możliwa, ponieważ mają one status read-only.
    Jednakże, jeśli te zmienne stanowiłyby właściwości obiektu, wówczas zmiana ich wartości byłaby możliwa.
 */

// Eksport zmiennych napis1 i napis2, jako właściwości:
module.exports.napis1 = napis1;
module.exports.napis2 = napis2;
/* UWAGA
    Eksportowane zmienne zostają zapisane we właściwości exports obiektu module.
 */

