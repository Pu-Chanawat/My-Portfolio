#include <iostream>

int main(){
    int A,B,C;
    std::cin >> A >> B >> C;
    if (A>100)
    {
        do{
            if (B>C)
        {
            if (B%2==0)
            {
                A = A + B;
                C = C + 2;
            }else{
                A = A - C;
                B = B + 3;
            }   
        }else{
            C = C + 10;
            A=A-5;

        }
        if (A%5==0)
        {
            B = B -1;
        }else{
            C = C+1;
        }  
        }while ( A<= 3*abs(B+C));
    }else{
        if (A<B){
            if(C%3==0){
                A = A*2;
                B =B-1;
            }else{
            A = A + B;
            C = C*2;
            }
        }else{
            A = A + B;
            C = C*2;
        }
        if (B < C){
            B = B+C;
            A=A+1;
        }else{
            C=C-B;
            A=A-2;
        }
    }
    std::cout << A << "\n" << B << "\n" << C ;
    return 0;
}