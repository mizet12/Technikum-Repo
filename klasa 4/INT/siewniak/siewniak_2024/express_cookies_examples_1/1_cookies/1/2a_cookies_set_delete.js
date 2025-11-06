/*  NODE EXPRESS
    Tworzenie i usuwanie cookies.

    © Piotr Siewniak, wersja: 2.III.2022 r.
*/

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = 8032;

app.use(cookieParser());

app.get('/', (req, res) => {
    const cookies = req.cookies; // zmienna pomocnicza
    for (let property in cookies) {
        if (!cookies.hasOwnProperty(property)) {
            continue;
        }
        res.cookie(
            property, // nazwa cookie
            null, // wartość cookie
            {expires: new Date(Date.now())} // ustalenie daty ważności cookie
        );
    }
    res.send("Wszystkie cookies zostały usunięte ...");

    // Wyświetlenie informacji pomocniczych w konsoli terminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
})

// Obsługa żądania GET na roucie /set:
app.get('/set', (req, res) => {
    // Ustalenie nazwy, wartości i czasu ważności cookie:
    res.cookie('user', 'piotr', {
        expire: 1000*60*60 + Date.now() // czas ważności: 1 godzina
    })

    // Wysłanie odpowiedzi do przeglądarki:
    res.send("Cookie 'user' zostało zdefiniowane ...");

    // Wyświetlenie informacji pomocniczych w konsoli teminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
});

// Obsługa żądania GET na roucie /delete:
app.get('/delete', (req, res) => {
    res.clearCookie('user', {
        expires: new Date(), // kiedy cookie traci ważność
        path: '/' // ścieżka set-cookie (domyślną ścieżką jest /)
    });

    // Wysłanie odpowiedzi do przeglądarki:
    res.send("Cookie 'user' zostało usunięte ...");

    // Wyświetlenie informacji pomocniczych w konsoli terminala:
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
});

app.listen(PORT, (err, message) => {
    console.log("Serwer nasłuchuje na porcie ", PORT);
    console.log(`Wpisz w pasku adresu przeglądarki (kolejno):`);
    console.log(`http://127.0.0.1:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}/set`);
    console.log(`http://127.0.0.1:${PORT}/delete`);
    console.log(`http://127.0.0.1:${PORT}`);
});

/*  ĆWICZENIE 1
    Zmodyfikuj kod aplikacji na podstawie następujących założeń:
    1) każdej ścieżce (/, /set, /delete) powinna odpowiadać niezależna podstrona;
    2) każda podstrona powinna zawierać aktywne menu oraz wartości aktywnych cookies.
 */

/*  ĆWICZENIE 2
    Treść, jak w ćwiczeniu 1, lecz zamiast plików HTML wykorzystaj pliki widoków:
    1) EJS (wariant I);
    2) PUG (JADE) (wariant II).
 */