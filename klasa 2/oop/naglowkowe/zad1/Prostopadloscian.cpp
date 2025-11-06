#include "header.h"
#include <iostream>

Prostopadloscian::Prostopadloscian(double Pa, double Pb, double Pc){
    a=Pa;
    b=Pb;
    c=Pc;
};

double Prostopadloscian::obj(){
    return a*b*c;
}

double Prostopadloscian::pPC(){
        return 2*((a*b)+(a*c)+(b*c));
}

double Prostopadloscian::dWK(){
    return (4*a)+(4*b)+(4*c);
}

void Prostopadloscian::wyswietl(){
    std::cout<<"Objetosc: "<<Prostopadloscian::obj()<<std::endl;
    std::cout<<"Pole powierzchni calkowitej: "<<Prostopadloscian::pPC()<<std::endl;
    std::cout<<"Dlugosc wszystkich krawedzi: "<<Prostopadloscian::dWK()<<std::endl;
}
