#include <iostream>
#include <cmath>
using namespace std;

int main(){
    int COUNT; cin >> COUNT;
    for (int i = 0; i < COUNT; i++)
    {
        int A,N,B,M; cin >> A >> N >> B >> M;
        long long SUM = 0;
        for (int i = 0; i < N; i++)
        {
            SUM = (SUM*10 + A);
        }
        for (int i = 0; i < M; i++)
        {
            SUM = SUM*10 + B;
        }
        bool CHECK = true;
        for (long long i = 2; i < sqrt(SUM); i++)
        {
            if (SUM%i==0)
            {
                CHECK = false;
                break;
            }
        }
        if (CHECK)
        {
            cout << "YES\n" ;
        }else{
            cout << "NO\n" ;
        }   
    }
}