#include <iostream>

int main(){
    std::string text;
    std::getline(std::cin,text);
    for (int i = 0; i < text.size(); i++)
    {
        if (text[i] == '('){
            text[i] = '[';
        }else if (text[i] == '['){
            text[i] = '(';
        }else if (text[i] == ')'){
            text[i] = ']';
        }else if (text[i] == ']'){
            text[i] = ')';
        }
    }
    std::cout << text;
    
}