import React from "react";
import "./Edycja.css";
import { czyGodzinyPoprawne, czyMinutyPoprawne, czyNazwaPoprawna, czyPoprawnyNumer, czyPoprawnyNumerRegEx, zmienZnakiNaLiczbe, isAnyFilled } from "./utilsy";
import PropTypes from "prop-types";

const EdycjaLekcji = (props) => {
    return (
        <div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input">
                <input 
                    type="text" 
                    placeholder="Nazwa"
                    id="name"
                    name="name" 
                    value={props.name}
                    onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}
                /><br/>
                <input 
                    type="number" 
                    placeholder="Godzina"
                    id="czasG" 
                    name="czasG" 
                    value={props.czasG === -1 ? "" : props.czasG}
                    onKeyPress={e => czyPoprawnyNumer(e)}
                    onChange={(e) => {
                        if(!czyPoprawnyNumerRegEx(e))
                        props.onInputChange({[e.target.name]: zmienZnakiNaLiczbe(e.target.value)})
                    }}
                /><br/>
                <input 
                    type="number" 
                    placeholder="Minuty"
                    id="czasM" 
                    name="czasM" 
                    value={props.czasM === -1 ? "" : props.czasM}
                    onKeyPress={e => czyPoprawnyNumer(e)}
                    onChange={(e) => {
                        if(!czyPoprawnyNumerRegEx(e))
                        props.onInputChange({[e.target.name]: zmienZnakiNaLiczbe(e.target.value)})
                    }}
                />
            </div><br/>
            <div className="przyciski">
                <button 
                    disabled={!czyNazwaPoprawna(props.name) || !czyGodzinyPoprawne(props.czasG) || !czyMinutyPoprawne(props.czasM)}
                    onClick={props.onSave}>
                    OK</button>
                <button
                    disabled={!isAnyFilled(props.name, props.czasG, props.czasM)}onClick={props.czyszczenieEdycji}>
                    Anuluj</button>
            </div>
        </div>
    );
}

EdycjaLekcji.propTypes = {
    name: PropTypes.string,
    czasG: PropTypes.number,
    czasM: PropTypes.number,
    onSave: PropTypes.func,
    onInputChange: PropTypes.func,
    czyszczenieEdycji: PropTypes.func
}

export default EdycjaLekcji;