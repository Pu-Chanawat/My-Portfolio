#include <iostream>
#include <vector>

using namespace std;


// ตารางหมากรุกสุทธิ
string Sum_Table[8][8];
int Num_Table[8][8];

bool valid(int x,int y){
    if(x>=0&&x<=7&&y>=0&&y<=7)
    {//เช็คว่าหลุดตารางหมากรุกสุทธิยัง
        if(Sum_Table[x][y]!="P"&& //เช็คว่ามีหมากไหม โดนถ้ามี แค่ อันเดียก็ห้ามทุกกรณี คือต้องไม่มีเหลือ
            Sum_Table[x][y]!="N"&&
            Sum_Table[x][y]!="K"&&
            Sum_Table[x][y]!="B"&&
            Sum_Table[x][y]!="R"&&
            Sum_Table[x][y]!="Q")
        {
            return true;
        }
    }
    return false;
}

int main(){
    //Sum_Table[8][8]ส่วน ทำให้ทุกช่องเป็น "."
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            Sum_Table[i][j] = ".";
        }
    }
    //Num_Table[8][8]ส่วน ทำให้ทุกช่องเป็น 0
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            Num_Table[i][j] = 0;
        }
    }

    // array 3 ส่วนคือ 1.รับinput In_Table 2.ตารางสุทธิ Sum_Table  3.ตารางนับเลขว่าเดินได้เท่าไหร่ Num_Table

    int N=0;
    cin >> N;
    vector<vector<string>> In_Table(N,vector<string>(2));
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cin >> In_Table[i][j];
        }
    }

    // ส่วน วิเคราะห์ตำแหน่งที่หมารุกต้องอยู่
    for (int i = 0; i < N; i++)
    {
        string box = In_Table[i][1];
        // char a[2];
        int x=0,y=0;
        for (int j = 0; j < 2; j++)
        {
            // cout << box[j] << ",";
            int asciiValue = static_cast<int>(box[j]);
            if (asciiValue>=65&&asciiValue<=72)
            {
                y = asciiValue - 65;
            }else
            if (asciiValue>=49&&asciiValue<=56)
            {
                x =56-asciiValue;
            } 
        }
        Sum_Table[x][y] = In_Table[i][0];
    }

    //-ส่วน ระบุว่าช่องนั้นมีการเดินของ chess ไหม
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            //1.P
            if(Sum_Table[i][j]=="P"){
                if (valid(i-1,j-1)==true)
                {
                    Num_Table[i-1][j-1] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    Num_Table[i-1][j+1] +=1;
                }

            }
            //2.N
            if (Sum_Table[i][j]=="N")
            {
                if (valid(i-2,j-1)==true)
                {
                   Num_Table[i-2][j-1] +=1; 
                }
                if (valid(i-2,j+1)==true)
                {
                   Num_Table[i-2][j+1] +=1; 
                }
                if (valid(i-1,j+2)==true)
                {
                   Num_Table[i-1][j+2] +=1; 
                }
                if (valid(i-1,j-2)==true)
                {
                   Num_Table[i-1][j-2] +=1; 
                }
                if (valid(i+1,j-2)==true)
                {
                   Num_Table[i+1][j-2] +=1; 
                }
                if (valid(i+2,j-1)==true)
                {
                   Num_Table[i+2][j-1] +=1; 
                }

                if (valid(i+2,j+1)==true)
                {
                   Num_Table[i+2][j+1] +=1; 
                }
                if (valid(i+1,j+2)==true)
                {
                   Num_Table[i+1][j+2] +=1; 
                }
            }
            //3.K
            if (Sum_Table[i][j]=="K"){
                if (valid(i-1,j-1)==true)
                {
                    Num_Table[i-1][j-1] +=1;
                }
                if (valid(i-1,j)==true)
                {
                    Num_Table[i-1][j] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    Num_Table[i-1][j+1] +=1;
                }
                if (valid(i,j-1)==true)
                {
                    Num_Table[i][j-1] +=1;
                }
                if (valid(i,j+1)==true)
                {
                    Num_Table[i][j+1] +=1;
                }
                if (valid(i+1,j-1)==true)
                {
                    Num_Table[i+1][j-1] +=1;
                }
                if (valid(i+1,j)==true)
                {
                    Num_Table[i+1][j] +=1;
                }
                if (valid(i+1,j+1)==true)
                {
                    Num_Table[i+1][j+1] +=1;
                }
            }
            //4.B
            if (Sum_Table[i][j]=="B"){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    Num_Table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    Num_Table[x][y] +=1;
                }
            }
            //5.R
            if (Sum_Table[i][j]=="R"){
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    Num_Table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    Num_Table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    Num_Table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    Num_Table[i][y] +=1;
                }
            }
            //6.Q
            if (Sum_Table[i][j]=="Q"){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    Num_Table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    Num_Table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    Num_Table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    Num_Table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    Num_Table[i][y] +=1;
                }
            } 
        }
        
    }

    for(int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            if (Sum_Table[i][j]=="."&&Num_Table[i][j]>0)
            {
                cout << Num_Table[i][j] << " ";
            }else{
                cout << Sum_Table[i][j] << " ";
            }
        }
        cout << "\n";
    }

    return 0;
}