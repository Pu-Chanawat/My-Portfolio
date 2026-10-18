#include <iostream>
#include <cmath>
#include <algorithm> // ต้องรวมไลบรารีนี้เพื่อใช้งาน max

using namespace std;

int main(){
    double L = 0 ,a;
    std::cin >> a;
    double U = a;
    double x = (L+U)/2.0;
    while(abs(a-pow(10.0,x)) > pow(10.0,-10.0)*std::max(a,pow(10.0,x)))
    {
        if (pow(10.0,x)>a)
        {
            U = x;
        }
        if (pow(10.0,x)<a)
        {
            L = x;
        }  
        x = (L+U)/2.0;
    }
    std::cout << x ;
}