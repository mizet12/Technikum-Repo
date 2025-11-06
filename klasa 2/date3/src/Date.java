public class Date {
    public int dzien1;
    public int dzien2;
    public int miesiac1;
    public int miesiac2;
    public int rok1;
    public int rok2;
    public int roznicaL;
    public int liczbadnimies1;
    public int liczbadnimies2;
    public boolean poprawnosc = true;
    public String miesiac11;
    public String miesiac22;



    void blad(){
        if(dzien1 > 31 && miesiac1 == 1 || miesiac1 == 3 || miesiac1 == 5
        || miesiac1 == 7 || miesiac1 == 8 || miesiac1 == 10 || miesiac1 == 12){
            poprawnosc = false;
        }else if(dzien1 > 30 && miesiac1 == 4 || miesiac1 == 6 || miesiac1 == 9
        || miesiac1 == 11){
            poprawnosc = false;
        }if(dzien2 > 31 && miesiac2 == 1 || miesiac2 == 3 || miesiac2 == 5
                || miesiac2 == 7 || miesiac2 == 8 || miesiac2 == 10 || miesiac2 == 12){
            poprawnosc = false;
        }else if(dzien2 > 30 && miesiac2 == 4 || miesiac2 == 6 || miesiac2 == 9
                || miesiac2 == 11) {
            poprawnosc = false;
        }else if(miesiac1 == 2 && dzien1 > 29 && rok1%4 == 0){
            poprawnosc = false;
        }else if(miesiac2 == 2 && dzien2 > 29 && rok2%4 == 0){
            poprawnosc = false;
        }else if(miesiac1 == 2 && dzien1 > 28 && rok1%4 != 0){
            poprawnosc = false;
        }else if( miesiac2 == 2 && dzien2 > 28 && rok2%4 != 0){
            poprawnosc = false;
        }

    }

    void rokprzestepny(){
        if(rok1%4 == 0 && miesiac1 == 2){
            miesiac1 += 1;
        }else if(rok2%4 == 0 && miesiac2 ==2){
            miesiac2 += 1;
        }
    }

     int roznicadni(){
        if(dzien1 > dzien2){
            roznicaL += dzien1 - dzien2;
        }else if(dzien2 > dzien1){
            roznicaL += dzien2 - dzien1;
        }

     return roznicaL;
     }
     void iloscdni(){
        if(miesiac1 == 1){
            liczbadnimies1 = 31;
        }else if(miesiac1 == 2 && rok1%4 == 0){
            liczbadnimies1 = 29;
        }else if(miesiac1 == 2 && rok1%4 != 0){
            liczbadnimies1 = 28;
        }else if(miesiac1 == 3){
            liczbadnimies1 = 31;
        }else if(miesiac1 == 4){
            liczbadnimies1 = 30;
        }else if(miesiac1 == 5){
            liczbadnimies1 = 31;
        }else if(miesiac1 ==6){
            liczbadnimies1 = 30;
        }else if(miesiac1 == 7){
            liczbadnimies1 = 31;
        }else if(miesiac1 == 8){
            liczbadnimies1 = 31;
        }else if(miesiac1 == 9){
            liczbadnimies1 = 30;
        }else if(miesiac1 == 10){
            liczbadnimies1 = 31;
        }else if(miesiac1 == 11){
            liczbadnimies1 = 30;
        }else if(miesiac1 == 12){
            liczbadnimies1 = 31;
        }

         if(miesiac2 == 1){
             liczbadnimies2 = 31;
         }else if(miesiac2 == 2 && rok1%4 == 0){
             liczbadnimies2 = 29;
         }else if(miesiac2 == 2 && rok1%4 != 0){
             liczbadnimies2 = 28;
         }else if(miesiac2 == 3){
             liczbadnimies2 = 31;
         }else if(miesiac2 == 4){
             liczbadnimies2 = 30;
         }else if(miesiac2 == 5){
             liczbadnimies2 = 31;
         }else if(miesiac2 ==6){
             liczbadnimies2 = 30;
         }else if(miesiac2 == 7){
             liczbadnimies2 = 31;
         }else if(miesiac2 == 8){
             liczbadnimies2 = 31;
         }else if(miesiac2 == 9){
             liczbadnimies2 = 30;
         }else if(miesiac2 == 10){
             liczbadnimies2 = 31;
         }else if(miesiac2 == 11){
             liczbadnimies2 = 30;
         }else if(miesiac2 == 12){
             liczbadnimies2 = 31;
         }
     }

     void roznicamiesiecy(){


        if(miesiac1 > miesiac2 && liczbadnimies1%30 == 0){
            roznicaL += 30 * (miesiac1 - miesiac2);
        }else if(miesiac1 > miesiac2 && liczbadnimies1%31 == 0){
            roznicaL += 31 * (miesiac1 - miesiac2);
        }else if(miesiac1 > miesiac2 && liczbadnimies1%28 == 0){
            roznicaL += 28 * (miesiac1 - miesiac2);
        }else if(miesiac1 > miesiac2 && liczbadnimies1%29 == 0){
            roznicaL += 29 * (miesiac1 - miesiac2);
        }
        if(miesiac2 > miesiac1 && liczbadnimies2%30 == 0){
            roznicaL += 30 * (miesiac2 - miesiac1);
        }else if(miesiac2 > miesiac1 && liczbadnimies2%31 == 0){
            roznicaL += 31 * (miesiac2 - miesiac1);
        }else if(miesiac2 > miesiac1 && liczbadnimies2%28 == 0){
            roznicaL += 28 * (miesiac2 - miesiac1);
        }else if(miesiac2 > miesiac1 && liczbadnimies2%29 == 0){
            roznicaL += 29 * (miesiac2 - miesiac1);
        }

     }

     int roznicalat(){
        if(rok1 > rok2){
           roznicaL += (rok1 * 365) - (rok2 * 365);
        }else if(rok2 > rok1){
            roznicaL += (rok2 * 365) - (rok1 * 365);
        }
        return roznicaL;
     }


     void miesiace(){
        if(miesiac11 == "Styczen" || miesiac11 == "styczen"){
            miesiac1 = 1;
        }else if(miesiac11 == "Luty" || miesiac11 == "luty"){
            miesiac1 =2;
        }else if( miesiac11 == "Marzec" || miesiac11 == "marzec"){
            miesiac1 = 3;
        }else if(miesiac11 == "kwiecien" || miesiac11 == "Kwiecien"){
            miesiac1 = 4;
        }else if(miesiac11 == "maj" || miesiac11 == "Maj"){
            miesiac1 = 5;
        }else if(miesiac11 == "czerwiec" || miesiac11 == "Czerwiec"){
            miesiac1 = 6;
        }else if(miesiac11 == "lipiec" || miesiac11 == "Lipiec"){
            miesiac1 = 7;
        }else if(miesiac11 == "sierpien" || miesiac11 == "Sierpien"){
            miesiac1 = 8;
        }else if(miesiac11 == "wrzesien" || miesiac11 == "Wrzesien"){
            miesiac1 = 9;
        }else if(miesiac11 == "pazdziernik" || miesiac11 == "Pazdziernik"){
            miesiac1 = 10;
        }else if(miesiac11 == "listopad" || miesiac11 == "Listopad"){
            miesiac1 = 11;
        }else if(miesiac11 == "grudzien" || miesiac11 == "Grudzien"){
            miesiac1 = 12;
        }

         if(miesiac22 == "Styczen" || miesiac22 == "styczen"){
             miesiac2 = 1;
         }else if(miesiac22 == "Luty" || miesiac22 == "luty"){
             miesiac2 = 2;
         }else if(miesiac22 == "Marzec" || miesiac22 == "marzec"){
             miesiac2 = 3;
         }else if(miesiac22 == "kwiecien" || miesiac22 == "Kwiecien"){
             miesiac2 = 4;
         }else if(miesiac22 == "maj" || miesiac22 == "Maj"){
             miesiac2 = 5;
         }else if(miesiac22 == "czerwiec" || miesiac22 == "Czerwiec"){
             miesiac2 = 6;
         }else if(miesiac22 == "lipiec" || miesiac22 == "Lipiec"){
             miesiac2 = 7;
         }else if(miesiac22 == "sierpien" || miesiac22 == "Sierpien"){
             miesiac2 = 8;
         }else if(miesiac22 == "wrzesien" || miesiac22 == "Wrzesien"){
             miesiac2 = 9;
         }else if(miesiac22 == "pazdziernik" || miesiac22 == "Pazdziernik"){
             miesiac2 = 10;
         }else if(miesiac22 == "listopad" || miesiac22 == "Listopad"){
             miesiac2 = 11;
         }else if(miesiac22 == "grudzien" || miesiac22 == "Grudzien"){
             miesiac2 = 12;
         }
     }

    public Date(int ddzien1, String mmiesiac11, int rrok1, int ddzien2 , String mmiesiac22 , int rrok2){
        dzien1 = ddzien1;
        dzien2 = ddzien2;
        miesiac11 = mmiesiac11;
        miesiac22 = mmiesiac22;
        rok1 = rrok1;
        rok2 = rrok2;

        roznicadni();
        roznicamiesiecy();
        roznicalat();
        miesiace();
        iloscdni();
        rokprzestepny();


        if(poprawnosc == true){
            System.out.println("Roznica podanych dat: " + roznicaL);
        }else{
            System.out.println("Nie poprawna data");
        }

    }



    public static void main(String[] args) {
        Date data1 = new Date(17, "luty", 2024, 17, "marzec", 2024);
        Date data2 = new Date(30,"Wrzesien", 2021, 10, "Wrzesien", 2021);
        Date data3 = new Date(20 , "Lipiec", 2016, 20, "Lipiec", 2021);
    }
}
