/*  NODE.JS EVENTS
    Wprowadzenie.
    Klasa EventEmitter. Metody on() i emit().

    © Piotr Siewniak, wersja: 20.XI.2021 r.
*/

/* UWAGA
    Aplikacje Node.js są programami sterowanymi zdarzeniami (event driven programs).
    Po uruchomieniu serwera, a następnie po zainicjowaniu zmiennych i zdefiniowaniu funkcji
    Node oczekuje na wystąpienie zdarzeń.
    Wystąpienie zdarzeń jest nasłuchiwane w tzw. pętli zdarzeń (event loop).
    Zaraz po publikacji (zgłoszeniu) określonego zdarzenia wywoływana jest funkcja
    obsługi (event handler), skojarzona z tym zdarzeniem.

    Zdarzenia są identyfikowane za pomocą nazw - identyfikatorów.

    Funkcje obsługi zdarzeń nazywane są często listenerami (listeners).
 */
/* UWAGA
    Zdarzenia w Node są przetwarzane przy użyciu klasy EventEmitter zdefiniowanej we wbudowanym
    module o nazwie 'events'. Klasa EventEmitter posiada właściwości i metody umożliwiające
    realizację różnych zadań związanych ze zdarzeniami. Obiekt należący do klasy EventEmitter
    (lub jej klasy pochodnej) nazywany jest emiterem (emitter).
    Podstawowa obsługa danego zdarzenia polega na powiązaniu (skojarzeniu) tego zdarzenia
    ze zdefiniowaną funkcją obsługi. Jest to nazywane rejestracją funkcji obsługi.
    Dla określonego zdarzenia można zdefiniować i zarejestrować wiele funkcji obsługi.

    Podsumowując, obiekt klasy EventEmitter (lub jej klasy pochodnej) - emiter (emitter) -
    ma dwa zasadnicze zadania:
    1) emitowanie (publikowanie, zgłaszanie) zdarzeń za pośrednictwem ich nazw;
    2) rejestrowanie i usuwanie funkcji obsługi zdarzeń nazywanych listenerami (listeners).
 */

// Dołączenie zasobów modułu wbudowanego (podstawowego) events:
const events = require('events');

// Utworzenie instancji (obiektu) klasy EventEmitter:
const eventEmitter = new events.EventEmitter();
/* UWAGA
    Utworzony obiekt eventEmitter - jako instancja klasy EventEmitter - zawiera
    właściwości i metody pozwalające na przechwytywanie i obsługę zdarzeń.
 */

// Określenie nazwy obsługiwanego zdarzenia:
const eventName = "event_name";

// Skojarzenie funkcji obsługi ze zdarzeniem eventName:
eventEmitter.on(
    eventName, // nazwa zdarzenia
    () => { // funkcja zwrotna stanowiąca litenera (funkcję obsługi) zdarzenia
        console.log(`Wywołanie funkcji obsługi zdarzenia '${eventName}'`);
});
/* UWAGA
    Pierwszym argumentem metody on() jest nazwa - identyfikator zdarzenia.
    Drugi argument to funkcja typu callback, która pełni rolę listenera -
    - funkcji obsługi zdarzenia (event handler).

    Zamiast metody on() można używać jej aliasu: addListener().

    Z danym zdarzeniem może być skojarzonych wiele listenerów.

    Zadaniem metody on() jest skojarzenie określonej funkcji obsługi (listenera)
    ze zdarzeniem o podanej nazwie - inaczej: rejestracja listenera dla określonego zdarzenia.
    Funkcja obsługi zostaje dodana na końcu tablicy istniejących listenerów

    Metoda on() zwraca referencję do emitera (EventEmitter) i dzieki temu wywołania
    listenerów mogą być połączone. Metoda on() nie kontroluje, czy dodawana funkcja
    obsługi zdarzenia jest już zawarta na liście (w tablicy) listenerów.

    Dodanie nowego listenera do listy listenerów generuje zdarzenie 'newListener'.
    Z kolei usunięcie danego listenera z listy aktywnych listenerów powoduje wygenerowanie
    zdarzenia 'removeListener'.

    Podsumowując, zadaniem metody on() (lub addListener()) jest zarejestrowanie funkcji obsługi
    - listenera - dla zdarzenia identyfikowanego za pomocą jego nazwy.
 */

/* UWAGA
    Jeśli obiekt klasy EventEmiter napotka jakikolwiek błąd, to generuje zdarzenie 'error'.
 */

/* UWAGA
    Funkcja obsługi zdarzenia stanowi funkcję zwrotną (callback).
    W bloku kodu funkcji nasłuchiwane jest zdarzenie o nazwie eventName.

    Funkcja obsługi zdarzenia zostanie wykonana dopiero po przechwyceniu (otrzymaniu)
    tego zdarzenia.
 */

// Wyświetlenie tablicy zawierającej wykaz obsługiwanych zdarzeń:
console.log(eventEmitter.eventNames());

// Publikacja (zgłoszenie) zdarzenia:
eventEmitter.emit(eventName);
/* UWAGA
    Publikacja zdarzenia o podanej nazwie za pomocą metody emit() powoduje wywołanie
    wszystkich zarejestrowanych funkcji obsługi (listenerów) dla tego zdarzenia.
    Jeśli funkcje obsługi mają w swoich definicjach określone parametry,
    wówczas do funkcji obsługi przekazywane są odpowiadające im argumenty.

    Funkcje obsługi - listenery są wywoływane w kolejności ich rejestracji.

    W miejscu publikacji (zgłoszenia) danego zdarzenia musi istnieć zarejestrowany listener.
    W takim przypadku metoda emit() zwraca wartość true.
    W przeciwnym przypadku, odsłuchanie opublikowanego zdarzenia nie będzie możliwe
    i metoda emit() zwróci wartość false.
 */

