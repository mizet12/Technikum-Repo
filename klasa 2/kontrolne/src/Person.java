public class Person {
    //tworzenie zmiennych dla klasy Person
    String name;
    String last_name;
    byte age;
    Date data;
    //tworzernie konstruktora klasy Person
    public Person(String aname, String alast_name, byte aage, Date adata){
        name = aname;
        last_name = alast_name;
        age = aage;
        data = adata;
    }
    //Tworzenie metody dla klasy Person wyswitlajacej dane osoby
    void pokaz(){
        System.out.println("imie: " + name);
        System.out.println("nazwisko: " + last_name);
        System.out.println("wiek: "+ age);
    }
}
