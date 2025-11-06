#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

bool isPrime(int x) {
    if (x < 2) return false;
    for (int i = 2; i * i <= x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
/*
void wypiszCzworacze() {
    for (int p = 1; p <= 1000; p++) {
        if (isPrime(p) && isPrime(p + 2) && isPrime(p + 6) && isPrime(p + 8)) {
            cout << p << ", " << p + 2 << ", " << p + 6 << ", " << p + 8 << endl;
        }
    }
}
void sprawdzCZworacze(int p) {
    if (isPrime(p) && isPrime(p + 2) && isPrime(p + 6) && isPrime(p + 8)) {
        cout << "Liczba jest czworacza"<<endl;
        cout << " "<< p << " " << p + 2 << " " << p + 6 << " " << p + 8;
    }
    else if (isPrime(p - 2) && isPrime(p) && isPrime(p + 4) && isPrime(p + 6)) {
        cout << "Liczba jest czworacza" << endl;
        cout << p - 2 << " " << p << " " << p + 4 << " " << p + 6;
    }
    else if (isPrime(p - 6) && isPrime(p - 4) && isPrime(p) && isPrime(p + 2)) {
        cout << "Liczba jest czworacza" << endl;
        cout << p -6 << " " << p - 4 << " " << p << " " << p + 2;
    }else if(isPrime(p - 8) && isPrime(p - 6) && isPrime(p - 2) && isPrime(p)){
        cout << "Liczba jest czworacza" << endl;
        cout << p - 8 << " " << p - 6 << " " << p - 2 << " " << p;
    }
    else {
        cout << "Liczba nie jest czworacza";
    }
}
void znajdzGoldbacha(int n) {
    if (n < 2 || n % 2 != 0) {
        cout << "Liczba nie spełnia założeń hipotezy Goldbacha." << endl;
        return;
    }

    cout << "Mozliwe pary dla " << n << ":" << endl;
    bool found = false;
    for (int i = 2; i <= n / 2; i++) {
        if (isPrime(i) && isPrime(n - i)) {
            cout << i << " + " << (n - i) << " = " << n << endl;
            found = true;
        }
    }

    if (!found) {
        cout << "Nie znaleziono par spełniających hipotezę Goldbacha." << endl;
    }
}

bool czyJestArmstrong(int liczbaa) {
    vector<int> cyfry_liczby;
    int a = liczbaa;
    while (a > 0) {
        int temp = a % 10;
        cyfry_liczby.push_back(temp);
        a = (int)a / 10;
    }
    
    for (int i = 0; i < cyfry_liczby.size(); i++) {
        cout << cyfry_liczby[i] << endl;
    }
    
    int suma = 0;
    bool armstrong = false;
    for (int i = 0; i < cyfry_liczby.size(); i++) {
        suma += pow(cyfry_liczby[i], cyfry_liczby.size());
    }
    if (suma == liczbaa) {
        armstrong = true;
    }
    return armstrong;
}
*/
bool czyOdkryta(int liczbaa) {
    vector<int> cyfry_liczby;
    int a = liczbaa;
    while (a > 0) {
        int temp = a % 10;
        cyfry_liczby.push_back(temp);
        a = (int)a / 10;
    }
    bool dzielnik = true;
    for (int i = 0; i < cyfry_liczby.size(); i++) {
        if (cyfry_liczby[i] != 0) {
            if (liczbaa % cyfry_liczby[i] != 0) {
                dzielnik = false;
            }
        }
        
    }
    return dzielnik;
}

int main() {
    int liczba;
    cout << "Podaj liczbe: ";
    cin >> liczba;
    if (czyOdkryta(liczba)) {
        cout << "Liczba jest odkryta" << endl;
    }
    else {
        cout << "liczba nie jest odkryta" << endl;
    }
    /*
    if(czyJestArmstrong(liczba)) {
        cout << "Liczba jest narcysytyczna" << endl;
    }
    else {
        cout << "Liczba nie jest narcystyczna" << endl;
    }
    znajdzGoldbacha(liczba);
    cout << "Liczby czworacze od 1 do 100:" << endl;
    wypiszCzworacze();
    cout << endl;
    int liczba;
    cout << "Podaj liczbe:";
    cin >> liczba;
    sprawdzCZworacze(liczba);
    */

    return 0;
}

