/*  NODE.JS PROMISES
    Kontrola przepływu sterowania.
    Zagnieżdżone obietnice (nested promises).

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/


const readingFile = require('./local_modules/readingfile');

const fileName1 = __dirname + '/files/dane1.txt';
const fileName2 = __dirname + '/files/dane2.txt';
const fileName3 = __dirname + '/files/dane3.txt';

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
