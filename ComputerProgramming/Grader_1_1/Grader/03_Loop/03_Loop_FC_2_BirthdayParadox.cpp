#include <iostream>
using namespace std;

int main(){
    float p; cin >> p;
    float k = 1.0, t =1.0;
    bool CHECK = false;
    do{
        if (CHECK)
        {
           k++;
        }
        t = t*(365.0-(k-1)) / 365.0;
        CHECK = true;
    }while(1.0-t < p);
    cout << k ;
}