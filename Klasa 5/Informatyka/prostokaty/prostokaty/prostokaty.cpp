#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream inputfile("prostokaty_przyklad.txt");
	ofstream outputfile("wyniki4.txt");
	int s, h;
	int sp = 0, hp = 0;
	int longest = 0, current = 1;
	int lasts = 0, lasth = 0;
	int min = 100000000, max = 0;
	while (inputfile >> s >> h) {

		if (sp == 0) {
			sp = s;
			hp = h;
		}
		else {
			if (s <= sp && h <= hp) {
				current++;
				sp = s;
				hp = h;
			}
			else {
				sp = s;
				hp = h;
				current = 1;
			}
			if (longest < current) {
				longest = current;
				lasts = s;
				lasth = h;
			}
		}





		if (s * h > max) {
			max = s * h;
		}
		if (s * h < min) {
			min = s * h;
		}
	}
	cout << min << " " << max << endl;

	cout << longest << " " << lasth << " " << lasts << endl;
}
