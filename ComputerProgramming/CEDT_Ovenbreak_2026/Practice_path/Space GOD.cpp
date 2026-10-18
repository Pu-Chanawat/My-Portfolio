#include <iostream>
using namespace std;
int main(){
    double x,y,power;
    cin >> x >> y;
    /*
    if(x<0.0){
        x = -(x);
    }
    */
    power = (x/y)*100.0;
    if(power<0.0||power>100.0){
        cout << "Invalid!" << endl;
    }else if(power<=10.0){
        cout << "Very weak" << endl;
    }else if(power<=30.0){
        cout << "Normal" << endl;
    }else if(power<=50.0){
        cout << "Acceptable" << endl;
    }else if(power<=80.0){
        cout << "Interesting" << endl;
    }else if(power<=100.0){
        cout << "Remarkable" << endl;
    }
    return 0;
}

//สิ่งที่พลาด -> อ่านไทยตก
// ไม่เกิน = น้อยว่า หรือ พอดี นับว่าได้