/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport funkcji.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie zasobów modułu module_a i zapisanie ich w obiekcie fa:
const fa = require('./custom_modules/module_a');
console.log("fa = ", fa);

// Dołączenie zasobów modułu module_b i zapisanie ich w obiekcie fb:
const fb = require('./custom_modules/module_b');
console.log("fb = ", fb);

// Wywołanie funkcji, stanowiących zasoby publiczne dołączonych modułów:
fa.test("Komunikat z funkcji test()");
console.log();
fb.test1("Komunikat z funkcji test1()");
fb.test2("Komunikat z funkcji test2()");
fb.test3("Komunikat z funkcji test3()");
fb.test4("Komunikat z funkcji test4()");
fb.test5("Komunikat z funkcji test5()");

/* UWAGA
    Wykorzystane funkcje stanowią właściwości obiektów fa (funkcja test())
    oraz fb (od test1() do test5()).
 */

