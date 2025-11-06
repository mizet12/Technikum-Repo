#include <iostream>
#include <fstream>

int main() {
	std::ifstream kolumny("prostokaty_przyklad.txt");
	std::ofstream wynik("wynik.txt");
	int  a, b;
	int i = 0;
	int s, h, hp, sp, fs, fh, lh, ls = 0;
	int counter = 1;
	int highest = 1;
	kolumny >> sp >> hp;
	fs = sp;
	fh = hp;

	while (kolumny >> a >> b) {
		
		if (a <= sp &&  b <= hp) {
			
			counter++;
			sp = a;
			hp = b;
			if (counter > highest) {
				highest = counter;
				fs = a;
				fh = b;
			}
			
		}
		else{
			a = sp;
			b = hp;
			counter = 1;
		}
	}
	
	wynik << "ciag: " << highest <<" "<< fs <<" " << fh << std::endl;

	//-----------------------------------------------------------------------------------------------
	int low = 0;
	int high = 0;
	while (i < 1) {
		kolumny >> a >> b;
		low = a * b;
		high = a * b;
		i = 1;
	}
	while (kolumny >> a >> b) {
		if (a * b > high) {
			high = a * b;
		}
		if (a * b < low) {
			low = a * b;
		}
		
	}
	wynik << "Najmniej" << low << std::endl;
	wynik << "Najwiecej" << high << std::endl;

	kolumny.close();
	wynik.close();
}