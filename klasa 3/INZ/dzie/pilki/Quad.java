/**
 * klasa Quad dziedzicząca od driving
 */
public class Quad extends driving{
    //Tworzenie zmiennych i uzyskiwanie do nich dostępu
    /**
     * Tworzenie zmiennych prwatnych opisujących Quad
     */
    private String daperType;
    /**
     * Hermetyzacja zmiennej daperType
     * @param DaperType zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej numberOfPassagers
     */
    public void setDaperType(String DaperType){daperType = DaperType;}
    //Tworznie konstruktora i odwoływanie się do konstruktora nadklasy
    /**
     * Tworzenie konstruktora parametrowego tworzącego zmienne do wywołania konstruktora nadklasy
     * @param name zmienna konstruktora nad klasy
     * @param tank_capasity zmienna konstruktora nad klasy
     * @param Owner zmienna konstruktora nad klasy
     * @param speed zmienna konstruktora nadklasy
     * @param engine zmienna konstruktora nadklasy
     * @param DaperType zmienna do przypisania typu amortyzatorów
     */
    public Quad(String name, String tank_capasity, String Owner, int speed, String engine, String DaperType){
        super(name, tank_capasity, Owner, speed, engine );
        setDaperType(DaperType);
        daperType = DaperType;
        Info(name, tank_capasity,speed, engine, daperType, Owner);
    }
    //Tworzenie metody wyświetlającej informacje na temat Quadu
    /**
     * Metoda wypisująca informacje
     */
    public void Info(String name, String tank_capcity, int speed, String engine , String daperType, String owner){
        System.out.println("Wlasciciel : " + owner +". Quad o nazwie: " + name + ". Pojemnosc silnika :" + tank_capcity + ". Wyciagajacy maks predkosc: " + speed + "km/h. O silniku: " + engine + ". Typ amortyztorów: " + daperType);
    }
}
