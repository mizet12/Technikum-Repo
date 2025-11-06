/* NODE.JS
   Serwer HTTP - WPROWADZENIE.

   Metoda http.createServer().
   Metody: res.writeHead(), res.write(), res.end().
   Metoda server.listen().

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

/* UWAGA
    Serwer webowy (serwer HTTP, serwer WWW) jest potrzebny, aby obsłużyć strony/podstrony
    danej aplikacji webowej (internetowej).
    Np. wpisanie adresu strony w pasku adresowym przegladarki to żądanie HTTP GET (HTTP request).
    Serwer webowy wysyła z powrotem do klienta (przeglądarki) żądaną stronę jako odpowiedź HTTP
    (HTTP response).

    Serwer HTTP to aplikacja/program obsługujący żądania HTTP dla aplikacji, które są wysyłane
    przez klienta HTTP. Jak wspomniano wcześniej, serwer WWW zwraca do klienta HTTP odpowiedzi
    w postaci stron WWW. Klient HTTP to np. przeglądarka internetowa.

    Serwer webowy obsługuje żądania klienta wykonując skrypty. Może on przekierować zadanie
    do serwera aplikacji (application server), który je wykonuje/przetwarza np. przy
    współudziale bazy danych, a następnie - za pośrednictwem serwera WWW - wysyła odpowiedź
    do klienta (przeglądarki). Skrypty (kod), które obsługują żądania od klienta oraz komunikują
    się z bazą danych (np. MySQL, MongoDB) to oprogramowanie back-end'owe.
 */

/* UWAGA
    Np. aplikacje ASP.NET, ASP.NET Core są obsługiwane przez serwer webowy IIS (IIS Express).
    Z kolei aplikacje języka Java są obsługiwane przez serwer Apache.

    W Node, w którym skrypty pisane są w języku JavaScript, można utworzyć i skonfigurować
    własny serwer webowy (serwer HTTP, serwer WWW), oprócz innego kodu back-endowego.
    Node pozwala on na obsługę żądań HTTP w sposób asynchroniczny, czyli nieblokujący.
    Można oczywiście uruchamiać aplikacje internetowego w środowisku serwerów IIS i Apache,
    ale rekomendowane jest wykorzystanie serwera webowego Node.

    Serwer Node udostępnia różne mechanizmy do obsługi żądań HTTP (GET lub POST).
    Zapewnia on skuteczną i wydajną wymianę informacji (interakcję) między użytkownikiem (przeglądarką),
    a aplikacją.
 */

// Import (dołączenie) modułu wbudowanego (built-in module) http:
const http = require('http');
/* UWAGA
    Moduł http zalicza się do modułów podstawowych (core modules).
    Dlatego też, nie wymaga on dodatkowej instalacji za pomocą menadżera pakietów npm.
 */

const PORT = 8080; // w razie potrzeby należy zmienić

