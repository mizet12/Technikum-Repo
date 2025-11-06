package biuro;

public class Czas {
    /**
     *  Tworzenie zmiennych ktore sa przypisane jako argumenty w konstruktorze
     */
    int godzinaP, godzinaW;
    int minutaP, minutaW;
    public Czas( int godzinaWyjazdu, int minutaWyjazdu,int godzinaPrzyjazdu, int minutaPrzyjazdu){
        this.godzinaW = godzinaWyjazdu;
        this.minutaW = minutaWyjazdu;
        this.godzinaP = godzinaPrzyjazdu;
        this.minutaP = minutaPrzyjazdu;
    }
}
