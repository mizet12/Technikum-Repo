/*  NODE.JS GLOBAL OBJECTS
    Obiekt globalny process.
    Metody process.nextTick(), process.exit().
    Zdarzenie 'exit'.

    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/


// Zwykły kod synchroniczny - wyświetlenie nazwy katalogu ze ścieżką:
console.log("Komunikat z pierwszej linii kodu aplikacji - katalog:", process.cwd());

process.nextTick(() => {
    console.log('Komunikat z funkcji zwrotnej - argumentu metody nextTick() ...');
});
/* UWAGA
    Zadaniem metody nextTick() jest umieszczenie funkcji zwrotnej stanowiącej jej argument
    w kolejnej iteracji pętli zdarzeń (event loop). Tym samym, jeśli pętla zdarzeń zakończy
    wcześniej swoje działanie, funkcja zwrotna nie zostanie wykonana.
 */

// Wywołanie funkcji asynchronicznej:
setTimeout(() => {
    console.log("Komunikat z funkcji zwrotnej - argumentu funkcji asynchronicznej setTimeout() ...");
}, 0);

//
process.on(
    'exit', // nazwa zdarzenia
    () => { // funkcja obsługi zdarzenia exit
        console.log('Komunikat informacyjny o zakończeniu bieżącego procesu ...');
    }
);
/* UWAGA
    Zdarzenie exit jest emitowane w sytuacji, gdy bieżący proces ma się zakończyć - czyli pętla
    zdarzeń ma zakończyć działanie. Proces faktycznie się zakończy po zakończeniu działania wszystkich
    listenerów, które kończą swoje działanie.

    Zakończenie działania pętli zdarzeń oznacza, że żadne operacje ASYNCHRONICZNE
    nie zostaną już wykonane!
    Tym samym, funkcja zwrotna stanowiąca procedurę obsługi zdarzenia 'exit'
    powinna zawierać wyłącznie operacje SYNCHRONICZNE!
 */

// Zwykły kod synchroniczny:
console.log("Komunikat z ostatniej linii kodu aplikacji ...");

// Zakańczenie bieżącego procesu:
process.exit(); // wykonać testy działania programu umieszczając to wywołanie w komentarzu
/* UWAGA
    Metoda process.exit() jest używana do zakończenia bieżącego procesu.
    Zakończenie bieżącego procesu jest równoważne zakończeniu pętli zdarzeń.
 */
/* UWAGA
    Jeśli program Node jest uruchomiony w konsoli, to można go również zakończyć
    naciskając kombinację klawiszy Ctrl + C.
 */

/* UWAGA
    Wynik działania programu jest następujący:
    Komunikat z pierwszej linii kodu aplikacji - katalog: J:\materialy_ps\node.js\Gotowe\global_objects\4_process
    Komunikat z ostatniej linii kodu aplikacji ...
    Komunikat informacyjny o zakończeniu bieżącego procesu ...

    Jeśli wywołanie metody process.exit() zostanie usunięte, wówczas wynik działania
    aplikacji zmienia się diametralnie:
    Komunikat z pierwszej linii kodu aplikacji - katalog: J:\materialy_ps\node.js\Gotowe\global_objects\4_process
    Komunikat z ostatniej linii kodu aplikacji ...
    Komunikat z funkcji zwrotnej - argumentu metody nextTick() ...
    Komunikat z funkcji zwrotnej - argumentu funkcji setTimeout() ...
    Komunikat informacyjny o zakończeniu bieżącego procesu ...

    Wynika to z działania funkcji process.exit(), które powoduje zakończenie bieżącego procesu,
    czyli pętli zdarzeń. Tym samym, żadne operacje asynchroniczne nie zostaną już wykonane.
 */