/*  NODE.JS STREAMS
    Odczyt strumienia w trybie płynnym (floatable mode).

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

const fs = require("fs");
const path = require('path');

// Pełna ścieżka dostępu do pliku:
const filePath = __dirname + '/files/dane1.txt';

/* UWAGA
    Przetwarzanie strumieni "do odczytu" (readable) może być realizowane na dwa sposoby:
    1) w trybie płynnym (pływającym) (floatable/flowing mode);
    2) w trybie wstrzymania (paused mode).
    Strumienie odczytywalne są domyślnie uruchamiane w  trybie wstrzymania.

    W trybie płynnym dane są automatycznie pobierane z systemu bazowego i przekazywane
    do aplikacji w sposób niejawny ("po cichu") - tak szybko, jak to możliwe.
    Przełączenie z trybu domyyślnego na tryb wstrzymania może zostać zrealizowane poprzez
    dołączenie listenera zdarzenia 'data' - jak tutaj.

    W tym trybie wykorzystuje się mechanizm obsługi zdarzeń skojarzonych ze strumieniem
    przy wykorzystaniu interfejsu klasy EventEmitter.

    W trybie wstrzymania odczyt porcji danych (data chunks) realizuje się za pomocą metody read(),
    która jest wywoływana w sposób jawny.

    Tutaj: odczyt strumienia odbywa się w trybie płynnym.
 */


// Określenie danych:
let data = '';

// Utworzenie strumienia "do odczytu":
const rStream = fs.createReadStream(filePath);

// Ustalenie sposobu kodowania znaków w strumieniu:
rStream.setEncoding('UTF8');

// Rejestracja funkcji obsługi zdarzenia 'data' skojarzonego ze strumieniem rStream:
rStream.on('data', (chunk) => {
    data += chunk;
});
/* UWAGA
    Zdarzenia 'data' jest obsługiwane przez listenera, który jest zdefiniowany jako
    funkcja zwrotna (callback). Jeśli porcja danych jest dostępna, wówczas zdarzenie
    jest zgłaszane (emitowane) - a funkcja obsługi (listener) wykonywana.
    Porcja danych jest każdorazowo odczytywana, a następnie przekazywana do funkcji zwrotnej.

    Biorąc pod uwagę powyższe, odczyt i przetwarzanie danych są realizowane w sposób płynny
    - kawałek po kawałku, aż zabranie danych do odczytu.

    Skojarzenie listenera ze zdarzeniem 'data' powoduje automatyczne przełączenie trybu
    strumienia odczytywanlnego rStream na tryb płynny.
 */

// Rejestracja funkcji obsługi zdarzenia 'end' skojarzonego ze strumieniem rStream:
rStream.on('end', () => {
    console.log("Dane: ", data);
});
/* UWAGA
    Zdarzenie 'end' jest zgłaszane, jeśli nie ma już żadnych danych w strumieniu rStream
    do "skonsumowania".
 */

// Rejestracja funkcji obsługi zdarzenia 'error' skojarzonego ze strumieniem rStream:
rStream.on('error', (err) => {
    console.log("Uwaga błąd!", err.message);
});
/* UWAGA
    Zdarzenie 'error' jest zgłaszane w przypadku wystąpienia błędu.
 */


