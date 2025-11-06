import React, { Component } from "react";
import Osoba from './Osoba.jsx';

class Osoby extends Component {
    constructor() {
        super();
        this.state = {
            osoby: [
                { 
                    pesel: "05210104875", 
                    name: "Jan", 
                    surname: "Kowalski", 
                    address: "Sosnowiec, ul. Jagiellońska 13", 
                    phoneNumber: "+48123456789", 
                    emailAddress: "jan.kowalski@poczta.pl", 
                    gender: 'M' 
                },
            ],
            wprowadzanaOsoba: {
                pesel: "",
                name: "", 
                surname: "", 
                address: "", 
                phoneNumber: "", 
                emailAddress: "", 
                gender: '' 
            }
        }
        this.dodanieLekcji = this.dodanieLekcji.bind(this);
        this.zapisanieLekcji = this.zapisanieLekcji.bind(this);
    }

    dodanieOsoby(val) {
        this.setState(prevState => {
            return {
                wprowadzanaOsoba: Object.assign(prevState.wprowadzanaOsoba, val)
            }
        });
    }

    zapisanieOsoby() {
        this.setState(prevState => ({
            osoby: [...prevState.osoby, prevState.wprowadzanaOsoba],
            wprowadzanaOsoba: {
                pesel: "",
                name: "", 
                surname: "", 
                address: "", 
                phoneNumber: "", 
                emailAddress: "", 
                gender: ''
            }
        }))
    }

    render() {
        const Osoby = this.state.osoby.map(el => <Osoba key={el.pesel} props={el}/>);
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Pesel</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Adres</th>
                            <th>Numer telefonu</th>
                            <th>Adres email</th>
                            <th>Płeć</th>
                        </tr>
                        {Osoby}
                    </tbody>
                </table>
                {/* <EdycjaOsoby /> */}
            </div>
       );
    }
}

export default Osoby;