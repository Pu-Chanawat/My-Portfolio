#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double U , M , T; cin >> U >> M >> T;
    double H , R ;
    double G= 10.0;
    M = M * M_PI / 180.0; //คือการแปลงมุมองศา เป็น เรเดียน เพื่อ เอาไปใช้ในการคำนวณใน cpp เพราะ ใน cpp การคำนวณมุมจะคำนวณด้วยเรเดียน
    H = (T-(U*sin(M)/G))*(U*sin(M)+(1.0/2.0)*G*(T-3*(U*sin(M)/G)));
    R = U*(cos(M))*T;

    cout << round(H*10)/10 << " " << round(R*10)/10;
}