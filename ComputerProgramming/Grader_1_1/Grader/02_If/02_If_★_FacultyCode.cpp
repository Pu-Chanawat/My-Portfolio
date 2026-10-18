#include <iostream>
#include <string>

int main(){
    std::string text;
    bool check = false;
    std::string sum_text[] = {"01","02","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","51","53","55","58"};
    std::cin >> text;
    for (int i = 0; i < 27; i++)
    {
        if (text==sum_text[i])
        {
            check = true;
        }
    }
    if (check == true)
    {
        std::cout << "OK";
    }else{
        std::cout << "Error";
    }
    return 0;
}