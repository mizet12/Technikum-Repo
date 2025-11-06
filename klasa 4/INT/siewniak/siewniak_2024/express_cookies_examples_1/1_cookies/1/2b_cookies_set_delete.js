/*  NODE EXPRESS - COOKIES.
    Tworzenie i usuwanie cookies.

    © Piotr Siewniak, wersja: 2.III.2022 r.
*/

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = 8022; // w razie potrzeby należy zmienić

// Konfiguracja aplikacji do użycia cookies:
app.use(cookieParser());

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Zmienna pomocnicza:
    let temp;
    // Nadanie wartości zmiennej pomocniczej temp:
    if (req.cookies.username) { // jeśli cookie o nazwie username jest określone
        temp = `<h4>Witaj ${req.cookies.username.toUpperCase()} </h4> 
                <a href="/delete-cookie">Usuń cookie</a>`;
    } else {
        temp = `<a href="/set-cookie">Ustaw cookie</a> <br />`;
    }

    // Wysłanie odpowiedzi do przeglądarki:
    res.send(temp);
});

// Obsługa żądania GET na roucie /set-cookie:
app.get('/set-cookie', (req, res) => {
    // Nadanie wartości i konfiguracja cookie o nazwie username:
    res.cookie('username', 'piotr', {
        maxAge: 1000*60*60 + Date.now() // czas ważności: 1 godzina
    });

    // Przekierowanie do strony głównej aplikacji:
    res.redirect('/');
});

// Obsługa żądania GET na roucie /delete-cookie:
app.get('/delete-cookie', (req, res) => {
    // Usunięcie cookie o nazwie username
    res.clearCookie('username');

    // Przekierowanie na stronę główną aplikacji:
    res.redirect('/');

});

// Uruchomienie serwera aplikacji:
app.listen(PORT, () => {
    console.log('Serwer nasłuchuje na porcie ', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/`);
});

/*  ĆWICZENIE 1
    Zmodyfikuj kod aplikacji na podstawie następujących założeń:
    1) każdej ścieżce (/, /set, /delete) powinna odpowiadać niezależna podstrona;
    2) każda podstrona powinna zawierać aktywne menu oraz wartości aktywnych cookies.
 */