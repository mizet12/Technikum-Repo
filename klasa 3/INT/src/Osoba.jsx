import React from "react";
import PropTypes from "prop-types";

const Osoba = (props) => (
    <tr className="osoba_row">
        <td>{props.pesel}</td>
        <td>{props.name}</td>
        <td>{props.surname}</td>
        <td>{props.address}</td>
        <td>{props.phoneNumber}</td>
        <td>{props.emailAddress}</td>
        <td>{props.gender}</td>
    </tr>
);

Osoba.propTypes = {
    pesel: PropTypes.string,
    name: PropTypes.string, 
    surname: PropTypes.string, 
    address: PropTypes.string, 
    phoneNumber: PropTypes.string, 
    emailAddress: PropTypes.string, 
    gender: PropTypes.string
}

export default Osoba;