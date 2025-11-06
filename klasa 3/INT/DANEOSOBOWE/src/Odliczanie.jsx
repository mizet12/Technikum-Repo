import React from "react";
import PropTypes from "prop-types";

const Odliczanie = props => (
    <tr className="odliczanie">
        <td>{props.plec}</td> <td>{props.imie}</td> <td>{props.nazwisko}</td> <td>{props.pesel}</td> <td>{props.miasto}</td> <td>{props.kod}</td> <td>{props.ulica}</td> <td>{props.nr}</td> <td>{props.email}</td> <td>{props.tel}</td>
    </tr>
);
Odliczanie.propTypes = {
    plec: PropTypes.string,
    imie: PropTypes.string,
    nazwisko: PropTypes.string,
    pesel: PropTypes.string,
    miasto: PropTypes.string,
    kod: PropTypes.string,
    ulica: PropTypes.string,
    nr: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,

}
export default Odliczanie;