#include <iostream>
#include <fstream>
#include <math.h>
using namespace std;
int main()
{
	ifstream plik("liczby_przyklad.txt");
	ofstream wynik("wynik.txt");
	int pierwsza = 0;
	int counter = 0;
	int a;
	
	
	while (plik >> a) {
		for (int i = 1; i < a; i++) {
			for (int j = 2; j < i; j++) {
				if (i % j == 0) {
					pierwsza = 1;
				}
			}
			if (pierwsza == 0) {
				if ((float)a / i == (int)a / i) {
					counter++;
				}
			}
			pierwsza = 0;
			if (counter == 5) {
				wynik << a << " ";
				counter = 0;
			}
		}
		
	}
	
	counter = 0;
	while (plik >> a) {
		if (sqrt(a) == (int)sqrt(a)) {
			if (pierwsza == 0) {
				pierwsza = a;
			}
			counter++;
		}
	}

	wynik << pierwsza << " " << counter << endl;


	

	plik.close();
	wynik.close();
}