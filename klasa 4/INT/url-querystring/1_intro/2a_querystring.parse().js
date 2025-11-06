/* NODE.JS
   Moduł url. Metoda parse().

    © Piotr Siewniak, wersja: 29.IV.2022 r.
*/
const url = require('url');
const querystring = require('querystring');
/* UWAGA
    Moduł querystring zawiera metody pozwalające na konwersję ciągu zapytania URL (URL query string)
    na obiekt JSON i odwrotnie.
 */

// Lańcuch URL z ciągiem zapytania:
const urlString = 'https://www.google.com/search?q1=studia&q2=kierunek&q3=informatyka&q3=programowanie';

// Parsowanie łańcucha URL za pomocą metody url.parse():
const parsedUrl = url.parse(urlString);
/* UWAGA
    Metoda url.parse() zwraca obiekt url, w którym właściwości odpowiadają poszczególnym
    częściom składowym adresu URL.
 */
console.log("parsedUrl.query: ", parsedUrl.query);


// Parsowanie ciągu zapytania w adresie URL za pomocą metody querystring.parse():
let parsedQuery = querystring.parse(parsedUrl.query);
/* UWAGA
    Metoda querystring.parse() pozwala na parsowanie ciągu zapytania URL (URL query string)
    na obiekt zawierający zestaw par klucz-wartość (key-value pairs) zapytania URL (URL query).
 */
console.log("parsedQuery: ", parsedQuery);
// Prezentacja poszczególnych składników zapytania:
console.log("parsedQuery.q1: ", parsedQuery.q1);
console.log("parsedQuery.q2: ", parsedQuery.q2);
console.log("parsedQuery.q3: ", parsedQuery.q3);
