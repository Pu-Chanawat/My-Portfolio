#include <iostream>
using namespace std;

int main()
{
    string TEXT;
    getline(cin, TEXT);
    bool SUM[10] = {false};

    //เช็คว่ามีตัว
    for (int i = 0; i < TEXT.size(); i++)
    {
        if (TEXT[i] - '0' >= 0 && TEXT[i] - '0' <= 9)
        {
            int INDEX = TEXT[i] - '0';
            SUM[INDEX] = true;
        }
    }

    bool All_Present = true;
    bool First = true;

    //เช็คว่ามี 0 ไหม 
    for (int i = 0; i < 10; i++)
    {
        if (!SUM[i]) // !SUM[i] == (SUM[i]==false) ยังมี 0 เหลือไหม คือ ยังมีตัวที่ยังไม่โดนเรียกไหม
        { // ตัวที่เข้ามาในเงื่อไขนี้ได้มันจะต้องเป็น false เท่านั้น คือ ตัวที่ยังไม่ถูกใช้
            All_Present = false;
            if (!First)
            {
                cout << ",";
            }
            cout << i ;
            First = false;
            
        }   
    }


    if (All_Present)
    {
        cout << "None";
    }
    return 0;
}