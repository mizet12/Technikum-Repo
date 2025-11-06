import React from "react";
import "./Edycja.css"
const EdycjaLekcji = props => {
    return(
        <div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="poleTekstowe">Podaj nazwe</label>
                <input 
                type="text" 
                id="name"
                name="name"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
                
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasG">Podaj godzine</label>
                <input 
                type="tel" 
                id="CzasG"
                name="CzasG"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasM">Podaj minute</label>
                <input 
                type="tel" 
                id="CzasM"
                name="CzasM"
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div></div>
            <button onClick={() =>props.onSave()}>Ok</button>
            <button>Cancel</button>
        </div>
    )
}
export default EdycjaLekcji;
