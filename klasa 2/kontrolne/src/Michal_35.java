public class Michal_35 {
    public static void main(String[] args) {
        //Wywolywanie konstruktorow parametrowych
        Person Uczen1 = new Person("Michal", "Wilinski",(byte)16,new Date((short)2020,(byte)9,(byte)1));
        Person Uczen2 = new Person("Michal", "Wilinski",(byte)16,new Date((short)2020,(byte)9,(byte)1,"Wrzesien"));
    }
}
