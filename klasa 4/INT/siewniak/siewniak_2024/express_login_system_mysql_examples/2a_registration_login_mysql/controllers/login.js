/*  NODE.JS, MySQL
    Podstawowy system rejestracji i logowania użytkowników bez użycia sesji.

    © Piotr Siewniak, wersja: 21.III.2022 r.
*/

// Utworzenie obiektu połączenia z bazą danych:
const connection = require('../config');
/* UWAGA
   Polecenie require('../config') pozwala na import obiektu połączenia z modułu config.
*/

// Definicja funkcji logowania logowania (połączona z jej eksportem):
module.exports.login = (req, res) => {
    // Pobranie składników treści żądania POST (email i password) z formularza:
    var email = req.body.email;
    var password = req.body.password;

    // Wykonanie zapytania SQL z pojedynczym parametrem:
    connection.query(
        'SELECT * FROM users WHERE email = ?', // zapytanie z parametrem
        email, // argument odpowiadający parametrowi
        (error, results) => { // funkcja obsługi
            if (error) { // w przypadku błędu w czasie wykonania zapytania
                // Przesłanie odpowiedzi do klienta w formacie JSON:
                res.json({
                    status: false,
                    message: 'Uwaga! Wystąpił błąd podczas logowania użytkownika!'
                })
            } else { // jeśli zapytanie zostało wykonane bez błędu:
                if (results.length > 0) { // jeśli w bazie danych znaleziono użytkownika o podanej nazwie
                    if (password == results[0].password) { // jesli podano poprawne hasło
                        res.json({
                            status: true,
                            message:'Logowanie użytkownika zakończone sukcesem ...'
                        })
                    } else { // jeśli nie podano poprawnego hasła
                        // Przesłanie odpowiedzi do klienta w formacie JSON:
                        res.json({
                            status: false,
                            message: "Uwaga! Logowanie się nie powiodło!"
                        });
                    }
                }
                else { // jeśli w bazie danych NIE znaleziono użytkownika o podanej nazwie
                    // Przesłanie odpowiedzi do klienta w formacie JSON:
                    res.json({
                        status: false,
                        message: "Uwaga! Nie zarejestrowano takiego użytkownika!"
                    });
                }
            }
        });
}
