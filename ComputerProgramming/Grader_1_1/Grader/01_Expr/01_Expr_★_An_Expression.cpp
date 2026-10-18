
#include <iostream>
#include <cmath>
using namespace std;

long long factorial(int n){
	long long sum=1;
	for(int i=1;i<=n;i++){
		sum *= i;
	}
	return sum;
}

int main(){
    const double PI = 3.14159265358979323846;
    double radians = 40.0*(PI/180.0);
    cout << (PI-(factorial(10)/pow(8,8))+pow(log(9.7),7/pow(71,1.0/2.0)-sin(radians)) )/ pow(1.2,pow(2.3,1.0/3.0)) << "\n";
}