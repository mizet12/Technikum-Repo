// Definicja funkcji umożliwiającej obliczenie pola prostokąta:
function pole(a, b) {
    return (a*b);
}
// Definicja funkcji umożliwiającej obliczenie obwodu prostokąta:
obwod = (a, b) => {
    return (2*a+2*b);
}
// Eksport funkcji pole() i obwod():
module.exports = {
    pole,
    obwod
}

