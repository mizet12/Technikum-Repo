#include <iostream>
#include <string>
using namespace std;

int n = 10;  
int S[10];   
int W = -1;  

void push(int x) {
    S[++W] = x;
}

int pop() {
    return S[W--];
}

bool empty() {
    return W == -1;
}

int priority(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

string infixToPostfix(string expr) {
    string postfix = "";
    char stackOps[100];  
    int topOps = -1;

    for (int i = 0; i < expr.length(); i++) {
        char c = expr[i];

        
        if (isdigit(c)) {
            postfix += c;
        }
        else if (c == '+' || c == '-' || c == '*' || c == '/') {
            while (topOps >= 0 && priority(stackOps[topOps]) >= priority(c)) {
                postfix += stackOps[topOps--];  
            }
            stackOps[++topOps] = c; 
        }
    }

    while (topOps >= 0) {
        postfix += stackOps[topOps--];
    }

    return postfix;
}

int main() {
    string expr;
    cout << "Podaj wyrazenie: ";
    cin >> expr;

    string postfix = infixToPostfix(expr);
    cout << "ONP: " << postfix << endl;


    return 0;
}
