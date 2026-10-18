#include <iostream>

int main(){
    double num;
    std::cin >> num;
    if (num >= 80)
    {
        std::cout << "A";
    }else if (num >= 70)
    {
        std::cout << "B";
    }else if (num >= 60)
    {
        std::cout << "C";
    }else if (num >= 50)
    {
        std::cout << "D";
    }else{
        std::cout << "F";
    }
    
    return 0;
}