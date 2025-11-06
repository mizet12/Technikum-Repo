/**
 * klasa Galeon dziedzicząca od swimming
 */
public class Galeon extends swimming{
    //Tworzenei zmiennych i uzyskiwanie do nich dostępu
    /**
     * Tworzenie zmiennych prwatnych opisujących Galeon
     */
    private String Jolly_roger;
    /**
     * Hermetyzacja zmiennej Jolly_roger
     * @param Jolly_Roger zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej jolly_roger
     */
    public void setNumber_of_sails(String Jolly_Roger) {
        Jolly_roger = Jolly_Roger;
    }
    //Tworzenie konstruktora i odwoływanie się do konstruktora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capacity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param max_weight zmienna konstrukotra nad klasy
     * @param Jolly_Roger zmienna do przypisania flagi galeonu
     */
    public  Galeon(String name, String tank_capacity, String Owner, int max_weight, String Jolly_Roger){
        super(name, tank_capacity, Owner, max_weight);
        setNumber_of_sails(Jolly_Roger);
        Jolly_roger = Jolly_Roger;
        Info(name, tank_capacity, max_weight, Jolly_roger, Owner);
    }
    //Tworzenie metody do wyświetlenia wszystkich informacji o Galeonie
    /**
     * Metoda wypisująca informacje
     */
    public void Info(String name, String tank_capacity, int max_weight, String Jolly_roger, String owner){
        System.out.println("Wlasciciel : " + owner +". Zaglowka o nazwie: " + name + ". Pojemnosc baku: "+ tank_capacity + ". Maksymalny dozwolony ciezar na pokladzie: " + max_weight + "kg. Flaga statku: " + Jolly_roger);
    }
}
