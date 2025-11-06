public class Czas {
    private byte godzina;
    private byte minuta;

    public Czas(){
        String czasy[] = new String[7];
        czasy[0] = "12:16";
        czasy[1] = "11:19";
        czasy[2] = "13:16";
        czasy[3] = "17:19";
        czasy[4] = "16:16";
        czasy[5] = "19:19";
        czasy[6] = "07:45";

    }
    
    public Czas(byte godzina, byte minuta){
        this.godzina = godzina;
        this.minuta = minuta;
    }

    public byte getGodzina(){return godzina;}
    public byte getMinuta(){return minuta;}

}
