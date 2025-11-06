class Powitanie {
    constructor(){
        //super();
        this.state = {
            Lekcje: [
                {id:0, name:"Lekcja 1", czas:"07:45"},
                {id:1, name:"Lekcja 2", czas:"08:35"},
                {id:2, name:"Lekcja 3", czas:"09:25"},
                {id:3, name:"Lekcja 4", czas:"10:15"},
                {id:4, name:"Lekcja 5", czas:"11:15"},
                {id:5, name:"Lekcja 6", czas:"12:15"},
  
            ]
        }
    }
     render(){
        const Lekcje = this.state.Lekcje.map(element => Odliczanie(element));
        return `<div>${Lekcje.join(' ')}</div>`;
    }
}