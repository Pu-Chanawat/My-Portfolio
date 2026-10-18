#include <iostream>

int main(){
    int x=0,y=0;
    std::cin >> y;
    x = y;
    for(int i=0;i<y;i++){
        for (int j = 0; j < x ; j++)
        {

            if (i+1 == y)
            {
                std::cout << "*"; 
            }else if(j==x-1)
            {
                std::cout << "*"; 
            }else if(j == y-i-1 && i != 0){
                std::cout << "*"; 
            }else{
                std::cout << ".";
            }
        }
        x++;
        std::cout << "\n";
    }
}