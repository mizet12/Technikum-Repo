/**
 * klasa motorcycle dziedzicząca od driving
 */
public class motorcycle extends driving{
    //Tworzenie zmiennych i uzywkiwanie do nich dostepu
    /**
     * Tworzenie zmiennych prwatnych opisujących motocykl
     */
    private String suspension;
    /**
     * Hermetyzacja zmiennej suspension
     * @param Suspension zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej suspension
     */
    public void setSuspension(String Suspension){suspension = Suspension;}
    //Tworzenie konstrukotora i odwoływanie się do konstrukotora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capasity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param speed zmienna konstruktora nadklasy
     * @param engine zmienna konstruktora nadklasy
     * @param Suspension zmienna do przypisania wielkości zawieszenia
     */
    public motorcycle(String name, String tank_capasity, String Owner, int speed, String engine, String Suspension){
        super(name, tank_capasity, Owner, speed, engine );
        setSuspension(Suspension);
        suspension = Suspension;
        Info(name, tank_capasity, speed, engine, suspension, Owner);
    }
    //Tworzenie metody wyświetlającej wszystkie informacje o Motocyklu
    /**
     * Metoda wypisująca informacje
     */
    public void Info(String name, String tank_capcity, int speed, String engine, String suspension, String owner){
        System.out.println("Wlasciciel : " + owner +". Motocykl o nazwie: " + name + ". Pojemnosc baku: " + tank_capcity + ". Maksymalna predkosc: " + speed + "km/h. Typ silnika: " + engine + ". Wysokosc zawieszenia: " + suspension + "cm");
    }
}
