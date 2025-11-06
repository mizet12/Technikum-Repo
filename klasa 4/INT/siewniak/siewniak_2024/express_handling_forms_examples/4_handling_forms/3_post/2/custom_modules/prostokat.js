// Definicja modułu prostokat.js:

// Definicje funkcji:
function polePr(a, b) {
    return (a*b);
}
obwodPr = (a, b) => {
    return (2*a+2*b);
}

// Eksport funkcji polePr() i obwodPr():
module.exports = {
    polePr,
    obwodPr
}
/* UWAGA
    Funkccje polePr() i obwodPr() zostały wyeksportowane jako składniki obiektu,
    za pośrednictwem właściwości exports obiektu module.
 */
