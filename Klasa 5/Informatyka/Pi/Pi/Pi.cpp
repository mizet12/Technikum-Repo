#include <iostream>
#include <fstream>
#include <vector>
#include <cmath>
#include <iomanip>

using namespace std;

const int CENTER_X = 200;
const int CENTER_Y = 200;
const int RADIUS = 200;
const int TOTAL_POINTS = 10000;

bool isInsideCircle(int x, int y) {
    return (pow(x - CENTER_X, 2) + pow(y - CENTER_Y, 2)) < pow(RADIUS, 2);
}

bool isOnCircle(int x, int y) {
    return (pow(x - CENTER_X, 2) + pow(y - CENTER_Y, 2)) == pow(RADIUS, 2);
}


int main() {
    ifstream input("punkty.txt");
    ofstream output("wyniki_4.txt");
    

    vector<pair<int, int>> points;
    int x, y;
    while (input >> x >> y) {
        points.emplace_back(x, y);
    }

    int insideCount = 0;
    vector<pair<int, int>> onCirclePoints;
    for (const auto& p : points) {
        if (isInsideCircle(p.first, p.second)) {
            insideCount++;
        }
        else if (isOnCircle(p.first, p.second)) {
            onCirclePoints.push_back(p);
        }
    }

    output << "Zadanie 4.1: " << insideCount << " punktów wewnątrz koła." << endl;
    output << "Punkty na okręgu:" << endl;
    for (const auto& p : onCirclePoints) {
        output << p.first << " " << p.second << endl;
    }

    input.close();
    output.close();
    return 0;
}
