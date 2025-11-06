#include <iostream>
using namespace std;

int main()
{
    int x[4] = {1, 3, 2, -2};
    int y[4] = { 3, 4, 1, 2 };
    for (int i = 0; i < 4; i++) {
        for (int j = 3; j > i; j--) {
            if (x[j] / y[j] < x[i] / y[i]) {
                int tempx = x[i];
                int tempy = y[i];
                x[i] = x[j];
                y[i] = y[j];
                x[j] = tempx;
                y[j] = tempy;
            }
        }
    }

    for (int i = 0; i < 4; i++) {
        cout << x[i] << " " << y[i] << endl;
    }
}
