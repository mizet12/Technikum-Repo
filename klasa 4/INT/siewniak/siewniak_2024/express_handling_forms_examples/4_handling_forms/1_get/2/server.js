/*  NODE EXPRESS - OBSŁUGA FORMULARZY (HANDLING FORMS).
    Metoda HTTP GET.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();
const PORT = 8023;

// Umożliwienie pobrania plików statycznych z serwera:
app.use(express.static(path.join(__dirname, 'public')));
/* UWAGA
    Pliki statyczne to pliki obrazków, pliki HTML, pliki ze stylami CSS, pliki JS,
    które klient może pobrać z serwera.

    Domyślnie Express nie wspomaga pobierania (udostępniania) plików statycznych.
    Aby to umożliwić należy utworzyć specjalny katalog przeznaczony na pliki statyczne,
    np. '/public' i dodać funkcję pośrednią (middleware function) express.static()
    z odpowiednim argumentem (np. 'public'), która powinna być zamontowana na każdej ścieżce aplikacji
    (skojarzona z każdą ścieżką aplikacji):
        app.use(express.static('public'));

    Funkcja express.static() stanowi wbudowaną funkcję pośrednią (built-in middleware function) Express.
    Należy zwrócić uwagę, że katalog 'public' nie jest częścią adresu URL.
    Po wykonaniu powyższej instrukcji będzie on traktowany jako root aplikacji.

    W ogólności, w aplikacji można używać wiele katalagów z plikami statycznymi,
    np. /images, /css, /data itp.

    TEMATYKA OBSŁUGI PLIKÓW STATYCZNYCH JEST OMAWIANA OSOBNO.
 */

// Obsługa żądania GET na ścieżce (roucie) /index.html:
app.get('/index.html', (req, res) => {

    // Przesłanie pliku index.html do klienta:
    res.sendFile("index.html", {root: __dirname + '/public'});
    /* UWAGA
        Metoda sendFile() pozwala na przesłanie pliku podanego na ścieżce.
        Pole nagłówka odpowiedzi: HTTP Content-type, zostaje ustawione automatycznie
        na podstawie rozszerzenia pliku.

        Zmienna globalna __dirname służy do odczytu ścieżki bezwzględnej do foldera,
        w którym jest zapisany zawierający ją plik (program).

        Tutaj:
        przesyłana jest zawartość pliku statycznego index.html zapisanego w katalogu /public.
     */
})

// Rejestracja i obsługa żądania GET na roucie /data:
app.get('/data', (req, res) => {
    const response = {
        marka: req.query.marka,
        model: req.query.model,
        "rok produkcji": req.query.rok_produkcji,
        cena: req.query.cena
    };

    // Wyświetlenie danych w konsoli (w celach pomocniczych):
    console.log("Obiekt response: ", response);

    // Przesłanie odpowiedzi do przeglądarki:
    res.send(JSON.stringify(response));
    /* UWAGA
        Metoda JSON.stringify() służy do konwersji obiektu w formacie JSON (tutaj: obiektu response)
        na łańcuch znaków w formacie JSON, czyli łańcuch zawierający pary klucz-wartość.
     */
})

// Uruchomienie serera aplikacji:
const server = app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/index.html`);
})

/* UWAGA
    PRZYKŁADOWE WYNIKI WYKONANIA APLIKACJI

    Zawartość okna przeglądarki:
    {"marka":"Opel","model":"Astra","rok produkcji":"2010","cena":"20000"}

    Zawartość konsoli terminala:
    Serwer nasłuchuje na porcie 8023
    Obiekt response:  {
      marka: 'Opel',
      model: 'Astra',
      'rok produkcji': '2010',
      cena: '20000'
    }
 */