// Utworzenie serwera HTTP oraz aplikacji webowej:
http.createServer(
    (req, res) => { // req - request (żądanie), res - response (odpowiedź)
        /* UWAGA
            Argument metody createServer() stanowi funkcja zwrotna (callback), która nazywana jest
            "request listenerem". Listener (jako funkcja obsługi) jest wykonywany każdorazowo w przypadku,
            gdy serwer otrzyma żądanie od klienta na zadanym porcie, np. http://localhost:8080.

            Funkcja "request listener" (jako funkcja zwrotna) ta jest wykonywana, jeśli jej
            funkcja nadrzędna (metoda createServer()) zakończy swoje działanie.

            Zadaniem funkcji request listener jest obsługa żądania od klienta oraz udzielenie
            mu odpowiedzi zwrotnej. Tym samym, funkcję tę można nazwać funkcją obsługi żądania i odpowiedzi.

            Pierwszy argument listenera żądań - req, stanowi obiekt żądania (request object).
            Reprezentuje on obiekt (klasę) IncomingMessage.
            Obiekt żadania jest używany do uzyskania informacji o żądaniu HTTP np. adresie URL,
            nagłówku żądania, danych itd.

            Drugi argument (res) stanowi obiekt odpowiedzi serwera (obiekt ServerResponse).
            Obiekt ten posiada różne metody do obsługi strumienia odpowiedzi (response stream) do klienta.

            Funkcja typu callback, stanowiąca argument metody createServer() może być
            oczywiście zdefiniowana oddzielnie - niezależnie od metody createServer().
         */
        /* UWAGA
            Aplikacja webowa jest tworzona w ciele funkcji zwrotnej, która jako argumenty
            przyjmuje obiekty żądania HTTP (req) i odpowiedzi HTTP (res).
         */

        // Zapis nagłówka odpowiedzi (response header):
        res.writeHead(
            200, // kod statusu odpowiedzi HTTP (HTTP response status code)
            /* UWAGA
               Ustawienie statusu odpowiedzi na 200 oznacza pomyślną odpowiedź (successful
               response) do klienta.
             */
            "Sukces operacji", // wiadomość statusu odpowiedzi HTTP (HTTP response status message)
            /* UWAGA
               Drugi argument (opcjonalny) to wiadomość czytelna dla człowieka odpowiadająca kodowi
               statusu odpowiedzi HTTP.
             */
            {'Content-Type': 'text/html'} // nagłówek odpowiedzi HTTP
            /* UWAGA
                {'Content-Type': 'text/html'} reprezentuje nagłówek odpowiedzi informujący,
                że do użytkownika zostanie przesłany kod HTML.
                Nagłówek odpowiedzi dostarcza przeglądarce informacji, jakiego typu dane są
                z powrotem do niej przesyłane, np. zwykły tekst (text/plain), kod HTML (text/html),
                dane JSON (appliacation/json) itd.
             */
        );
        /* UWAGA
           Właściwość (metoda) writeHead() umożliwia wysłanie nagłówka odpowiedzi dla żądania.
         */

        // Wysłanie pierwszej porcji zawartości (ciała) odpowiedzi do klienta:
        res.write(
            '<html lang="pl">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '</head>' +
            '<body>' +
            '<h1 style="font-family: Consolas">Odpowiedź serwera na żądanie ...</h1>' +
            '<p style="color: red; font-weight: bold;">' +
            'Komunikat testowy w odpowiedzi serwera do przeglądarki ...' +
            '</p>' +
            '</body>' +
            '</html>'
        );
        /* UWAGA
            Metoda write() z modułu http pozwala na wysłanie fragmentu treści odpowiedzi (response body)
            do przegladarki.

            Metoda ta może być wywoływana wielokrotnie w celu przesłania kolejnych porcji (kawałków)
            ciała odpowiedzi, np.
            res.write('<html lang="pl">');
            res.write('<head>');
            res.write('<meta charset="UTF-8">');
            res.write('</head>');
            res.write('<body>');
            res.write('<h1>Odpowiedź serwera na żądanie ...</h1>');
            res.write('<p style="color: red;">Komunikat testowy w odpowiedzi serwera do przeglądarki ...</p>');
            res.write('</body>');
            res.write('</html>');

            Przy pierwszym wywołaniu metody res.write() do klienta wysyłane są zbuforowane informacje nagłówka
            (buffered header information) oraz pierwsza porcja (chunk) ciała.
            Przy drugim wywołaniu res.write() do klienta wysyłana jest (oddzielnie) druga porcja danych.
            Drugie wywołanie res.write() powoduje, że Node wysyła dane strumieniowo i druga porcja strumienia
            jest buforowana do pierwszej - wcześniej wysłanej porcji.
            Porcja danych jest albo łańcuchem znaków (string), albo buforem (buffer).
         */

        /* UWAGA
           W ogólności, serwer webowy może zwrócić do klienta dane należące do różnych typów,
           np. zwykły tekst, kod HTML, tekst w formacie JSON, XML, czy też CSV.
           Oprócz tekstu, serwer może przesłac do klienta dane w postaci plików PDF, zip, audio i video itd.
         */

        // Przesłanie odpowiedzi do klienta:
        res.end('Nagłówek odpowiedzi (i sama odpowiedź) zostały w całości przesłane do klienta ...');
        /* UWAGA
            Wywołanie metody end() oznacza zakończenie odpowiedzi serwera, które (jak tutaj) może być
            połączone z wyświetleniem komunikatu w przeglądarce.
            Zwykle jednak używa się tej metody bez żadnych argumentów.
         */
    }
).listen(PORT);
/* UWAGA
    Wywołanie metody listen(PORT) uruchamia serwer webowy na zadanym porcie.
    Oznacza to, że zdefiniowany server HTTP nasłuchuje (oczekuje na żądania) na tym porcie.
 */

// Wyświetlenie informacji w konsoli:
console.log('Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie', PORT);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);