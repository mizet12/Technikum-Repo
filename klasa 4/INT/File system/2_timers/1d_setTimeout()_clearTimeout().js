/*  NODE.JS GLOBAL OBJECTS
    Funkcje setTimeout() i clearTimeout().

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/

// Wywołanie funkcji globalnej setTimeout():
const timer = setTimeout(
    () => { // definicja funkcji zwrotnej
            console.log( "Wywołanie funkcji wywołania zwrotnego ...");
    },
    1000 // opóźnienie w ms
);

// Zatrzymanie timera uruchomionego za pomocą funkcji setTimeout():
clearTimeout(timer);
/* UWAGA
    Metoda clearTimeout() ma za zadanie zatrzymanie timera utworzonego za pomocą setTimeout().
    Tym samym, funkcja zwrotna stanowiąca pierwszy argument setTimeout() nie zostanie tutaj
    w ogóle wykonana.

    W ogólności, zadaniem metody clearInterval() jest wyczyszczenie timera (licznika czasu)
    ustawionego wcześniej za pomocą metody setInterval().
 */
console.log("Instrucja synchroniczna w ostatniej linii programu ...");


