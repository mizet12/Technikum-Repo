/*  NODE.JS STREAMS
    Popychanie (pushing) danych w strumieniu.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

// Dołączenie interfejsów konstruktorów strumieni:
const {Readable} = require('stream');
const {Writable} = require('stream');

// Określenie danych:
let userData1 = 'Jan';
let userData2 = 'Kowalski';

// Utworzenie strumienia do odczytu:
const rStream = new Readable({
    // Odczyt porcji danych z wewnętrznego bufora:
    read() {}
    /* UWAGA
        Jeśli nie ma już więcej danych do pobrania, to read() zwraca null.
     */
});

// "Popychanie" danych do konsumpcji (przetworzenia):
rStream.push(userData1);
rStream.push(' ');
rStream.push(userData2);
rStream.push(null);
/* UWAGA
    Popchnięcie null oznacza, że nie ma więcej danych w strumieniu do odczytu.
 */

// Przesłanie strumienia rStream do strumienia zapisywalnego process.stdout:
rStream.pipe(process.stdout);

/* UWAGA
    W przykładzie powyżej wszytskie dane najpierw zostały popychane w strumieniu rStream,
    a dopiero potem przesłane na standardowe wyjście.
 */
