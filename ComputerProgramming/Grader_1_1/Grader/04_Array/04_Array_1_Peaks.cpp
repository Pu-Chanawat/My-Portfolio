#include <iostream>
using namespace std;

int main(){
    int NUM; cin >> NUM;
    int ARRAY[NUM] = {};
    for (int i = 0; i < NUM; i++)
    {
        int N; cin >> N;
        ARRAY[i] = N;
    }

    int SUM = 0;
    for (int i = 1; i < NUM-1; i++)
    {
        if (ARRAY[i] > ARRAY[i-1] && ARRAY[i] > ARRAY[i+1])
        {
            SUM++;
        }  
    }

    cout << SUM;
}
