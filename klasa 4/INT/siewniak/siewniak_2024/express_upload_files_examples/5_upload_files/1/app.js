/*  NODE EXPRESS - UPLOAD PLIKÓW
    Przekazanie pojedynczego pliku.

    © Piotr Siewniak, wersja: 24.II.2022 r.
*/

/* UWAGA
    Przed uruchomieniem aplikacji należy zainstalować framewerk multer.
 */

const path = require('path');
const express = require('express');

// Dołączenie zasobów publicznych modułu 'multer':
const multer  = require('multer');
// Wyświetlenie zawartości funkcji multer() w celach pomocniczych:
console.log("Funkcja multer():", multer);
/* UWAGA
    Multer stanowi funkcję pośrednią (middleware funkction) wykorzystywaną do obsługi
    danych zakodowanych za pomocą metody 'multipart/form-data', która jest używana
    do uploadowania plików.
    Należy pamiętać, że domyślną metodą kodowania w HTML jest 'application/x-www-form-urlencoded'.

    W celu uzyskania możliwości przesyłania plików (formularz zawiera pole input typu file)
    za pomocą metody HTTP POST należy użyć kodowania multipart/form-data.

    Zadaniem funkcji pośredniej multer() jest dodanie obiektu body oraz obiektu file (lub files)
    do obiektu żądania req. Obiekt req.body zawiera dane pobrane z pól tekstowych formularza,
    natomiast obirkt req.file (lub req.files) - pliki przesyłane za pośrednictwem formularza.
 */

const PORT = 8034; // w razie potrzeby należy zmienić

// Utworzenie obiektu aplikacji:
const app = express();

// Konfiguracja aplikacji do obsługi plików statycznych:
app.use(express.static(`${__dirname}/public`));
/* UWAGA
    Katalog '/public' oraz wszystkie jego podkatalogi będą traktowane jako publiczne.
 */
// Obsługa żądania GET na zadanej ścieżce:
app.get('/index.html', (req, res) => {
    // Przesłanie pliku index.html do klienta (przeglądarki):
    res.sendFile( __dirname + "/public/html/index.html" );
})


// Ustalenie katalogu docelowego i nazwy pliku docelowego przekazywanego pliku:
const storage = multer.diskStorage({
    // Ustalenie katalogu docelowego:
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, './public/uploads/'));
        /* UWAGA
            Plik zostanie zapisany w katalogu /public/uploads/ względem roota aplikacji.
         */
    },
    // Ustalenie (nowej) nazwy przekazywanego pliku:
    filename: (req, file, callback) => {
        callback(null, "new_" + file.originalname);
        /* UWAGA
            Plik zostanie zapisany w katalogu w katalogu docelowym pod nazwą new_"oryginalna nazwa".
         */
    }
});

/* UWAGA
    Obie właściwości (destination i filename) są funkcjami. Każda z nich ma trzy argumenty:
    1. obiekt żadania (req);
    2. obiekt pliku (file);
    3. obiekt funkcji zwrotnej (callback).

    Wywołanie funkcji callback ma dwa argumenty:
    1. null - oznaczający, że nie zostanie przekazany żaden błąd;
    2. nowa nazwa pliku w katalogu docelowym.
 */

// Określenie parametrów (opcji) multera:
const upload = multer({
    storage: storage,   // miejsce zapisu i nazwa docelowa pliku
    limits: {
        limit: 1000000  // limit danych w bajtach
    }
});
/* UWAGA
    Wywołanie funkcji multer() akceptuje wykorzystanie opcji - jak tutaj.
 */

// Wyświetlenie zawartości obiektu upload w celach pomocniczych:
console.log("Obiekt upload:", upload);


// Rejestracja i obsługa żądania POST na roucie (ścieżce) /upload:
app.post(
    // Określenie routa:
    '/upload',
    // Ustalenie liczby przekazywanych plików:
    upload.single('file'),
    // Definicja funkcji obsługi routa:
    (req, res) => {
        console.log("WYBRANY PLIK ZOSTAŁ PRZESŁANY ...");

        // Pomocnicze wyświetlenie zawartości obiektu req.file w konsoli:
        console.log("Obiekt req.file = ", req.file);
        // Przesłanie odpowiedzi do klienta:
        res.send(
            "<h4>Komunikat kontrolny: </h4>" +
            "<p>plik " + req.file.filename + "</p>" +
            "<p>został zapisany w katalogu docelowym " + req.file.destination + "</p>"
        );
});

// Uruchomienie serwera aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://127.0.0.1:${PORT}/index.html`)
})
