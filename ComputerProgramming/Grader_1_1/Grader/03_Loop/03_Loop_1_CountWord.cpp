#include <iostream>
#include <sstream>
#include <string>

int main(){
    std::string c_text, all_text;
    std::getline(std::cin, c_text);
    std::getline(std::cin, all_text);
    
    // เปลี่ยนเครื่องหมายวรรคตอนทั้งหมดใน all_text ให้เป็นช่องว่างก่อน
    for(int i = 0; i < all_text.size(); i++){
        if (all_text[i] == '"' || all_text[i] == '(' || all_text[i] == ')' || 
            all_text[i] == ',' || all_text[i] == '.' || all_text[i] == '\'') {
            all_text[i] = ' ';
        }
    }
    
    // พอแปลงเป็นช่องว่างแล้ว stringstream จะตัดคำได้เป๊ะ 100%
    std::stringstream ss(all_text);
    std::string word;
    int num = 0;
    
    while(ss >> word){
        if(word == c_text){
            num++;
        }
    }
    
    std::cout << num;
    return 0;
}