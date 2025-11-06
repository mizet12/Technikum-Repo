/**
 * klasa Car dziedzicząca od driving
 */
public class Car extends driving{
   //Tworzenie zmiennych i uzyskiwanie do nich dostępu
    /**
     * Tworzenie zmiennych prwatnych opisujących samochód
     */
    private int number_of_passagers;

    /**
     * Hermetyzacja zmiennej numberOfPassagers
     * @param NumberOfPassagers zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej numberOfPassagers
     */
    public void setNumber_of_passagers(int NumberOfPassagers){number_of_passagers = NumberOfPassagers;}
    //Tworzenie konstruktora oraz odwoływanie się do konstruktora nadklasy

    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capasity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param speed zmienna konstruktora nadklasy
     * @param engine zmienna konstruktora nadklasy
     * @param Number_of_passagers zmienna do przypisania maksymalnej ilości pasażerów
     */
    public Car(String name, String tank_capasity, String Owner, int speed, String engine, int Number_of_passagers){
        super(name, tank_capasity, Owner, speed, engine );
        setNumber_of_passagers(Number_of_passagers);
        number_of_passagers = Number_of_passagers;
        Info(name, tank_capasity, speed, engine, number_of_passagers, Owner);
    }
    //Tworzenie metody wyswietlającej wszystkie informacje na temat samochodu

    /**
     * Metoda wypisująca informacje
     */
    public void Info(String name, String tank_capacity, int speed, String engine, int number_of_passagers, String owner){
        System.out.println("Wlasciciel : " + owner +". Samochód o nazwie: " + name + ". Pojemnosc baku: " + tank_capacity + ". Maksymalna predkosc: " + speed + "km/h. Typ silnika: " + engine + ". Maksymalna liczba pasarzerow: " + number_of_passagers);
    }
}
