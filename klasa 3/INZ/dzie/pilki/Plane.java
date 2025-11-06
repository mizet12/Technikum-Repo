/**
 * klasa Plane dziedzicząca od flying
 */
public class Plane extends flying{
    //Tworzenie zmiennych i uzyskiwanie do nich dostepu
    /**
     * Tworzenie zmiennych prwatnych opisujących samolot
     */
    private String type;
    /**
     * Hermetyzacja zmiennej type
     * @param Type zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej Type
     */
    public void setType(String Type){type = Type;}
    //Tworzenie konstruktora i odwwolywanie się do konstruktora nadklasy

    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capacity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param max_height_flight zmienna konstruktora nadklasy
     * @param Type zmienna do przypisania typu samolotu
     */
    public Plane(String name, String tank_capacity, String Owner, int max_height_flight, String Type){
        super(name, tank_capacity,Owner , max_height_flight);
        setType(Type);
        type = Type;
        Info(name, tank_capacity, max_height_flight, type, Owner);
    }
    //Tworzenie metody do wyswietlania wszystkich informacji o samolocie
    /**
     * Metoda wypisująca informacje
     */
    void Info(String name, String tank_capacity, int max_height_flight, String type, String owner){
        System.out.println("Wlasciciel : " + owner +". Samolot o nazwie: " + name + ". Pojemnosc baku: " + tank_capacity + ". Maksymalna wysokosc lotu: " + max_height_flight + "m.n.p.m. Typ samolotu: " + type);
    }
}
