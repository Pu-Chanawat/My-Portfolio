#include <iostream>
#include <math.h>
using namespace std;

int main(){
    //path - รับ input
    double X[2],Y[2],R[2];
    for (int i = 0; i < 2; i++)
    {
        cin >> X[i] >> Y[i] >> R[i] ;
    }

    //path - ระยะห่างระหว่างสองจุด
    double x = pow(X[0]-X[1],2);
    double y = pow(Y[0]-Y[1],2);
    double D = pow(x+y,1.0/2.0);

    // path เปรียบเทียบ
    if (D==0 && R[0]==R[1])
    {
        cout << "infinity\n" << "yes";
    }else
    if (D<abs(R[0]-R[1]))
    {
        cout << "0\n" << "yes";
    }else
    if (D==abs(R[0]-R[1]))
    {
        cout << "1\n" << "yes";
    }else
    if (R[0]+R[1]>D)
    {
        cout << "2\n" << "yes";
    }else
    if (R[0]+R[1]==D)
    {
        cout << "1\n" << "no";
    }else
    if (R[0]+R[1]<D)
    {
        cout << "0\n"  << "no";
    }
    return 0;   
}