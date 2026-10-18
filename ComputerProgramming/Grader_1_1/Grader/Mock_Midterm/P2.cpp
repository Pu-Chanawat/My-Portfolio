#include <iostream>
#include <string>
using namespace std;

int main(){
    int Round_A , Round_B ;
    int Sum_A=0,Sum_B=0;
    cin >> Round_A ; cin >> Round_B;
    for (int i = 0; i < Round_A; i++){
        string Text_A;
        cin >> Text_A;
        if (Text_A == "A"){
            if (Sum_A + 11 <= 21)
            {
               Sum_A += 11;
            }else{
               Sum_A += 1; 
            }
            
        }else if (Text_A == "J" || Text_A == "K" || Text_A == "Q" ){
            Sum_A += 10;
        }else if (Text_A == "2"){
            Sum_A += 2;
        }else if (Text_A == "3"){
            Sum_A += 3;
        }else if (Text_A == "4"){
            Sum_A += 4;
        }else if (Text_A == "5"){
            Sum_A += 5;
        }else if (Text_A == "6"){
            Sum_A += 6;
        }else if (Text_A == "7"){
            Sum_A += 7;
        }else if (Text_A == "8"){
            Sum_A += 8;
        }else if (Text_A == "9"){
            Sum_A += 9;
        }else if (Text_A == "10"){
            Sum_A += 10;
        }
        
        // else{
        //     int Num = std::stoi(Text_A);
        //     Sum_A += Num;

        // }
    }


    for (int i = 0; i < Round_B ; i++)
    {
        string Text_B;
        cin >> Text_B;
        if (Text_B == "A"){
            if (Sum_B + 11 <= 21)
            {
                cout << "test" << "\n";
                Sum_B += 11;
            }else{
               Sum_B += 1; 
            }
        }else if (Text_B == "J" || Text_B == "K" || Text_B == "Q" ){
            Sum_B += 10;
        }else if (Text_B == "2"){
            Sum_B += 2;
        }else if (Text_B == "3"){
            Sum_B += 3;
        }else if (Text_B == "4"){
            Sum_B += 4;
        }else if (Text_B == "5"){
            Sum_B += 5;
        }else if (Text_B == "6"){
            Sum_B += 6;
        }else if (Text_B == "7"){
            Sum_B += 7;
        }else if (Text_B == "8"){
            Sum_B += 8;
        }else if (Text_B == "9"){
            Sum_B += 9;
        }else if (Text_B == "10"){
            Sum_B += 10;
        }
        // else{
        //     int Num = std::stoi(Text_B);
        //     Sum_B += Num;
        // }
    }
    if (Sum_A > Sum_B && Sum_A <= 21)
    {
        cout << "A" << "\n";
    }else if (Sum_B > Sum_A && Sum_B <= 21)
    {
        cout << "B" << "\n";
    }else{
        cout << "Draw" << "\n";
    }
    cout << Sum_A << " " << Sum_B;
    return 0; 
}