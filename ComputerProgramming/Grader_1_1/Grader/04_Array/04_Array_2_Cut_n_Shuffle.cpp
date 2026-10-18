#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main(){
    int N; cin >> N;
    vector<string> CARD;
    for (int i = 0; i < N; i++)
    {
        string T ; cin >> T;
        CARD.push_back(T);
    }
    cin.ignore();
    string PROCESS; getline(cin,PROCESS);
    for (char P : PROCESS)
    {
        vector<string> AGENT_CARD;
        if (P =='C')
        {
            for (int i = N/2; i < N; i++)
            {
                AGENT_CARD.push_back(CARD[i]);
            }
            for (int i = 0; i < N/2; i++)
            {
                AGENT_CARD.push_back(CARD[i]);
            }
            CARD = AGENT_CARD;
        }else if(P =='S'){
            for (int i = 0; i < N/2; i++)
            {
                AGENT_CARD.push_back(CARD[i]);
                AGENT_CARD.push_back(CARD[N/2+i]);
            }
            CARD = AGENT_CARD;
        }  
    }
    
    for (int i = 0; i < N; i++)
    {
        cout << CARD[i] << " ";
    }
    
}