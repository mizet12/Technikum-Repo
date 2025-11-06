/*  NODE.JS PROMISES
    Kontrola przepływu sterowania. Wykorzystanie callbacka.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

/* UWAGA
    Najprostszy sposób obsługi kodu asynchronicznego w Node stanowi wykorzystanie
    mechanizmu wywołań zwrotnych (callback'ów).
*/

const fs = require('fs');

// Odczyt zawartości pojedynczego pliku tekstowego:
const readFile = fs.readFile('./files/dane.txt',
    (err, data) => { // funkcja zwrotna (callback)
      if (err)
        console.log("Uwaga błąd! ", err.message);
      else
        console.log(data.toString());
})
