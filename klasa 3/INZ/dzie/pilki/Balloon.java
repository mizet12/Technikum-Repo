/**
 * klasa Balloon dziedzicząca od flying
 */
public class Balloon extends flying{
    //Tworzenie zmiennych i uzyskiwanie do nich dostepu
    /**
     * Tworzenie zmiennych prwatnych opisujących Balon
     */
    private int Torch_power;
    /**
     * Hermetyzacja zmiennej torch_power
     * @param Torch_Power zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej Torch_power
     */
    public void setType(int Torch_Power){Torch_power = Torch_Power;}
    //Tworzenie konstruktora i odwwolywanie się do konstruktora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capacity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param max_height_flight zmienna konstruktora nadklasy
     * @param Torch_Power zmienna do przypisania siły pieca
     */
    public Balloon(String name, String tank_capacity, String Owner, int max_height_flight, int Torch_Power){
        super(name, tank_capacity,Owner , max_height_flight);
        setType(Torch_Power);
        Torch_power = Torch_Power;
        Info(name, tank_capacity, max_height_flight, Torch_power, Owner);
    }
    //Tworzenie metody do wyswietlania wszystkich informacji o balonie
    /**
     * Metoda wypisująca informacje
     */
    void Info(String name, String tank_capacity, int max_height_flight, int Torch_Power, String owner){
        System.out.println("Wlasciciel : " + owner +". Samolot o nazwie: " + name + ". Pojemnosc baku: " + tank_capacity + ". Maksymalna wysokosc lotu: " + max_height_flight + "m.n.p.m. Sila ognia w balonie: " + Torch_Power);
    }
}