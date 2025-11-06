/*  NODE.JS STREAMS
    Implementacja strumieni: odczytywalnego i zapisywalnego.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/
const str = require('stream');

const userData = 1;

// Utworzenie strumienia "do odczytu":
const rStream = new str.Readable({
    read() {}
    /* UWAGA
        Strumień "odczytywalny" przechowuje dane (informacje) w wewnętrznym buforze.
        Funkcja read() odczytuje z niego porcję danych i zwraca ją na zewnątrz.
        W przypadku, jeśli nie pozostało już nic do odczytu, wówczas read() zwraca wartość null.
     */
});
// Utworzenie strumienia "do zapisu":
const wStream = new str.Writable();

// Implementacja metody "wewnętrznej" _write() strumienia wStream:
wStream._write = (chunk,        // porcja danych
                  encoding,     // system kodowania
                  next) => {    // następna porcja danych
    console.log("Dane zapisane: ", chunk.toString());

    next();
}
/* UWAGA
    Metoda _write() należy do wewnętrznego interfejsu strumienia. Tym samym, nie może ona
    zostać wywołana bezpośrednio przez użytkownika (czyli konsumenta) strumienia.
    Metoda ta będzie wywoływana przez sam strumień zapisywalny za każdym razem,
    gdy dane będą zapisywane w bloku pamięci skojarzonym ze strumieniem.
 */

// Przesłanie porcji danych ze źródła (rStream) do celu (wStream):
rStream.pipe(wStream);

// "Popchnięcie" danych w buforze wewnętrznym strumienia:
rStream.push(userData.toString());

// Rejestracja funkcji obsługi (listenera) zdarzenia 'readable':
rStream.on('readable', () => {
/* UWAGA
    Zdarzenie 'readable' jest zgłaszane (emitowane) jeśli istnieje MOŻLIWOŚĆ
    odczytu porcji danych ze strumienia.
 */
    // Odczyt danych z wewnętrznego bufora:
    let chunk = rStream.read();
    console.log("Dane odczytane: ", chunk.toString());
})
