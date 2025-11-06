package biuro;

public class Klient {
    /**
     * Tworzenie zmiennych ktore sa przypisane jako argumenty w konstruktorze oraz zmiennej liczba ktora bedzie sie
     * powiekszac co obiekt po to by powiekszac ilosc kolumn w tablicy przy tworzeniu nowego klienta
     */
    public static String imie;
    public static String nazwisko;
    public static String adres;
    public static int wiek;
    public static int liczba = 0;

    public Klient(String imie, String nazwisko, String adres, int Wiek){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.adres = adres;
        this.wiek = Wiek;
        liczba++;
    }

    /**
     *Tworzenie metody ktorej uzyje do wyswietlenia danych o klientach
     */
    public static void WyswietlDaneK(){
        System.out.println("-----------");
        System.out.println("Imie: " + imie +" "+ nazwisko);
        System.out.println("Adres: " + adres);
        System.out.println("Wiek: " + wiek + "\n");

    }

}
