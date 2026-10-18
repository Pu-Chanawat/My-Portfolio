#include <iostream>
#include <vector>
using namespace std;

int main() {
    int N;
    vector<int> H = {};
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        int NUM;
        cin >> NUM;
        H.push_back(NUM);
    }

    for (int i = 0; i < N; i++)
    {
        cout << H[i] << ",";
    }
    
}