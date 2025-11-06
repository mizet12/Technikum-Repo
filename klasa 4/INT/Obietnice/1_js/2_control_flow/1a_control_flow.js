/*  NODE.JS PROMISES
    Przepływ sterowania (control flow) w programie z callbeck'ami.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

/* UWAGA
    Aplikacje Javascript (i Node) są jednowątkowe (single-threaded). Oznacza to, że wszystko
    (np. osbługa zdarzeń) jest realizowane w tym samym - jednym wątku (procesie).
    Jeśli wątek jest zajęty wykonywaniem jakiegoś złożonego - długotrwałego zadania,
    wówczas aplikacja może bardzo spowolnić swoje działanie, czyli może mieć problemy
    z wydajnością. Problem ten można rozwiązać stosując np. callbacki oraz promisy (promises).
 */

function message() {
    console.log('Komunikat pochodzący z funkcji message() ...');
}

setTimeout(
    message, // parametr funkcyjny przekazany przez wartość (funkcja callback)
    1000); // opóźnienie w ms
/* UWAGA
    Wywołanie funkcji setTimeout() powyżej spowoduje wykonanie funkcji message() -
    która stanowi funkcję zwrotną (callback) - z opóźnieniem 1000 ms.

    W przypadku wykonywania kodu asynchronicznego (tutaj: funkcji setTimeout()) zasada jest taka,
    że funkcja callback zostanie wykonana dopiero wtedy, gdy jej funkcja nadrzędna (caller) -
    tutaj: setTimeout() - zakończy swoje działanie.
    W tym przypadku, wątek (proces) jest blokowany 1000 ms bezproduktywnie.
 */

 console.log("Komunikat kontrolny w ostatniej linii kodu programu ...");
/* UWAGA
    Wynik działania programu po upływie 1 s:

    Komunikat kontrolny w ostatniej linii kodu programu ...
    Komunikat pochodzący z funkcji message() ...
 */

 /* UWAGA
    Pytanie kontrolne:
    - dlaczego sekwencja wykonania operacji różni się od sekwencji instrukcji w kodzie źródłowym?
 */