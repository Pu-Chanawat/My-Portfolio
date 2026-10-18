#include <iostream>
#include <math.h>
using namespace std;

int main(){
    string name;
    cin >> name;
    char a[2];
    for (int i = 0; i < 2; i++)
    {
        a[i] = name[i];
    }
    cout << static_cast<int>(a[0]+a[1]) ;
}