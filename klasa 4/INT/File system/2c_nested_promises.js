/*  NODE.JS PROMISES
    Kontrola przepływu sterowania.
    Zagnieżdżone obietnice (nested promises).

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/


const fs = require('fs');

const readingFile = (fileName) => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(
            fileName,           // nazwa pliku
            (err, data) => {    // funkcja zwrotna (callback)
                if (err)
                    // Przesłanie danych do funkcji obsługi stanu rejected:
                    reject(err);
                else
                    // Przesłanie danych do funkcji obsługi stanu resolved:
                    resolve(data);
            }
        )
    })
    return promise; // funkcja readingFile() zwraca promisa
}

const fileName1 = './files/dane1.txt';
const fileName2 = './files/dane2.txt';
const fileName3 = './files/dane3.txt';

readingFile(fileName1)
    .then((data) => {
        console.log(data.toString());
        readingFile(fileName2)
            .then((data) => {
                console.log(data.toString());
                readingFile(fileName3)
                    .then((data) => {
                        console.log(data.toString());
                    })
                    .catch((err) => {
                        console.log("3");
                        console.log(err.message);
                    })
            })
            .catch((err) => {
                console.log("2");
                console.log(err.message);
            })
    })
    .catch((err) => {
        console.log("1");
        console.log(err.message);
    })
