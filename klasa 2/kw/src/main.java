public class main {
    int skok1, skok2, bok1, bok2;

    public main(int skok1, int skok2, int bok1, int bok2){
        this.skok1 = skok1;
        this.skok2 = skok2;
        this.bok1 = bok1;
        this.bok2 = bok2;
        pole();
        obwod();

    }


    void pole(){
        for(int i = skok1; i<=skok2; i++){
            System.out.println("kwadrat"+ i + " o boku " + i + "cm posiada pole " + (i*i) + "cm2");
        }
    }
    void obwod(){
        for(int i = skok1; i<=skok2; i++){
            System.out.println("kwadrat"+ i + " o boku " + i + "cm posiada obwod rowny " + (i*4) + "cm");
        }
    }


    public static void main(String[] args) {
        main kw1 = new main(1,5,3,4);
    }
}
