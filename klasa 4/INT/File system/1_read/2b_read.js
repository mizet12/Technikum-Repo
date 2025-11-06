/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda readFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

// Dołączenie modułów podstawowych:
const http = require('http');
const fs = require('fs');

// Określenie nazwy pliku z danymi JSON (ze ścieżką):
const fileName = __dirname + '/files/data.json';
const PORT = 8081;

// Utworzenie serwera HTTP nasłuchującego na zadanym porcie:
http.createServer((req, res) => {
    // Odczyt zawartości pliku w sposób asynchroniczny:
    fs.readFile(fileName,           // nazwa pliku ze ścieżką
                'utf8',             // kodowanie
                (err, data) => {    // funkcja wywołania zwrotnego (callback)
                    if (err) throw err; // w przypadku błędu generowany jest wyjątek

                    // Podstawienie odczytanych danych do zmiennej łańcuchowej person:
                    const sPerson = data;
                    console.log("sPerson:", sPerson);
                    console.log("typeof sPerson:", typeof sPerson);

                    // Konwersja łańcucha JSON na obiekt JS:
                    const oPerson =  JSON.parse(sPerson);
                    console.log("oPerson:", oPerson);
                    console.log("typeof oPerson:", typeof oPerson);

                    // Konwersja obiektu JS na łańcuch JSON:
                    const sPerson_ = JSON.stringify(oPerson);
                    console.log("sPerson_:", sPerson_);
                    console.log("typeof sPerson_:", typeof sPerson_);
                    /* UWAGA
                        Konwersja łańcucha JSON na obiekt i odwrotnie została
                        wykonana w celach demonstracyjnych.
                     */

                    // Określenie nagłówka odpowiedzi do klienta:
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    /* UWAGA
                        Do klienta będą przesyłane dane tekstowe w formacie JSON.
                     */

                    // Określenie zawartości odpowiedzi:
                    res.write(sPerson_);
                    //Przesłanie danych do klienta i zakończenie transmisji:
                    return res.end();
    });
}).listen(PORT);

// Wyświetlenie komunikatu pomocniczego w konsoli:
console.log(`Serwer HTTP nasłuchuje na porcie: ${PORT}`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);

