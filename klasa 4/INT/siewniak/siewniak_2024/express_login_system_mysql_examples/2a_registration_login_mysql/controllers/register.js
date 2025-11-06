/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników bez użycia sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

// Utworzenie obiektu połączenia z bazą danych:
const connection = require('../config');
/* UWAGA
   Polecenie require('../config') pozwala na import obiektu połączenia z modułu config.
*/

// Definicja funkcji obsługi rejestracji użytkownika (połączona z jej eksportem):
module.exports.register = (req, res) => {
    // Utworzenie zmiennej pomocniczej (obiektu) user:
    var user = {
        "email": req.body.email,
        "password": req.body.password
    }
    /* UWAGA
        W obiekcie user zapisano dwie pary klucz-wartość z pobrane treści żądania POST:
        1) email + jego wartość;
        2) password + jego wartość.
     */

    // Wykonanie polecenia SQL:
    connection.query(
        'INSERT INTO users SET ?', // polecenie z parametrem
        user, // argument odpowiadający parametrowi
        (error, results) => { // funkcja obsługi
            if (error) { // w przypadku błędu w czasie wykonania polecania SQL
                // Przesłanie odpowiedzi do klienta w formacie JSON:
                res.json({
                    status: false,
                    message: 'Uwaga! Wystąpił błąd podczas zapisu użytkownika w bazie danych!'
                })
            } else { // jeśli polecenie SQL zostało wykonane bez błędu
                // Przesłanie odpowiedzi do klienta w formacie JSON:
                res.json({
                    status: true,
                    message: 'Nowy użytkownik został pomyślnie zapisany w bazie danych ...',
                    data: results
                })
            }
        });
}
