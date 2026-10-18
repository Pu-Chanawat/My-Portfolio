#include <iostream>
#include <vector>
#include <string>
using namespace std;

int table[8][8]; 

bool valid(int x,int y){
    if(x>=0&&x<=7&&y>=0&&y<=7){
        if (table[x][y]<65)
        {
            return true;
        }
    }
    return false;
}


int main(){
    //ส่วน กำหนนดตัวแปร
    int N = 0;
    cin >> N ;
    
   string chess[20][2];
    //ส่วน input
    
    // รับข้อมูลเข้าตาราง
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j<2; j++)
        {
            cin >> chess[i][j];
        }
    }

    for (int i = 0; i < 8; i++)
    {
       for (int j = 0; j < 8; j++)
       {
            table[i][j] = 0;
       }
    }

    //-ส่วน ระบุตัว chess ว่าอยู่ตรงไหนของตารางบ้าง
    for (int i = 0; i < N; i++)
    {
        string box = chess[i][1]; // C4
        char a[2];
        int x=0,y=0;
        for(int i = 0; i < 2; i++)
        {
            a[i] = box[i];//C
            int asciiValue = static_cast<int>(a[i]); // แปลง char เป็น int C->67
            if (asciiValue>=65&&asciiValue<=72)
            {
                y = asciiValue - 65;
            }else
            if (asciiValue>=49&&asciiValue<=56)
            {
                x =56-asciiValue;
            } 
        }
        table[x][y] =  static_cast<int>(chess[i][0][0]);
    }

    //-ส่วน ระบุว่าช่องนั้นมีการเดินของ chess ไหม
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            //1.P
            if(table[i][j]=='P'){
                if (valid(i-1,j-1)==true)
                {
                    table[i-1][j-1] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    table[i-1][j+1] +=1;
                }
            }
            //2.N
            if (table[i][j]=='N')
            {
                if (valid(i-2,j-1)==true)
                {
                   table[i-2][j-1] +=1; 
                }
                if (valid(i-2,j-1)==true)
                {
                   table[i-2][j+1] +=1; 
                }
                if (valid(i-1,j+2)==true)
                {
                   table[i-1][j+2] +=1; 
                }
                if (valid(i-1,j-2)==true)
                {
                   table[i-1][j-2] +=1; 
                }
                if (valid(i+1,j-2)==true)
                {
                   table[i+1][j-2] +=1; 
                }
                if (valid(i+2,j-1)==true)
                {
                   table[i+2][j-1] +=1; 
                }

                if (valid(i+2,j+1)==true)
                {
                   table[i+2][j+1] +=1; 
                }
                if (valid(i+1,j+2)==true)
                {
                   table[i+1][j+2] +=1; 
                }
            }
            //3.K
            if (table[i][j]=='K'){
                if (valid(i-1,j-1)==true)
                {
                    table[i-1][j-1] +=1;
                }
                if (valid(i-1,j)==true)
                {
                    table[i-1][j] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    table[i-1][j+1] +=1;
                }
                if (valid(i,j-1)==true)
                {
                    table[i][j-1] +=1;
                }
                if (valid(i,j+1)==true)
                {
                    table[i][j+1] +=1;
                }
                if (valid(i+1,j-1)==true)
                {
                    table[i+1][j-1] +=1;
                }
                if (valid(i+1,j)==true)
                {
                    table[i+1][j] +=1;
                }
                if (valid(i+1,j+1)==true)
                {
                    table[i+1][j+1] +=1;
                }
            }
            //4.B
            if (table[i][j]=='B'){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    table[x][y] +=1;
                }
            }
            //5.R
            if (table[i][j]=='R'){
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    table[i][y] +=1;
                }
            }
            //6.Q
            if (table[i][j]=='Q'){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    table[x][y] +=1;
                }
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    table[i][y] +=1;
                }
            }
            
        }
        
    }
    //ส่วน output
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            if(table[i][j] == 0)
            {
                cout << "." << " ";
            }else
            if (table[i][j] >= 65)
            {
                cout << static_cast<char>(table[i][j]) << " ";
            }
            else{
                cout << (table[i][j]) << " ";
            }
            //cout << table[i][j] << " ";
        }
        cout << "\n";
    }
    return 0;
}