#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double a,b,c,x1,x2;
    cin >> a >> b >> c;

    x1 = (-(b)-pow(pow(b,2.0)-(4*a*c),1.0/2.0))/(2*a);
    x2 = (-(b)+pow(pow(b,2.0)-(4*a*c),1.0/2.0))/(2*a);

    cout << round(x1*1e3)/1e3 << " " << round(x2*1e3)/1e3 ;
    return 0;
}