#define _USE_MATH_DEFINES
#include <cmath>
#include <iostream>
#include <iomanip>
using namespace std;

int main(){
    double x,P,r,V;
    cin >> x;
    P = 6+(7.0*(log(pow(x+1,1.2))));
    r = P/2.0;
    V = (4.0/3.0)*M_PI*(pow(r,3));
    cout << fixed << setprecision(2);
    cout << V << endl;
    return 0;
}

//จุดพลาด (4/3) คือ การเอา 4/3 มันคือ การเอา integer มาหารกันผลลัพท์มันจะตัดเศษออกหมด 
// เช่น 4/3 = 1 ไม่ใช่ 1.333 ซึ่งมันจะทำให้เกิดการทำควณสูตรผิดพลาดได้
// วิธีแก้คือ ใส่ .0 หลังตัวเลข เพื่อเปลี่ยน int เป็น double
//เช่นแก้ 3 เป็น 3.0