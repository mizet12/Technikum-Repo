#include <iostream>
using namespace std;
int nieparzystyskrot(int n) {
	for (int i = 10; i <= n; i *= 10) {
		if ((n % i) % 2 != 0) {
			cout << n % i;
		}
		n = n / i;
	}
	
	return 0;
}
int main()
{
	int n;
	cin >> n;
	 nieparzystyskrot(n);
		return 0;
}
