const fs = require('fs');

// Definicja funkcji do odczytu zawartości pliku tekstowego:
module.exports = function readingFile(fileName) {
    const promise = new Promise((resolve, reject) => {
        // Odczyt zawartości pliku tekstowego w sposób asynchroniczny:
        fs.readFile(fileName, (err, data) => {
            if (err)
                // Przesłanie obiektu err do funkcji obsługi stanu rejected:
                reject(err);
            else
                // Przesłanie danej data do funkcji obsługi stanu resolved:
                resolve(data);
        })
    })
    return promise; // funkcja zwraca obiekt obietnicy
}

