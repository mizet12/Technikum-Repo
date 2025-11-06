/**
 * Klasa driving dziedzicząca od Vehicle oraz przetwarzająca informacje ta temat pojazdów jeżdżących
 */
public class driving extends Vehicle{
    //Tworznie zmiennych i uzyskiwanie do nich dostępu za pomocą hermetyzacji
    /**
     * Tworzenie zmiennych prwatnych opisujących właściwości pojazdu jeżdżącego
     */
    private String engine;
    private int speed;

    /**
     * Hermetyzacja zmiennej engine
     * @param Engine zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej engine
     */
    public void setEngine(String Engine){engine = Engine;}

    /**
     * Hermetyzacja zmiennej Speed
     * @param Speed zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej speed
     */
    public void setSpeed(int Speed){speed = Speed;}
    //Odwoływanie się do nadklasy za pomocą znacznika super i tworzenie włsanego konstruktora parametrowego

    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capasity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param speed zmienna do przypisania prędkości
     * @param engine zmienna do przypisania typu silnika
     */
    public driving(String name, String tank_capasity, String Owner, int speed, String engine){
        super(name, tank_capasity, Owner);
        setEngine(engine);
        setSpeed(speed);
        this.speed = speed;
        this.engine = engine;
    }
}
