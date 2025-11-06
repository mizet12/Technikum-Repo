/**
 * Nadklasa Vehicle odktórej dziedziczy każda inna klasa oprócz klasy Main
 */
public class Vehicle {
    //Deklarowanie zmiennych i konstruktora parametrowego. Uzyskiwanie dostępu do zmiennych za pomocą hermetyzacji
    /**
     * Tworzenie zmiennych określających nazwe pojazdu, pojemność baku, imie właściciela jako prywatnych to późniejszej hermetyzacji
     */
    private String name, tank_capasity, owner;

    /**
     * Hermatyzacja zmiennej name
     * @param Name zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej name
     */
    public void setName(String Name){name = Name;}

    /**
     * Hermatyzacja zmiennej tank_capacity
     * @param Tank_capasity zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej tank_capacity
     */
    public void setTank_capasity(String Tank_capasity){tank_capasity = Tank_capasity;}

    /**
     * Hermetyzacja zmiennej owner
     * @param owner zmienna pozwalająca na uzyskanie dostępu do zawartości zmiennej owner
     */
    public void setOwner(String owner) {
        this.owner = owner;
    }

    /**
     * Konstruktor paramterowy klasy
     * @param Name zmienna do przypisania wartości
     * @param Tank_capasity zmienna do przypisania wartości
     * @param Owner zmienna do przypisania wartości
     */
    public Vehicle(String Name, String Tank_capasity, String Owner){
        setName(Name);
        setTank_capasity(Tank_capasity);
        setOwner(Owner);
        this.name = Name;
        this.tank_capasity = Tank_capasity;
        this.owner = Owner;
    }
    //Stworzenie metody używanej potem do dziedziczenia innych metod do wyświetlania informacji o pojeździe

    /**
     * tworzenie metody Info która zostanie potem dziedziczona przez inne klasy
     */
    void Info(){

    }
}
