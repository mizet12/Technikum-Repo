#include <iostream>
#include "header.h"
using namespace std;


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
