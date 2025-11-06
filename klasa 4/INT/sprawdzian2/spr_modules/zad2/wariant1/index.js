const pracownicyModule = require('./local_modules/pracownicy')
const wspolczynnikModule = require('./local_modules/wspolczynniki')
const wynagrodzenieModule = require('./local_modules/wynagrodzenie')

const Lekarz = pracownicyModule.Lekarz
const Ordynator = pracownicyModule.Ordynator
const Pielegniarka = pracownicyModule.Pielegniarka
const PielegniarkaOddzialowa = pracownicyModule.PielegniarkaOddzialowa

wynagrodzeniePracownika = wynagrodzenieModule.wynagrodzenie

function obliczWynPracownikow(callback) {
    
    const lekarz1 = new Lekarz("Jan", "Kowalski", "Ortopedia")
    const ordynator1 = new Ordynator("Jan", "Kowalski", "Ortopedia", "314")
    const pielegniarka1 = new Pielegniarka("Jan", "Kowalski", "135A")
    const pielegniarkaOdd1 = new PielegniarkaOddzialowa("Jan", "Kowalski", "144", "Położniczy")

    setTimeout(() => {
        console.log(lekarz1.getInfo())
        callback(140, wspolczynnikModule.WSPOLCZYNNIK_LEKARZ, 27)
    }, 0)
    setTimeout(() => {
        console.log(ordynator1.getInfo())
        callback(130, wspolczynnikModule.WSPOLCZYNNIK_LEKARZ, 30)
    }, 0)
    setTimeout(() => {
        console.log(pielegniarka1.getInfo())
        callback(120, wspolczynnikModule.WSPOLCZYNNIK_LEKARZ, 24)
    }, 0)
    setTimeout(() => {
        console.log(pielegniarkaOdd1.getInfo())
        callback(120, wspolczynnikModule.WSPOLCZYNNIK_LEKARZ, 40)
    }, 0)
}

obliczWynPracownikow(wynagrodzeniePracownika)
console.log("Wiadoość z końca programu")

