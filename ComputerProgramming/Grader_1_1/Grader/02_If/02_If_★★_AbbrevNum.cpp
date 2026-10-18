#include <iostream>
#include <cmath>

int main(){
    double num;
    std::cin >> num;
    if (num >= 1000000000)
    {
        num = num/1000000000.0;
        if(num>=10){
            std::cout << round(num) << "B";
        }else{
            std::cout << round(num*10)/10.0 << "B";
        }
    }else if (num >= 1000000)
    {
        num = num/1000000.0;
        if(num>=10){
            std::cout << round(num) << "M";
        }else{
            std::cout << round(num*10)/10.0 << "M";
        }
    }else if(num >= 1000){
        num = num/1000.0;
        if(num>=10){
            std::cout << round(num) << "K";
        }else{
            std::cout << round(num*10)/10.0 << "K";
        } 
    }else if(num < 1000){
        std::cout << num;
    }
    return 0;
}