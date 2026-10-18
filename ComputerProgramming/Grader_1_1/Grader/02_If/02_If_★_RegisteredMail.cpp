#include <iostream>

int main(){
    int weigth;
    std::cin >> weigth;
    if( weigth <=100){
        std::cout << "18";
    }else if (weigth > 100 && weigth <=250)
    {
        std::cout << "22";
    }else if (weigth >250 && weigth <=500)
    {
        std::cout << "28";
    }else if (weigth >500 && weigth <=1000)
    {
        std::cout << "38";
    }else if(weigth >1000 && weigth <= 2000){
        std::cout << "58";
    }else{
        std::cout << "Reject";
    }
    
    
    
    
}