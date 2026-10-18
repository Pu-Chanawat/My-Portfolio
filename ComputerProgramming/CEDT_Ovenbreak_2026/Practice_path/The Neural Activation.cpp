#include <iostream>
#include <iomanip>

int main(){
    double X;
    std::cin >> X; 
    std::cout << std::fixed << std::setprecision(2);
    if (X<0.00)
    {
        std::cout << "Activated Signal: 0.00" << std::endl;
    }else{
        std::cout << "Activated Signal: "<< X << std::endl;
    }
}