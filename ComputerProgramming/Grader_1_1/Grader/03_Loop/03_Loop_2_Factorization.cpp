#include <iostream>
using namespace std;

int main(){
    int NUM; cin >> NUM;
    int N=2;
    bool CHECK = false;
    while (true)
    {
        if (NUM%N==0)
        {
            if(CHECK){
                cout << "*";
            }
            CHECK = true;

            cout << N ;
            NUM = NUM/N;
        }else{
            N++;
        }

        if (N > NUM)
        {
            break;
        }   
    }
}