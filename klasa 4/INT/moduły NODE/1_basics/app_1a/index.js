/* NODE.JS MODULES
    Moduły lokalne (local modules).

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/


/* UWAGA
    Moduł w Node odpowiada bibliotece w JS.
    Moduły lokalne są pisane przez programistę/grupę programistów.
    Zazwyczaj zawierają one zestaw funkcji, które można dołączyć (zaimportować) do aplikacji Node.
    Oprócz funkcji moduły mogą zawierać klasy, obiekty, zmienne, stałe itd.
 */

// Dałączenie do aplikacji modułów lokalnych zdefiniowanych przez programistę:
const variables = require('./local_modules/variables');
/* UWAGA
    Zmienna variables stanowi obiekt, którego właściwości reprezentują zmienne
    zdefiniowane w module variables i wyeksportowane.
 */
const functions = require('./local_modules/functions');
/* UWAGA
    Zmienna functions stanowi obiekt, którego właściwości odpowiadają funkcjom
    zdefiniowanym w module functions i wyeksportowane.
 */


/* UWAGA
    Dołączenie modułów lokalnych jest realizowane przy wykorzystaniu funkcji wbudowanej
    (built-in function) require().
    Tutaj:
    dołączono dwa moduły: varables i functions, zapisane w katalogu local_modules.
    Dostęp dop zasobów tych modułów można uzyskać za pośrednictwem obiektów, odpowiednio:
    variables i functions.
 */

// Wykorzystanie obiektu variables:
console.log("variables =", variables);

// Odwołanie się do elementów składowych obiektu variables:
console.log("stringConst =", variables.stringConst);
console.log("numberConst =", variables.numberConst);

variables.stringLet = "Maciej";
variables.numberLet = 100;
console.log("stringLet =", variables.stringLet);
console.log("numberLet =", variables.numberLet);

// ==========================================

// Wykorzystanie obiektu functions:
console.log("functions =", functions);
// Wywołanie metod obiektu functions:
functions.f1();
functions.f2();
// ==========================================