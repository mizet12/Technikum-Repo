/*  NODE EXPRESS - OBSŁUGA FORMULARZY (HANDLING FORMS).
    Metoda HTTP GET.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

const express = require('express');
const app = express(); // obiekt aplikacji

const PORT = 8020; // w razie konieczności należy zmienić port

// Obsługa żądania HTTP GET na roucie (ścieżce) /info:
app.get(
    // Określenie routa (ścieżki):
    '/info',
    // Definicja funkcji obsługi routa (funkcji pośredniej):
    (req, res) => {
        const temp = `
<h4 style="color: blue;">Przesłane dane samochodu</h4>
<p>Marka: ${req.query['marka']} </p>
<p>Model: ${req.query.model} </p>
`;

        // Wyświetlenie zawartości obiektu req.query w konsoli (w celach pomocniczych):
        console.log("Obiekt req.query: ", req.query);
        /* UWAGA
            Właściwość req.query obiektu żądania req stanowi obiekt zawierający pary klucz-wartość
            (nazwy i wartości właściwości) ciągu zapytania (query string) na ścieżce.
            Każda para reprezentuje jeden ciąg zapytania.

            Dostęp do wspomnianych powyżej właściwości można uzyskać zarówno za pomocą
            notacji tablicowej (np. req.query['marka']), jak również obiektowej
            (np. req.query.model).
         */

        // Przesłanie danych do klienta (przeglądarki):
        res.send(temp);
        /* UWAGA
            Dane zostaną przesłane za pomocą metody HTTP GET na adres:
            http://127.0.0.1:8020/info wraz z parametrami (ciągami zapytania).
         */
        /* UWAGA
           Metoda res.send() pozwala na przesłanie odpowiedzi HTTP serwera do klienta.
           Metoda ta implementuje trzy metody:
           1) res.setHeaders() - sprawdza strukturę odpowiedzi (wyjścia) i ustawia automatycznie
              odpowiedni nagłówek odpowiedzi (response header);
           2) res.write() - przesyła dane (w sposób strumieniowy) do klienta;
           3) res.end() - kończy proces odpowiedzi.

           Argumentem tej metody może być:
           a) łańcuch znaków (String);
           b) tablica (array);
           c) obiekt (object);
           d) Buffer.

            Tutaj treść odpowiedzi stanowi literał łańcuchowy reprezentujący kod HTML.

            Funkcja pośrednia, której zadaniem jest przesłanie odpowiedzi do klienta (przeglądarki)
            jest często nazywana funkcją obsługi routa/ścieżki (route handler).
        */
    }
)

// Uruchomienie serwera aplikacji (serwera Express):
const server = app.listen(PORT, () => {
    console.log("Serwer nasłuchuje na porcie", PORT);
    console.log("Wykonaj kod HTML z pliku index.html");
})

/* UWAGA
    PRZYKŁADOWE WYNIKI DZIAŁANIA APLIKACJI

    Zawartość paska adresu przeglądarki po przesłaniu danych:
    http://127.0.0.1:8020/info?marka=Volkswagen&model=Golf

    Zawartość konsoli terminala:
    Obiekt req.query:  { marka: 'Volkswagen', model: 'Golf' }
 */