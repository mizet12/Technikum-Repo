/*  NODE EXPRESS - EJS (Embedded JavaScript Templating)

    Konfiguracja aplikacji do użycia widoków EJS.
    Renderowanie pliku widoku/szablonu (view/template file) - metoda res.render().
    Wykorzystanie funkcji pośredniej

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/

const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 4001; // w razie potrzeby należy zmienić:


// KONFIGURACJA APLIKACJI DO UŻYCIA WIDOKÓW I PLIKÓW STATYCZNYCH
// Określenie silnika widoków/szablonów (view/template engine):
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");
// Rejestracja (ustalenie) katalogu przeznaczonego na pliki statyczne:
app.use(express.static(__dirname + '/public'));

// Zamontowanie na serwerze aplikacji funkcji pośredniej dla na ścieżce /:
app.use('/', (req, res, next) => {
/* UWAGA
    Funkcja pośrednia (middleware function), będąca funkcją zwrotną (callback) została skojarzona
    na roucie (ścieżce) / dla dowolnego typu żądania (GET, POST itd.).
 */
    // Renderowanie zawartości pliku widoku i przesłanie wynikowego HTML do klienta:
    res.render('./index.ejs');
    /* UWAGA
        Renderowanie zawartości pliku widoku jest tutaj realizowane w kodzie funkcji pośredniej,
        a nie bezpośrednio kodzie funkcji obsługi żądania GET na ścieżce / - czyli w wywołaniu
        funkcji app.get() poniżej.
     */
    // Wywołanie następnej funkcji pośredniej:
    next();
})

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Zakończenie odpowiedzi do klienta:
    res.end();
});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE
   Zdefiniować routing przy wykorzystaniu funkcji (obiektu) router.
   Oddzielić kod routera od kodu właściwego aplikacji poprzez umieszczenie kodu routera
   w zewnętrznym module.
 */