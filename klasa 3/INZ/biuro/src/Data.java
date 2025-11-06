import java.lang.reflect.Array;
public class Data {
    private short rok;
    private byte miesiac;
    private byte dzien;

    public String GotoweDaty(byte i)
    {
        String daty[] = new String[7];
        daty[0] = "26:10:2022";
        daty[1] = "3:11:2022";
        daty[2] = "3:11:2022";
        daty[3] = "3:11:2022";
        daty[4] = "28:04:2023";
        daty[5] = "28:04:2023";
        daty[6] = "28:04:2023";

        String x = (String)Array.get(daty, i);

        return x;
    }

    public Data(short rok, byte miesiac, byte dzien){
        this.rok = rok;
        this.miesiac = miesiac;
        this.dzien = dzien;
    }

    public short getRok(){return rok;}
    public byte getMiesiac(){return miesiac;}
    public byte getDzien(){return dzien;}

}
