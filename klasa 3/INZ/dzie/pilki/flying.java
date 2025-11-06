/**
 * Klasa flying dziedzicząca od Vehicle oraz przetwarzająca informacje ta temat pojazdów latających
 */
public class flying extends Vehicle{
    //Tworzenie zmiennych i uzyskiwanie do nich dostępu
    /**
     * Tworzenie zmiennych prwatnych opisujących właściwości pojazdu latającego
     */
    private int max_height_flight;

    /**
     * Hermetyzacja zmiennej max_height_flight
     * @param max_height_flight zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej max_height_flight
     */
    public void setMax_height_flight(int max_height_flight) {
        this.max_height_flight = max_height_flight;
    }
    //Tworzenie konstruktora i odwołanie się do konstruktora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capasity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param Max_height_flight zmienna do przypisania maksymalnej wysokości lotu
     */
    public flying(String name, String tank_capasity, String Owner, int Max_height_flight){
        super(name, tank_capasity, Owner);
        setMax_height_flight(Max_height_flight);
        max_height_flight = Max_height_flight;
    }
}
