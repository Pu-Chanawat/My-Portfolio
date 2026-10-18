#include <iostream>
#include <vector>
using namespace std;
int main(){
    double MIN , BLOOM , MAX;
    double W , N , P , K ;
    string TEXT;
    double VALUE;
    bool CHECK = false;
    vector<string> SUM = {};
    cin >> MIN >> BLOOM >> MAX >> W >> N >> P >> K;
    while (true){
        cin >> TEXT ; 
        if(TEXT == "-1" || VALUE == -1 || CHECK){
            // for (int i = 0; i < SUM.size(); i++){
            //     cout << SUM[i] << "\n";
            // }
            break;
        }
        cin >>  VALUE ;
        if (TEXT == "W"){
            W += VALUE;
        }else if (TEXT == "N"){
            N += VALUE;
        }else if (TEXT == "P"){
            P += VALUE;
        }else if (TEXT == "K"){
            K += VALUE;
        }
        // STATUS CHECK 
        if (W > MAX || N > MAX || P > MAX || K > MAX){
            cout << "The rose is dead" << "\n";
            break;
            //SUM.push_back("The rose is dead");
            //CHECK = true;
        }else if ((W > BLOOM && N > BLOOM && P > BLOOM && K > BLOOM) && (W <= MAX && N <= MAX && P <= MAX && K <= MAX)){
            cout << "The rose is blooming" << "\n";
            //SUM.push_back("The rose is blooming");
        }else if((W<=MIN || N<=MIN || P<=MIN || K<=MIN) && (W <= MAX && N <= MAX && P<= MAX && K <= MAX)){
            cout << "The rose is wilted" << "\n";
            //SUM.push_back("The rose is wilted");
        }else if (W > MIN && N > MIN && P > MIN && K > MIN){
            cout << "Not bloom yet" << "\n";
            //SUM.push_back("Not bloom yet");
        }
        W *= 0.7;
        N *= 0.7;
        P *= 0.7;
        K *= 0.7;
    }
}