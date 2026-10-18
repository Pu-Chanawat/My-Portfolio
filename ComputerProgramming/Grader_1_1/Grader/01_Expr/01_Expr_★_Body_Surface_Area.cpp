#include <iostream>
#include <cmath>
#include <iomanip>

using namespace std;
int main(){
    double Mos,Hay,Boy,W,H;
    cin >> W >> H;
    Mos = pow(W*H,1.0/2.0)/60.0;
    Hay = 0.024265 * pow(W,0.5378) * pow(H,0.3964);
    Boy = 0.0333 * pow(W,0.6157-0.0188*log10(W))*pow(H,0.3);
    cout << fixed << setprecision(14) <<  Mos << "\n" << Hay << "\n" << Boy;

}