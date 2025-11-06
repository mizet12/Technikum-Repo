#include <iostream>
#include <math.h>
using namespace std;


float delta (float a, float b, float c){
    float delt, x, p1, p2;

    delt = pow(b,2) - (4*a*c);

    if (delt==0){
        x = -b/(2*a);
        cout << "Pierwiastek jest podwojny" << endl;
        cout << "Delta wynosi " << delta << endl;
        cout << "x : " << x << endl;
    }
    else if (delt > 0){
        cout << "Istnieja 2 pierwiastki " << endl;
        cout << "Delta wynosi " << delta << endl;

        p1 = ( -b - sqrt(delt)) / (2*a);
        p2 = ( -b + sqrt(delt)) / (2*a);
        cout << "P1 : " << p1 << endl;
        cout << "P2 : " << p2 << endl;



    }
    else cout << "Nie ma rozwiazan" << endl;

    return 0;
}

int main(){


 float x, y , z;
        cout << "Podaj a" << endl;
        cin >> x;
        cout << "Podaj b" << endl;
        cin >> y;
        cout << "Podaj c " << endl;
        cin >> z;

        if(x==0) cout << "Podaj wspolczynnik liniowy " ;

        delta(x,y,z);
}
