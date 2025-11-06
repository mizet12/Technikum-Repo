/*  NODE.JS GLOBAL OBJECTS
    Obiekt globalny process.


    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/



process.stdout.write("Komunikat z pierwszej linii kodu aplikacji ...\n");
process.stdin.setEncoding('utf8');
process.stdin.on(
    'readable', // nazwa zdarzenia
    () => { // funkcja obsługi zdarzenia readable
        const chunk = process.stdin.read();
        if (chunk !== null) {
            process.stdout.write("echo: " + chunk);
        }
    }
);
process.stdin.on(
    'end', // nazwa zdarzenia
    () => { // funkcja obsługi zdarzenia end
        process.stdout.write('end');
    }
);
console.log(process.cwd(), '\n');




