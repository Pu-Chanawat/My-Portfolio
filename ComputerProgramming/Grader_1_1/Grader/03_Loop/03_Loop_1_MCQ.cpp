#include <iostream>

int main(){
    int num=0;
    std::string text1,text2;
    std::getline(std::cin,text1);
    std::getline(std::cin,text2);
    if (text1.size() == text2.size())
    {
        for (int i = 0; i < text1.size(); i++)
        {
            if(text1[i] == text2[i]){
                num += 1;
            }
        }
        std::cout << num;
    }else{
        std::cout << "Incomplete answer";
    }
}