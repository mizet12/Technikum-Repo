/*  NODE.JS EVENTS
    Przechwytywanie i obsługa zdarzeń.

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

// Dołączenie zasobów modułów wbudowanych:
const http = require('http');
const events = require('events');

// Deklaracja zmiennych pomocniczych
const hostname = '127.0.0.1';
const port = 8080;
const eventName = 'send_data';

// Utworzenie obiektu klasy EventEmitter:
const emitter = new events.EventEmitter();

// Utworzenie serwera HTTP:
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Komunikat z serwera HTTP ...")
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Serwer HTTP nasłuchuje na http://${hostname}:${port}/`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://${hostname}:${port}/`);
});


// Skojarzenie zdarzenia ze zdefiniowaną funkcją obsługi:
emitter.on(eventName, (data) => {
    console.log('Przesłane dane: ' + data);
    /* UWAGA
        Funkcja obsługi zdarzenia stanowi funkcję typu callback.
        W bloku kodu funkcji nasłuchiwane jest zdarzenie o nazwie przechowywanej
        w zmiennej eventName.

        Funkcja obsługi zdarzenia zostanie wykonana dopiero po przechwyceniu (otrzymaniu)
        tego zdarzenia.
     */
});

// Publikacja zdarzenia:
emitter.emit(eventName, 1);
