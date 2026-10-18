#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main(){
    int N; cin >> N;
    vector<double> NUM(N);
    for (int i = 0; i < N; i++)
    {
        cin >> NUM[i];
    }

    for (int i = 0; i < N; i++)
    {
        double VAL = NUM[i];
        for (int j = i-1; j >= 0; j--)
        {
            VAL = NUM[j] + (1.0/VAL);
        }
        cout << setprecision(10) << VAL << "\n";
    }
    return 0;
}