#include <iostream>
#include <string>
using namespace std;

int main(){
    long long M,N; cin >> M >> N;
    long long SUM = 0;
    string TEXT;
    for (int i = M; i <= N; i++)
    {
        TEXT += to_string(i);
    }
    for ( char C : TEXT)
    {
        SUM++;
    }  
    cout << SUM;
}