#include <iostream>
#include <cmath>

int main(){
    double num=0,sum=0,amount=0;
    while(num!=-1){
        std::cin >> num;
        if (num != -1) {sum += num; amount++;}
    }
    if (amount != 0)
    {
        sum = sum/amount;
        std::cout << std::round(sum*100)/100;
    }else{std::cout <<"No Data";}

}