/*  NODE.JS STREAMS
    Strumień do odczytu - "odczytywalny" (readable stream).
    Zdarzenia strumieni do odczytu (eadable stream events).

    © Piotr Siewniak, wersja: 30.XI.2021 r.
*/

/* UWAGA
    Strumienie są jedną z ważnych koncepcji programowania w Node.
    Strumienie stanowią kolekcję danych (data collection).

    Strumień można porównać do tablicy lub łańcucha znaków. Najważniejsza różnica pomiędzy nimi
    polega na tym, że w danej chwili strumień nie musi być dostępny oraz że nie musi się on
    zmieścić w całości w pamięci.
    Biorąc pod uwagę powyższe, strumienie mogą być wykorzystywane do przetwarzania dużych ilości danych,
    a w tym - danych pochodzących ze żródeł zewnętrznych (np. z sieci) odczytywanych porcjami
    (kawałek po kawałku).

    Np. w przypadku odczytu zawartości pliku bez udziału strumieni, zawartość ta jest odczytywana
    od początku do końca pliku, umieszczana w pamięci operacyjnej, a dopiero potem przetwarzana.
    Może to powodować nadmierne obciążenie pamięci operacyjnej oraz spowolnienie działania programu.

    Alternatywnie, plik odczytywany przy użyciu strumieni jest czytany porcjami - kawałek po kawałku -
    i na bieżąco przetwarzany. Ma to korzystny wpływ na obciążenie pamięci i szybkość działania programu.
    Można rozpocząć przetwarzanie porcji danych, zamiast czekać aż wszystkie dane będą gotowe
    (wczytane/zapisane itp.).

    Strumienie wykorzystuje się najczęściej do odczytu/zapisu z/do pliku oraz komunikacji sieciowej.

    W praktyce najczęćciej wykorzystuje się dwa rodzaje strumieni:
    1) readable (do odczytu, inaczej: "odczytywalny") - strumienie, z których można odczytać dane;
    2) writable (do zapisu, inaczej: "zapisywalny") - strumienie, do których można dane zapisać.
    Oba wymienione powyżej rodzaje strumieni przechowują dane (informacje) w wewnętrznym buforze.

    Oprócz strumieni wymienionych powyżej stosuje się jeszcze dwa inne:
    1) duplex - strumień odczytywalny i zapisywalny;
    2) transform - strumień dupleksowy przeznaczony do modyfikawania i przekształacania danych
                   (np. do kompresji danych).
 */

/* UWAGA
    Strumień (stream) stanowi obiekt (instancję) klasy EventEmitter, czyli klasy
    pozwalającej na obsługę zdarzeń (events).

    Strumienie mogą generować (throws) różne zdarzenia, np.
    1) 'data' - zgłaszane jeśli dane są gotowe do odczytu;
    2) 'end' - jeśli nie ma więcej danych do odczytu (bo już zostały odczytane);
    3) 'error' - jeśli w czasie odczytu/zapisu danych wystąpi jakiś błąd;
    4) 'finish' - jeśli dane zostają umieszczone w miejscu docelowym, np. pliku.

    W przypadku strumienia "do odczytu"  - odczytywalnego (readable) generowane jest zdarzenie 'end'.
    Zdarzenie 'finish' nigdy nie jest zgłaszane.
    Inne zdarzenia generowane przez strumień odczytywalny:
    - close;
    - readable.

    W przypadku strumienia "do zapisu" (writeable) generowane jest zdarzenie 'finish',
    natomiast zdarzenie 'end' w ogóle nie jest zgłaszane.
    Inne zdarzenia generowane przez strumień zapisywalny:
    - close;
    - pipe;
    - drain.
 */

/* UWAGA
    PRZYKŁADY STRUMIENI:
    - żądania i odpowiedzi HTTP (HTTP requests and responses) - do odczytu i zapisu;
    - gniazda TCP (TCP sockets) - do odczytu i zapisu;
    - process.stdin (do odczytu), process.stdout (do zapisu);
    - strumienie odczytywalne i zapisywalne modułu fs (fs read and write streams).
 */

// Dołączenie zasobów modułu wbudowanego fs:
const fs = require('fs');
const path = require('path');

// Pełna ścieżka dostępu do pliku:
const filePath = __dirname + '/files/dane1.txt';
// Zmienna pomocnicza reprezentująca dane:
let dane = '';


/* STRUMIEŃ ODCZYTYWALNY
    Strumień odczytywalny (do odczytu) pozwala na odczyt danych z określonego źródła,
    np. pliku, bufora, innego strumienia.
    Strumień odczytywalny stanowi abstrakcję pewnego określonego źródła, z którego dane
    mogą być czytane.

    Obsługa strumieni do odczytu może być zrealizowana za pomocą funkcji obsługi zdarzeń.
    Np. jeśli odczytana porcja danych jest już dostępna, wówczas emitowane jest zdarzenie 'data'.
    Zgłoszenie zdarzenia powoduje wykonanie zarejestrowanej funkcji obsługi, zdefiniowanej
    jako funkcja zwrotna.
    Taki tryb przetwarzania strumienia nazywany jest trybem płynnym (flowing mode.)

    Alternatywnym wobec trybu płynnego jest tzw. tryn wstrzymania (paused mode).
    Czytanie danych ze strumienia polega w tym trybie na wielokrotnym wykonywaniu metody read().
    W szczególności, funkcja read() odczytuje dane z bufora, a następnie je zwraca.
    Jeśli nie ma już nic więcej do odczytu, funkcja read() zwraca null.
 */

// Utworzenie strumienia "do odczytu" (readable stream):
const rStream = fs.createReadStream(filePath);
/* UWAGA
    Metoda fs.createReadStream() zwraca obiekt fs.ReadStream. Stanowi ona dobrą alternatywę
    względem metody fs.readFile() w przypadku konieczności odczytu zawartości dużego pliku.
 */

// Ustalenie sposobu kodowania znaków:
rStream.setEncoding('UTF8');

// Rejestracja funkcji obsługi (listenera) zdarzenia data:
rStream.on(
    'data', // nazwa zdarzenia
    (chunk) => { // funkcja obsługi zdarzenia (jako funkcja zwrotna)
        dane += chunk;
    }
);
/* UWAGA
    Zdarzenie 'data' jest zgłaszane (emitowane) w przypadku, jeśli porcja danych (chunk)
    jest gotowa do odczytania - gdy strumień przekazuje konsumentowi porcję danych.
    Od tej chwili konsument może przetworzać tę porcję danych - jak tutaj.

    Funkcja obsługi zdarzenia jest funkcją zwrotną (callback).
    Biorąc pod uwagę powyższe, funkcja zwrotna zostanie wywołana za każdym razem,
    jeśli dane (porcja danych) "wchodzi" do strumienia.
 */

// Rejestracja funkcji obsługi zdarzenia end:
rStream.on('end', () => {
    console.log("Dane: ", dane);
});
/* UWAGA
    Zdarzenie 'end' jest zgłaszane, jeśli nie ma już żadnych danych do "skonsumowania"
    ze strumienia.
 */

// Rejestracja funkcji obsługi zdarzenia - błędu error:
rStream.on('error', (err) => {
    console.log("Uwaga błąd!", err.message);
});
/* UWAGA
    Zdarzenie 'error' jest zgłaszane w przypadku wystąpienia błędu w czasie przetwarzania
    strumienia rStream.
 */

console.log("Komunikat w ostatniej linii kodu programu ...");
/* PYTANIE KONTROLNE:
    Dlaczego komunikat kontrolny jest wyświetlany w konsoli przed zawartością pliku?
 */
