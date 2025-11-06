/**
 * Klasa main zawierająca wszystkie obiekty, szereg Heterogeniczny oraz wyświetlanie informacji o pojazdach
 */
public class Main {
    /**
     *Funkcja main używana do kompilacji programu. Przechowywująca w sobie szereg Heterogeniczny oraz odwołanie do metody Info
     */
    public static void main(String[] args) {
        //Utworzenie Szeregu Heterologicznego od nadbazy Vahicle
        /**
         * Tworzenie Szeregu Heterogenicznego opartego o nadklase Vehicle
          */
        Vehicle v[] = new Vehicle[9];
        v[0] = new Quad("Quad1", "100L","Jarowslaw", 80,"tlokowy","terenowe");
        v[1] = new motorcycle("motor1", "50L","Mateusz",50,"tlokowy","10");
        v[2] = new Car("Auto1", "100L","Michal",150,"tlokowy",5);
        v[3] = new Plane("Samolot1","1000L","Jakub", 2000,"Odrzutowy");
        v[4] = new sailBoat("Zaglowka1","200L","Filip",5000,2);
        v[5] = new Helicopter("Helikopter1", "500L","Maksym", 1000, 8);
        v[6] = new Balloon("Balon1", "300kg","Kamil",800,70);
        v[7] = new Submarine("Podwodna1","800L","Marcel", 10000, 5000);
        v[8] = new Galeon("Galeon1","700L","Mateusz",10000,"Czaszka Piracka");
        //Wyswietlanie w petli informacji o kazdym obiektcie zapisanym w tablicy
        /**
         * tworzenie pętli w której odwołujemy się do każdego elementu szeregu oraz wyświatlanie danych tego elementu
         */
        for (int i =0; i < v.length; i++){
            v[i].Info();
        }

    }
}
