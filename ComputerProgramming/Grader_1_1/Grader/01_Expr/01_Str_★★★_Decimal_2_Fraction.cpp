#include <iostream>
#include <string>

long long gcd(long a, long b) {
 if (b == 0) return a;
 return gcd(b, a%b);
}


int main(){
    std::string x,y,z;
    std::cin >> x >> y >> z;
    std::string all = x+y+z;
    std::string front = x+y;

    // ตัวเศษ
    long long Numerator = std::stoll(all) - std::stoll(front);

    //ตัวส่วน
    std::string den_str = std::string(z.length(),'9')+std::string(y.length(),'0');
    long long Denominator = std::stoll(den_str);


    long long g = gcd(Numerator,Denominator);
    std::cout << Numerator/g << " / " << Denominator / g;
    return 0;
}
