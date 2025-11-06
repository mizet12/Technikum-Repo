/* NODE EXPRESS - Jade (Pug) Template Engine

   © Piotr Siewniak, wersja: 22.IV.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8021; // w razie potrzeby należy zmienić

// Określenie silnika widoków:
app.set("view engine", "pug"); // jako silnik widoków w aplikacji został ustalony pug
/* UWAGA
    Silnik szablonów (template engine) Jade jest obecnie znany jako Pug - Jade to stara nazwa Pug-a.
 */

/* UWAGA
    Dokumentację składni Jade można znaleźć na stronie: https://pugjs.org/
 */

// Określenie foldera zawierającego pliki widoków:
app.set('views', __dirname + "/views");
/* UWAGA
    Pliki widoków to pliki .jade. Jak wspomniano wcześniej, domyślnym katalogiem,
    z którego są udostępniane pliki widoków to /views, będący podkatalogiem roota aplikacji.

    Domyślny folder z widokami można zmienić na inny za pomocą metody app.set():
    app.set('views', 'nazwa_foldera_widoków').

    Tutaj: w celu określenia katalogu z widokami użyto ścieżki bezwzględnej. Jest to pomocne,
    jeśli aplikacja jest uruchamiana z poziomu innego foldera niż ten, w którym jest zapisany
    program aplikacji - ma to wpływ na argument metody res.render() poniżej.
 */


// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(__dirname + '/public'));
/* UWAGA
    Określenie foldera z plikami statycznymi jest tutaj konieczne, ponieważ serwowany jest obrazek,
    który jest plikiem statycznym.

    Bezpiecznie jest określanie ścieżki jako bezwzględnej (jak tutaj).
 */

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie zawartości pliku widoku i przesłanie wynikowego HTML do klienta:
    res.render('index');
    //res.render(__dirname + '/views/index');
    /* UWAGA
        Powyżej - ścieżka do pliku index.jade została określona w sposób wględny - w odniesieniu
        do foldera /views przeznaczonego na pliki widoków.

        Gdyby aplikacji nie skonfigurowano wcześniej za pomocą metody app.set() przy użyciu ściezki bezwzględnej:
            app.set('views', __dirname + "/views");
        wówczas uruchomienie aplikacji z poziomu innego foldera niż ten, w którym jest zapisany program app.js,
        spowodowałoby wystąpienie błędu po wywołaniu metody res.render() - silnik widoków nie umiałby zlokalizować
        pliku widoku.
     */

});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE
    Usunąć z kodu aplikacji linię:
    app.use(express.static(__dirname + '/views'));

   Wykonać testy działania aplikacji uruchamiając ją z poziomu foldera:
   1) w którym jest zapisany plik programu app.js (wariant I);
   2) z poziomu innego katalogu (wariant II).

   Zmienić argument wywołania metody res.render() na
    __dirname + '/views/index'

    Powtórzyć testy działania aplikacji.
    Zinterpretować uzyskane rezultaty.

    Przywrócić kod programu do stanu początkowego.
 */