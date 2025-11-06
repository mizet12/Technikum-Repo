/*  NODE.JS BUFFERS

    © Piotr Siewniak, wersja: 12.IV.2022 r.
*/

// Utworzenie bufora o rozmiarze 16 bajtów (oktetów):
const buffer = Buffer.from("Node.js Buffers");

// Wyświetlenie wartości bufora buffer:
console.log("buffer: ", buffer);


// Sprawdzenie, czy zmienna buffer stanowi instancję klasy Buffer:
console.log("Buffer.isBuffer(buffer):", Buffer.isBuffer(buffer));

// Określenie długości zmiennej buffer:
console.log("buffer.length: ", buffer.length);
// Określenie rozmiaru bufora w bajtach:
console.log("buffer.byteLength: ", buffer.byteLength);

