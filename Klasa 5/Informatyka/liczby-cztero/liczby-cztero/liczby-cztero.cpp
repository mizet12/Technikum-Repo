#include <iostream>
#include <fstream>
#include <math.h>
#include <vector>
using namespace std;
bool isPrime(int x) {
	bool prime = true;
	for (int i = 2; i * i < x; i++) {
		if (x % i == 0) {
			prime = false;
		}
	}
	return prime;
}
bool atleastfive(int x) {
	int dzielniki = 0;
	int temp = x;
	for (int i = 2; i < x; i++) {
		if (isPrime(i) && temp % i == 0) {
			temp = temp / i;
			dzielniki++;
		}
	}
	if (dzielniki >= 5) {
		return true;
	}
	else {
		return false;
	}
}
int main()
{
	ifstream inputfile("liczby_przyklad.txt");
	ofstream outputfile("wyniki3.txt");
	vector<int> tab;
	int liczba;
	int kwadraty = 0;
	int pierwsza = 0;
	while (inputfile >> liczba) {
		if (sqrt(liczba) == (int)sqrt(liczba)) {
			kwadraty++;
			if (pierwsza == 0) {
				pierwsza = liczba;
			}
		}
		if (atleastfive(liczba)) {
			tab.push_back(liczba);
		}
	}
	cout<< kwadraty << " " << pierwsza << endl;
	for (int i = 0; i < tab.size(); i++) {
		cout << tab[i] << " ";
	}
}
