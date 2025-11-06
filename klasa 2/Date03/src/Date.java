public class Date {
    int dzien1;
    int dzien2;
    int miesiac1;
    int miesiac2;
    int rok1;
    int rok2;
    int suma1;
    int suma2;
    int roznicadni;

    public Date(int dzien1, int miesiac1, int rok1, int dzien2, int miesiac2, int rok2){
    this.dzien1 = dzien1;
    this.dzien2 = dzien2;
    this.miesiac1 = miesiac1;
    this.miesiac2 = miesiac2;
    this.rok1 = rok1;
    this.rok2 = rok2;

        data1();
        data2();
        roznica();

        System.out.println(roznicadni + "\n");
    }

    void data1(){
        for(int i = dzien1; i> 1; i--){
            suma1 +=1;
        }
        for(int i = miesiac1-1; i>  1; i--){
            switch(i){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    suma1 += 31;
                break;

                case 2:
                    suma1 += 28;
                    break;

                case 4:
                case 6:
                case 9:
                case 11:
                    suma1 += 30;
                    break;
            }
        }
        for(int i = rok1; i>1; i--){
            suma1 += 365;
            if(i%4 == 0) {
                suma1 += 1;
            }
        }
        if(miesiac1 > 2){
            suma1 +=1;
        }
    }

    void data2(){
        for(int i = dzien2; i> 1; i--){
            suma2 +=1;
        }
        for(int i = miesiac2-1; i>  1; i--){
            switch(i){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    suma2 += 31;
                    break;

                case 2:
                    suma2 += 28;
                    break;

                case 4:
                case 6:
                case 9:
                case 11:
                    suma2 += 30;
                    break;
            }
        }
        for(int i = rok2; i>1; i--){
            suma2 += 365;
            if(i%4 == 0){
                suma2+=1;
            }
        }
        if(miesiac2 > 2){
            suma2 += 1;
        }
    }

    void roznica(){
        if(suma1 > suma2){
            roznicadni = suma1 - suma2;
        }else if(suma2 > suma1){
            roznicadni = suma2 - suma1;
        }
    }

    public static void main(String[] args) {
        Date data1 = new Date(17,3,2024,17,2,2024);
        Date data2 = new Date(19,3,2020,19,12,2024);
        Date data3 = new Date(1,1,1,31,12,2021);

    }
}


















