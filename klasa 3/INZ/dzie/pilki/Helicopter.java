/**
 * klasa Helicopter dziedzicząca od flying
 */
public class Helicopter extends flying{
    //Tworzenie zmiennych i uzyskiwanie do nich dostepu
    /**
     * Tworzenie zmiennych prwatnych opisujących Helicopter
     */
    private int Propeller_lenght;
    /**
     * Hermetyzacja zmiennej propeller_leght
     * @param Propeller_Lenght zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej propeller_leght
     */
    public void setType(int Propeller_Lenght){Propeller_lenght = Propeller_Lenght;}
    //Tworzenie konstruktora i odwwolywanie się do konstruktora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capacity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param max_height_flight zmienna konstruktora nadklasy
     * @param Propeller_Lenght zmienna do przypisania długości śmigieł
     */
    public Helicopter(String name, String tank_capacity, String Owner, int max_height_flight, int Propeller_Lenght){
        super(name, tank_capacity,Owner , max_height_flight);
        setType(Propeller_Lenght);
        Propeller_lenght = Propeller_Lenght;
        Info(name, tank_capacity, max_height_flight, Propeller_lenght, Owner);
    }
    //Tworzenie metody do wyswietlania wszystkich informacji o Helikopterze
    /**
     * Metoda wypisująca informacje
     */
    void Info(String name, String tank_capacity, int max_height_flight, int Propeller_lenght, String owner){
        System.out.println("Wlasciciel : " + owner +". Samolot o nazwie: " + name + ". Pojemnosc baku: " + tank_capacity + ". Maksymalna wysokosc lotu: " + max_height_flight + "m.n.p.m. Dlugosc smigiel helikoptera: " + Propeller_lenght + "m");
    }
}