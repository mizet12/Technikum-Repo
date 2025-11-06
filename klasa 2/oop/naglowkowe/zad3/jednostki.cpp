#include "header.h"
#include <iostream>

double Jednostki::zamiana()
{
    return j*0.62137;
}
void Jednostki::wyswietl()
{
    std::cout << j << "km to: " << Jednostki::zamiana(`) << " mil";
}
void Jednostki::wprowadz()
{
    std::cout << "Podaj dlugosc w kilometrach: " << std::endl;
    std::cin >> j;
}
