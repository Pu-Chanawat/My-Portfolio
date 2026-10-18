#include <iostream>
using namespace std;

int main(){
    int COUNT=0; cin >> COUNT;
    int ARRAY[COUNT][2] = {};
    for (int i = 0; i < COUNT; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cin >> ARRAY[i][j];
        }    
    }

    int START = ARRAY[0][0];
    int STOP = ARRAY[0][1];

    for (int i = 0; i < COUNT; i++)
    {
        
            if (START > ARRAY[i][0])
            {
                START = ARRAY[i][0];
            }
            if (STOP < ARRAY[i][1])
            {
                STOP = ARRAY[i][1];
            } 
    }

    // cout << "START : " << START << "\n";
    // cout << "STOP : " << STOP << "\n";

    int SUM_ARRAY[STOP-START]= {0,0,0};

    for (int i = START; i < STOP; i++)
    {
        for (int j = 0; j < COUNT; j++)
        {
            if (ARRAY[j][0] <= i && ARRAY[j][1] >= i+1)
            {
                SUM_ARRAY[i - START] += 1;
            }     
        }  
    }

    int max_users = 0;
    for (int i = 0; i < STOP-START; i++)
    {
        if (SUM_ARRAY[i] > max_users)
        {
            max_users = SUM_ARRAY[i];
        }
    }
    cout << max_users << endl;


    bool CHECK = false
    for (int i = 0; i < count; i++)
    {
        if (CHECK)
        {
            cout << ",";
        }
        cout << TEXT;
        CHECK = true;
    }
    
}