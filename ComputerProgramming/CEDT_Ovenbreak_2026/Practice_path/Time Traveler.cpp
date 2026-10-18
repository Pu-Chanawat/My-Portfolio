#define _USE_MATH_DEFINES //ใช้ในการเปิดใช้งานพวกค่าคงที่
#include <iostream>
#include <cmath>

using namespace std;
int main(){
    long long a,b,c;
    cin >> a >> b >> c;
    long long x2 = ((-(b))+sqrt(pow(b,2)-(4*a*c)))/2*a;
    long long x1 = ((-(b))-sqrt(pow(b,2)-(4*a*c)))/2*a;
    if(x1<x2){
        int x;
        x = x2;
        x2 = x1;
        x1 = x;
    }
    //cout << "----" <<endl << x1 << endl << x2 << endl;
    long long F = pow(x1+(5*x2),2);
    long long E = (7*x1+x2)*(3*x1+x2);
    long long S = ((F%100001)*(E%100001))%100001;
    long long Final = (S+100001)%100001;
    cout <<endl<< F << endl<< E <<endl<< Final;
    return 0;
}