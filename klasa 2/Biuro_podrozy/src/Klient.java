public class Klient { //Tworzenie zmiennych
    String imie;
    Adres adres;
    Wycieczka wycieczka;
    Klient(String Imie){ //Tworzenie konstruktora parametrycznego
        imie = Imie;
    }
    void getAdres(Adres Aadres){ //Tworzenie metody zdobywającej adres
    adres = Aadres;
       }
    void setWycieczka(Wycieczka wwycieczka){//Tworzenie metody zdobywającej wycieczke
        wycieczka = wwycieczka;
    }
    public String Informacje(){//Tworzenie metody wywołującej informacje
        return "Imie: " + imie + "\nAdres: "+ adres.informacje()+"\nwycieczka "+wycieczka.informacje();
    }
}
