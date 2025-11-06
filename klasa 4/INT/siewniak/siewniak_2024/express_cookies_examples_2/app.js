/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych HTML, CSS i JPG.
    Wykorzystanie modułu routera.

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
// Dołączenie modułu routera:
const router = require("./routes/router");

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8012; // w razie potrzeby należy zmienić

// Konfiguracja aplikacji - zamontowanie routera na określonych podścieżkach aplikacji:
app.use('/', router);
app.use('/about', router);
app.use('/help', router);
/* UWAGA
    Funkcja routera została zamontowana na podanych ścieżkach dla każdego żądania HTTP
    - niezależnie od jego typu (GET, POST).
 */


// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, (err) => {
    // Obsługa ewentualnego błędu:
    if (err) {
        console.log("Uwaga błąd!", err.message);
        return
    }

    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})


/*  ĆWICZENIE 1
    Uzupełnij kod aplikacji - zdefiniuj dodatkowe cookie:
    1) datę ostatniego "wejścia" na określoną podstronę aplikacji;
    2) łączną liczbę dotychczasowych wejść na daną podstronę.
    Zaprezentuj te informacje na stronie na każdej podstronie.
*/

/*  ĆWICZENIE 2
    Zmodyfikuj kod aplikacji - zamiast plików HTML wykorzystać pliki widoków:
    1) EJS (wariant I);
    2) PUG (JADE) (wariant II).

    Dla każdego wykorzystanego silnika widoków wykonaj dodatkowo dwa warianty:
    a) bez uwzględnienia ćwiczenia 1 (wariant A);
    b) z uwzględnieniem ćwiczenia 1 9wariant B).
*/
