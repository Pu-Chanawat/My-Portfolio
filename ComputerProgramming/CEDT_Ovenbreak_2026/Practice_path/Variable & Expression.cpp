#include <iostream>

int main(){
    int n;
    std::cin >> n;
    if (n%5==1)
    {
        std::cout << "+\n" << std::endl;
    }else if (n%5==2)
    {
        std::cout << "-\n" << std::endl;
    }else if (n%5==3)
    {
        std::cout << "*\n" << std::endl;
    }else if (n%5==4)
    {
        std::cout << "/\n" << std::endl;
    }else if (n%5==0)
    {
        int ascii_code = (n/5)%26;
        if (ascii_code==0)
        {
            ascii_code = 26;
        }
        std::cout << static_cast<char>(ascii_code+64);
    }
}