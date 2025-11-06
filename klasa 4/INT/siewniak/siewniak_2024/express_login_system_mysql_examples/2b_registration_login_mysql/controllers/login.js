
const connection = require('../config/config');

module.exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM users WHERE email = ?', email, (error, results) => {
        if (error) {
            res.json({
                status: false,
                message: 'Uwaga! Wystąpił błąd podczas logowania użytkownika!'
            })
        } else {
            if (results.length > 0) {
                if (password == results[0].password) {
                    res.redirect('/app');
                } else {
                    res.send("Uwaga! Logowanie się nie powiodło: podałeś błędne hasło!");
                }
            }
            else {
                res.send("Uwaga! Nie zarejestrowano takiego użytkownika!");
            }
        }
    });
}
