/*  NODE.JS BUFFERS

    © Piotr Siewniak, wersja: 13.IV.2022 r.
*/

// Utworzenie bufora (obiektu) buffer1:
const buffer1 = new Buffer(26);
/* UWAGA
    Zamiast wykorzystania konstruktora Buffer() zalecane jest użycie
    metody Buffer.alloc();
 */

// Zapis danych do bufora buffer1:
for (let i = 0 ; i < 26 ; i++) {
    buffer1[i] = i + 97;
}

// Odczyt danych z bufora buffer1:
for (let item of buffer1) {
    console.log(item);
}
/* UWAGA
    Iterowanie po elementach składowych buffer1 zostało zrealizowane za pomocą pętli for-of JavaScriptu ES6.
 */

// Konwersja bufora buffer1 na łańcuch znaków:
console.log("buffer1.toString() = ", buffer1.toString());

// Utworzenie bufora (obiektu) buffer2:
const buffer2 = Buffer.alloc(26);

// Zapis danych do bufora buffer1:
for (let i = 0 ; i < 26 ; i++) {
    buffer2[i] = i + 65;
}
console.log("buffer2.toString() = ", buffer2.toString());



