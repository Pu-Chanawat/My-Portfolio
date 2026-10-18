#define _USE_MATH_DEFINES //ใช้ในการเปิดใช้งานพวกค่าคงที่
#include <iostream>
#include <iomanip>
#include <cmath>

int main(){

    //ส่วน กำหนดตัวแปร
    double a,b,c,S,area,c_a,c_b,c_c,c_s;

    //ส่วน input
    std::cin >> a >> b >> c;

    //ส่วน คำนวณ
    S = (a+b+c)/2;
    area = std::sqrt(S*(S-a)*(S-b)*(S-c));
    c_a = acos((pow(b,2)+pow(c,2)-pow(a,2))/(2*b*c))*(180.0 / M_PI);
    c_b = acos((pow(a,2)+pow(c,2)-pow(b,2))/(2*a*c))*(180.0 / M_PI);
    c_c = acos((pow(a,2)+pow(b,2)-pow(c,2))/(2*a*b))*(180.0 / M_PI);

    if(c_a<=c_b&&c_a<=c_c){
        c_s = c_a;
    }else if(c_b<=c_a&&c_b<=c_c){
        c_s = c_b;
    }else {
        c_s = c_c;
    }

    //ส่วน output
    std::cout << std::fixed << std::setprecision(4);
    std::cout << a+b+c << std::endl<< area << std::endl <<c_s;
    return 0;
}