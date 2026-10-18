#include <iostream>
using namespace std;

int main(){
    string NAME[] = {"Robert","William","James","John",
        "Margaret","Edward","Sarah","Andrew","Anthony","Deborah"};
    string NICKNAME[] = {"Dick","Bill","Jim","Jack",
        "Peggy","Ed","Sally","Andy","Tony","Debbie"};

    int NUM; cin >> NUM;
    for (int i = 0; i < NUM; i++)
    {
        string TEXT; cin >> TEXT;
        bool CHECK = false;
        for (int i = 0; i < 10; i++)
        {
            if (TEXT == NAME[i])
            {
                cout << NICKNAME[i] << "\n";
                CHECK = true;
                break;
            }
            if (TEXT == NICKNAME[i])
            {
                cout << NAME[i] << "\n";
                CHECK = true;
                break;
            }  
        }
        if(!CHECK)
        {
            cout << "Not found" << "\n";
        }
    }
}