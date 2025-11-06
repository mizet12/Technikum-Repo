/* NODE EXPRESS - PLIKI STATYCZNE.
    Serwowanie plików statycznych (HTML, CSS i JPG).

   © Piotr Siewniak, wersja: 7.IV.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8001; // w razie potrzeby należy zmienić



// Konfiguracja aplikacji do obsługi plików statycznych:
//app.use(express.static('public')); // wykorzystanie ścieżki względnej
app.use(express.static(path.join(__dirname, 'public'))); // wykorzystanie ścieżki bezwzględnej
/* UWAGA
    Metoda express.static() odpowiada w Express za znajdowanie i udostępnianie (serwowanie) plików statycznych.

    Jest to wbudowana funkcja pośrednia (built-in middleware function).
    Argumentem express.static() jest nazwa katalogu, z którego są serwowane (udostępnione) pliki statyczne.

    Tutaj ustalono, że folderem publicznym (czyli folderem przeznaczonym na zasoby statyczne) jest /public.
    Tym samym, katalog 'public' jest traktowany jako root dla zasobów (plików) statycznych.
    Oznacza to, że pliki statyczne można serwować bezpośrednio z katalogu public, jak również z jego podkatalagów
    (które również traktowane są jako katalogi publiczne).
    Jako argument użyto ścieżki względnej (relative path).

    Funkcja express.static() została tutaj zamontowana dla wszystkich żądań:
    - każdego typu (GET, POST);
    - oraz każdej ścieżki (routa).
    W ogólności, można indywidualnie montować (konfigurować) funkcję express.static() dla różnych żądań
    i na różnych - zadanych ścieżkach.

    Tutaj: folder public zawiera dwa podkatalogi - css oraz images.
    Z foldera css jest serwowany plik ze stylami style.css, a z images - obrazek jelcz.jpg.

    Zamiast polecenia ze ścieżką względną:
        app.use(express.static('public'));

    można również użyć ścieżki bezpośredniej (absolute path):
        app.use(express.static(__dirname + '/public')));
    lub
        app.use(express.static(path.join(__dirname, 'public')));

    Zmienna globalna __dirname określa ścieżkę bezwzględną do katalogu, w którym jest zapisany
    uruchamiany program - tutaj: plik app.js.
    ZASTOSOWANIE ŚCIEŻKI BEZWZGLĘDNEJ JEST BEZPIECZNIEJSZE, JEŚLI APLIKACJA EXPRESS JEST URUCHAMIANA
    Z POZIOMU INNEGO KATALOGU NIŻ TEN, W KTÓRYM JEST ZAPISANY PLIK APLIKACJI (tutaj: app.js).

    W ogólności, w danej aplikacji można definiować (konfigurować) wiele katalogów publicznych.
    Każdy z nich jest traktowany wówczas jako root dla plików statycznych.
 */

/* UWAGA
    NALEŻY ZWRÓCIĆ UWAGĘ, ŻE FOLDER VIEWS ZAWIERAJĄCY PLIK INDEX.HTML NIE ZOSTAŁ UWZGLĘDNIONY W WYWOŁANIU:
        app.use(express.static(path.join(__dirname, 'public')));
    JAKO KATALOG PUBLICZNY POZWALAJĄCY NA UDOSTĘPNIANIE (SERWOWANIE) PLIKÓW STATYCZNYCH!
 */


// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Przesłanie POJEDYNCZEGO pliku do klienta (przeglądarki) w odpowiedzi HTTP:
    res.sendFile(path.join(__dirname, "/views/index.html"));
    /* UWAGA
        Metoda sendFile() pozwala na przesłanie pliku o podanej nazwie na zadanej ścieżce.
        Pole nagłówka odpowiedzi: HTTP Content-type, zostaje wówczas ustawione automatycznie
        na podstawie rozszerzenia pliku (tutaj: html).
     */
    /* UWAGA
        Plik statyczny index.html został przesłany do klienta (przeglądarki) przy wykorzystaniu
        ścieżki bezwzględnej do tego zasobu. W ten sposób można przesyłać jedynie pojedynczy plik.

        Dla przypomnienia: zmienna globalna __dirname określa ścieżkę bezwzględną do katalogu,
        w którym jest zapisany uruchamiany program - tutaj: app.js.
     */
})

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, (err) => {
    // Obsługa ewentualnego błędu:
    if (err) throw (err);

    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE
   Wykonać aplikację w kilku wariantach:
        1. Z poziomu katalgogu, w którym jest zapisany program app.js;
        2. z poziomu katalogu różnego od tego, w którym jest zapisany program app.js
   uwzględniając ścieżkę względną (a) i bezwzględną (b) do katalogu public,
   albo zupełnie pomijając konfigurację aplikacji do obsługi plików statycznych (c).
 */
