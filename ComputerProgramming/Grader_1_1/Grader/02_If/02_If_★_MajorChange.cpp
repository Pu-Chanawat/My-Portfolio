#include <iostream>
#include <string>
using namespace std;

int main(){
    string account1,account2,GPAX1,GPAX2,com_prog1,com_prog2,cal11,cal12,cal21,cal22;
    cin >> account1 >> GPAX1 >> com_prog1 >> cal11 >> cal21;
    cin >> account2 >> GPAX2 >> com_prog2 >> cal12 >> cal22;
    bool status1 = com_prog1 == "A"  && cal11 <= "C" && cal21 <= "C"? true:false ;
    bool status2 = com_prog2 == "A" && cal12 <= "C" && cal22 <= "C"? true:false ;
    if(status1 == 0 && status2 == 0){
        cout << "None";
    }else if (status1 == 1 && status2 == 0)
    {
        cout << account1;
    }else if (status1 == 0 && status2 == 1)
    {
        cout << account2;
    }else{
        if (GPAX1 == GPAX2 && cal11 == cal12 && cal21 == cal22)
        {
            cout << "Both";
        }else{
            if (GPAX1 > GPAX2)
            {
                cout << account1;
            }else if(GPAX1 < GPAX2){
                cout << account2;
            }else{
                if (cal11 < cal12)
                {
                    cout << account1;
                }else if (cal11 > cal12)
                {
                    cout << account2;
                }else{
                    if (cal21 < cal22)
                    {
                        cout << account1;
                    }else if (cal21 > cal22)
                    {
                        cout << account2;
                    }
                }
                
            }
            
        }
           
    } 
    return 0;
}