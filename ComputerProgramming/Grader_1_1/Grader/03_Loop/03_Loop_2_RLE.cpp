#include <iostream>
#include <string>
using namespace std;

int main()
{
    string TEXT; cin >> TEXT;
    int C = 1;

    for (int i = 0; i < TEXT.size(); i++)
    {
        if (TEXT[i] != TEXT[i + 1])
        {
            cout << TEXT[i] << " " << C << " ";
            C = 1;
        }
        else
        {
            C++;
        }
    }
}