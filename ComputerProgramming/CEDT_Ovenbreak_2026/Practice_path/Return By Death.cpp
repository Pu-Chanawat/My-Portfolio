#include <iostream>

int main(){
    int Me,K,D,Boss,i=0;
    std::cin >> Me >> K >> D >> Boss ;
    while (Me<Boss)
    {
        Me = Me + (K-(i*D));
        i++;
        if(Me<=0){
            std::cout << "Give Up" << std::endl;
            return 0;
        }
    }
    std::cout << i << std::endl;
}