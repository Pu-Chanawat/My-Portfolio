#include <iostream>
using namespace std;

int main() {
    long long N , d =2;
    cin >> N;
    if (N>=2){
        while (N>1){
            if (d * d > N)
            {
                cout << N << " ";
                break;
            }
            while( N%d == 0)
            {
                N /= d;
                cout << d << " ";
            }
            d += 1;
        }
    }else{
        cout << "No prime factors for numbers less than 2.";
    }
    return 0;
}