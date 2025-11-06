/*  NODE EXPRESS - OBSŁUGA FORMULARZY (HANDLING FORMS)
    Metoda HTTP POST. Odczyt danych metodą strumieniową.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

/* UWAGA
    Przed uruchomieniem aplikacji należy najpierw zainstalować za pomocą npm'a moduł 'body-parser'.
 */

const express = require('express');
const path = require('path');
const querystring = require('querystring');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8010; // w razie potrzeby należy zmienić

const publicDir = path.join(__dirname, 'public');

// Konfiguracja foldera przeznaczonego na pliki statyczne:
app.use(express.static(publicDir));
/* UWAGA
    Pliki statyczne (jak np. pliki HTML, CSS, JS, pliki obrazków) mogą być pobierane
    z określonego katalogu (tutaj: /public), który jest traktowany jako katalog root aplikacji.

    Funkcja pośrednia express.static() została zamontowana na każdej ścieżce, czyli zostanie ona
    wykonana dla każdego żądania - niezależnie od jego typu i adresu URL.
 */

// Obsługa żądania GET na zadanej ścieżce:
app.get('/index.html', (req, res) => {
    res.sendFile("index.html", { root : publicDir });
    /* UWAGA
        Metoda sendFile() pozwala na przesłanie pliku podanego na zadanej ścieżce
        (z uwzględnieniem konfiguracji foldera przeznaczonego na pliki statyczne).

        Tutaj przesyłany jest plik statyczny index.html (z foldera /public),
        zawierający kod HTML strony WWW zawierającej formularz.
     */
})

// Rejestracja i obsługa żądania POST na roucie (ścieżce) /post:
app.post('/post', (req, res) => {
    // Zmienna pomocnicza reprezentująca treść (dane) żądania POST:
    let body = ''; // dla dużej ilości danych można użyć tablicy zamiast łańcucha znaków

    // Odczyt danych przesłanych z formularza za pomocą metody POST:
    req
        /* UWAGA
            Obiekt req żądania HTTP POST (tutaj: argument funkcji obsługi żądania POST na ścieżce /post)
            implementuje interfejs strumienia odczytywalnego (readable stream).
            Dlatego też, przesyłane dane zakodowane w adresie URL można odczytać bezpośrednio ze strumienia
            w funkcji obsługi zdarzenia 'data', a następnie je przetworzyć w funkcji obsługi zdarzenia 'end'.
         */
        // Obsługa zdarzenia 'data' skojarzonego z obiektem żądania:
        .on('data',
            (chunk) => {
                /* UWAGA
                    Zdarzenie 'data' jest emitowane, jeśli dane są gotowe do odczytu.
                 */
                // Wyświelenie informacji pomocniczej:
                console.log("chunk:", chunk); // porcja danych chunk należy do klasy Buffer

                // Wyznaczenie treści (danych) żądania (request body):
                body += chunk.toString();
                /* UWAGA
                    Porcja danych chunk (klasy Buffer) jest konwertowana powyżej na łańcuch znaków (String).
                 */
            })
        // Obsługa zdarzenia 'end' skojarzonego z żądaniem:
        .on('end',
            () => {
                /* UWAGA
                    Zdarzenie 'end' jest emitowane, jeśli nie ma już więcej danych do odczytu.
                 */
                // Wyświetlenie informacji pomocniczych:
                console.log("Adres URL: ", req.url);
                console.log("Metoda HTTP: ", req.method);

                console.log("Dane pobrane z formularza:", body); // body należy do typu String
                /* UWAGA
                    Dane zawarte w treści żądania mają postać ciągu zapytania URL (URL query string),
                    np. 'marka='volkswagen'&model=golf'
                 */

                // Przesłanie odpowiedzi do klienta w postaci JSON:
                res.send(querystring.parse(body));
                /* UWAGA
                    Metoda querystring.parse() pozwala na konwersję ciągu zapytania URL
                    na obiekt JSON, zawierający zestaw par klucz-wartość.
                 */
            })
        .on('error', (err) => {
            console.log("Uwaga błąd!", err.message);
        });
})

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/index.html`)
})