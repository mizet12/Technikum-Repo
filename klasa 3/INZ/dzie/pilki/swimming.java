/**
 * Klasa swimming dziedzicząca od Vehicle oraz przetwarzająca informacje ta temat pojazdów pływających
 */
public class swimming extends Vehicle{
    //tworzenie zmiennych i uzyskiwanie do nich dostepu
    /**
     * Tworzenie zmiennych prwatnych opisujących właściwości pojazdu pływającego
     */
    private int max_weight;
    /**
     * Hermetyzacja zmiennej max_height_flight
     * @param max_weight zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej max_weight
     */
    public void setMax_weight(int max_weight) {
        this.max_weight = max_weight;
    }
    //Tworzenei konstruktora i odwolywanie się do konstruktora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capasity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param Max_weight zmienna do przypisania maksymalnej wagi znajdującej się na pojeździe
     */
    public swimming(String name, String tank_capasity, String Owner, int Max_weight){
        super(name, tank_capasity, Owner);
        setMax_weight(Max_weight);
        max_weight = Max_weight;
    }
}
