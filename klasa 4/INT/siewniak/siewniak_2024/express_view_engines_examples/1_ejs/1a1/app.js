/*  NODE EXPRESS - EJS (Embedded JavaScript Templating)

    Konfiguracja aplikacji do użycia widoków EJS.
    Renderowanie pliku widoku/szablonu (view/template file) - metoda res.render().

    © Piotr Siewniak, wersja: 18.III.2022 r.
*/

/* UWAGA
    Przed wykonaniem aplikacji należy zainstalować moduł ejs.
 */

/* UWAGA OGÓLNA
    W ogólności, silnik szablonów pozwala na wykorzystanie w aplikacji tzw. szablonów (templates) - widoków (views),
    które są plikami statycznymi zawierającymi specjalnego rodzaju "zmienne".
    Wspomniane zmienne mogą reprezentować np. dane dynamiczne przesłane z serwera aplikacji,
    jak również osadzony kod JS pochodzący ze skryptów inline, wbudowanych i zewnętrznych.
    W czasie wykonywania aplikacji, silnik szablonów zastępuje te "zmienne" konkretnymi "wartościami"
    (np. danymi przesłanymi z serwera aplikacji, wynikami wykonania kodu JS), a następnie przekształca widok
    w statyczny plik HTML (oczywiście bez żadnych "zmiennych"), który jest wysyłany do klienta (przeglądarki).
    Omówiony powyżej proces generowania statycznego, wynikowego kodu HTML na podstawie kodu widoku (szablonu)
    nazwywa się renderowaniem pliku widoku (szablonu).

    Wygląd widoku (szablonu), a w tym "ortografia", "gramatyka" i logika wykorzystywane w kodzie źródłowym widoku
    zależą bezpośrednio od użytego silnika. Każdy silnik generuje widok oparty na specyficznych,
    charakterystycznych dla siebie zasadach (regułach) składniowych, logicznych itd.

    Najbardziej popularne silniki szablonów to EJS i Jade.
    Domyślnym silnikiem szablonów w Node jest Jade (Pug). Pug to nowa nazwa Jade.
    JADE (PUG) JEST OMAWIANY OSOBNO.
 */

/* UWAGA
    EJS (Embedded JavaScript Templating) to silnik szablonów/widoków używany w Node.
    EJS jest wykorzystywany w celu:
    1) "wstrzykiwania" (wstawiania) danych dynamicznych z aplikacji do kodu HTML (czyli na stronę klienta);
    2) osadzania kodu JS na stronach HTML.
    3) tworzenia szablonów (layouts) HTML;
    4) generowania znaczników HTML przy wykorzystaniu JS;
 */

const express = require('express');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 4000; // w razie potrzeby należy zmienić:


// KONFIGURACJA APLIKACJI DO UŻYCIA WIDOKÓW I PLIKÓW STATYCZNYCH
// Określenie silnika widoków/szablonów (view/template engine):
app.set('view engine', 'ejs');
// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");
/* UWAGA
    Pliki widoków to pliki .ejs (tutaj: index.ejs). Katalogiem domyślnym, z którego są udostępniane
    pliki widoków to /views, będący podkatalogiem roota aplikacji.

    Domyślny folder z widokami można zmienić na inny za pomocą metody app.set():
    app.set('views', 'nazwa_foldera_widoków_ze_ścieżką').

    Tutaj: w celu określenia katalogu z widokami użyto ścieżki bezwzględnej.
    Jest to pomocne, jeśli aplikacja jest uruchamiana z poziomu innego foldera niż ten,
    w którym jest zapisany program aplikacji.
 */
// Rejestracja (ustalenie) katalogu przeznaczonego na pliki statyczne:
app.use(express.static(__dirname + '/public'));
/* UWAGA
    Określenie foldera z plikami statycznymi jest tutaj konieczne, ponieważ serwowany jest obrazek
    oraz wykorzystywane są style CSS zapisane w pliku style.css.

    Użycie ścieżki jako bezwzględnej (jak tutaj) jest bardziej bezpieczne.
 */

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie zawartości pliku widoku i przesłanie wynikowego HTML do klienta:
    res.render('./index.ejs');
    /* UWAGA
        Metoda res.render() pozwala na wyrenderowanie pliku widoku i przesłanie wynikowego kodu HTML
        do klienta (przeglądarki). Innymi słowy, wywołanie metody res.render() powoduje kompilację
        pliku widoku/szablonu (template/view file) do wynikowego HTML z uwzględnieniem wstawionych
        wartości danych dynamicznych, osadzonego kodu JavaScript itd.
        Plik index.ejs powinien być zapisany w katalogu /views, jako podkatalogu roota aplikacji.
     */
});

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

/* ĆWICZENIE
    Usunąć z kodu aplikacji linię:
    app.set('views', __dirname + "/views");

    Wykonać próbę uruchomienia aplikacji z poziomu foldera:
    1) zawierającego plik (program) app.js (wariant I);
    2) różnego od tego, który zawiera program app.js (wariant II).

    Dodać do kodu aplikacji linię podaną powyżej.
    Uruchomić aplikację w wariantach I i II.
    Zinterpretować uzyskane rezultaty.
 */