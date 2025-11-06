/**
 * klasa sailBoat dziedzicząca od swimming
 */
public class sailBoat extends swimming{
    //Tworzenei zmiennych i uzyskiwanie do nich dostępu
    /**
     * Tworzenie zmiennych prwatnych opisujących Żaglówke
     */
    private int number_of_sails;
    /**
     * Hermetyzacja zmiennej number_of_sails
     * @param number_of_sails zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej number_of_sails
     */
    public void setNumber_of_sails(int number_of_sails) {
        this.number_of_sails = number_of_sails;
    }
    //Tworzenie konstruktora i odwoływanie się do konstruktora nadklasy

    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capacity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param max_weight zmienna konstrukotra nad klasy
     * @param Number_of_sails zmienna do przypisania ilości żagli
     */
    public  sailBoat(String name, String tank_capacity, String Owner, int max_weight, int Number_of_sails){
        super(name, tank_capacity, Owner, max_weight);
        setNumber_of_sails(Number_of_sails);
        number_of_sails = Number_of_sails;
        Info(name, tank_capacity, max_weight, number_of_sails, Owner);
    }
    //Tworzenie metody do wyświetlenia wszystkich informacji o żaglówce
    /**
     * Metoda wypisująca informacje
     */
    public void Info(String name, String tank_capacity, int max_weight, int number_of_sails, String owner){
        System.out.println("Wlasciciel : " + owner +". Zaglowka o nazwie: " + name + ". Pojemnosc baku: "+ tank_capacity + ". Maksymalny dozwolony ciezar na pokladzie: " + max_weight + "kg. Liczba zagli: " + number_of_sails);
    }
}
