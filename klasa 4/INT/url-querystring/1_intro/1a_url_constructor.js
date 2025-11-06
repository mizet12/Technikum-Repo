/* NODE.JS - interfejs (moduł) url: WHATWG API.
   Tworzenie obiektów URL za pomocą konstruktora.

    © Piotr Siewniak, wersja: 28.VI.2022 r.
*/

/* UWAGA
    Moduł url daje dwie możliwości - dwa interfejsy API do przetwarzania adresów URL:
    1) WHATWG API
    2) Legacy API;

    Nowsze - zalecane do użycia WHATWG API wykorzystują przeglądarki (zgodnie ze standardem WHATWG URL Standard).
    Legacy API jest charakterystyczne wyłącznie dla Node.js.

    Tutaj zademonstrowano wykorzystanie WHATWG API oparte na wykorzystaniu konstruktora URL().
 */


/* UWAGA
    Za pośrednictwem konstruktora URL(), obiekt można utworzyć albo przy wykorzystaniu łańcucha (string)
    reprezentującego adres bezwzględny (absolute URL adress), albo adresu względnego (relative URL adress)
    w połączeniu z adresem bazowym (base/origin adress).

    Node zapewnia globalny dostęp do konstruktora URL. Tym samym, w przypadku wykorzystania obiektu URL
    utworzonego za pośrednictwem konstruktora nie jest konieczna instalacja modułu url.
 */

// Zmienna pomocnicza:
const absoluteUrlString = "https://www.google.com/search?q=studia+informatyka";
/* UWAGA
    Zmienna pomocnicza (łańcuch znaków) absoluteUrlString reprezentuje adres bezwzględny URL.
 */
console.log("Adres bezwzględny:", absoluteUrlString);

// Utworzenie obiektu URL na podstawie adresu bezwzględnego:
const url1 = new URL(absoluteUrlString);
/* UWAGA
    Obiekt URL został utworzony na podstawie zadanego łańcucha URL (URL string).
    W przypadku niepowodzenia (błędu) wyrzucony (zgłoszony) zostaje wyjątek należący
    do klasy TypeError.

    Dostęp do poszczególnych właściwości obiektu url uzyskuje się za pośrednictwem
    wbudowanych setterów i getterów.
 */
// Prezentacja adresu URL w formacie JSON:
console.log("url: ", url1);
// Prezentacja wartości wybranych właściwości obiektu url:
console.log("protocol: ", url1.protocol);
console.log("host: ", url1.host);
console.log("pathname: ", url1.pathname);
console.log("search: ", url1.search);
console.log("searchParams: ", url1.searchParams);
console.log();


// Zmienna pomocnicza reprezentująca adres względny URL:
const relativeUrlString = '../search?q=studia+informatyka';
// Adres bazowy URL (base/origin URL)
const urlBaseString = "https://www.google.com/";

// Utworzenie obiektu URL:
const url2 = new URL(relativeUrlString, urlBaseString);
/* UWAGA
    Obiekt url2 został utworzony na podstawie wartości dwóch argumentów:
    1) adresu względnego URL;
    2) adresu bazowego.
 */
console.log("Adres URL:", urlBaseString + relativeUrlString);

console.log("host: ", url2.host);
console.log("pathname: ", url2.pathname);
console.log("search: ", url2.search);
console.log("hash: ", url2.hash);
