#include <iostream>
#include <fstream>
#include <string>
#include <bitset>
using namespace std;
int binaryToDecimal(string binar) {
    long long decimal_value = 0;
    for (char bit : binar) {
        decimal_value += decimal_value * 2 + (bit - 0);
    }
    return decimal_value;
}


int main() {
    ifstream inputFile("liczby.txt");
    ofstream outputFile("wynik4.txt");
   
    string line;
    int count = 0;
    while (inputFile >> line) {
       cout<< binaryToDecimal(line)<<endl;
    }
    while (inputFile >> line) {
        int zeroCount = 0, oneCount = 0;

        for (char c : line) {
            if (c == '0') zeroCount++;
            else if (c == '1') oneCount++;
        }

        if (zeroCount > oneCount) {
            count++;
        }
    }

    outputFile << "4.1. " << count << endl;

    inputFile.close();
    outputFile.close();

    cout << "Wynik zapisano do pliku wynik4.txt" << endl;
    return 0;
}
