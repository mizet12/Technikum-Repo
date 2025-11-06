import React from "react";
import PropTypes from "prop-types";
import "./Odliczanie.css"
const Odliczanie = props => (
    <div className="odliczanie">
        <strong>{props.name}</strong>_ {props.CzasG}:{props.CzasM}
    </div>
);
Odliczanie.propTypes = {
    name: PropTypes.string,
    CzasG: PropTypes.string,
    CzasM: PropTypes.string
}
export default Odliczanie;