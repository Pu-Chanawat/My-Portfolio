#include <iostream>
#include <string>
using namespace std;

int main()
{
    int NUM[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    string TEXT;
    string SUM;
    getline(cin, TEXT);
    for (int i = 0; i < TEXT.size(); i++)
    {
        for (int j = 0; j < sizeof(NUM) / 4; j++)
        {
            if (TEXT[i] - '0' == NUM[j])
            {
                NUM[j] = -1;
            }
        }
    }

    for (int i = 0; i < sizeof(NUM) / 4; i++)
    {
        if (NUM[i] != -1)
        {
            SUM += to_string(NUM[i]);
        }
    }

    if (SUM.empty())
    {
        cout << "None" ;
    }else{
        for (int i = 0; i < SUM.size(); i++)
        {
            if (i + 1 == SUM.size())
            {
                cout << SUM[i];
            }
            else
            {
                cout << SUM[i] << ",";
            }
        }
    }
}
