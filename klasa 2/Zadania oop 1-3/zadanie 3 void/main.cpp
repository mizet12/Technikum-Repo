#include <iostream>

using namespace std;

void suma(int a, int b, int &wynik){
    for(a; a<=b; a++){
        wynik+=a;
    }
}

void sre(int a, int b, int suma, float &wynik){
    wynik= (float)suma/ (b - a + 1);
}

int main()
{
    int a, b, c, su;
    float srednia;
    cout<<"Podaj L1: ";
    cin>> a;

    cout<<"Podaj L2: ";
    cin>> b;

    suma(a, b, su);
    cout<<"Suma liczba z tego ciagu wynosi: "<<su<<endl;

    sre(a, b, su, srednia);
    cout<<"Srednia wynosi: "<<srednia<<endl;
    return 0;
}
