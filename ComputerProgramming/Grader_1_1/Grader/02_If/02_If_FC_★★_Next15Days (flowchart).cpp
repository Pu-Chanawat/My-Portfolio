#include <iostream>

int main(){
    int d=0,m=0,y=0,n=0;
    std::cin >> d >> m >> y;
    y = y-543;
    //std::cout << d << "/"<< m << "/"<< y;
    if(m%12==4 || m%12==6 || m%12==9 || m%12==11){
        n = 30;
    }else{
        n = 31;
        if (m == 2)
        {
            if ((y%4==0 && y%100!=0) || y%400==0)
            {
                n = 29;
            }else{
                n = 28;
            }
        } 
    }
    //std::cout << m << "/"<<n;
    d += 15;
    if (d > n)
    {
        d -= n;
        m += 1;
    }
    if (m>12)
    {
        m -= 12;
        y += 1;
    }
    y += 543;
    std::cout << d <<"/"<<m<<"/"<<y;
    return 0;
}