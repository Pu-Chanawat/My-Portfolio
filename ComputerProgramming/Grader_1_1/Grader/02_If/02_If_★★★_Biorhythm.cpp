#include <iostream>
#include <cmath>

int main(){
    int d1,m1,y1,d2,m2,y2;
    const double PI = 3.14159265358979323846;
    int sum=0,n=0;
    std::cin >> d1 >> m1 >> y1 >> d2 >> m2 >> y2;
    y1 -= 543 ; y2 -= 543;
    //ช่วงแดง

    for (int i = m1; i <= 12; i++)
    {
        if(m1%12==4 || m1%12==6 || m1%12==9 || m1%12==11){
            n = 30;
        }else{
            n = 31;
            if (m1 == 2)
            {
                if ((y1%4==0 && y1%100!=0) || y1%400==0)
                {
                    n = 29;
                }else{
                    n = 28;
                }
            } 
        }
    sum += n - d1;
    m1 += 1;
    if (d1>0){d1 = 0;}
    }
    
    //ช่วงดำ
    if (y2-y1 > 1 )
    {
        for (int i = 1; i < y2-y1; i++)
        {
            if ((y1+i%4==0 && y1+i%100!=100)||y1+i%400==0)
            {
                sum += 366;
            }else{
                sum += 365;
            }
        }
        
    }
    //ช่วงฟ้า
    sum += d2;
    if (m2>1)//มกรา
    {
        sum += 31;
    }
    if (m2>2)//กุมภา
    {
        if((y2%4==0 && y2%100!=0) ||y2%400==0)
        {
            sum += 29;
        }else{
            sum += 28;
        }
    }
    if (m2>3)//มีนา
    {
        sum += 31;
    }
    if (m2>4)//เมษา
    {
        sum += 30;
    }
    if (m2>5)//พฤษภา
    {
        sum += 31;
    }
    if (m2>6)//มิถุนา
    {
        sum += 30;
    }
    if (m2>7)//กรกฎา
    {
        sum += 31;
    }
    if (m2>8)//สิงหา
    {
        sum += 31;
    }
    if (m2>9)//กันยา
    {
        sum += 30;
    }
    if (m2>10)//ตุลา
    {
        sum += 31;
    }
    if (m2>11)//พฤศจิกา
    {
        sum += 30;
    }
    if (m2>12)//ธันวา
    {
        sum += 31;
    }
    //path biorhythm
    double x = sin(2.0*PI*sum / 23.0);
    double y = sin(2.0*PI*sum / 28.0);
    double z = sin(2.0*PI*sum / 33.0);

    //cout
    std::cout << sum <<" ";
    std::cout << round(x*100.0)/100.0 <<" ";
    std::cout << round(y*100.0)/100.0 <<" ";
    std::cout << round(z*100.0)/100.0;
}