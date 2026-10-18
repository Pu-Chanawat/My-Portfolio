#include <iostream>
#include <vector>
using namespace std;

// function flip
void flip(vector<int>& A,int k){
    int right = k - 1;
    for (int i = 0; i < right; i++)
    {
        //ฟังชันท์อะไรสักอย่าง หรือ
        // int NUM = A[right];
        // A[right] = A[i];
        // A[i] = NUM;
        swap(A[i],A[right]);
        right--;
    }
}


//
int find_max_index(vector<int>& A ,int n)

int main(){
    int count ; cin >> count;
    vector<int> A(count);
    for (int i = 0; i < count; i++)
    {
        cin >> A[i];
    }
    
}