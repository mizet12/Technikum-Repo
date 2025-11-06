public class porownaniejasnosci {
    //Tworzenie zmiennych

    koloryRGB rgb1;
    koloryRGB rgb2;
    koloryCMYK cmyk1;
    koloryCMYK cmyk2;
    int jasnosc1r, jasnosc2r, jasniejszyr;
    float procentr, procentc;
    int jasnosc1c, jasnosc2c, jasniejszyc;
    double dominujacyr, dominujacyr2;
    kolor dom;

    //konstruktor przypisujący zmienne oraz aktywujacy metody

    public porownaniejasnosci(koloryRGB rgb1, koloryRGB rgb2, koloryCMYK cmyk1, koloryCMYK cmyk2){
        this.rgb1 = rgb1;
        this.rgb2 = rgb2;
        this.cmyk1 = cmyk1;
        this.cmyk2 = cmyk2;
        porownywaniergb();
        porywnywaniecmyk();
        kolordominujacyrgb();
        System.out.println(dom);
    }
    //Metoda porywnujaca kolory CMYk poprzez dodanie ich wartości oraz wyznaczenie tej z mniejszą sumą
    void porywnywaniecmyk(){
        jasnosc1c = cmyk1.C + cmyk1.M + cmyk1.Y + cmyk2.K;
        jasnosc2c = cmyk2.C + cmyk2.M + cmyk2.Y + cmyk2.K;

        if(jasnosc1c < jasnosc2c){
            System.out.println("Kolor CMYK1 jest jasnieszy");
            jasniejszyc = jasnosc1c;
            procentc = (jasnosc2c * 100)/(100*4) - (jasniejszyc * 100)/(100*4);
            System.out.println("kolor CMYK1 jest jasnieszy o " + procentc + "%");

        } else if(jasnosc2c < jasnosc1c) {
            System.out.println("Kolor CMYK2 jest jasnieszy");
            jasniejszyc = jasnosc2c;
            procentc = (jasnosc1c * 100) / (100 * 4) - (jasniejszyc * 100) / (100 * 4);
            System.out.println("kolor CMYK2 jest jasnieszy o " + procentc + "%");
        }
    }
//Torzenie enuma do wypisania nazwy koloru
public enum kolor {
    bialy,a, b , czarny,c,d, czerwony,e,f, zieloiny,g,h, niebieski,i,j, zolty,k,l, fiolet,m,n, szary
}
//tablica z informacjami o wartościach RGB kolorów
    int[] rgb = {255,255,255,
                0,0,0,
                255,0,0,
                0,255,0,
                0,0,255,
                255,255,0,
                255,0,255,
                112,112,112};
    //matoda sprawdzająca kolor dominujący RGB
    //polega ona na porównywaniu kolorów do siebie i wypisaniu tej o najwyzszej wartosci
    //poniewaz wartosc oznacza zgodnosc z danym kolorem
    void kolordominujacyrgb(){
        dominujacyr = Math.sqrt(Math.pow(0 - rgb1.R,2) + Math.pow(0 - rgb1.G,2) + Math.pow(0 - rgb1.B,2));

        for(int i = 0; i < 8; i+=3){
            dominujacyr2 = Math.sqrt(Math.pow(rgb[i] - rgb1.R,2) + Math.pow(rgb[i+1] - rgb1.G,2) + Math.pow(rgb[i+2] - rgb1.B,2));
            if(dominujacyr2 > dominujacyr){
                dom = kolor.values()[i];

            }
        }
    }

    //metoda do porównywania kolorów rgb poprzez zsumowanie ich wartosci oraz wyswietlenie tej najwiekszej
    void porownywaniergb(){
        jasnosc1r = rgb1.R + rgb1.G + rgb1.B;
        jasnosc2r = rgb2.R + rgb2.G + rgb2.B;


        if(jasnosc1r > jasnosc2r){
            System.out.println("kolor RGB1 jest jaśniejszy");
            jasniejszyr = jasnosc1r;
            procentr = (jasniejszyr * 100)/(255*3) - (jasnosc2r * 100)/(255*3);
            System.out.println("kolor RGB1 jest jasniejszy o " + procentr + "%");
        }else if(jasnosc2r > jasnosc1r){
            System.out.println("kolor RGB2 jest jaśniejszy");
            jasniejszyr = jasnosc2r;
            procentr = (jasniejszyr * 100)/(255*3) - (jasnosc1r * 100)/(255*3);
            System.out.println("kolor RGB2 jest jasniejszy o " + procentr + "%");
        }else if(jasnosc1r == jasnosc2r){
            System.out.println("kolory są identycznie jasne");
        }

    }
    //main gdzie przypisuje obiekty do konstruktorów
    public static void main(String[] args) {
        koloryRGB rgb1 = new koloryRGB(255,255,255);
        koloryRGB rgb2 = new koloryRGB(2,3,4);
        koloryCMYK cmyk1 = new koloryCMYK(1,2,3,4);
        koloryCMYK cmyk2 = new koloryCMYK(2,3,4,5);
        porownaniejasnosci kolory = new porownaniejasnosci(rgb1, rgb2,cmyk1,cmyk2);
    }
}
