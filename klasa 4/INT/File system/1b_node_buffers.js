/*  NODE.JS BUFFERS

    © Piotr Siewniak, wersja: 12.IV.2022 r.
*/

// Utworzenie bufora o rozmiarze 16 bajtów (oktetów):
const buffer = Buffer.alloc(16);
const stringData = "Node.js Buffers";
buffer.write(
    stringData, // zapisywany łańcuch znaków
    0, // pozycja początkowa (0 - domyślnie)
    4, // liczba zapisywanych bajtów
    'utf8' // system kodowania znaków
);
console.log("buffer: ", buffer);
let dataString = buffer.toString();
console.log("dataString: ", dataString);
let dataJSON = buffer.toJSON();
console.log("dataJSON: ", dataJSON);

