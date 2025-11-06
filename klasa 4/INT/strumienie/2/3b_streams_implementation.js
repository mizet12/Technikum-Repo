/*  NODE.JS STREAMS
    Implementacja strumieni: odczytywalnego i zapisywalnego.

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

// Dołączenie interfejsu konstruktorów Readable i Writeable:
const {Readable} = require('stream');
const {Writable} = require('stream');

// Dane:
const userData = 1;

// Utworzenie strumienia "do odczytu":
const rStream = new Readable({
    read() {}
});
// Utworzenie strumienia "do zapisu":
const wStream = new Writable();

// Implementacja metody wewnętrznej _write():
wStream._write = (chunk,        // porcja danych
                  encoding,     // system kodowania
                  next) => {    // następna porcja danych
    console.log("Dane: ", chunk.toString());
    next();
}
// Przesłanie porcji danych ze źródła (rStream) do celu (wStream):
rStream.pipe(wStream);

// "Popchnięcie" danych w buforze wewnętrznym strumienia:
rStream.push(userData.toString());

// Rejestracja funkcji obsługi zdarzenia 'close' strumienia "do odczytu":
rStream.on('close', () =>
    wStream.end()
    /* UWAGA
        Wywołanie metody end() w funkcji obsługi zdarzenia 'close' strumienia odczytywalnego
        jest konieczne, aby zapewnić żeby wszystkie porcje danych zostały odczytane
        i przekazane do celu - przed zamknięciem strumienia.
     */
);
// Rejestracja funkcji obsługi zdarzenia 'close' strumienia "do zapisu":
wStream.on('close', () =>
    console.log('Koniec zapisu danych ...')
);

rStream.destroy();
/* UWAGA
    Wywołanie metody destroy() spowoduje wyemitowanie zdarzenia 'close'
    skojarzonego ze strumieniem rStream.
 */
