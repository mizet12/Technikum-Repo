/*  NODE EXPRESS - OBSŁUGA FORMULARZY (HANDLING FORMS)
    Metoda HTTP POST. Funkcje pośrednie body-parser.

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

const PORT = 8011; // w razie potrzeby należy zmienić

const publicDir = path.join(__dirname, 'public');

// Konfiguracja foldera przeznaczonego na pliki statyczne:
app.use(express.static(publicDir));

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

// Dołączenie zasobów publicznych modułu body-parser:
const bodyParser = require('body-parser');
/* UWAGA
    Moduł body-parser zawiera funkcje pośrednie, których zadaniem jest analiza (przetworzenie)
    treści żądania (request body) przed dostarczeniem ich do funkcji obsługi żądania (request handlers).

    W szczególności, zadaniem oprogramowania pośredniego body-parser jest wyodrębnienie ciała (treści)
    żądania (request body) i udostępnienie go jako właściwości (obiektu) req.body w postaci par klucz-wartość.
    Jest to bardzo wygodne, ponieważ dzięki temu unika się przetwarzania danych zawartych bezpośrednio
    w różnych właściwościach obiektu żądania req.

    W celu przetwarzania różnych typów danych moduł body-parser udostępnia cztery różne funkcje pośrednie:
    1) body-parser.urlencoded() - analiza danych zakodowanych w adresie URL;
    2) body-parser.json() - analiza danych JSON;
    3) body-parser.text() - analiza danych tekstowych;
    4) body-parser.raw() - analiza nieprzetworzonych danych.

    W wersjach Express wyższych niż 4.16 nie ma potrzeby importowania i używania odrębnego modułu body-parser,
    ponieważ Express zapewnia wbudowane funkcje pośrednie, które realizują te same zadania.
 */

// Konfiguracja aplikacji do użycia analizatora treści 'body-parser':
const urlencodedParser = bodyParser.urlencoded({ extended : false });
/* UWAGA
    Metoda body-parser.urlencoded() ma za zadanie analizę (przetworzenie) danych typu urlencode,
    czyli danych zakodowanych w adresie URL.

    Opcja extended z wartością false pozwala na parsowanie danych zakodowanych w adresie URL
    za pomocą biblioteki querystring (zamiast za pomocą qs - jeśli omawiana opcja jest ustawiona na true).

    Metoda ta obsługuje jedynie system kodowania znaków UTF-8.

    Wyniki analizy treści żądania są dostępne jako pary klucz-wartość poprzez obiekt req.body.
 */

// Rejestracja i obsługa żądania POST na roucie (ścieżce) /post:
app.post('/post', urlencodedParser, (req, res) => {
    // Odczyt danych z obiektu req.body:
    const data = { marka : req.body.marka, model : req.body["model"] }
                 /* UWAGA
                     Obiekt req.body pozwala na dostęp do danych przesłanych z formularza za pomocą metody POST
                     po przetworzeniu (analizie, parsowaniu) treści żądania za pomocą funkcji pośredniej
                     body-parser.urlencoded().
                     Obiekt ten zawiera zestaw par klucz-wartość (key-value) reprezentujących przetworzone dane
                     z treści żądania.

                     Zamiast metody body-parser.urlencoded() można zastosować metodę express.urlencoded(),
                     w Express wersji 4.16+.
                  */

                 // Wyświetlenie informacji pomocniczych:
                 console.log("OPIS ŻĄDANIA")
    console.log("Metoda HTTP: ", req.method);
    console.log("Adres URL: ", req.url);
    console.log("Ścieżka: ", req.path);
    // Prezentacja danych w celach pomocniczych:
    console.log("Dane:", data);

    // Przesłanie odpowiedzi do klienta:
    res.send(JSON.stringify(data));
    /* UWAGA
        Odpowiedź do klienta została przesłana w postaci łańucha znaków w notacji JSON:

        Metoda JSON.stringify() pozwala na konwersję obiektu na łańcuch znaków w formacie JSON.

        Zamiast metody res.send() można tutaj wykorzystać metodę res.json(),
        która pozwala na przesłanie do klienta obiektu JSON: res.json(data);
     */

})

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/index.html`)
})