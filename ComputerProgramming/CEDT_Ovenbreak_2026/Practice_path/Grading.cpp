#include <iostream>

int main(){
    double s;
    std::cin >> s; 
    if (s<0 || s>100)
    {
        std::cout << "Invalid Score" << std::endl;
    }else if (s>=80)
    {
        std::cout << "A" << std::endl;
    }else if (s>=70)
    {
        std::cout << "B" << std::endl;
    }else if (s>=60)
    {
        std::cout << "C" << std::endl;
    }else if (s>=50)
    {
        std::cout << "D" << std::endl;
    }else{
        std::cout << "F" << std::endl;
    }
    return 0; 
}