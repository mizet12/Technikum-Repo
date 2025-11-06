import React, { Component } from "react";
import EdycjaLekcji from "./Edycja";
import Odliczanie from "./Odliczanie";
import "./witaj.css";

class Powitanie extends Component {
    constructor() {
        super();
        this.dzien_nazwa = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];
        this.state = {
            presentDay: 0,
            czas: {
                godzina: new Date().getHours(),
                minuta: new Date().getMinutes(),
                sekunda: new Date().getSeconds()
            },
            Lekcje: new Array(5).fill([]),
            edited_Lekcje: {
                edited_index: -1,
                name: "",
                czasG: -1,
                czasM: -1
            }
        }
        this.lekcja_dodaj = this.lekcja_dodaj.bind(this);
        this.lekcja_zapis = this.lekcja_zapis.bind(this);
        this.lekcja_usun = this.lekcja_usun.bind(this);
        this.lekcja_edit = this.lekcja_edit.bind(this);
        this.odswiezanie = this.odswiezanie.bind(this);
    }

    odswiezanie() {
        this.setState({
            czas: {
                godzina: new Date().getHours(),
                minuta: new Date().getMinutes(),
                sekunda: new Date().getSeconds()
            }})
    }

    lekcja_dodaj(val) {
        this.setState(prevState => {
            return {
                edited_Lekcje: Object.assign(prevState.edited_Lekcje, val)
            }});
    }

    componentDidMount() {
        this.setState((prevState) => {
            const listaLekcji = JSON.parse(localStorage.getItem('Lekcje')) ?? prevState.Lekcje;
            return { 
                Lekcje: listaLekcji,
                edited_Lekcje: {
                    edited_index: -1,
                    name: "",
                    czasG: -1,
                    czasM: -1
                }
            }});
        setInterval(this.odswiezanie, 1000);
    }

    lekcja_zapis() {
        const obecnyCzasG = this.state.edited_Lekcje.czasG;
        const obecnyCzasM = this.state.edited_Lekcje.czasM;
        if(isNaN (parseInt(obecnyCzasG, 10))) return alert("Zły format czasu w godzinach!");
        if(isNaN (parseInt(obecnyCzasM, 10))) return alert("Zły format czasu w minutach");

        const obecnieEdytowana = this.state.edited_Lekcje;
        if(obecnieEdytowana.name === '') return alert("Podaj nazwę!");
        if(obecnieEdytowana.czasG === -1) return alert("Podaj czas w godzinach!");
        if(obecnieEdytowana.czasM === -1) return alert("Podaj czas w minutach!");

        this.setState(prevState => {
            let noweLekcjeDzisiaj;
            const czyLekcjaJuzIstnieje = prevState.Lekcje[prevState.presentDay].find((el, index) => index === prevState.edited_Lekcje.edited_index);
            if(czyLekcjaJuzIstnieje) {
                noweLekcjeDzisiaj = prevState.Lekcje[prevState.presentDay].map((el, index) => {
                    if(index === prevState.edited_Lekcje.edited_index) return {
                        name: prevState.edited_Lekcje.name,
                        czasG: prevState.edited_Lekcje.czasG,
                        czasM: prevState.edited_Lekcje.czasM,
                    }
                    else return el;
                });
            }

            if(noweLekcjeDzisiaj) prevState.Lekcje[prevState.presentDay] = noweLekcjeDzisiaj;
            else {
                prevState.Lekcje[prevState.presentDay] = [
                     ...prevState.Lekcje[prevState.presentDay], 
                    {
                        name: prevState.edited_Lekcje.name,
                        czasG: prevState.edited_Lekcje.czasG,
                        czasM: prevState.edited_Lekcje.czasM
                    }];
            }
            return {
                Lekcje: prevState.Lekcje,
                edited_Lekcje: {
                    edited_index: -1,
                    name: '',
                    czasG: -1,
                    czasM: -1
                }}
        }, () => localStorage.setItem("Lekcje", JSON.stringify(this.state.Lekcje)));
    }

    lekcja_usun(id) {
        this.setState(prevState => {
            prevState.Lekcje[prevState.presentDay] = prevState.Lekcje[prevState.presentDay].filter((el, index) => index !== id)
            return { Lekcje: prevState.Lekcje }
        }, () => localStorage.setItem("Lekcje", JSON.stringify(this.state.Lekcje)));
    }

    lekcja_edit(id) {
        this.setState(prevState => ({
            edited_Lekcje: { edited_index: id, ...prevState.Lekcje[prevState.presentDay].find((el, index) => index === id)}
        }));
    }

    Edit_clear() {
        this.setState((prevState) => {
            return {
                edited_Lekcje: {
                    edited_index: -1,
                    name: "",
                    czasG: -1,
                    czasM: -1
                }
            }});
    }
    PresendDay_zmniana(value) {
        this.setState((prevState) => {
            let new_Value = prevState.presentDay + value;
            if(new_Value < 0) new_Value = 0;
            else if(new_Value > this.dzien_nazwa.length - 1) new_Value = this.dzien_nazwa.length - 1;
            return {
                presentDay: new_Value,
                edited_Lekcje: {
                    edited_index: -1,
                    name: "",
                    czasG: -1,
                    czasM: -1
                }
            }});
    }

    render() {
        const PresentData = new Date();
        const PresentTime = PresentData.getHours() * 60 + PresentData.getMinutes();

        let presentLesson_index= null; // przypisanie wartości zmiennym 
        let presentLesson_roznica = -1;
        let nextLesson_index = null;
        let nextLesson_roznica = -1;

        for(let i = 0; i < this.state.Lekcje[this.state.presentDay].length; i++) {
            const lesson = this.state.Lekcje[this.state.presentDay][i];
            const Lekcja_czas = lesson.czasG * 60 + lesson.czasM;
            const roznica = PresentTime - Lekcja_czas;
            if(roznica >= 0 && roznica <= 45) {
                presentLesson_index = i;
                presentLesson_roznica = roznica;
            } else if(roznica >= -45 && roznica <= 0) {
                nextLesson_index = i;
                nextLesson_roznica = Math.abs(roznica);
            }
        }

        let presentLesson_kolor = '';
        if(presentLesson_roznica !== -1) {
            if(presentLesson_roznica <= 15) presentLesson_kolor = 'kw1';
            else if(presentLesson_roznica > 15 && presentLesson_roznica <= 30) presentLesson_kolor = 'kw2';
            else if(presentLesson_roznica > 30 && presentLesson_roznica <= 45) presentLesson_kolor = 'kw3';
        }

        const prevLesson_kolor = 'previous';
        let prevLesson_index = presentLesson_index- 1;
        if(prevLesson_index < 0) {
            prevLesson_index = null;
        }
        let nextLesson_kolor = '';
        if(nextLesson_roznica !== -1) {
            if(nextLesson_roznica <= 15) nextLesson_kolor = 'za_15';
            else nextLesson_kolor = 'next';
        }

        const Lekcje = this.state.Lekcje[this.state.presentDay].map((el, index) => {
            let kolor = '';
            if(index === presentLesson_index
                ) kolor = presentLesson_kolor;
                else if(index === nextLesson_index) kolor = nextLesson_kolor;
            else if(index === prevLesson_index) kolor = prevLesson_kolor;
            

            return (
                <Odliczanie 
                    id={index} 
                    key={index} 
                    name={el.name} 
                    czasG={el.czasG} 
                    czasM={el.czasM} 
                    obecnyCzas={this.state.czas}
                    Usun={edited_index => this.lekcja_usun(edited_index)}
                    edytujLekcje={edited_index => this.lekcja_edit(edited_index)}
                    kolor={kolor}
                />
            )
        });
        
        return(
            <div className="EdycjaLekcji">
                <div className="weekday">
                    <button className="dayBtn" onClick={() => this.PresendDay_zmniana(-1)}>wstecz</button>
                    <h2 className="dayName">{this.dzien_nazwa[this.state.presentDay]}</h2>
                    <button className="dayBtn" onClick={() => this.PresendDay_zmniana(1)}>dalej</button>
                </div>
                {Lekcje}
                <EdycjaLekcji 
                    name={this.state.edited_Lekcje.name}
                    czasG={this.state.edited_Lekcje.czasG}
                    czasM={this.state.edited_Lekcje.czasM}

                    onInputChange={val => this.lekcja_dodaj(val)}
                    onSave={() => this.lekcja_zapis()}
                    czyszczenieEdycji={() => this.Edit_clear()}> 
                </EdycjaLekcji>
            </div>
        );}
}
export default Powitanie;