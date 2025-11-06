import React, {Component} from "react";
import DaneOsobowe from "./Edycja";
import Odliczanie from "./Odliczanie";
import "./Witaj.css"



class Powitanie extends Component{
    constructor(){
        super();
        this.state = {
            Osoby: [
                {id:0, plec:"mężczyzna", imie:"Jan", nazwisko:"Kowalski",pesel:"12345678901", miasto:"Warszawa", kod:"00-001", ulica:"Warszawska", nr:"3", tel:"123456789", email:"jan@gmail.com"},
                
            ],
            edytowaneOsoby:{
                id: "99",
                plec:"",
                imie: "",
                nazwisko:"",
                pesel:"",
                miasto:"",
                kod:"",
                ulica:"",
                nr:"",
                tel:"",
                email:"",
            
            }
        };
        this.dodanieOsob = this.dodanieOsob.bind(this);
        this.zapisOsob = this.zapisOsob.bind(this);
    }

    dodanieOsob(val){

        this.setState(prevState =>{
            return{
                edytowaneOsoby: Object.assign(prevState.edytowaneOsoby, val)
            }
        })
    }
    zapisOsob(){
        this.setState(prevState => ({
            Osoby: [...prevState.Osoby, prevState.edytowaneOsoby],
            edytowaneOsoby:{
                id:"",
                plec:"",
                imie:"",
                nazwisko:"",
                pesel:"",
                miasto:"",
                kod:"",
                ulica:"",
                nr:"",
                tel:"",
                email:"",
            }
        }))
    }

     render(){
        const Osoby = this.state.Osoby.map(element => {
            return <Odliczanie key={element.pesel} plec={element.plec} imie={element.imie} nazwisko={element.nazwisko} pesel={element.pesel} miasto={element.miasto} kod={element.kod} ulica={element.ulica} nr={element.nr} tel={element.tel} email={element.email}/>
        })
        return(
            <div className="DaneOsobowe">
                <table>
                    <tr>
                        <td>Płeć</td>
                        <td>Imie</td>
                        <td>Nazwisko</td>
                        <td>Pesel</td>
                        <td>Miasto</td>
                        <td>Kod Pocztowy</td>
                        <td>Ulica</td>
                        <td>Numer Domu/Mieszkania</td>
                        <td>Numer Telefonu</td>
                        <td>Adres E-mail</td>
                    </tr>
                    {Osoby}
                </table>
                
                <DaneOsobowe onInputChange={val => this.dodanieOsob(val)} onSave={() => this.zapisOsob()}/>  
            </div>
       );
    }
}
export default Powitanie;