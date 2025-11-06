package biuro;
import biuro.Czas;
import biuro.Data;
import biuro.Klient;

import java.util.Random;
public class Main {
    /**
     * @author Michal Wilinski
     * Data 26-10-2022 - 2-11-2022
     */

    public static void main(String[] args) {
        /**
         * Tworzenie obiektow przez uzytkownika, ktore potem dodane zostana do tablicy klienci
         */

        Klient klient1 = new Klient("Miroslaw", "Skur", "Warszawa",34);
        Klient klient2 = new Klient("Jan","Kebon","Katowice",24);
        Klient klient3 = new Klient("Marek","Fridayer","Bydgoszcz",19);
        Klient klient4 = new Klient("Wojciech","Maciaszek","Gdansk",45);
        Klient klient5 = new Klient("Pawel","Wiklinski","Poznan",65);

        /**
         *  Tworzenie Obiektow przez uzytkownika do tablicy wycieczki
         */

        Wycieczka wycieczka1 = new Wycieczka("Sosnowiec", "Elektronik",2,200,new Data(2022,12,6,2022,12,8), new Czas(6,0,21,30));
        Wycieczka wycieczka2 = new Wycieczka("Zakopane", "Stoki Narciarskie",700,15,new Data(2022,12,30,2022,12,31), new Czas(7,0,23,30));
        Wycieczka wycieczka3 = new Wycieczka("Poznan", "MTP",300,40,new Data(2023,6,27,2023,6,28), new Czas(4,0,21,30));

        /**
         *  Tworzenie tablic "klienci", "wyjazd" oraz "wycieczki przypisane". Gdzie w kliencie oraz wycieczkach mamy
         * standardowa liczbe 10 i 7 automatycznie przypisanych obiektow + zmienna poszerzajaca sie o 1 za kazdym
         * stworzonym obiektem
         */

        Klient[] klienci = new Klient[10 + Klient.liczba];

        Wycieczka[] wyjazd = new Wycieczka[7 + Wycieczka.liczba];

        Wykupione[] wycieczkiprzyisane = new Wykupione[20];

        /**
         *  Uzupelnienie tablic klienci oraz wycieczki automatycznie wpisanymi danymi oraz obiektami stworzonymi na poczatku
         */
        klienci[0] = new Klient("Filip", "Flak", "Slawkow", 17);
        klienci[1] = new Klient("Marcel", "Maciaszczyk", "Sosnowiec", 17);
        klienci[2] = new Klient("Piotr", "Jakubczyk", "Dabie", 17);
        klienci[3] = new Klient("Jakub", "Jastrzab", "Sosnowiec", 17);
        klienci[4] = new Klient("Mateusz", "Kepinski", "Sosnowiec", 16);
        klienci[5] = new Klient("Matuesz", "Piatkowski", "Sosnowiec", 17);
        klienci[6] = new Klient("Michal", "Wilinski", "Sosnowiec", 16);
        klienci[7] = new Klient("Damian", "Kwasny", "Sosnowiec", 17);
        klienci[8] = new Klient("Piotr", "Skora", "Czeladz", 17);
        klienci[9] = new Klient("Dominik", "Pelka", "Dobrowa Gornicza", 17);
        klienci[10] = klient1;
        klienci[11] = klient2;
        klienci[12] = klient3;
        klienci[13] = klient4;
        klienci[14] = klient5;


        wyjazd[0] = new Wycieczka("Warszawa", "Palac Prezydencki", 900, 30, new Data(2022, 5, 16,  2022, 5, 19), new Czas(20,10,15,30));
        wyjazd[1] = new Wycieczka("Krakow", "Rynek", 500, 34, new Data(2022, 8, 30,  2028, 9, 9), new Czas(10,15,20,5));
        wyjazd[2] = new Wycieczka("Watykan", "Bazylika sw. Piotra", 4000, 35, new Data(2022, 6, 25,  4022, 6, 19 ), new Czas(13,12,15,16));
        wyjazd[3] = new Wycieczka("USA", "Washington", 10000, 45, new Data(2022, 4, 23,  2022, 5, 7), new Czas(16,30,10,15));
        wyjazd[4] = new Wycieczka("Paryz", "wierza Eifla", 2400, 25, new Data(2022, 8, 27,  2022, 6, 17), new Czas(13,15,20,30));
        wyjazd[5] = new Wycieczka("Tokyo", "Akihabara i kwitnaca sakura", 4000, 65, new Data(2022, 4, 9,  2022, 4, 25 ), new Czas(6,0,20,30));
        wyjazd[6] = new Wycieczka("Ludz", "Manufaktura", 500, 30, new Data(2022, 6, 5,  2022, 6, 5), new Czas(6,0,23,0));
        wyjazd[7] = wycieczka1;
        wyjazd[8] = wycieczka2;
        wyjazd[9] = wycieczka3;


        /**
         *  Tworzenie zmiennej pseudo-losowej ktorej uzyjemy do przypisania losowych wycieczek do danego klienta
         */
        Random rand = new Random();
        for(int i =0; i < wycieczkiprzyisane.length; i++){
                wycieczkiprzyisane[i] = new Wykupione(wyjazd[rand.nextInt(wyjazd.length)], klienci[rand.nextInt(klienci.length)]);
        }

        /**
         *  Wypisywanie Sumy wszystkich wycieczek
         */
            System.out.println("Suma wszystkich wycieczek");
            System.out.println(wycieczkiprzyisane.length);

        /**
         *  Uzycie petli for-each po to by wyswietlic informacje na temat Wycieczek poprzez metode zapisana w klasie wycieczka
         */
        System.out.println("---Dane o wycieczkach---");
        for (Wycieczka wycieczka : wyjazd) {
            wycieczka.WyswietlDaneW();
        }
        System.out.println();
        /**
         *  Uzycie petli for-each po to by wyswietlic informacje na temat klientow oraz to jakie wycieczki
         * zostaly im przypisane
         */
        System.out.println("----Klienci----");
        for (Klient k : klienci) {
            k.WyswietlDaneK();
            System.out.println("Wykupiona wycieczki: ");

            for (Wykupione wykupionaWycieczka : wycieczkiprzyisane) {
                if (wykupionaWycieczka.klient == k) {
                    wykupionaWycieczka.wyswietlDaneP();
                }
            }
        }
        System.out.println();

    }
}
