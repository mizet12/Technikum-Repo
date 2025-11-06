#include <iostream>

using namespace std;
int a, b, c, d;
int obj(){
 b = a * a * a;

}
int ppc(){
c = (a * a) * 6;

}
int kraw(){
d = a * 12;

}

int tekst(){
    cout<<"Podaj dlugosc krawedzi prostopadloscianu: ";
    cin>>a;
    cout<<""<<endl;
    cout<<"Objetosc prostopadloscianu o podanej krawedzi wynosi: ";
    cout<<obj()<<endl;
    cout<<"Pole powierzchni calkowitej prostopadloscianu o podanej krawedzi wynosi: ";
    cout<<ppc()<<endl;
    cout<<"Laczna dlugosc krawdzedzi tego prostopadloscianu wynosi: ";
    cout<<kraw()<<endl;

}





int main()
{
    tekst();
    return 0;
}
