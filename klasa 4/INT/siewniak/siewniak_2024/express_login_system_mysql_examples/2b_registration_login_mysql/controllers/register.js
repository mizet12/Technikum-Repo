
const express = require("express");
const connection = require('../config/config');

module.exports.register = (req,res) => {
    var user = {
        "email": req.body.email,
        "password": req.body.password
    }
    connection.query('INSERT INTO users SET ?', user, (error, results) => {
        if (error) {
            res.json({
                status: false,
                message: 'Uwaga! Wystąpił błąd podczas zapisu użytkownika w bazie danych!'
            })
        } else {
            res.json({
                status: true,
                message: 'Nowy użytkownik został pomyślnie zapisany w bazie danych ...',
                data: results
            })
        }
    });
}
