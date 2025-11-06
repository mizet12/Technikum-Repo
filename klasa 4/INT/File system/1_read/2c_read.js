/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda readFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

// Dołączenie modułów podstawowych:
const http = require('http');
const fs = require('fs');

// Określenie nazwy pliku z danymi JSON (ze ścieżką):
const fileName = __dirname + '/files/data.json';
const PORT = 8082;

// Utworzenie serwera HTTP nasłuchującego na zadanym porcie:
http.createServer((req, res) => {
    // Odczyt zawartości pliku:
    fs.readFile(fileName,           // nazwa pliku
                'utf8',             // kodowanie
                (err, data) => {    // funkcja wywołania zwrotnego (callback)
                    if (err) throw err; // w przypadku błędu generowany jest wyjątek

                    // Podstawienie odczytanych danych do zmiennej łańcuchowej person:
                    const sPerson = data;
                    /* UWAGA
                        Zmienna sPerson stanowi łańcuch JSON (JSON string).
                     */
                    console.log("sPerson:", sPerson);

                    // Konwersja łańcucha JSON na obiekt JS:
                   const oPerson =  JSON.parse(sPerson);
                   console.log("oPerson:", oPerson);
                   /* UWAGA
                        Konwersja łańcucha JSON na obiekt JS została wykonana
                        wyłącznie w celach demonstracyjnych.
                    */

                    // Określenie nagłówka odpowiedzi do klienta:
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    /* UWAGA
                        Do klienta (przeglądarki) wysyłany będzie kod HTML.
                     */

                    // Definicja zmiennej pomocniczej:
                    const sTemp = '<h3 style = "font-family: Consolas; color: blue;">' +
                                oPerson.imie + "<br /> " +
                                oPerson.nazwisko + "<br /> " +
                                oPerson.plec + "<br /> " +
                                oPerson.wiek + "<br /> " +
                                "</h3>";

                    // Określenie zawartości odpowiedzi:
                    res.write(sTemp);
                    // Przesłanie danych do klienta i zakończenie transmisji:
                    return res.end();
    });
}).listen(PORT);

// Wyświetlenie komunikatu pomocniczego w konsoli:
console.log(`Serwer HTTP nasłuchuje na porcie: ${PORT}`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);

