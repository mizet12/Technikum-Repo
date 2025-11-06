public class Adres { //tworzenie zmienny
    String ulica, miasto, kodpocztowy;

    Adres(String uulica, String kkodpocztowy, String mmiasto){ //Tworzenie konstruktora parametrycznego
    ulica = uulica;
    kodpocztowy = kkodpocztowy;
    miasto = mmiasto;
    }

    String informacje(){ //Tworzenie metody do wywoływania inforamcji
        return "Ulica: "+ ulica + "\nKod pocztowy: " + kodpocztowy + "\nmiasto: "+ miasto;
    }
}
