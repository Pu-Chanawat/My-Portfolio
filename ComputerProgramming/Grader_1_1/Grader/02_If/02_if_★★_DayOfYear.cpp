#include <iostream>

int main(){
    int day,month,year,sum=0;
    std::cin >> day >> month >> year;
    year -= 543;
    sum += day;
    if (month>1)//มกรา
    {
        sum += 31;
    }
    if (month>2)//กุมภา
    {
        if((year%4==0 && year%100!=0) ||year%400==0)
        {
            sum += 29;
        }else{
            sum += 28;
        }
    }
    if (month>3)//มีนา
    {
        sum += 31;
    }
    if (month>4)//เมษา
    {
        sum += 30;
    }
    if (month>5)//พฤษภา
    {
        sum += 31;
    }
    if (month>6)//มิถุนา
    {
        sum += 30;
    }
    if (month>7)//กรกฎา
    {
        sum += 31;
    }
    if (month>8)//สิงหา
    {
        sum += 31;
    }
    if (month>9)//กันยา
    {
        sum += 30;
    }
    if (month>10)//ตุลา
    {
        sum += 31;
    }
    if (month>11)//พฤศจิกา
    {
        sum += 30;
    }
    if (month>12)//ธันวา
    {
        sum += 31;
    }
    std::cout << sum;
}