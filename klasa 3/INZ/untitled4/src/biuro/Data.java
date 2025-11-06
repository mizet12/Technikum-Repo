package biuro;

public class Data {
    /**
     *  Tworzenie zmiennych ktore sa przypisane jako argumenty w konstruktorze
     */
    int rokP, rokW;
    int miesiacP, miesiacW;
    int dzienP, dzienW;
    public Data( int rokWyjazdu, int miesiacWyjazdu, int dzienWyjazdu, int rokPrzyjazdu,int miesiacPrzyjazdu,int dzienPrzyjazdu){
        this.rokW = rokWyjazdu;
        this.miesiacW = miesiacWyjazdu;
        this.dzienW = dzienWyjazdu;

        this.rokP = rokPrzyjazdu;
        this.miesiacP = miesiacPrzyjazdu;
        this.dzienP = dzienPrzyjazdu;

    }
}
