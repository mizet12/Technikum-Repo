#include "header.h"
#include <math.h>
#include <iostream>

double Pole::PK(){
    return M_PI * a * a;
}
double Pole::PKW(){
    return a * a;
}
double Pole::PT(){
    return (a * b)/2;
}

void Pole::K(){
    std::cout << "Podaj promien kola: ";
    std::cin >> a;
    std::cout << "Pole kola to: " << PK() << std::endl;
}
void Pole::KW(){
    std::cout << "Podaj bok kwadratu: ";
    std::cin >> a;
    std::cout << "Pole kwadratu to: " << PKW() << std::endl;
}
void Pole::T(){
    std::cout << "Podaj bok trojkata: ";
    std::cin >> a;
    std::cout << "Podaj wysokosc trojkata: ";
    std::cin >> b;
    std::cout << "Pole trojkata to: " << PT() << std::endl;
}
