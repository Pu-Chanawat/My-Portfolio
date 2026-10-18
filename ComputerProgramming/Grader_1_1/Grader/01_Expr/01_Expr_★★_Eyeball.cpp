#include <iostream>
#include <cmath>

int main(){
    double xe,ye,re,rp,xm,ym;
    std::cin >> xe >> ye >> re >> rp >> xm >> ym;

    double A,B,C,a,b,c;
    C = pow(pow(xe-xm,2)+pow(ye-ym,2),1.0/2.0); //ระยะทางระหว่าง จุดศูนย์กลางของวงกลมใหญ่ กับ เมาส์
    c = abs(re-rp); //ระยะระหว่าง จุดศูนย์กลางของวงกลมใหญ่ กับ จุดศูนย์กลางของวงกลมเล็ก
    a = (c*abs(xe-xm)/C);
    b = (c*abs(ye-ym)/C);
    if (xm<xe)
    {
        a = -a;
    }
    if (ym<ye)
    {
        b = -b;
    }
    xe = xe + a;
    ye = ye + b;
    std::cout << round(xe) << " " << round(ye) ;
    return 0;
}