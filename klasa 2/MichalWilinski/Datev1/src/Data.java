public class Data {
    public int dzien;
    public int mmiesiac;
    public String miesiac;
    public int rok;
    public int liczba_dni;
    public boolean poprawnosc = true;
    public Data(int dzienn, int miesiacc, int rokk){
    dzien = dzienn;
    mmiesiac = miesiacc;
    rok = rokk;
    zmianamiesiaca();
    liczbadniwmiesiacu();
    liczbadniwroku();
    if(poprawnosc == true) {
        System.out.println(dzien + " " + miesiac + " " + rok + " (" + liczba_dni+")");
    }else{
        System.out.println("blad");
    }
    }
    public void liczbadniwroku(){
        if(rok%4 == 0){
            liczba_dni = 366;
        }else{
            liczba_dni = 365;
        }
    }
    public void zmianamiesiaca(){
        if(mmiesiac == 1){
            miesiac = "Styczen";
        }else if(mmiesiac == 2){
            miesiac = "luty";
        }else if(mmiesiac == 3){
            miesiac = "marzec";
        }else if(mmiesiac == 4){
            miesiac = "kwiecien";
        }else if(mmiesiac == 5){
            miesiac = "maj";
        }else if(mmiesiac == 6){
            miesiac = "czerwiec";
        }else if(mmiesiac == 7){
            miesiac = "lipiec";
        }else if(mmiesiac == 8){
            miesiac = "sierpien";
        }else if(mmiesiac == 9){
            miesiac = "wrzesien";
        }else if(mmiesiac == 10){
            miesiac = "pazdziernik";
        }else if(mmiesiac == 11){
            miesiac = "listopad";
        }else if(mmiesiac == 12){
            miesiac = "Grudzien";
        }else{
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }
    }

    public void liczbadniwmiesiacu(){
        if(mmiesiac == 1 && dzien > 31){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 2 && dzien > 28){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 3 && dzien > 31){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 4 && dzien > 30){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 5 && dzien > 31){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 6 && dzien > 30){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 7 && dzien > 31){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 8 && dzien > 31){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 9 && dzien > 30){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 10 && dzien > 31){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 11 && dzien > 30){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }else if(mmiesiac == 12 && dzien > 31){
            System.out.println("niepoprawna data");
            poprawnosc = false;
        }
    }

    public static void main(String[] args) {
    Data data1 = new Data(10, 9,2020);
    }
}
