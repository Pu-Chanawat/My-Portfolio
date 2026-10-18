#include <iostream>
#include <cmath>
using namespace std;

int main(){
    int Y,X; cin >> Y >> X;
    double ARRAY[Y][X] = {};
    for (int i = 0; i < Y; i++)
    {
        for (int j = 0; j < X; j++)
        {
            double N; cin >> N;
            ARRAY[i][j] = N;
        } 
    }
    
    int SUM_Y = Y-2 , SUM_X = X-2;
    double SUM_ARRAY[SUM_Y][SUM_X] = {};
    for (int i = 0; i < SUM_Y ; i++)
    {
        for (int j = 0; j < SUM_X; j++)
        {
            SUM_ARRAY[i][j] = (ARRAY[i][j] + ARRAY[i][j+1] + 
            ARRAY[i][j+2] + ARRAY[i+1][j] + ARRAY[i+1][j+1] + 
            ARRAY[i+1][j+2] + ARRAY[i+2][j] +ARRAY[i+2][j+1] + ARRAY[i+2][j+2]) / 9.0;
        }   
    } 
    
    for (int i = 0; i < SUM_Y; i++)
    {
        for (int j = 0; j < SUM_X; j++)
        {
            cout << round(SUM_ARRAY[i][j]*100)/100.0 << " ";
        } 
        cout << "\n";
    }
}