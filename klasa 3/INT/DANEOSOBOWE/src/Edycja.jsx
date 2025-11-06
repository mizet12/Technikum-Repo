import React from "react";

const DaneOsobowe = props => {
    return(
        <div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="pesel">Podaj Pesel</label>
                <input type="text" id="pesel" name="pesel" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="imie">Podaj Imie</label>
                <input type="text" id="imie" name="imie" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="nazwisko">Podaj Nazwisko</label>
                <input type="text" id="nazwisko" name="nazwisko" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="adres">Podaj Miasto</label>
                <input type="text"  id="miasto" name="miasto" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="adres">Podaj Kod Pocztowy</label>
                <input type="text"  id="kod" name="kod" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="adres">Podaj Ulice</label>
                <input type="text"  id="ulica" name="ulica" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="adres">Podaj Numer Domu/Mieszkania</label>
                <input type="text"  id="nr" name="nr" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="tel">Podaj numer telefonu</label>
                <input type="text" id="tel" name="tel" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="email">Podaj adres e-mail</label>
                <input  type="text"  id="email" name="email" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="plec">Podaj płeć</label>
                <input  type="text"  id="plec" name="plec" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div></div>
            <button onClick={() =>props.onSave()}>Ok</button>
            <button>Cancel</button>
        </div>
    )
}
export default DaneOsobowe;
