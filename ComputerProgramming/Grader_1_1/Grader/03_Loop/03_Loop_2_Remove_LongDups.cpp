#include <iostream>
#include <string>
using namespace std;

int main()
{
    string TEXT;
    cin >> TEXT;
    int NUM;
    cin >> NUM;
    int C = 1;

    for (int i = 0; i < TEXT.size(); i++)
    {
        //cout << "index : " << TEXT[i] << " vs " << TEXT[i + 1] << "\n";
        if (TEXT[i] != TEXT[i + 1])
        {
            //cout << " Anwser : Yes \n";
            if (C<NUM)
            {
                for (int j = 0; j < C; j++)
                {
                    cout << TEXT[i];
                }
                //cout << "\n";
            }
            C = 1;
        }
        else
        {
            //cout << " Anwser : No \n";
            C++;
        }
    }
}