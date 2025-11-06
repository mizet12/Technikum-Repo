import java.util.Random;

public class Petla {
    int liczba1;
    int liczba2;
    int skok;
    int suma;
    int liczbaw;
    int liczbam;

    void wiekszemniejsze(){
        if(liczba1 > liczba2){
            liczba1 = liczbaw;
            liczba2 = liczbam;

        }else if(liczba2 > liczba1){
            liczbaw = liczba2;
            liczbam = liczba1;
        }
    }

    public Petla(int lliczba1, int lliczba2, int sskok){
        liczba1 = lliczba1;
        liczba2 = lliczba2;
        skok = sskok;
        wiekszemniejsze();
        //--------------------- Zadanie 1 ------------------
//        for(int i = liczbam; i <= liczbaw; i++){
//                System.out.println(i);
//        }
//
//        System.out.println("---------------------------");
//
//        for(int i = liczbaw; i >= liczbam; i--){
//            System.out.println(i);
//        }



        //----------------- Zadanie 2 ----------------------------
//        for(int i = liczbam; i <= liczbaw; i++){
//            if(i%2 == 0) {
//                System.out.println(i);
//                    suma += 1;
//            }
//        }
//
//        System.out.println("---------------------------");
//
//        for(int i = liczbaw; i >= liczbam; i--){
//            if(i%2 == 0) {
//                System.out.println(i);
//                    suma += 1;
//            }
//        }


        // -------------- Zadanie 3 --------------------------
//        for(int i = liczbam; i <= liczbaw; i++){
//            if(i%2 == 1) {
//                System.out.println(i);
//            }
//        }
//
//        System.out.println("---------------------------");
//
//        for(int i = liczbaw; i >= liczbam; i--){
//            if(i%2 == 1) {
//                System.out.println(i);
//            }
//        }

        //------------- Zadanie 4 --------------------
//        for(int i = liczbam; i <= liczba2; i= i+skok){
//            System.out.println(i);
//            suma +=1;
//
//        }


        //-------------- Zadanie 5 ---------------------
//
//        for(int i = liczbam; i <= liczba2; i= i+skok){
//            char znak = (char)i ;
//            System.out.println(i + ":" + znak);
//
//        }

//      -------------------- Zadanie 6 ---------------
//        for(int i = liczbam; i <= liczbaw; i++){
//            Random r = new Random();
//            int result = r.nextInt(liczbaw - liczbam) + liczbam;
//            System.out.println(result);
//            suma +=1;
//        }


// ------------------- Zadanie 7 ------------------
//        for(int i = liczbam; i <= liczbaw; i++) {
//            Random r = new Random();
//            int result = r.nextInt(liczbaw - liczbam) + liczbam;
//            char znak = (char) result;
//            System.out.println(result + ": " + znak);
//            suma += 1;
//        }

         enum miesiace{
            styczen, luty, marzec, kwiecien, maj, czerwiec, liepiec, sierpien, wrzesien, pazdziernik, listopad, grudzien
        }
// --------------- Zadanie 8 -------------------
//            for(int i = liczbam -1; i <= liczbaw -1; i++){
//                System.out.println(" "+miesiace.values()[i]);
//            }

// ------------- Zadanie 9 ---------------------
        for(int i = liczbam; i <= liczbaw; i++) {
            Random r = new Random();
            int result = r.nextInt(liczbaw - liczbam) + liczbam;
            System.out.println(" " + miesiace.values()[result]);
        }

        //------------ Do zadan 2-4,6 ----------------
//        System.out.println(suma);
    }



    public static void main(String[] args) {
       Petla petla1 = new Petla(1,10 ,1);
    }
}
