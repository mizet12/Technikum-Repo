/*  NODE EXPRESS - OBSŁUGA FORMULARZY (HANDLING FORMS)
    Metoda HTTP POST.

    © Piotr Siewniak, wersja: 22.II.2022 r.
*/

/* UWAGA
    Przed wykonaniem kodu HTML zawartego w pliku index.html należy najpierw uruchomić serwera aplikacji.
 */

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8018;

// Utworzenie obiektu aplikacji:
const app = express();

// Zmienna pomocnicza:
const autoArray = [];
/* UWAGA
    Każdorazowo wraz z wykonaniem kodu index.html tablica autoArray będzie uzupełniana
    o kolejne elementy składowe - obiekty w notacji literałowej zawierające dane samochodów.
 */

// Konfiguracja aplikacji do użycia analizatorów treści żądania:
app.use(bodyParser.urlencoded({ extended : false }));
/* UWAGA
    Metoda bodyParser.urlencoded() pozwala na analizę "surowej" (nieprzetworzonej) zawartości żądania,
    jako danych zakodowanych w adresie URL. Wynik stanowi obiekt req.body.
    Opcja extended z wartością false pozwala na parsowanie danych za pomocą biblioteki querystring.

    Metoda pozwala na analizę treści żądania w postaci łańcucha znaków lub tablicy.
    Metoda akceptuje jedynie kodowanie UTF-8.
 */

app.use(bodyParser.json());
/* UWAGA
   Użycie metody bodyParser.json() pozwala na analizę danych JSON. Wynik stanowi obiekt req.body.
   Ten parser akceptuje dowolne kodowanie Unicode obiektu req.body.
 */

// Obsługa żądania POST na ścieżce /form:
app.post('/form', (req, res) => {
    // Wyświetlenie informacji pomocniczej:
    console.log("req.body:", req.body);

    // Pobranie wartości posczególnych właściwości z obiektu req.body:
    const auto = {
        marka : req.body.marka,
        model : req.body.model,
        nr_rejestracyjny : req.body.nr_rejestracyjny,
    }

                 // Dopisanie nowego obiektu (danych samochodu) do tablicy autoArray:
                 autoArray.push(auto);
    console.log("Bieżąca zawartość tablicy autoArray: ", autoArray);

    // Przygotowanie treści odpowiedzi do klienta:
    let temp = ``;
    autoArray.forEach((auto) => {
        temp += `<p> ${JSON.stringify(auto)} </p>`;
    });
    temp = `<h4 style="color: blue;"> Bieżąca zawartość tablicy auroArray </h4>` + temp;
    /* UWAGA
        Odpowiedź do klienta została przygotowana w postaci łańcucha znaków zawierającego kod HTML.
     */

    // Wysłanie odpowiedzi do klienta:
    res.send(temp);
});

// Uruchomienie serwera aplikacji (serwera Express):
app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie', PORT);
    console.log("Wykonaj kilka razy kod zawarty w pliku index.html");
    console.log("Obserwuj konsolę terminala i okno przegladarki");
});