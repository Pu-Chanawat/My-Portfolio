#include <iostream>
#include <cmath>
using namespace std;

int main(){
    string X,Y;
    int sum_x = 0, sum_y = 0;
    int x=0,y=0,e=0;
    char m;
    cin >> X >> x >> Y >> y >> m;
    for(int i=0;i < X.size();i++)
    { 
        if(X[i] == '&' && i+1 == X.size()){
            X[i] = '0';
        }else if(X[i] == '&'){
            i++;
            if(X[i]<='9'){
                e = X[i] - '0';
            }else{
                e = X[i] - 'A' + 10;
            }
        }
        if(i+1 == X.size() && X[i] == '0'){
            sum_x += 0;
        }else if(X[i]<='9'){
            sum_x += (X[i] - '0')*pow(x,X.size()-(i+1));
        }else{
            sum_x += ((X[i] - 'A') + 10)*pow(x,X.size()-(i+1));
        }
        if(i+1 == X.size() && e > 0){
            sum_x *= e;
        }
    }
    e = 0;
    for(int i=0;i < Y.size();i++)
    {
        if(Y[i] == '&' && i+1 == Y.size()){
            Y[i] = '0';
        }else if(Y[i] == '&'){
            i++;
            if(Y[i]<='9'){
                e = Y[i] - '0';
            }else{
                e = Y[i] - 'A' + 10;
            }
        }
        if(i+1 == Y.size() && Y[i] == '0'){
            sum_y += 0;
        }else if(Y[i]<='9'){
            sum_y += (Y[i] - '0')*pow(y,Y.size()-(i+1));
        }else{
            sum_y += ((Y[i] - 'A') + 10)*pow(y,Y.size()-(i+1));
        }
        if(i+1 == Y.size() && e > 0){
            sum_y *= e;
        }
    }

    if (m=='+')
    {
        cout << (sum_x + sum_y) << "\n";
    }else if (m=='-')
    {
        cout << (sum_x -  sum_y) << "\n";
    }else if (m=='*')
    {
        cout <<( sum_x * sum_y) << "\n";
    }else if(m=='/'){
        cout << (sum_x / sum_y) << "\n";
    }
    
}