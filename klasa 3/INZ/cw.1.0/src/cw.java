public class cw {
    public static String zdanie;
    public static char tab[];
    public cw(String zadanie){
    this.zdanie = zadanie;
    zdanie();
    }
    public static void zdanie(){
        for (int i = 0; i < zdanie.length(); i++){
            tab[i] = zdanie.charAt(i);
        }
    }

    public static void main(String[] args) {
        cw cw1 = new cw("Zdanie od tylu");
    }
}
