package biuro;

import biuro.Czas;
import biuro.Data;

public class Wycieczka {
    /**
     * Tworzenie zmiennych ktore sa przypisane jako argumenty w konstruktorze oraz zmiennej liczba ktora bedzie sie
     * powiekszac co obiekt po to by powiekszac ilosc kolumn w tablicy przy tworzeniu nowej Wycieczki oraz tworzenie
     * zmiennych ktore potem beda sie odwyolywaly do obiektow klas data i czas podczas tworzenia obiektu wycieczka
     */
    String celPodrozy,Atrakcje;
    int cena, iloscMiejsc;
    Data data;
    Czas czas;
    public static int liczba = 0;
    public Wycieczka(String celPodrozy, String Atrakcje, int cena, int iloscMiejsc, Data Data, Czas Czas){
        this.celPodrozy = celPodrozy;
        this.Atrakcje = Atrakcje;
        this.cena = cena;
        this.iloscMiejsc = iloscMiejsc;
        this.data = Data;
        this.czas = Czas;
        liczba++;
    }
    /**
    *Tworzenie metody ktorej uzyje do wyswietlenie danych o kazdej wycieczce
    */
    public void WyswietlDaneW(){
        System.out.println("-----------");
        System.out.println("Cel podrozy: " + celPodrozy);
        System.out.println("Glowna Atrakcja: " + Atrakcje);
        System.out.println("Cena: " + cena + " Ilosc miejsc: " + iloscMiejsc+"\n");
    }

}
