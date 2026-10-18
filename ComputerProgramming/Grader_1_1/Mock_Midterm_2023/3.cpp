#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double SUM_A = 0, SUM_B = 0 , SUM_ALL = 0 ;
    int COUNT ; cin >> COUNT;
    for (int i = 0; i < COUNT; i++)
    {
        string TEXT ; cin >> TEXT ;
        double NUM = 0 ; cin >> NUM;
        if (TEXT == "A")
        {
            SUM_A += 4.0 * NUM;
        }else if (TEXT == "B+")
        {
            SUM_A += 3.5 * NUM;
        }else if (TEXT == "B")
        {
            SUM_A += 3.0 * NUM;
        }else if (TEXT == "C+")
        {
            SUM_A += 2.5 * NUM;
        }else if (TEXT == "C")
        {
            SUM_A += 2.0 * NUM;
        }else if (TEXT == "D+")
        {
            SUM_A += 1.5 * NUM;
        }else if (TEXT == "D")
        {
            SUM_A += 1.0 * NUM;
        }else if (TEXT == "F")
        {
            SUM_A += 0.0 * NUM;
        }
        
        SUM_B += NUM;
    }

    cout << round((SUM_A / SUM_B)*100)/100 ; 
}