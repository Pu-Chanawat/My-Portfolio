#include <iostream>
#include <cmath>

int main(){
    double a,b,c,d,num,min,max;
    std::cin >> a >> b >> c >> d;
    min = a;
    max = a;
    if (b<min){
        min = b;
    }if(c<min){
        min = c;
    }if(d<min){
        min = d;
    }
    if (b>max){
        max = b;
    }if(c>max){
        max = c;
    }if(d>max){
        max = d;
    }

    num = ((a+b+c+d)-min-max)/2.0;

    std::cout <<  round(num*100.0)/100.0;
    return 0;
}
