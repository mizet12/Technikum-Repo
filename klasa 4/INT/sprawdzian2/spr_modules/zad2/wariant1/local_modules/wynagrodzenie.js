const SJ = 20

function wynagrodzenie(liczbaGodzin, wspolczynnik, ln) {
    let pensja, premia

    pensja = liczbaGodzin * SJ * wspolczynnik

    premia = pensja * (ln / liczbaGodzin)

    console.log(`Wynagrodzenie pracownika: ${(pensja + premia).toFixed(2)}zł`)
}

module.exports = {
    wynagrodzenie
}
