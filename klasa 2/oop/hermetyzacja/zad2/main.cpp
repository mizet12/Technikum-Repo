#include <iostream>
#include <cmath>

using namespace std;

class Funkcja{
double a, b,c;
public:
Funkcja(double Pa, double Pb, double Pc){
    seta(Pa);
    setb(Pb);
    setc(Pc);
};
double delta(){
    return pow(b,2)-(4*a*c);
}

double x1()
{
    return ((0-b)-sqrt(delta()))/2*a;
}

double x2()
{
    return ((0-b)+sqrt(delta()))/2*a;
}

void wyswietl(){
    if(delta()>0)
    {
        cout << "Pierwszy pierwiastek: " << x1() << ", drugi pierwiastek: " << x2() << endl;
    }else if(delta()==0)
    {
        cout << "pierwiastek zerowy: " << x1() << endl;
    } else
    {
        cout << "dleta jest mniejsza od 0" << endl;
    }
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
cout << "Funkcja kwadratowa, postaci ogolnej: ax^2+bx+c" << endl;
cout << "Podaj a: ";
cin >> a;
cout << "Podaj b: ";
cin >> b;
cout << "Podaj c: ";
cin >> c;

Funkcja f = Funkcja(a, b, c);
f.wyswietl();
    return 0;
}
