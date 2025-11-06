/* NODE EXPRESS.
   Jade (Pug) Template Engine.
   Dane dynamiczne.

   © Piotr Siewniak, wersja: 22.IV.2022 r.
*/

const express = require('express');
const path = require('path');

// Utworzenie obiektu aplikacji:
const app = express();

const PORT = 8089;


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
   Dane określone powyżej zdefiniowano w postaci obiektów w notacji literałowej.
 */

// Obsługa żądania GET na roucie (ścieżce) /:
app.get('/', (req, res) => {
    // Renderowanie zawartości pliku szablonu i przesłanie wynikowego HTML do klienta:
    res.render('index', {auto: brand, data: parameters});
    /* UWAGA
        Do renderowanego pliku widoku są przesyłane dane dynamiczne.
        Dane te pochodzą ze zdefiniowanych wcześniej obiektów auto i parameters.
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
   Na stronie szablonu zdefiniować proste menu składające się z 3 opcji,
   pozwalające na wybór podstrony zawierającej dane ciężarówki:
   1) Jelcz 315M,
   2) Jelcz 316,
   3) Jelcz 317, 317D.
   Każda podstrona powinna zawierać najważniejsze dane ciężarówki oraz jej zdjęcie.
   Wymienione powyżej informacje - zawartość podstrony (content subpage) - powinny być
   zapisane w niezależnych plikach.
   Nagłówek i stopka na każdej podstronie są identyczne.
 */