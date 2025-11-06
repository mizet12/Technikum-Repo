/* NODE.JS
   Moduł querystring. Metoda stringify().

    © Piotr Siewniak, wersja: 29.IV.2022 r.
*/

//const url = require('url');
const querystring = require('querystring');

// Definicja obiektu zapytania URL (URL query) w formacie JSON:
let urlQuery = {
    query1: "studia magisterskie",
    query2: "kierunek",
    query3: ["informatyka", "programowanie"]
};

// Serializacja ciągu zapytania URL:
let query = querystring.stringify(urlQuery);
console.log("query: ", query);
/* UWAGA
    Metoda querystring.strinify() pozwala na wygenerowanie ciągu zapytania URL (URL query string)
    na podstawie obiektu w formacie JSON. Obiekt ten zawiera zestaw par klucz-wartość
    reprezentujących parametry zapytania URL (URL query).
    Operacja polegająca na konwersji obiektu zapytania URL na ciąg zapytania URL nazywana
    jest serializacją (serialization). W czasie serializacji domyślnie używane jest kodowanie UTF-8.

    W ogólności można serializować pojedynczy ciąg lub tablicę ciągów zapytań.
    Metoda zwraca łańcuch znaków - ciąg zapytania URL (URL query string).
 */


