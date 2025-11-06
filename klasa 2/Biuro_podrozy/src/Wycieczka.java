import java.util.Date;

public class Wycieczka { //Tworzenie zmiennych
    Date start;
    Date koniec;
    String Cel;

    Wycieczka(Date wstart, Date wkoniec, String wcel){ //Tworzenie konstruktora parametrycznego
        Cel = wcel;
        koniec = wkoniec;
        start = wstart;
    }

    public String informacje(){ //Metoda wywołująca informacje

        return "cel: "+ Cel+ "\nData Startu: "+ start.getYear()+", "+start.getMonth()+", "+start.getDay()+"\nData koncowa: "+koniec.getYear()+", "+koniec.getMonth()+", "+koniec.getDay();
    }
}
