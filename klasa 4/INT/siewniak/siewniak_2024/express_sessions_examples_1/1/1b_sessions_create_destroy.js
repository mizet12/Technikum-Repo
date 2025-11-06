/*  NODE EXPRESS - SESIONS

    © Piotr Siewniak, wersja: 28.II.2022 r.
*/

const express = require("express");
const session = require("express-session");
const app = express();

const PORT = 8051;

// Zmienna pomocnicza (obiekt w formacie JSON):
const user = {
    username: "piotr",
    job_position: "teacher"
};

// Konfiguracja aplikacji do użycia sesji:
app.use(session({
    secret: 'klucz', // klucz wykorzystywany do obliczania ID sesji
    resave: true, // sesja będzie modyfikowana (zapisywana w magazynie) przy każdym żądaniu
    saveUninitialized: true, // nowa sesja zostanie zapisana
    cookie: {
        expires: 1000 * 60 * 60, // 1 godzina
        httpOnly: true, // JS nie ma dostępu do cookie
        path: "/" // ścieżka cookie
    }
}))

// Obsługa żądania GET na roucie (ścieżce) /:
app.get("/", (req, res) => {
    // Definicja zmiennej sesyjnej:
    req.session.user = user;

    // Sygnalizacja konca przesyłania danych do klienta (połączona z wysłaniem komunikatu):
    res.end("Sesja zostala zainicjowana (wznowiona) ...");

    // Wyświetlenie w konsoli terminala informacji pomocniczych:
    console.log("req.session: ", req.session);
});

// Obsługa żądania GET na roucie /app:
app.get('/app', (req,res) => {
    // Przesłanie odpowiedzi do klienta w formacie JSON:
    res.json(req.session);

    // Wyświetlenie w konsoli terminala informacji pomocniczych:
    console.log("req.session: ", req.session);
});

// Obsługa żądania GET na roucie /end:
app.get('/end', (req, res) => {
    // Usunięcie sesji:
    req.session.destroy((err) => {
        if (err) {
            res.send("Uwaga błąd!", err.message);
            return
        }

        // Przesłanie odpowiedzi do klienta:
        res.send("Sesja została usunięta pomyślnie ....");

        // Wyświetlenie w konsoli terminala informacji pomocniczych:
        console.log("req.session: ", req.session);
    });
});

// Uruchomienia serwera aplikacji Express:
const server = app.listen(PORT,  "127.0.0.1", () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/app`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/end`);
});

/* ĆWICZENIE
   Zmodyfikuj kod aplikacji - wykorzystaj dodatkowe zmienne sesyjne:
   a) tablicę (np. tablicę kolorów);
   b) obiekt (np. obiekt konfiguracji aplikacji).
 */


