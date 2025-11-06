/*  NODE EXPRESS - PODSTAWY ROUTINGU
    Oddzielenie kodu routingu od kodu aplikacji.

    Kod aplikacji wykorzystującej routera zdefiniowanego w osobnym pliku (module).

    © Piotr Siewniak, wersja: 21.II.2022 r.
*/

/* UWAGA
    Przed uruchomieniem aplikacji należy najpierw uruchomić routera (router.js).
 */

const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

// Utworzenie obiektu routera:
const router = require('./router');
/* UWAGA
    Obiekt router został utworzony przy wykorzystaniu zasobów zdefiniowanego modułu router.js.
 */

const PORT = 8062; // w razie potrzeby należy zmienić!

// Skojarzenie zdefiniowanego routera z aplikacją:
app.use(router);
/* UWAGA
    W ogólności, metoda app.use() montuje middleware dla wszystkich ścieżek (tras) w aplikacji (jak tutaj)
    albo tych, które są wymienione jako pierwsze argumenty jej wywołań (przy wielokrotnym wywołaniu).

    Tutaj: brak podanej ścieżki oznacza, że domyślną ścieżką jest /.
 */

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie", PORT);

    console.log("Wpisz w pasku adresu przeglądarki:");
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/about`);
    console.log(`http://localhost:${PORT}/help`);
});