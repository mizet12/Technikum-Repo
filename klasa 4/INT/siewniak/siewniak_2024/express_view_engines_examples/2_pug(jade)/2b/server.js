/* NODE EXPRESS - Jade (Pug) Template Engine.

   Wykorzystanie stylów CSS, skryptu JS oraz obrazka.
   Dane dynamiczne.

   © Piotr Siewniak, wersja: 22.IV.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8090;

// KONFIGURACJA APLIKACJI DO UŻYCIA WIDOKÓW I PLIKÓW STATYCZNYCH
// Określenie silnika widoków:
app.set("view engine", "jade");
// Określenie foldera zawierającego pliki widoków:
app.set('views', path.join(__dirname, 'views'));
// Konfiguracja katalogu z plikami statycznymi:
app.use(express.static(path.join(__dirname, 'public')));

// Określenie danych:
const brand = {
    marka: "Jelcz",
    model: "317"
}
const parameters = {
    moc: 200,
    moment: 743
}
/* UWAGA
    Dane zostały zdefiniowane w postaci obiektów w notacji literałowej.
 */

// Obsługa żądania GET na roucie /:
app.get('/', (req, res) => {
    // Renderowanie zawartości pliku szablonu index.jade i przesłanie wynikowego HTML do klienta:
    res.render('index', {auto: brand, data: parameters});
    /* UWAGA
        Do renderowanego pliku widoku są przesyłane dane dynamiczne.
        Dane te pochodzą z obiektów brand i parameters.
     */
});

// Uruchomienie serwera HTTP aplikacji:
const server = app.listen(PORT, () => {
    console.log(`Serwer nasłuchuje na porcie ${PORT}`);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
})

/* ĆWICZENIE 1
   Dla każego pliku widoku (index, header, footer) zdefiniowanć niezależne style CSS
   i zapisać je w osobnych plikach.
   Dołączyć pliki ze stylami do odpowiednich plików widoków.
*/

/* ĆWICZENIE 2
   Zdefiniować routera przy wykorzystaniu funkcji (obiektu) router.
   Odseparować kod routingu od właściwego kodu aplikacji poprzez umieszczenie kodu routera
   w osobnym, niezaleznym module Node.
*/