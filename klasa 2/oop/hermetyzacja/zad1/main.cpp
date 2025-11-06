#include <iostream>

using namespace std;

class Prostopadloscian{
double a, b,c;
public:
Prostopadloscian(double Pa, double Pb, double Pc){
    seta(Pa);
    setb(Pb);
    setc(Pc);
};
double obj(){
    return a*b*c;
}
double pPC(){
        return 2*((a*b)+(a*c)+(b*c));
}
double dWK(){
    return (4*a)+(4*b)+(4*c);
}
void wyswietl(){
    cout<<"Objetosc: "<<obj()<<endl;
    cout<<"Pole powierzchni calkowitej: "<<pPC()<<endl;
    cout<<"Dlugosc wszystkich krawedzi: "<<dWK()<<endl;
}
void seta(int sa){
a=sa;
}
void setb(int sb)
{
    b=sb;
}
void setc(int sc){
c=sc;
}
};
int main()
{
int a, b, c;
cout << "Podaj a: ";
cin >> a;
cout << "Podaj b: ";
cin >> b;
cout << "Podaj c: ";
cin >> c;

cout<<"Konstruktor parametryczny: "<<endl;
Prostopadloscian p1 = Prostopadloscian(a, b, c);
p1.wyswietl();

return 0;
}
