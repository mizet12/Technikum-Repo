export const czyPoprawnyNumer = (e) => {
    if(isNaN(parseInt(e.key, 10)) === true) return e.preventDefault();
    return true;
}

export const czyPoprawnyNumerRegEx = (e) => {
    if(/^[0-9]*$/.test(e.target.value)) {
        e.preventDefault();
        return false;
    }
    else return true;
}

export const zmienZnakiNaLiczbe = (val) => {
    if(val === "") return -1;
    return parseInt(val, 10);
}

export const czyNazwaPoprawna = (val) => {
    if(!val || val.length === 0) return false;
    if(!isNaN(parseInt(val.charAt(0)))) return false;
    return true;
}
export const czyGodzinyPoprawne = (val) => (val >= 0 && val < 24);
export const czyMinutyPoprawne = (val) => (val >= 0 && val < 60);

export const isAnyFilled = (val1, val2, val3) => Boolean(val1 || val2 !== -1 || val3 !== -1);

export const godzinaMinutaDoSekund = (g, m) => {
    return g * 3600 + m * 60;
}

export const sekundyDoGodzinMinutSekund = (s) => {
    let tmpSekundy = s;
    const godziny = Math.floor(tmpSekundy / 3600).toString().padStart(2, '0');
    tmpSekundy -= godziny * 3600;
    const minuty = Math.floor(tmpSekundy / 60).toString().padStart(2, '0');
    tmpSekundy -= minuty * 60;
    const sekundy = tmpSekundy.toString().padStart(2, '0');
    return `${godziny}:${minuty}:${sekundy}`
}