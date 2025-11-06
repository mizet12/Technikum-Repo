/*  NODE.JS BUFFERS

    © Piotr Siewniak, wersja: 13.IV.2022 r.
*/

// Utworzenie bufora (obiektu) buffer na podstawie ciągu znaków UTF-8:
const buffer = Buffer.from("ABCDEFGHIJKLMNOPRSTUVWXYZ");

// Wyświetlenie tablic zawierających indeks i kod elementu składowego bufora:
for (item of buffer.entries()) {
    console.log(item);
}

// Sprawdzenie, czy bufor zawiera zadany łańcuch znaków:
console.log("buffer.includes('M'):", buffer.includes('M'));


// Wypełnienie bufora znakiem '0':
buffer.fill('0');
console.log("buffer.toString():", buffer.toString())



