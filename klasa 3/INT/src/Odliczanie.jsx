import React from "react";
import PropTypes from "prop-types";
import './Odliczanie.css';
import { godzinaMinutaDoSekund, sekundyDoGodzinMinutSekund } from "./utilsy";

const Odliczanie = (props) => {
    const lekcja_Sekundy = godzinaMinutaDoSekund(props.czasG, props.czasM);
    const PresentTime_sekundy = godzinaMinutaDoSekund(props.obecnyCzas.godzina, props.obecnyCzas.minuta) + props.obecnyCzas.sekunda;
    const pozostaleSekundy = lekcja_Sekundy - PresentTime_sekundy;
    var pozostaleSekundy_Tekst = "";

    if (pozostaleSekundy > 0) {
        pozostaleSekundy_Tekst = sekundyDoGodzinMinutSekund(pozostaleSekundy);
    } else {
        pozostaleSekundy_Tekst = "Ta lekcja odbędzie się dopiero jutro.";
    }
    
    return (
        <div className={"odliczanie " + props.kolor}>
            <div>
                {props.id+1}. <ins>{props.name}</ins> {props.czasG.toString().padStart(2, '0')}:{props.czasM.toString().padStart(2, '0')}
                <br/>Lekcja zacznie się za: {pozostaleSekundy_Tekst}
            </div>
            <div className="Odliczanie_usuwanie">
                <i className="edit" onClick={() => props.edytujLekcje(props.id)}><p>[E]</p></i>
                <b className="X" onClick={() => props.Usun(props.id)}><p>X</p></b>
            </div>
        </div>
    )
};

Odliczanie.propTypes = {
    name: PropTypes.string,
    czasG: PropTypes.number,
    czasM: PropTypes.number,
    czas: PropTypes.shape(
        {
            godzina: PropTypes.number,
            minuta: PropTypes.number,
            sekunda: PropTypes.number,
        }
    ),
    edytujLekcje: PropTypes.func,
    Usun: PropTypes.func
}
export default Odliczanie;