import React, {Component} from "react";
import EdycjaLekcji from "./Edycja";
import Odliczanie from "./Odliczanie";
import "./Witaj.css";

class Powitanie extends Component{
    constructor(){
        super();
        this.state = {
            Lekcje: [
                {id:0, name:"Lekcja 1", CzasG:"07", CzasM:"45"},
                {id:1, name:"Lekcja 2", CzasG:"08", CzasM:"35"},
                {id:2, name:"Lekcja 3", CzasG:"09", CzasM:"25"},
                {id:3, name:"Lekcja 4", CzasG:"10", CzasM:"15"},
                {id:4, name:"Lekcja 5", CzasG:"11", CzasM:"15"},
                {id:5, name:"Lekcja 6", CzasG:"12", CzasM:"15"},
            ],
            edytowaneLekcje:{
                id: "99",
                name: "",
                CzasG: "",
                CzasM: ""
            }
        };
        this.dodanieLekcji = this.dodanieLekcji.bind(this);
        this.zapisLekcji = this.zapisLekcji.bind(this);
    }

    dodanieLekcji(val){

        this.setState(prevState =>{
            return{
                edytowaneLekcje: Object.assign(prevState.edytowaneLekcje, val)
            }
        })
    }
    zapisLekcji(){
        this.setState(prevState => ({
            Lekcje: [...prevState.Lekcje, prevState.edytowaneLekcje],
            edytowaneLekcje:{
                id:"",
                name:"",
                CzasG:"",
                CzasM:""
            }
        }))
    }

     render(){
        const Lekcje = this.state.Lekcje.map(element => {
            return <Odliczanie key={element.id} name={element.name} CzasG={element.CzasG} CzasM={element.CzasM}/>
        })
        return(
            <div className="EdycjaLekcji">
                {Lekcje}
                <EdycjaLekcji onInputChange={val => this.dodanieLekcji(val)} onSave={() => this.zapisLekcji()}/>  
            </div>
        //   <div>
        //     {Lekcje}
        //   </div>  
            // <div>
                
            //     <Odlicznie name="Lekcja 1" czas="07:45"/>
            //     <Odlicznie name="Lekcja 2" czas="08:35"/>
            //     <Odlicznie name="Lekcja 3" czas="09:25"/>
            //     <Odlicznie name="Lekcja 4" czas="10:15"/>
            //     <Odlicznie name="Lekcja 5" czas="11:15"/>
            //     <Odlicznie name="Lekcja 6" czas="12:15"/>

            // </div>
       );
    }
}
export default Powitanie;