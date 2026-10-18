#include <iostream>
using namespace std;

int main()
{
    string TEXT;
    while (cin >> TEXT)
    {
        int COUNT = 0;
        bool BIG = false;
        bool SMALL = false;
        bool NUM = false;
        bool SPEC = false;
        for (char s : TEXT)
        {
            if (s >= 'A' && s <= 'Z')
            {
                BIG = true;
            }
            else if (s >= 'a' && s <= 'z')
            {
                SMALL = true;
            }
            else if (s >= '0' && s <= '9')
            {
                NUM = true;
            }
            else
            {
                SPEC = true;
            }
            COUNT++;
        }

        if (BIG && SMALL && NUM)
        {
            if (COUNT >= 12 && SPEC)
            {
                cout << ">> strong\n";
            }
            else if (COUNT >= 8)
            {
                cout << ">> weak\n";
            }
            else
            {
                cout << ">> invalid\n";
            }
        }
        else
        {
            cout << ">> invalid\n";
        }
    }
    return 0;
}
