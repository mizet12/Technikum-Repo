/* NODE.JS - moduł url: Legacy API.
   Metoda url.parse().

   © Piotr Siewniak, wersja: 28.VI.2022 r.
*/

/* UWAGA
    Przed wykonaniem aplikacji należy najpierw zainstalować moduł url.
 */

// Dołączenie zasobów publicznych modułu url:
const url = require('url');
/* UWAGA
    Moduł (interfejs) url pozwala na analizę i przetwarzanie (np. konstruowanie) adresów URL.
 */

/* UWAGA
    Metoda url.parse() pozwala na analizę adresu URL w postaci łańcucha (URL string).

    Wykorzystanie metody url.parse() - czyli obiektu utworzonego przy jej wykorzystaniu -
    wymaga wcześniejszego zainstalowania modułu url.
    W przypadku tworzenia obiektu url za pomocą konstruktora URL (metody URL()), instalacja
    modułu url nie jest wymagana.
 */

// Zmienna pomocnicza:
let urlString = 'https://www.google.com/search?q=studia+kierunek+informatyka';

// Parsowanie łańcucha URL:
let parsedUrl = url.parse(urlString, false);
/* UWAGA
   Metoda url.parse() pozwala na parsowanie (analizę) łańcucha URL (URL string).
   Metoda ta zwraca obiekt url, w którym każdą część adresu stanowi właściwość opisująca adres URL.

   Jeżeli drugi argument jest ustawionty na false (domyślnie - czyli można go pominąć),
   wówczas właściwość query obiektu url stanowi niesparsowany (nieprzeanalizowany),
   niezdekodowany łańcuch znaków.
 */

// Prezentacja wybranych właściwości obiektu url:
console.log("protocol: ", parsedUrl.protocol);
console.log("host: ", parsedUrl.host);
console.log("search: ", parsedUrl.search);
console.log("unparsed (uncoded) query object: ", parsedUrl.query);



parsedUrl = url.parse(urlString, true);
console.log("query object (parsed): ", parsedUrl.query);
console.log("parsed query string: ", parsedUrl.query.q);
/* UWAGA
    Jeśli drugi argument metody url.parse() jest ustawiony na true, wówczas właściwość query stanowi obiekt,
    który jest identyczny z obiektem wynikowym wywołania metody parse() z modułu querystring:
    // Parsowanie wyłącznie ciągu/łańcucha zapytania (query string):
    let parsedQueryString = querystring.parse(parsedUrl.query);
    // console.log("parsedQueryString: ", parsedQueryString);
    console.log("parsedQueryString.q: ", parsedQueryString.q);
 */



