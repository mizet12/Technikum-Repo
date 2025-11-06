#include <iostream>
using namespace std;

int horner(string liczba, int x) {
	int wynik = 0;
	for(char l : liczba) {
		wynik = wynik * x + int(l);
	}
	return wynik;
}


int main()
{
	cout << horner("35045", 8);
}
