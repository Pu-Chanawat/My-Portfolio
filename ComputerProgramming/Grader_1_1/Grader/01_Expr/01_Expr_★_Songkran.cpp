#include <iostream>

using namespace std;

int main(){
    int y;
    cin >> y;
    y = y-2543;
    y = (y+(y/4)+11)%7;
    cout << y;
    return 0;
}