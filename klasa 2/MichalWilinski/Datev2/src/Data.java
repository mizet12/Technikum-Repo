public class Data {
    public int dzien;
    public int miesiac1;
    public String miesiac2;
    public int rok;

    public Data(int ddzien, int mmiesiac1, int rrok){
        rok = rrok;
        miesiac1 = mmiesiac1;
        dzien = ddzien;
        miesiac();

        System.out.println("Wejscie: "+ dzien+"."+miesiac1+"."+rok);
        System.out.println("Wyjscie: "+dzien+" " +miesiac2 +" "+rok);
    }
    public void miesiac(){
        if(miesiac1 == 1){
            miesiac2 = "styczenia";
        }else if(miesiac1 == 2){
            miesiac2 = "lutego";
        }else if(miesiac1 == 3){
            miesiac2 = "marca";
        }else if(miesiac1 == 4){
            miesiac2 = "kwietnia";
        }else if(miesiac1 == 5){
            miesiac2 = "maja";
        }else if(miesiac1 == 6){
            miesiac2 = "czerwca";
        }else if(miesiac1 == 7){
            miesiac2 = "lipca";
        }else if(miesiac1 == 8){
            miesiac2 ="sierpnia";
        }else  if(miesiac1 == 9){
            miesiac2 = "wrzesnia";
        }else if(miesiac1 == 10){
            miesiac2 ="pazdzienika";
        }else if(miesiac1 == 11){
            miesiac2 = "listopada";
        }else if(miesiac1 == 12){
            miesiac2 = "grudnia";
        }
    }
    public static void main(String[] args) {
        Data data1 = new Data(12, 3, 2021);
    }
}
