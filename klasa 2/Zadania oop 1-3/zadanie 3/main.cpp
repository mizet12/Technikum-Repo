#include <iostream>

using namespace std;

int suma(int a, int b){
    int c;
    for(a; a<=b; a++){

        c+=a;
    }
    return c;
}
int sre(int a, int b, int c){
    int i;

    return c/ (b - a);

}

int main()
{
    int a, b, c, su, srednia;
    cout<<"Podaj L1: ";
    cin>> a;

    cout<<"Podaj L2: ";
    cin>> b;
    su = suma(a, b);
    cout<<"Suma liczba z tego ciagu wynosi: "<<su<<endl;

    srednia = sre(a, b, su);
    cout<<"Srednia wynosi: "<<srednia<<endl;
    return 0;
}
