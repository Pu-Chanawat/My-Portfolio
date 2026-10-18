#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double x,y;
    cin >> x;
    y = (pow(x,pow(log(pow(x+1,2)),1.0/2.0)))/(10-x);
    cout << round(y*1e6)/1e6 ;
    return 0;
}