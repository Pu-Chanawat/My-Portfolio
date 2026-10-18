#include <iostream>

int main(){
    std::string num;
    std::cin >> num;
    if(num.length()==10 && num[0]=='0'&& (num[1]=='6'|| num[1]=='8' ||num[1]=='9')){
        std::cout << "Mobile number";
    }else{
        std::cout << "Not a mobile number";
    }
}