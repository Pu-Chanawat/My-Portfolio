#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main()
{
    double a, b, c, l, r, x , n;
    std::cin >> a >> b >> c >> n;
        while (a <= b)
        {
            if (b > c)
            {
                a = exp(b/a) + (a/b); 
                b = b + (c/b);
            }
            else if (a > c)
            {
                b = b * sin(b); 
                c = c - log(a);
            }else{
                c = c - (b/a);
                a = (1/cos(b)) + (a/b); 
            }
        }
        a = abs(a); 
        if (a < 1.0)
        {
            a = (1.0 / a);
        }
            l = 0.0;
            r = a;
        do
        {
            x = (l + r) / 2.0;
            if (pow(x, n) < a)
            {
                l = x;
            }
            else
            {
                r = x;
            }
        } while (r-l  >= pow(10.0, -5.0));
        cout << fixed << setprecision(5);
        cout << "a: " << a << "\n";
        cout << "b: " << b << "\n";
        cout << "c: " << c << "\n";
        cout << "x: " << x << "\n";
        return 0;
}
