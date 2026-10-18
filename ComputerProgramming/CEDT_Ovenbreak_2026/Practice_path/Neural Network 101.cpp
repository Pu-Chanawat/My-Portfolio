#include <iostream>
#include <iomanip>
using namespace std;

int main(){
    //path input
    double w11,w21,w31,w12,w22,w32,b1,b2,b3,v1,v2,v3,b_out,gpa,study_hours;
    cin >> w11 >> w12 >> b1;
    cin >> w21 >> w22 >> b2;
    cin >> w31 >> w32 >> b3;
    cin >> v1 >> v2 >> v3 >> b_out;
    cin >> gpa >> study_hours;

    //Path คำนวณ
    double h1=1;
    double h2=2;
    double h3=3;
    double probability=4;
    
    //output
    cout << fixed << setprecision(6);
    cout << "h1 = " << h1 << "\n" ;
    cout << "h2 = " << h2 << "\n" ;
    cout << "h3 = " << h3 << "\n" ;
    cout << "probability = " << probability << "\n" ;
    return 0;
}