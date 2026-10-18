#include <iostream>
using namespace std;

int main(){
    char text;
    int num;
    cin >> text >> num;
    int ascii = static_cast<int>(text);
    text = static_cast<char>(ascii + num);
    ascii = static_cast<int>(text);
    cout << text << endl << ascii ;
    return 0;
}