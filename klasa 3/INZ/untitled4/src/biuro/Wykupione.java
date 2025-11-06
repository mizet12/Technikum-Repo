package biuro;

import biuro.Klient;
import biuro.Wycieczka;

public class Wykupione {
    /**
    * Tworzenie zmiennych ktore uzupelnimy konstruktor i potem beda sie one odwolywaly do obiektow klasy klient oraz wycieczka
    */
    Klient klient;
    Wycieczka wycieczka;
    public Wykupione( Wycieczka wycieczka, Klient klient){
        this.klient = klient;
        this.wycieczka = wycieczka;
    }
    /**
    * Tworzenie metody ktora pozwoli na wypisanie wycieczek przypisanych losowo do danego klienta
    */
    public void wyswietlDaneP(){
        System.out.println("-" + wycieczka.celPodrozy);
    }
}
