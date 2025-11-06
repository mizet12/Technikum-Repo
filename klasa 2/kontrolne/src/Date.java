public class Date {
    //tworzenie zmiennych prywatnych
    private short year;
    private byte monthnumber;
    private String monthstring;
    private byte day;
    //tworzenie getterow i setterow do odzysania zmiennych prywatnych
    public void Setter_year(byte nyear) {this.year = nyear;}
    public short Getter_year(){
        return year;
    }

    public void Setter_monthnumber(byte nmonthnumber){
        this.monthnumber = nmonthnumber;
    }
    public byte Getter_monthnumber(){
        return monthnumber;
    }

    public void Setter_monthstring(String nmonthstring){
        this.monthstring = nmonthstring;
    }
    public String Getter_monthstring(){
        return monthstring;
    }

    public void Setter_day(byte nday){
        this.day= nday;
    }
    public byte Getter_day(){
        return day;
    }

    //Tworzenie konstruktorow parametrowych
    public Date(short ayear, byte amonthnumber, byte aday){
        year = ayear;
        monthnumber = amonthnumber;
        day = aday;
    }
    public Date(short ayear, byte amonthnumber, byte aday, String amonthstring){
        year = ayear;
        monthnumber = amonthnumber;
        day = aday;
        monthstring = amonthstring;
    }
    public Date(Date data){
        year = data.year;
        monthnumber = data.monthnumber;
        monthstring = data.monthstring;
        day= data.day;
    }


}
