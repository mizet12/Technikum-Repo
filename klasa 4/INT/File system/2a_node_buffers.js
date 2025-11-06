/*  NODE.JS BUFFERS

    © Piotr Siewniak, wersja: 13.IV.2022 r.
*/

// Utworzenie bufora o rozmiarze 8 oktetów (bajtów):
const buffer1 = Buffer.alloc(8);

// Zapis danych do zmiennej buffer1 (modyfikacja zawartości buffer1):
buffer1.write("Node.js Buffer");
/* UWAGA
    Należy zwrócić uwagę, że napis "Node.js Buffer" nie mieści się w zmiennej buffer1.
    Rozmiar buffer1 zadeklarowano wcześniej jako argument metody alloc() na 8 bajtów (oktetów).
 */

// Odczyt danych z obiektu buffer1 po konwersji na łańcuch znaków:
console.log("buffer1.toString():", buffer1.toString());


// Zmienna pomocnicza:
const buffer1_dest = Buffer.alloc(8);

// Skopiowanie zawartości bufora do innego bufora:
buffer1.copy(buffer1_dest);
/* UWAGA
    Zmienną źródłową jest buffer1, docelową - buffer1_dest.
 */
console.log("buffer1_dest.toString():", buffer1_dest.toString());


// Przycinanie (okrawanie) bufora:
let bufferSlice = buffer1.slice(
    0, // pozycja początkowa
    4 // pozycja końcowa
);
console.log("bufferSlice.toString():", bufferSlice.toString());


// Zmienne pomocnicze:
const buffer4a = new Buffer('Node'); // stara - zdeprecjonowana metoda tworzenia obiektów
                                     // klasy Buffer
const buffer4b = new Buffer('.');
const buffer4c = new Buffer('js');


// Konkatenacja buforów:
let bufferDest = Buffer.concat([buffer4a, buffer4b, buffer4c]);
console.log("bufferDest.toString():", bufferDest.toString());


// Porównanie buforów:
let result = Buffer.compare(buffer4a, buffer4a);
console.log("Wynik porównania buforów:", result);
/* UWAGA
    Jeśli bufory są takie same, metoda compare() zwraca 0.
    Jeśli bufory są różne, to wynikiem jest:
    1 - jeżeli pierwszy argument jest "wiekszy" od drugiego;
    -1 - w przeciwnym przypadku.
 */
