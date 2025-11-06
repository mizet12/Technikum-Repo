/**
 * klasa Submarine dziedzicząca od swimming
 */
public class Submarine extends swimming{
    //Tworzenei zmiennych i uzyskiwanie do nich dostępu
    /**
     * Tworzenie zmiennych prwatnych opisujących Galeon
     */
    private int max_Depth;
    /**
     * Hermetyzacja zmiennej max_depth
     * @param Max_Depth zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej max_depth
     */
    public void setNumber_of_sails(int Max_Depth) {
        max_Depth = Max_Depth;
    }
    //Tworzenie konstruktora i odwoływanie się do konstruktora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capacity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param max_weight zmienna konstrukotra nad klasy
     * @param Max_Depth zmienna do przypisania maksymalnej głębokości
     */
    public  Submarine(String name, String tank_capacity, String Owner, int max_weight, int Max_Depth){
        super(name, tank_capacity, Owner, max_weight);
        setNumber_of_sails(Max_Depth);
        max_Depth = Max_Depth;
        Info(name, tank_capacity, max_weight, max_Depth, Owner);
    }
    //Tworzenie metody do wyświetlenia wszystkich informacji o Łodzi podwodnej
    /**
     * Metoda wypisująca informacje
     */
    public void Info(String name, String tank_capacity, int max_weight, int Max_Depth, String owner){
        System.out.println("Wlasciciel : " + owner +". Zaglowka o nazwie: " + name + ". Pojemnosc baku: "+ tank_capacity + ". Maksymalny dozwolony ciezar na pokladzie: " + max_weight + "kg. Maksymalne zanuzenie pod woda: " + Max_Depth + "m.p.p.m.");
    }
}
