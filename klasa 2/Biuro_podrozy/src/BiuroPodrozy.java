import java.util.Date;

public class BiuroPodrozy {
    public static void main(String[] args) {
        //tworzenie nowych obiektów
        Klient klient1 =new Klient("Michal");
        Klient.getAdres(new Adres("3maja","41-200","Sosnowiec"));
        Klient.setWycieczka(new Wycieczka(new Date(2022,6,7), new Date(2022,6,10), "Warszawa"));

        System.out.println(Klient.Informacje());
    }

}
