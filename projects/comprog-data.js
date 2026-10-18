// ===================================================================
//   AUTO-GENERATED — do not edit by hand.
//   Source of truth: ComputerProgramming/ (*.cpp files)
//   Regenerate with: node tools/build-comprog-data.mjs
// ===================================================================
window.COMPROG_PROBLEMS = [
  {
    id: "001",
    title: "An Expression",
    group: "Grader 1.1 · Expression",
    topic: "Expression",
    level: "easy",
    file: "01_Expr_★_An_Expression.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Expr_★_An_Expression.cpp",
    code: `
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
    cout << (PI-(factorial(10)/pow(8,8))+pow(log(9.7),7/pow(71,1.0/2.0)-sin(radians)) )/ pow(1.2,pow(2.3,1.0/3.0)) << "\\n";
}
`
  },
  {
    id: "002",
    title: "An Expression II",
    group: "Grader 1.1 · Expression",
    topic: "Expression",
    level: "easy",
    file: "01_Expr_★_An_Expression_II.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Expr_★_An_Expression_II.cpp",
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double x,y;
    cin >> x;
    y = (pow(x,pow(log(pow(x+1,2)),1.0/2.0)))/(10-x);
    cout << round(y*1e6)/1e6 ;
    return 0;
}
`
  },
  {
    id: "003",
    title: "Body Surface Area",
    group: "Grader 1.1 · Expression",
    topic: "Expression",
    level: "easy",
    file: "01_Expr_★_Body_Surface_Area.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Expr_★_Body_Surface_Area.cpp",
    code: `#include <iostream>
#include <cmath>
#include <iomanip>

using namespace std;
int main(){
    double Mos,Hay,Boy,W,H;
    cin >> W >> H;
    Mos = pow(W*H,1.0/2.0)/60.0;
    Hay = 0.024265 * pow(W,0.5378) * pow(H,0.3964);
    Boy = 0.0333 * pow(W,0.6157-0.0188*log10(W))*pow(H,0.3);
    cout << fixed << setprecision(14) <<  Mos << "\\n" << Hay << "\\n" << Boy;

}
`
  },
  {
    id: "004",
    title: "CitizenID",
    group: "Grader 1.1 · Expression",
    topic: "String",
    level: "easy",
    file: "01_Str_★_CitizenID.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Str_★_CitizenID.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    string n;
    int x;
    cin >> n;
    x = (11-(13*(n[0]-'0')+12*(n[1]-'0')+11*(n[2]-'0')+10*(n[3]-'0')+9*(n[4]-'0')+8*(n[5]-'0')+7*(n[6]-'0')+6*(n[7]-'0')+5*(n[8]-'0')+4*(n[9]-'0')+3*(n[10]-'0')+2*(n[11]-'0'))%11)%10;
    cout << n[0] <<"-"<<n[1]<<n[2]<<n[3]<<n[4]<<"-"<<n[5]<<n[6]<<n[7]<<n[8]<<n[9]<<"-"<<n[10]<<n[11]<<"-"<<x;
    return 0;
}
`
  },
  {
    id: "005",
    title: "Quadratic Root",
    group: "Grader 1.1 · Expression",
    topic: "Expression",
    level: "easy",
    file: "01_Expr_★_Quadratic_Root.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Expr_★_Quadratic_Root.cpp",
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double a,b,c,x1,x2;
    cin >> a >> b >> c;

    x1 = (-(b)-pow(pow(b,2.0)-(4*a*c),1.0/2.0))/(2*a);
    x2 = (-(b)+pow(pow(b,2.0)-(4*a*c),1.0/2.0))/(2*a);

    cout << round(x1*1e3)/1e3 << " " << round(x2*1e3)/1e3 ;
    return 0;
}
`
  },
  {
    id: "006",
    title: "Songkran",
    group: "Grader 1.1 · Expression",
    topic: "Expression",
    level: "easy",
    file: "01_Expr_★_Songkran.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Expr_★_Songkran.cpp",
    code: `#include <iostream>

using namespace std;

int main(){
    int y;
    cin >> y;
    y = y-2543;
    y = (y+(y/4)+11)%7;
    cout << y;
    return 0;
}
`
  },
  {
    id: "007",
    title: "Duration",
    group: "Grader 1.1 · Expression",
    topic: "Expression",
    level: "medium",
    file: "01_Expr_★★_Duration.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Expr_★★_Duration.cpp",
    code: `#include <iostream>
using namespace std;

int main() {
 int h1,m1,s1, h2,m2,s2;
 cin >> h1 >> m1 >> s1;
 cin >> h2 >> m2 >> s2;
 int t1 = h1*60*60 + m1*60 + s1;
 int t2 = h2*60*60 + m2*60 + s2;


 int dh,dm,ds;
 ds = ((t2 - t1)+86400)%86400;

 dh = ds / (60*60);
 ds -= dh * 60*60;
 dm = ds / 60;
 ds -= dm*60;


 
 cout << dh << ':' << dm << ':' << ds;
}
`
  },
  {
    id: "008",
    title: "Eyeball",
    group: "Grader 1.1 · Expression",
    topic: "Expression",
    level: "medium",
    file: "01_Expr_★★_Eyeball.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Expr_★★_Eyeball.cpp",
    code: `#include <iostream>
#include <cmath>

int main(){
    double xe,ye,re,rp,xm,ym;
    std::cin >> xe >> ye >> re >> rp >> xm >> ym;

    double A,B,C,a,b,c;
    C = pow(pow(xe-xm,2)+pow(ye-ym,2),1.0/2.0); //ระยะทางระหว่าง จุดศูนย์กลางของวงกลมใหญ่ กับ เมาส์
    c = abs(re-rp); //ระยะระหว่าง จุดศูนย์กลางของวงกลมใหญ่ กับ จุดศูนย์กลางของวงกลมเล็ก
    a = (c*abs(xe-xm)/C);
    b = (c*abs(ye-ym)/C);
    if (xm<xe)
    {
        a = -a;
    }
    if (ym<ye)
    {
        b = -b;
    }
    xe = xe + a;
    ye = ye + b;
    std::cout << round(xe) << " " << round(ye) ;
    return 0;
}
`
  },
  {
    id: "009",
    title: "Decimal 2 Fraction",
    group: "Grader 1.1 · Expression",
    topic: "String",
    level: "hard",
    file: "01_Str_★★★_Decimal_2_Fraction.cpp",
    path: "Grader_1_1/Grader/01_Expr/01_Str_★★★_Decimal_2_Fraction.cpp",
    code: `#include <iostream>
#include <string>

long long gcd(long a, long b) {
 if (b == 0) return a;
 return gcd(b, a%b);
}


int main(){
    std::string x,y,z;
    std::cin >> x >> y >> z;
    std::string all = x+y+z;
    std::string front = x+y;

    // ตัวเศษ
    long long Numerator = std::stoll(all) - std::stoll(front);

    //ตัวส่วน
    std::string den_str = std::string(z.length(),'9')+std::string(y.length(),'0');
    long long Denominator = std::stoll(den_str);


    long long g = gcd(Numerator,Denominator);
    std::cout << Numerator/g << " / " << Denominator / g;
    return 0;
}
`
  },
  {
    id: "010",
    title: "FacultyCode",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "easy",
    file: "02_If_★_FacultyCode.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★_FacultyCode.cpp",
    code: `#include <iostream>
#include <string>

int main(){
    std::string text;
    bool check = false;
    std::string sum_text[] = {"01","02","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","51","53","55","58"};
    std::cin >> text;
    for (int i = 0; i < 27; i++)
    {
        if (text==sum_text[i])
        {
            check = true;
        }
    }
    if (check == true)
    {
        std::cout << "OK";
    }else{
        std::cout << "Error";
    }
    return 0;
}
`
  },
  {
    id: "011",
    title: "Grading",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "easy",
    file: "02_If_★_Grading.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★_Grading.cpp",
    code: `#include <iostream>

int main(){
    double num;
    std::cin >> num;
    if (num >= 80)
    {
        std::cout << "A";
    }else if (num >= 70)
    {
        std::cout << "B";
    }else if (num >= 60)
    {
        std::cout << "C";
    }else if (num >= 50)
    {
        std::cout << "D";
    }else{
        std::cout << "F";
    }
    
    return 0;
}
`
  },
  {
    id: "012",
    title: "Gymnastic Score",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "easy",
    file: "02_If_★_Gymnastic_Score.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★_Gymnastic_Score.cpp",
    code: `#include <iostream>
#include <cmath>

int main(){
    double a,b,c,d,num,min,max;
    std::cin >> a >> b >> c >> d;
    min = a;
    max = a;
    if (b<min){
        min = b;
    }if(c<min){
        min = c;
    }if(d<min){
        min = d;
    }
    if (b>max){
        max = b;
    }if(c>max){
        max = c;
    }if(d>max){
        max = d;
    }

    num = ((a+b+c+d)-min-max)/2.0;

    std::cout <<  round(num*100.0)/100.0;
    return 0;
}
`
  },
  {
    id: "013",
    title: "MajorChange",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "easy",
    file: "02_If_★_MajorChange.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★_MajorChange.cpp",
    code: `#include <iostream>
#include <string>
using namespace std;

int main(){
    string account1,account2,GPAX1,GPAX2,com_prog1,com_prog2,cal11,cal12,cal21,cal22;
    cin >> account1 >> GPAX1 >> com_prog1 >> cal11 >> cal21;
    cin >> account2 >> GPAX2 >> com_prog2 >> cal12 >> cal22;
    bool status1 = com_prog1 == "A"  && cal11 <= "C" && cal21 <= "C"? true:false ;
    bool status2 = com_prog2 == "A" && cal12 <= "C" && cal22 <= "C"? true:false ;
    if(status1 == 0 && status2 == 0){
        cout << "None";
    }else if (status1 == 1 && status2 == 0)
    {
        cout << account1;
    }else if (status1 == 0 && status2 == 1)
    {
        cout << account2;
    }else{
        if (GPAX1 == GPAX2 && cal11 == cal12 && cal21 == cal22)
        {
            cout << "Both";
        }else{
            if (GPAX1 > GPAX2)
            {
                cout << account1;
            }else if(GPAX1 < GPAX2){
                cout << account2;
            }else{
                if (cal11 < cal12)
                {
                    cout << account1;
                }else if (cal11 > cal12)
                {
                    cout << account2;
                }else{
                    if (cal21 < cal22)
                    {
                        cout << account1;
                    }else if (cal21 > cal22)
                    {
                        cout << account2;
                    }
                }
                
            }
            
        }
           
    } 
    return 0;
}
`
  },
  {
    id: "014",
    title: "Median5",
    group: "Grader 1.1 · Condition",
    topic: "Condition · Flowchart",
    level: "easy",
    file: "02_If_FC_★_Median5 (flowchart).cpp",
    path: "Grader_1_1/Grader/02_If/02_If_FC_★_Median5 (flowchart).cpp",
    code: `#include <iostream>
#include <algorithm>

int main(){
    int a,b,c,d,e;
    std::cin >> a >> b >> c >> d >> e;
    if (a>b)
    {
       std::swap(a,b);
    }
    if (c>d)
    {
        std::swap(c,d);
    }
    if (a>c)
    {
        std::swap(b,d);
        c=a;
    }
    a=e;
    if (a>b)
    {
        std::swap(a,b);
    }
    if (c>a)
    {
        std::swap(b,d);
        a=c;
    }
    if (a>d)
    {
        std::cout << d;
    }else{
        std::cout << a;
    }
    
    
    
    
    return 0;
}
`
  },
  {
    id: "015",
    title: "MobileNumber",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "easy",
    file: "02_If_★_MobileNumber.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★_MobileNumber.cpp",
    code: `#include <iostream>

int main(){
    std::string num;
    std::cin >> num;
    if(num.length()==10 && num[0]=='0'&& (num[1]=='6'|| num[1]=='8' ||num[1]=='9')){
        std::cout << "Mobile number";
    }else{
        std::cout << "Not a mobile number";
    }
}
`
  },
  {
    id: "016",
    title: "Positive Negative",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "easy",
    file: "02_If_★_Positive_Negative.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★_Positive_Negative.cpp",
    code: `#include <iostream>

int main(){
    int num;
    std::cin >> num;
    if(num > 0 ){
        std::cout << "positive\\n";
    }else if(num < 0){
       std::cout << "negative\\n"; 
    }else if(num == 0){
        std::cout << "zero\\n"; 
    }
    if(num%2==0){
        std::cout << "even";
    }else{
        std::cout << "odd";
    }
}
`
  },
  {
    id: "017",
    title: "RegisteredMail",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "easy",
    file: "02_If_★_RegisteredMail.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★_RegisteredMail.cpp",
    code: `#include <iostream>

int main(){
    int weigth;
    std::cin >> weigth;
    if( weigth <=100){
        std::cout << "18";
    }else if (weigth > 100 && weigth <=250)
    {
        std::cout << "22";
    }else if (weigth >250 && weigth <=500)
    {
        std::cout << "28";
    }else if (weigth >500 && weigth <=1000)
    {
        std::cout << "38";
    }else if(weigth >1000 && weigth <= 2000){
        std::cout << "58";
    }else{
        std::cout << "Reject";
    }
    
    
    
    
}
`
  },
  {
    id: "018",
    title: "AbbrevNum",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "medium",
    file: "02_If_★★_AbbrevNum.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★★_AbbrevNum.cpp",
    code: `#include <iostream>
#include <cmath>

int main(){
    double num;
    std::cin >> num;
    if (num >= 1000000000)
    {
        num = num/1000000000.0;
        if(num>=10){
            std::cout << round(num) << "B";
        }else{
            std::cout << round(num*10)/10.0 << "B";
        }
    }else if (num >= 1000000)
    {
        num = num/1000000.0;
        if(num>=10){
            std::cout << round(num) << "M";
        }else{
            std::cout << round(num*10)/10.0 << "M";
        }
    }else if(num >= 1000){
        num = num/1000.0;
        if(num>=10){
            std::cout << round(num) << "K";
        }else{
            std::cout << round(num*10)/10.0 << "K";
        } 
    }else if(num < 1000){
        std::cout << num;
    }
    return 0;
}
`
  },
  {
    id: "019",
    title: "DayOfYear",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "medium",
    file: "02_if_★★_DayOfYear.cpp",
    path: "Grader_1_1/Grader/02_If/02_if_★★_DayOfYear.cpp",
    code: `#include <iostream>

int main(){
    int day,month,year,sum=0;
    std::cin >> day >> month >> year;
    year -= 543;
    sum += day;
    if (month>1)//มกรา
    {
        sum += 31;
    }
    if (month>2)//กุมภา
    {
        if((year%4==0 && year%100!=0) ||year%400==0)
        {
            sum += 29;
        }else{
            sum += 28;
        }
    }
    if (month>3)//มีนา
    {
        sum += 31;
    }
    if (month>4)//เมษา
    {
        sum += 30;
    }
    if (month>5)//พฤษภา
    {
        sum += 31;
    }
    if (month>6)//มิถุนา
    {
        sum += 30;
    }
    if (month>7)//กรกฎา
    {
        sum += 31;
    }
    if (month>8)//สิงหา
    {
        sum += 31;
    }
    if (month>9)//กันยา
    {
        sum += 30;
    }
    if (month>10)//ตุลา
    {
        sum += 31;
    }
    if (month>11)//พฤศจิกา
    {
        sum += 30;
    }
    if (month>12)//ธันวา
    {
        sum += 31;
    }
    std::cout << sum;
}
`
  },
  {
    id: "020",
    title: "Next15Days",
    group: "Grader 1.1 · Condition",
    topic: "Condition · Flowchart",
    level: "medium",
    file: "02_If_FC_★★_Next15Days (flowchart).cpp",
    path: "Grader_1_1/Grader/02_If/02_If_FC_★★_Next15Days (flowchart).cpp",
    code: `#include <iostream>

int main(){
    int d=0,m=0,y=0,n=0;
    std::cin >> d >> m >> y;
    y = y-543;
    //std::cout << d << "/"<< m << "/"<< y;
    if(m%12==4 || m%12==6 || m%12==9 || m%12==11){
        n = 30;
    }else{
        n = 31;
        if (m == 2)
        {
            if ((y%4==0 && y%100!=0) || y%400==0)
            {
                n = 29;
            }else{
                n = 28;
            }
        } 
    }
    //std::cout << m << "/"<<n;
    d += 15;
    if (d > n)
    {
        d -= n;
        m += 1;
    }
    if (m>12)
    {
        m -= 12;
        y += 1;
    }
    y += 543;
    std::cout << d <<"/"<<m<<"/"<<y;
    return 0;
}
`
  },
  {
    id: "021",
    title: "Biorhythm",
    group: "Grader 1.1 · Condition",
    topic: "Condition",
    level: "hard",
    file: "02_If_★★★_Biorhythm.cpp",
    path: "Grader_1_1/Grader/02_If/02_If_★★★_Biorhythm.cpp",
    code: `#include <iostream>
#include <cmath>

int main(){
    int d1,m1,y1,d2,m2,y2;
    const double PI = 3.14159265358979323846;
    int sum=0,n=0;
    std::cin >> d1 >> m1 >> y1 >> d2 >> m2 >> y2;
    y1 -= 543 ; y2 -= 543;
    //ช่วงแดง

    for (int i = m1; i <= 12; i++)
    {
        if(m1%12==4 || m1%12==6 || m1%12==9 || m1%12==11){
            n = 30;
        }else{
            n = 31;
            if (m1 == 2)
            {
                if ((y1%4==0 && y1%100!=0) || y1%400==0)
                {
                    n = 29;
                }else{
                    n = 28;
                }
            } 
        }
    sum += n - d1;
    m1 += 1;
    if (d1>0){d1 = 0;}
    }
    
    //ช่วงดำ
    if (y2-y1 > 1 )
    {
        for (int i = 1; i < y2-y1; i++)
        {
            if ((y1+i%4==0 && y1+i%100!=100)||y1+i%400==0)
            {
                sum += 366;
            }else{
                sum += 365;
            }
        }
        
    }
    //ช่วงฟ้า
    sum += d2;
    if (m2>1)//มกรา
    {
        sum += 31;
    }
    if (m2>2)//กุมภา
    {
        if((y2%4==0 && y2%100!=0) ||y2%400==0)
        {
            sum += 29;
        }else{
            sum += 28;
        }
    }
    if (m2>3)//มีนา
    {
        sum += 31;
    }
    if (m2>4)//เมษา
    {
        sum += 30;
    }
    if (m2>5)//พฤษภา
    {
        sum += 31;
    }
    if (m2>6)//มิถุนา
    {
        sum += 30;
    }
    if (m2>7)//กรกฎา
    {
        sum += 31;
    }
    if (m2>8)//สิงหา
    {
        sum += 31;
    }
    if (m2>9)//กันยา
    {
        sum += 30;
    }
    if (m2>10)//ตุลา
    {
        sum += 31;
    }
    if (m2>11)//พฤศจิกา
    {
        sum += 30;
    }
    if (m2>12)//ธันวา
    {
        sum += 31;
    }
    //path biorhythm
    double x = sin(2.0*PI*sum / 23.0);
    double y = sin(2.0*PI*sum / 28.0);
    double z = sin(2.0*PI*sum / 33.0);

    //cout
    std::cout << sum <<" ";
    std::cout << round(x*100.0)/100.0 <<" ";
    std::cout << round(y*100.0)/100.0 <<" ";
    std::cout << round(z*100.0)/100.0;
}
`
  },
  {
    id: "022",
    title: "Average",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "easy",
    file: "03_Loop_1_Average.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_1_Average.cpp",
    code: `#include <iostream>
#include <cmath>

int main(){
    double num=0,sum=0,amount=0;
    while(num!=-1){
        std::cin >> num;
        if (num != -1) {sum += num; amount++;}
    }
    if (amount != 0)
    {
        sum = sum/amount;
        std::cout << std::round(sum*100)/100;
    }else{std::cout <<"No Data";}

}
`
  },
  {
    id: "023",
    title: "Bisection Log10",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "easy",
    file: "03_Loop_1_Bisection_Log10.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_1_Bisection_Log10.cpp",
    code: `#include <iostream>
#include <cmath>
#include <algorithm> // ต้องรวมไลบรารีนี้เพื่อใช้งาน max

using namespace std;

int main(){
    double L = 0 ,a;
    std::cin >> a;
    double U = a;
    double x = (L+U)/2.0;
    while(abs(a-pow(10.0,x)) > pow(10.0,-10.0)*std::max(a,pow(10.0,x)))
    {
        if (pow(10.0,x)>a)
        {
            U = x;
        }
        if (pow(10.0,x)<a)
        {
            L = x;
        }  
        x = (L+U)/2.0;
    }
    std::cout << x ;
}
`
  },
  {
    id: "024",
    title: "CountWord",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "easy",
    file: "03_Loop_1_CountWord.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_1_CountWord.cpp",
    code: `#include <iostream>
#include <sstream>
#include <string>

int main(){
    std::string c_text, all_text;
    std::getline(std::cin, c_text);
    std::getline(std::cin, all_text);
    
    // เปลี่ยนเครื่องหมายวรรคตอนทั้งหมดใน all_text ให้เป็นช่องว่างก่อน
    for(int i = 0; i < all_text.size(); i++){
        if (all_text[i] == '"' || all_text[i] == '(' || all_text[i] == ')' || 
            all_text[i] == ',' || all_text[i] == '.' || all_text[i] == '\\'') {
            all_text[i] = ' ';
        }
    }
    
    // พอแปลงเป็นช่องว่างแล้ว stringstream จะตัดคำได้เป๊ะ 100%
    std::stringstream ss(all_text);
    std::string word;
    int num = 0;
    
    while(ss >> word){
        if(word == c_text){
            num++;
        }
    }
    
    std::cout << num;
    return 0;
}
`
  },
  {
    id: "025",
    title: "MCQ",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "easy",
    file: "03_Loop_1_MCQ.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_1_MCQ.cpp",
    code: `#include <iostream>

int main(){
    int num=0;
    std::string text1,text2;
    std::getline(std::cin,text1);
    std::getline(std::cin,text2);
    if (text1.size() == text2.size())
    {
        for (int i = 0; i < text1.size(); i++)
        {
            if(text1[i] == text2[i]){
                num += 1;
            }
        }
        std::cout << num;
    }else{
        std::cout << "Incomplete answer";
    }
}
`
  },
  {
    id: "026",
    title: "Parentheses",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "easy",
    file: "03_Loop_1_Parentheses.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_1_Parentheses.cpp",
    code: `#include <iostream>

int main(){
    std::string text;
    std::getline(std::cin,text);
    for (int i = 0; i < text.size(); i++)
    {
        if (text[i] == '('){
            text[i] = '[';
        }else if (text[i] == '['){
            text[i] = '(';
        }else if (text[i] == ')'){
            text[i] = ']';
        }else if (text[i] == ']'){
            text[i] = ')';
        }
    }
    std::cout << text;
    
}
`
  },
  {
    id: "027",
    title: "PrintTriangle",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "easy",
    file: "03_Loop_1_PrintTriangle.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_1_PrintTriangle.cpp",
    code: `#include <iostream>

int main(){
    int x=0,y=0;
    std::cin >> y;
    x = y;
    for(int i=0;i<y;i++){
        for (int j = 0; j < x ; j++)
        {

            if (i+1 == y)
            {
                std::cout << "*"; 
            }else if(j==x-1)
            {
                std::cout << "*"; 
            }else if(j == y-i-1 && i != 0){
                std::cout << "*"; 
            }else{
                std::cout << ".";
            }
        }
        x++;
        std::cout << "\\n";
    }
}
`
  },
  {
    id: "028",
    title: "BirthdayParadox",
    group: "Grader 1.1 · Loop",
    topic: "Loop · Flowchart",
    level: "medium",
    file: "03_Loop_FC_2_BirthdayParadox.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_FC_2_BirthdayParadox.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    float p; cin >> p;
    float k = 1.0, t =1.0;
    bool CHECK = false;
    do{
        if (CHECK)
        {
           k++;
        }
        t = t*(365.0-(k-1)) / 365.0;
        CHECK = true;
    }while(1.0-t < p);
    cout << k ;
}
`
  },
  {
    id: "029",
    title: "CheckPassword",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "medium",
    file: "03_Loop_2_CheckPassword.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_2_CheckPassword.cpp",
    code: `#include <iostream>
using namespace std;

int main()
{
    string TEXT;
    while (cin >> TEXT)
    {
        int COUNT = 0;
        bool BIG = false;
        bool SMALL = false;
        bool NUM = false;
        bool SPEC = false;
        for (char s : TEXT)
        {
            if (s >= 'A' && s <= 'Z')
            {
                BIG = true;
            }
            else if (s >= 'a' && s <= 'z')
            {
                SMALL = true;
            }
            else if (s >= '0' && s <= '9')
            {
                NUM = true;
            }
            else
            {
                SPEC = true;
            }
            COUNT++;
        }

        if (BIG && SMALL && NUM)
        {
            if (COUNT >= 12 && SPEC)
            {
                cout << ">> strong\\n";
            }
            else if (COUNT >= 8)
            {
                cout << ">> weak\\n";
            }
            else
            {
                cout << ">> invalid\\n";
            }
        }
        else
        {
            cout << ">> invalid\\n";
        }
    }
    return 0;
}
`
  },
  {
    id: "030",
    title: "Factorization",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "medium",
    file: "03_Loop_2_Factorization.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_2_Factorization.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    int NUM; cin >> NUM;
    int N=2;
    bool CHECK = false;
    while (true)
    {
        if (NUM%N==0)
        {
            if(CHECK){
                cout << "*";
            }
            CHECK = true;

            cout << N ;
            NUM = NUM/N;
        }else{
            N++;
        }

        if (N > NUM)
        {
            break;
        }   
    }
}
`
  },
  {
    id: "031",
    title: "Remove LongDups",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "medium",
    file: "03_Loop_2_Remove_LongDups.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_2_Remove_LongDups.cpp",
    code: `#include <iostream>
#include <string>
using namespace std;

int main()
{
    string TEXT;
    cin >> TEXT;
    int NUM;
    cin >> NUM;
    int C = 1;

    for (int i = 0; i < TEXT.size(); i++)
    {
        //cout << "index : " << TEXT[i] << " vs " << TEXT[i + 1] << "\\n";
        if (TEXT[i] != TEXT[i + 1])
        {
            //cout << " Anwser : Yes \\n";
            if (C<NUM)
            {
                for (int j = 0; j < C; j++)
                {
                    cout << TEXT[i];
                }
                //cout << "\\n";
            }
            C = 1;
        }
        else
        {
            //cout << " Anwser : No \\n";
            C++;
        }
    }
}
`
  },
  {
    id: "032",
    title: "RLE",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "medium",
    file: "03_Loop_2_RLE.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_2_RLE.cpp",
    code: `#include <iostream>
#include <string>
using namespace std;

int main()
{
    string TEXT; cin >> TEXT;
    int C = 1;

    for (int i = 0; i < TEXT.size(); i++)
    {
        if (TEXT[i] != TEXT[i + 1])
        {
            cout << TEXT[i] << " " << C << " ";
            C = 1;
        }
        else
        {
            C++;
        }
    }
}
`
  },
  {
    id: "033",
    title: "NumberOfDigits",
    group: "Grader 1.1 · Loop",
    topic: "Loop",
    level: "hard",
    file: "03_Loop_3_NumberOfDigits.cpp",
    path: "Grader_1_1/Grader/03_Loop/03_Loop_3_NumberOfDigits.cpp",
    code: `#include <iostream>
#include <string>
using namespace std;

int main(){
    long long M,N; cin >> M >> N;
    long long SUM = 0;
    string TEXT;
    for (int i = M; i <= N; i++)
    {
        TEXT += to_string(i);
    }
    for ( char C : TEXT)
    {
        SUM++;
    }  
    cout << SUM;
}
`
  },
  {
    id: "034",
    title: "MissingDigits Version1",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "easy",
    file: "04_Array_1_MissingDigits_Version1.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_1_MissingDigits_Version1.cpp",
    code: `#include <iostream>
#include <string>
using namespace std;

int main()
{
    int NUM[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    string TEXT;
    string SUM;
    getline(cin, TEXT);
    for (int i = 0; i < TEXT.size(); i++)
    {
        for (int j = 0; j < sizeof(NUM) / 4; j++)
        {
            if (TEXT[i] - '0' == NUM[j])
            {
                NUM[j] = -1;
            }
        }
    }

    for (int i = 0; i < sizeof(NUM) / 4; i++)
    {
        if (NUM[i] != -1)
        {
            SUM += to_string(NUM[i]);
        }
    }

    if (SUM.empty())
    {
        cout << "None" ;
    }else{
        for (int i = 0; i < SUM.size(); i++)
        {
            if (i + 1 == SUM.size())
            {
                cout << SUM[i];
            }
            else
            {
                cout << SUM[i] << ",";
            }
        }
    }
}
`
  },
  {
    id: "035",
    title: "MissingDigits Version2",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "easy",
    file: "04_Array_1_MissingDigits_Version2.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_1_MissingDigits_Version2.cpp",
    code: `#include <iostream>
using namespace std;

int main()
{
    string TEXT;
    getline(cin, TEXT);
    bool SUM[10] = {false};

    //เช็คว่ามีตัว
    for (int i = 0; i < TEXT.size(); i++)
    {
        if (TEXT[i] - '0' >= 0 && TEXT[i] - '0' <= 9)
        {
            int INDEX = TEXT[i] - '0';
            SUM[INDEX] = true;
        }
    }

    bool All_Present = true;
    bool First = true;

    //เช็คว่ามี 0 ไหม 
    for (int i = 0; i < 10; i++)
    {
        if (!SUM[i]) // !SUM[i] == (SUM[i]==false) ยังมี 0 เหลือไหม คือ ยังมีตัวที่ยังไม่โดนเรียกไหม
        { // ตัวที่เข้ามาในเงื่อไขนี้ได้มันจะต้องเป็น false เท่านั้น คือ ตัวที่ยังไม่ถูกใช้
            All_Present = false;
            if (!First)
            {
                cout << ",";
            }
            cout << i ;
            First = false;
            
        }   
    }


    if (All_Present)
    {
        cout << "None";
    }
    return 0;
}
`
  },
  {
    id: "036",
    title: "Moving Average 2D",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "easy",
    file: "04_Array_1_Moving_Average_2D.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_1_Moving_Average_2D.cpp",
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main(){
    int Y,X; cin >> Y >> X;
    double ARRAY[Y][X] = {};
    for (int i = 0; i < Y; i++)
    {
        for (int j = 0; j < X; j++)
        {
            double N; cin >> N;
            ARRAY[i][j] = N;
        } 
    }
    
    int SUM_Y = Y-2 , SUM_X = X-2;
    double SUM_ARRAY[SUM_Y][SUM_X] = {};
    for (int i = 0; i < SUM_Y ; i++)
    {
        for (int j = 0; j < SUM_X; j++)
        {
            SUM_ARRAY[i][j] = (ARRAY[i][j] + ARRAY[i][j+1] + 
            ARRAY[i][j+2] + ARRAY[i+1][j] + ARRAY[i+1][j+1] + 
            ARRAY[i+1][j+2] + ARRAY[i+2][j] +ARRAY[i+2][j+1] + ARRAY[i+2][j+2]) / 9.0;
        }   
    } 
    
    for (int i = 0; i < SUM_Y; i++)
    {
        for (int j = 0; j < SUM_X; j++)
        {
            cout << round(SUM_ARRAY[i][j]*100)/100.0 << " ";
        } 
        cout << "\\n";
    }
}
`
  },
  {
    id: "037",
    title: "Nicknames",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "easy",
    file: "04_Array_1_Nicknames.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_1_Nicknames.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    string NAME[] = {"Robert","William","James","John",
        "Margaret","Edward","Sarah","Andrew","Anthony","Deborah"};
    string NICKNAME[] = {"Dick","Bill","Jim","Jack",
        "Peggy","Ed","Sally","Andy","Tony","Debbie"};

    int NUM; cin >> NUM;
    for (int i = 0; i < NUM; i++)
    {
        string TEXT; cin >> TEXT;
        bool CHECK = false;
        for (int i = 0; i < 10; i++)
        {
            if (TEXT == NAME[i])
            {
                cout << NICKNAME[i] << "\\n";
                CHECK = true;
                break;
            }
            if (TEXT == NICKNAME[i])
            {
                cout << NAME[i] << "\\n";
                CHECK = true;
                break;
            }  
        }
        if(!CHECK)
        {
            cout << "Not found" << "\\n";
        }
    }
}
`
  },
  {
    id: "038",
    title: "Peaks",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "easy",
    file: "04_Array_1_Peaks.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_1_Peaks.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    int NUM; cin >> NUM;
    int ARRAY[NUM] = {};
    for (int i = 0; i < NUM; i++)
    {
        int N; cin >> N;
        ARRAY[i] = N;
    }

    int SUM = 0;
    for (int i = 1; i < NUM-1; i++)
    {
        if (ARRAY[i] > ARRAY[i-1] && ARRAY[i] > ARRAY[i+1])
        {
            SUM++;
        }  
    }

    cout << SUM;
}
`
  },
  {
    id: "039",
    title: "Continued Fraction",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "medium",
    file: "04_Array_2_Continued_Fraction.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_2_Continued_Fraction.cpp",
    code: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main(){
    int N; cin >> N;
    vector<double> NUM(N);
    for (int i = 0; i < N; i++)
    {
        cin >> NUM[i];
    }

    for (int i = 0; i < N; i++)
    {
        double VAL = NUM[i];
        for (int j = i-1; j >= 0; j--)
        {
            VAL = NUM[j] + (1.0/VAL);
        }
        cout << setprecision(10) << VAL << "\\n";
    }
    return 0;
}
`
  },
  {
    id: "040",
    title: "Cut n Shuffle",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "medium",
    file: "04_Array_2_Cut_n_Shuffle.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_2_Cut_n_Shuffle.cpp",
    code: `#include <iostream>
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
`
  },
  {
    id: "041",
    title: "Landing Fee",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "medium",
    file: "04_Array_2_Landing_Fee.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_2_Landing_Fee.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    int N; cin >> N;
    for (int i = 0; i < N; i++)
    {
        /* code */
    }
    
}
`
  },
  {
    id: "042",
    title: "Pancake",
    group: "Grader 1.1 · Array",
    topic: "Array",
    level: "medium",
    file: "04_Array_2_Pancake.cpp",
    path: "Grader_1_1/Grader/04_Array/04_Array_2_Pancake.cpp",
    code: `#include <iostream>
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
`
  },
  {
    id: "043",
    title: "P1",
    group: "Grader 1.1 · Mock Midterm",
    topic: "",
    level: null,
    file: "P1.cpp",
    path: "Grader_1_1/Grader/Mock_Midterm/P1.cpp",
    code: `#include <iostream>
using namespace std;

int main() {
    long long N , d =2;
    cin >> N;
    if (N>=2){
        while (N>1){
            if (d * d > N)
            {
                cout << N << " ";
                break;
            }
            while( N%d == 0)
            {
                N /= d;
                cout << d << " ";
            }
            d += 1;
        }
    }else{
        cout << "No prime factors for numbers less than 2.";
    }
    return 0;
}
`
  },
  {
    id: "044",
    title: "P2",
    group: "Grader 1.1 · Mock Midterm",
    topic: "",
    level: null,
    file: "P2.cpp",
    path: "Grader_1_1/Grader/Mock_Midterm/P2.cpp",
    code: `#include <iostream>
#include <string>
using namespace std;

int main(){
    int Round_A , Round_B ;
    int Sum_A=0,Sum_B=0;
    cin >> Round_A ; cin >> Round_B;
    for (int i = 0; i < Round_A; i++){
        string Text_A;
        cin >> Text_A;
        if (Text_A == "A"){
            if (Sum_A + 11 <= 21)
            {
               Sum_A += 11;
            }else{
               Sum_A += 1; 
            }
            
        }else if (Text_A == "J" || Text_A == "K" || Text_A == "Q" ){
            Sum_A += 10;
        }else if (Text_A == "2"){
            Sum_A += 2;
        }else if (Text_A == "3"){
            Sum_A += 3;
        }else if (Text_A == "4"){
            Sum_A += 4;
        }else if (Text_A == "5"){
            Sum_A += 5;
        }else if (Text_A == "6"){
            Sum_A += 6;
        }else if (Text_A == "7"){
            Sum_A += 7;
        }else if (Text_A == "8"){
            Sum_A += 8;
        }else if (Text_A == "9"){
            Sum_A += 9;
        }else if (Text_A == "10"){
            Sum_A += 10;
        }
        
        // else{
        //     int Num = std::stoi(Text_A);
        //     Sum_A += Num;

        // }
    }


    for (int i = 0; i < Round_B ; i++)
    {
        string Text_B;
        cin >> Text_B;
        if (Text_B == "A"){
            if (Sum_B + 11 <= 21)
            {
                cout << "test" << "\\n";
                Sum_B += 11;
            }else{
               Sum_B += 1; 
            }
        }else if (Text_B == "J" || Text_B == "K" || Text_B == "Q" ){
            Sum_B += 10;
        }else if (Text_B == "2"){
            Sum_B += 2;
        }else if (Text_B == "3"){
            Sum_B += 3;
        }else if (Text_B == "4"){
            Sum_B += 4;
        }else if (Text_B == "5"){
            Sum_B += 5;
        }else if (Text_B == "6"){
            Sum_B += 6;
        }else if (Text_B == "7"){
            Sum_B += 7;
        }else if (Text_B == "8"){
            Sum_B += 8;
        }else if (Text_B == "9"){
            Sum_B += 9;
        }else if (Text_B == "10"){
            Sum_B += 10;
        }
        // else{
        //     int Num = std::stoi(Text_B);
        //     Sum_B += Num;
        // }
    }
    if (Sum_A > Sum_B && Sum_A <= 21)
    {
        cout << "A" << "\\n";
    }else if (Sum_B > Sum_A && Sum_B <= 21)
    {
        cout << "B" << "\\n";
    }else{
        cout << "Draw" << "\\n";
    }
    cout << Sum_A << " " << Sum_B;
    return 0; 
}
`
  },
  {
    id: "045",
    title: "P3",
    group: "Grader 1.1 · Mock Midterm",
    topic: "",
    level: null,
    file: "P3.cpp",
    path: "Grader_1_1/Grader/Mock_Midterm/P3.cpp",
    code: `#include <iostream>
#include <iomanip>
using namespace std;

int main(){
    int M; cin >> M;
    long long irr;
    for (int i = 0; i <= M; i++){
        /* code */
    }
    cout << setprecision(8) << irr << endl;
    return 0; 
}
`
  },
  {
    id: "046",
    title: "Question 1",
    group: "Mock Midterm 2023",
    topic: "",
    level: null,
    file: "1.cpp",
    path: "Grader_1_1/Mock_Midterm_2023/1.cpp",
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int a, b, c;
    cin >> a >> b >> c;
    if (a < 100)
    {
        do
        {
            if (b < c)
            {
                a += pow(b, 2) + pow(c, 2);
                if (a % 10 != 5)
                {
                    if (a % 2 == 0) // เช็คว่าเป็นคู่หรือคี่
                    {
                        b += 1;
                    }
                    else
                    {
                        c -= 1;
                    }
                }
                else
                {
                    break;
                }
            }
            else
            {
                break;
            }
        } while (a / (b * c) <= 20);
    }
    else
    {
        if (a < b)
        {
            if (b < c)
            {
                a = a + 3;
                b = a + c;
                c = b + a;
            }
            else if (a < c)
            {
                a = 2 * a;
                b = a + b;
                c = b + c;
            }
            else
            {
                a = c + a;
                b = 2 * b;
                c = b - a;
            }
        }
        else
        {
            if (c > a)
            {
                a = 3 * b;
                b = c + a;
                c = a + b;
            }
            else if (b > c)
            {
                a = b + c;
                b = 7 * a;
                c = b - a;
            }
            else
            {
                a = c - 5;
                b = a - b;
                c = 3 * b;
            }
        }
    }
    cout << a << " " << b << " " << c;
    return 0;
}
`
  },
  {
    id: "047",
    title: "Question 2",
    group: "Mock Midterm 2023",
    topic: "",
    level: null,
    file: "2.cpp",
    path: "Grader_1_1/Mock_Midterm_2023/2.cpp",
    code: `#include <iostream>
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
`
  },
  {
    id: "048",
    title: "Question 3",
    group: "Mock Midterm 2023",
    topic: "",
    level: null,
    file: "3.cpp",
    path: "Grader_1_1/Mock_Midterm_2023/3.cpp",
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main(){
    double SUM_A = 0, SUM_B = 0 , SUM_ALL = 0 ;
    int COUNT ; cin >> COUNT;
    for (int i = 0; i < COUNT; i++)
    {
        string TEXT ; cin >> TEXT ;
        double NUM = 0 ; cin >> NUM;
        if (TEXT == "A")
        {
            SUM_A += 4.0 * NUM;
        }else if (TEXT == "B+")
        {
            SUM_A += 3.5 * NUM;
        }else if (TEXT == "B")
        {
            SUM_A += 3.0 * NUM;
        }else if (TEXT == "C+")
        {
            SUM_A += 2.5 * NUM;
        }else if (TEXT == "C")
        {
            SUM_A += 2.0 * NUM;
        }else if (TEXT == "D+")
        {
            SUM_A += 1.5 * NUM;
        }else if (TEXT == "D")
        {
            SUM_A += 1.0 * NUM;
        }else if (TEXT == "F")
        {
            SUM_A += 0.0 * NUM;
        }
        
        SUM_B += NUM;
    }

    cout << round((SUM_A / SUM_B)*100)/100 ; 
}
`
  },
  {
    id: "049",
    title: "Question 4",
    group: "Mock Midterm 2023",
    topic: "",
    level: null,
    file: "4.cpp",
    path: "Grader_1_1/Mock_Midterm_2023/4.cpp",
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main(){
    int COUNT; cin >> COUNT;
    for (int i = 0; i < COUNT; i++)
    {
        int A,N,B,M; cin >> A >> N >> B >> M;
        long long SUM = 0;
        for (int i = 0; i < N; i++)
        {
            SUM = (SUM*10 + A);
        }
        for (int i = 0; i < M; i++)
        {
            SUM = SUM*10 + B;
        }
        bool CHECK = true;
        for (long long i = 2; i < sqrt(SUM); i++)
        {
            if (SUM%i==0)
            {
                CHECK = false;
                break;
            }
        }
        if (CHECK)
        {
            cout << "YES\\n" ;
        }else{
            cout << "NO\\n" ;
        }   
    }
}
`
  },
  {
    id: "050",
    title: "Question 5",
    group: "Mock Midterm 2023",
    topic: "",
    level: null,
    file: "5.cpp",
    path: "Grader_1_1/Mock_Midterm_2023/5.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    int COUNT=0; cin >> COUNT;
    int ARRAY[COUNT][2] = {};
    for (int i = 0; i < COUNT; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cin >> ARRAY[i][j];
        }    
    }

    int START = ARRAY[0][0];
    int STOP = ARRAY[0][1];

    for (int i = 0; i < COUNT; i++)
    {
        
            if (START > ARRAY[i][0])
            {
                START = ARRAY[i][0];
            }
            if (STOP < ARRAY[i][1])
            {
                STOP = ARRAY[i][1];
            } 
    }

    // cout << "START : " << START << "\\n";
    // cout << "STOP : " << STOP << "\\n";

    int SUM_ARRAY[STOP-START]= {0,0,0};

    for (int i = START; i < STOP; i++)
    {
        for (int j = 0; j < COUNT; j++)
        {
            if (ARRAY[j][0] <= i && ARRAY[j][1] >= i+1)
            {
                SUM_ARRAY[i - START] += 1;
            }     
        }  
    }

    int max_users = 0;
    for (int i = 0; i < STOP-START; i++)
    {
        if (SUM_ARRAY[i] > max_users)
        {
            max_users = SUM_ARRAY[i];
        }
    }
    cout << max_users << endl;


    bool CHECK = false
    for (int i = 0; i < count; i++)
    {
        if (CHECK)
        {
            cout << ",";
        }
        cout << TEXT;
        CHECK = true;
    }
    
}
`
  },
  {
    id: "051",
    title: "Question 1",
    group: "Mock Midterm · CEDT Grader",
    topic: "",
    level: null,
    file: "1.cpp",
    path: "Grader_1_1/Mock_Midterm_CEDTGrader/1.cpp",
    code: `#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main()
{
    double a, b, c, l, r, x , n;
    std::cin >> a >> b >> c >> n;
        while (a <= b)
        {
            if (b > c)
            {
                a = exp(b/a) + (a/b); 
                b = b + (c/b);
            }
            else if (a > c)
            {
                b = b * sin(b); 
                c = c - log(a);
            }else{
                c = c - (b/a);
                a = (1/cos(b)) + (a/b); 
            }
        }
        a = abs(a); 
        if (a < 1.0)
        {
            a = (1.0 / a);
        }
            l = 0.0;
            r = a;
        do
        {
            x = (l + r) / 2.0;
            if (pow(x, n) < a)
            {
                l = x;
            }
            else
            {
                r = x;
            }
        } while (r-l  >= pow(10.0, -5.0));
        cout << fixed << setprecision(5);
        cout << "a: " << a << "\\n";
        cout << "b: " << b << "\\n";
        cout << "c: " << c << "\\n";
        cout << "x: " << x << "\\n";
        return 0;
}
`
  },
  {
    id: "052",
    title: "Question 2",
    group: "Mock Midterm · CEDT Grader",
    topic: "",
    level: null,
    file: "2.cpp",
    path: "Grader_1_1/Mock_Midterm_CEDTGrader/2.cpp",
    code: `#include <iostream>
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
        cout << (sum_x + sum_y) << "\\n";
    }else if (m=='-')
    {
        cout << (sum_x -  sum_y) << "\\n";
    }else if (m=='*')
    {
        cout <<( sum_x * sum_y) << "\\n";
    }else if(m=='/'){
        cout << (sum_x / sum_y) << "\\n";
    }
    
}
`
  },
  {
    id: "053",
    title: "Question 3",
    group: "Mock Midterm · CEDT Grader",
    topic: "",
    level: null,
    file: "3.cpp",
    path: "Grader_1_1/Mock_Midterm_CEDTGrader/3.cpp",
    code: `#include <iostream>
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
            //     cout << SUM[i] << "\\n";
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
            cout << "The rose is dead" << "\\n";
            break;
            //SUM.push_back("The rose is dead");
            //CHECK = true;
        }else if ((W > BLOOM && N > BLOOM && P > BLOOM && K > BLOOM) && (W <= MAX && N <= MAX && P <= MAX && K <= MAX)){
            cout << "The rose is blooming" << "\\n";
            //SUM.push_back("The rose is blooming");
        }else if((W<=MIN || N<=MIN || P<=MIN || K<=MIN) && (W <= MAX && N <= MAX && P<= MAX && K <= MAX)){
            cout << "The rose is wilted" << "\\n";
            //SUM.push_back("The rose is wilted");
        }else if (W > MIN && N > MIN && P > MIN && K > MIN){
            cout << "Not bloom yet" << "\\n";
            //SUM.push_back("Not bloom yet");
        }
        W *= 0.7;
        N *= 0.7;
        P *= 0.7;
        K *= 0.7;
    }
}
`
  },
  {
    id: "054",
    title: "Question 4",
    group: "Mock Midterm · CEDT Grader",
    topic: "",
    level: null,
    file: "4.cpp",
    path: "Grader_1_1/Mock_Midterm_CEDTGrader/4.cpp",
    code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int N;
    vector<int> H = {};
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        int NUM;
        cin >> NUM;
        H.push_back(NUM);
    }

    for (int i = 0; i < N; i++)
    {
        cout << H[i] << ",";
    }
    
}
`
  },
  {
    id: "055",
    title: "Calculator",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Calculator.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Calculator.cpp",
    code: `#define _USE_MATH_DEFINES
#include <iostream>
#include <cmath> //ใช้เรียกฟังชันก์ math tan() และ M_PI
using namespace std;

int main(){
    double a,b,c,d,e;
    a = M_PI*M_PI;
    b = 1; // tan(45)คือถ้าเขียนใน code มันจะได้ 1.6198 ซึ่งมันไม่ใช่สิ่งที่ควรเป็น สิ่งที่ควรคือ 1
    c = pow(4.3,2.0/7.0);
    d = pow(11.0,1.0/3.0);
    e = (8*7*6*5*4*3*2*1)/(pow(3,4)*pow(2,3));
    cout << (a-(b*c))/(d+e);
    return 0;
}

//สิ่งที่พลาด
//1.คือ ลำดับการคำนวณโค้ด วิธีแก้คือ แยกเป็นขึ้น
//2.คือ การ pow() เราควรใส่ .0 หลังเลขเพราะ ถ้าเราใส่แค่ เช่น 2 มันจะไม่มองเป็น double แต่จะมองเห็น int ซึ่งทำให้การคำนวณมันเพื้ยน วิธีแก้คือ ใส่ .0 หลังเลข เช่น 2.0
//3.คือ tan() เหมือนข้อนี้มันจะเป็น tan(45) ถ้าเขียนตรงๆ มันจะมองเป็น เรเดียน ทำให้ค่าที่ออกมามันจะเป็น 1.6198 ไม่ใช่ 1 ที่มันควรจะเป็น วิธีแก้ คือ ใส่ 1 ตรงๆ 56565
`
  },
  {
    id: "056",
    title: "Decode",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Decode.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Decode.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    char text;
    int num;
    cin >> text >> num;
    int ascii = static_cast<int>(text);
    text = static_cast<char>(ascii + num);
    ascii = static_cast<int>(text);
    cout << text << endl << ascii ;
    return 0;
}
`
  },
  {
    id: "057",
    title: "Emergency Signal",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Emergency Signal.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Emergency Signal.cpp",
    code: `#include <iostream>

int main(){
    int D;
    std::cin >> D;
    if(D<50){
    }else{
        std::cout << "DANGER\\n" ;
    }
    return 0;
}
`
  },
  {
    id: "058",
    title: "Grading",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Grading.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Grading.cpp",
    code: `#include <iostream>

int main(){
    double s;
    std::cin >> s; 
    if (s<0 || s>100)
    {
        std::cout << "Invalid Score" << std::endl;
    }else if (s>=80)
    {
        std::cout << "A" << std::endl;
    }else if (s>=70)
    {
        std::cout << "B" << std::endl;
    }else if (s>=60)
    {
        std::cout << "C" << std::endl;
    }else if (s>=50)
    {
        std::cout << "D" << std::endl;
    }else{
        std::cout << "F" << std::endl;
    }
    return 0; 
}
`
  },
  {
    id: "059",
    title: "Neural Network 101",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Neural Network 101.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Neural Network 101.cpp",
    code: `#include <iostream>
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
    cout << "h1 = " << h1 << "\\n" ;
    cout << "h2 = " << h2 << "\\n" ;
    cout << "h3 = " << h3 << "\\n" ;
    cout << "probability = " << probability << "\\n" ;
    return 0;
}
`
  },
  {
    id: "060",
    title: "Return By Death",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Return By Death.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Return By Death.cpp",
    code: `#include <iostream>

int main(){
    int Me,K,D,Boss,i=0;
    std::cin >> Me >> K >> D >> Boss ;
    while (Me<Boss)
    {
        Me = Me + (K-(i*D));
        i++;
        if(Me<=0){
            std::cout << "Give Up" << std::endl;
            return 0;
        }
    }
    std::cout << i << std::endl;
}
`
  },
  {
    id: "061",
    title: "Space GOD",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Space GOD.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Space GOD.cpp",
    code: `#include <iostream>
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
`
  },
  {
    id: "062",
    title: "Spherical Chicken",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Spherical Chicken.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Spherical Chicken.cpp",
    code: `#define _USE_MATH_DEFINES
#include <cmath>
#include <iostream>
#include <iomanip>
using namespace std;

int main(){
    double x,P,r,V;
    cin >> x;
    P = 6+(7.0*(log(pow(x+1,1.2))));
    r = P/2.0;
    V = (4.0/3.0)*M_PI*(pow(r,3));
    cout << fixed << setprecision(2);
    cout << V << endl;
    return 0;
}

//จุดพลาด (4/3) คือ การเอา 4/3 มันคือ การเอา integer มาหารกันผลลัพท์มันจะตัดเศษออกหมด 
// เช่น 4/3 = 1 ไม่ใช่ 1.333 ซึ่งมันจะทำให้เกิดการทำควณสูตรผิดพลาดได้
// วิธีแก้คือ ใส่ .0 หลังตัวเลข เพื่อเปลี่ยน int เป็น double
//เช่นแก้ 3 เป็น 3.0
`
  },
  {
    id: "063",
    title: "System Connection",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "System Connection.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/System Connection.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    int C;
    cin >> C;
    if(C==101){
        cout << "CONNECTED\\n"; 
    }else{
        cout << "ACCESS DENIED\\n";
    }
    return 0;
}
`
  },
  {
    id: "064",
    title: "The Neural Activation",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "The Neural Activation.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/The Neural Activation.cpp",
    code: `#include <iostream>
#include <iomanip>

int main(){
    double X;
    std::cin >> X; 
    std::cout << std::fixed << std::setprecision(2);
    if (X<0.00)
    {
        std::cout << "Activated Signal: 0.00" << std::endl;
    }else{
        std::cout << "Activated Signal: "<< X << std::endl;
    }
}
`
  },
  {
    id: "065",
    title: "Time Traveler",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Time Traveler.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Time Traveler.cpp",
    code: `#define _USE_MATH_DEFINES //ใช้ในการเปิดใช้งานพวกค่าคงที่
#include <iostream>
#include <cmath>

using namespace std;
int main(){
    long long a,b,c;
    cin >> a >> b >> c;
    long long x2 = ((-(b))+sqrt(pow(b,2)-(4*a*c)))/2*a;
    long long x1 = ((-(b))-sqrt(pow(b,2)-(4*a*c)))/2*a;
    if(x1<x2){
        int x;
        x = x2;
        x2 = x1;
        x1 = x;
    }
    //cout << "----" <<endl << x1 << endl << x2 << endl;
    long long F = pow(x1+(5*x2),2);
    long long E = (7*x1+x2)*(3*x1+x2);
    long long S = ((F%100001)*(E%100001))%100001;
    long long Final = (S+100001)%100001;
    cout <<endl<< F << endl<< E <<endl<< Final;
    return 0;
}
`
  },
  {
    id: "066",
    title: "TriangleKrub",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "TriangleKrub.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/TriangleKrub.cpp",
    code: `#define _USE_MATH_DEFINES //ใช้ในการเปิดใช้งานพวกค่าคงที่
#include <iostream>
#include <iomanip>
#include <cmath>

int main(){

    //ส่วน กำหนดตัวแปร
    double a,b,c,S,area,c_a,c_b,c_c,c_s;

    //ส่วน input
    std::cin >> a >> b >> c;

    //ส่วน คำนวณ
    S = (a+b+c)/2;
    area = std::sqrt(S*(S-a)*(S-b)*(S-c));
    c_a = acos((pow(b,2)+pow(c,2)-pow(a,2))/(2*b*c))*(180.0 / M_PI);
    c_b = acos((pow(a,2)+pow(c,2)-pow(b,2))/(2*a*c))*(180.0 / M_PI);
    c_c = acos((pow(a,2)+pow(b,2)-pow(c,2))/(2*a*b))*(180.0 / M_PI);

    if(c_a<=c_b&&c_a<=c_c){
        c_s = c_a;
    }else if(c_b<=c_a&&c_b<=c_c){
        c_s = c_b;
    }else {
        c_s = c_c;
    }

    //ส่วน output
    std::cout << std::fixed << std::setprecision(4);
    std::cout << a+b+c << std::endl<< area << std::endl <<c_s;
    return 0;
}
`
  },
  {
    id: "067",
    title: "Variable & Expression",
    group: "CEDT Ovenbreak 2026 · Practice",
    topic: "Practice",
    level: null,
    file: "Variable & Expression.cpp",
    path: "CEDT_Ovenbreak_2026/Practice_path/Variable & Expression.cpp",
    code: `#include <iostream>

int main(){
    int n;
    std::cin >> n;
    if (n%5==1)
    {
        std::cout << "+\\n" << std::endl;
    }else if (n%5==2)
    {
        std::cout << "-\\n" << std::endl;
    }else if (n%5==3)
    {
        std::cout << "*\\n" << std::endl;
    }else if (n%5==4)
    {
        std::cout << "/\\n" << std::endl;
    }else if (n%5==0)
    {
        int ascii_code = (n/5)%26;
        if (ascii_code==0)
        {
            ascii_code = 26;
        }
        std::cout << static_cast<char>(ascii_code+64);
    }
}
`
  },
  {
    id: "068",
    title: "ChessBattleAdvanced",
    group: "CEDT Ovenbreak 2026 · Exam",
    topic: "Exam",
    level: null,
    file: "ChessBattleAdvanced.cpp",
    path: "CEDT_Ovenbreak_2026/Exam_path/ChessBattleAdvanced.cpp",
    code: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int table[8][8]; 

bool valid(int x,int y){
    if(x>=0&&x<=7&&y>=0&&y<=7){
        if (table[x][y]<65)
        {
            return true;
        }
    }
    return false;
}


int main(){
    //ส่วน กำหนนดตัวแปร
    int N = 0;
    cin >> N ;
    
   string chess[20][2];
    //ส่วน input
    
    // รับข้อมูลเข้าตาราง
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j<2; j++)
        {
            cin >> chess[i][j];
        }
    }

    for (int i = 0; i < 8; i++)
    {
       for (int j = 0; j < 8; j++)
       {
            table[i][j] = 0;
       }
    }

    //-ส่วน ระบุตัว chess ว่าอยู่ตรงไหนของตารางบ้าง
    for (int i = 0; i < N; i++)
    {
        string box = chess[i][1]; // C4
        char a[2];
        int x=0,y=0;
        for(int i = 0; i < 2; i++)
        {
            a[i] = box[i];//C
            int asciiValue = static_cast<int>(a[i]); // แปลง char เป็น int C->67
            if (asciiValue>=65&&asciiValue<=72)
            {
                y = asciiValue - 65;
            }else
            if (asciiValue>=49&&asciiValue<=56)
            {
                x =56-asciiValue;
            } 
        }
        table[x][y] =  static_cast<int>(chess[i][0][0]);
    }

    //-ส่วน ระบุว่าช่องนั้นมีการเดินของ chess ไหม
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            //1.P
            if(table[i][j]=='P'){
                if (valid(i-1,j-1)==true)
                {
                    table[i-1][j-1] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    table[i-1][j+1] +=1;
                }
            }
            //2.N
            if (table[i][j]=='N')
            {
                if (valid(i-2,j-1)==true)
                {
                   table[i-2][j-1] +=1; 
                }
                if (valid(i-2,j-1)==true)
                {
                   table[i-2][j+1] +=1; 
                }
                if (valid(i-1,j+2)==true)
                {
                   table[i-1][j+2] +=1; 
                }
                if (valid(i-1,j-2)==true)
                {
                   table[i-1][j-2] +=1; 
                }
                if (valid(i+1,j-2)==true)
                {
                   table[i+1][j-2] +=1; 
                }
                if (valid(i+2,j-1)==true)
                {
                   table[i+2][j-1] +=1; 
                }

                if (valid(i+2,j+1)==true)
                {
                   table[i+2][j+1] +=1; 
                }
                if (valid(i+1,j+2)==true)
                {
                   table[i+1][j+2] +=1; 
                }
            }
            //3.K
            if (table[i][j]=='K'){
                if (valid(i-1,j-1)==true)
                {
                    table[i-1][j-1] +=1;
                }
                if (valid(i-1,j)==true)
                {
                    table[i-1][j] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    table[i-1][j+1] +=1;
                }
                if (valid(i,j-1)==true)
                {
                    table[i][j-1] +=1;
                }
                if (valid(i,j+1)==true)
                {
                    table[i][j+1] +=1;
                }
                if (valid(i+1,j-1)==true)
                {
                    table[i+1][j-1] +=1;
                }
                if (valid(i+1,j)==true)
                {
                    table[i+1][j] +=1;
                }
                if (valid(i+1,j+1)==true)
                {
                    table[i+1][j+1] +=1;
                }
            }
            //4.B
            if (table[i][j]=='B'){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    table[x][y] +=1;
                }
            }
            //5.R
            if (table[i][j]=='R'){
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    table[i][y] +=1;
                }
            }
            //6.Q
            if (table[i][j]=='Q'){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    table[x][y] +=1;
                }
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    table[i][y] +=1;
                }
            }
            
        }
        
    }
    //ส่วน output
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            if(table[i][j] == 0)
            {
                cout << "." << " ";
            }else
            if (table[i][j] >= 65)
            {
                cout << static_cast<char>(table[i][j]) << " ";
            }
            else{
                cout << (table[i][j]) << " ";
            }
            //cout << table[i][j] << " ";
        }
        cout << "\\n";
    }
    return 0;
}
`
  },
  {
    id: "069",
    title: "ChessBattleAdvanced 2",
    group: "CEDT Ovenbreak 2026 · Exam",
    topic: "Exam",
    level: null,
    file: "ChessBattleAdvanced_2.cpp",
    path: "CEDT_Ovenbreak_2026/Exam_path/ChessBattleAdvanced_2.cpp",
    code: `#include <iostream>
#include <vector>

using namespace std;


// ตารางหมากรุกสุทธิ
string Sum_Table[8][8];
int Num_Table[8][8];

bool valid(int x,int y){
    if(x>=0&&x<=7&&y>=0&&y<=7)
    {//เช็คว่าหลุดตารางหมากรุกสุทธิยัง
        if(Sum_Table[x][y]!="P"&& //เช็คว่ามีหมากไหม โดนถ้ามี แค่ อันเดียก็ห้ามทุกกรณี คือต้องไม่มีเหลือ
            Sum_Table[x][y]!="N"&&
            Sum_Table[x][y]!="K"&&
            Sum_Table[x][y]!="B"&&
            Sum_Table[x][y]!="R"&&
            Sum_Table[x][y]!="Q")
        {
            return true;
        }
    }
    return false;
}

int main(){
    //Sum_Table[8][8]ส่วน ทำให้ทุกช่องเป็น "."
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            Sum_Table[i][j] = ".";
        }
    }
    //Num_Table[8][8]ส่วน ทำให้ทุกช่องเป็น 0
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            Num_Table[i][j] = 0;
        }
    }

    // array 3 ส่วนคือ 1.รับinput In_Table 2.ตารางสุทธิ Sum_Table  3.ตารางนับเลขว่าเดินได้เท่าไหร่ Num_Table

    int N=0;
    cin >> N;
    vector<vector<string>> In_Table(N,vector<string>(2));
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cin >> In_Table[i][j];
        }
    }

    // ส่วน วิเคราะห์ตำแหน่งที่หมารุกต้องอยู่
    for (int i = 0; i < N; i++)
    {
        string box = In_Table[i][1];
        // char a[2];
        int x=0,y=0;
        for (int j = 0; j < 2; j++)
        {
            // cout << box[j] << ",";
            int asciiValue = static_cast<int>(box[j]);
            if (asciiValue>=65&&asciiValue<=72)
            {
                y = asciiValue - 65;
            }else
            if (asciiValue>=49&&asciiValue<=56)
            {
                x =56-asciiValue;
            } 
        }
        Sum_Table[x][y] = In_Table[i][0];
    }

    //-ส่วน ระบุว่าช่องนั้นมีการเดินของ chess ไหม
    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            //1.P
            if(Sum_Table[i][j]=="P"){
                if (valid(i-1,j-1)==true)
                {
                    Num_Table[i-1][j-1] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    Num_Table[i-1][j+1] +=1;
                }

            }
            //2.N
            if (Sum_Table[i][j]=="N")
            {
                if (valid(i-2,j-1)==true)
                {
                   Num_Table[i-2][j-1] +=1; 
                }
                if (valid(i-2,j+1)==true)
                {
                   Num_Table[i-2][j+1] +=1; 
                }
                if (valid(i-1,j+2)==true)
                {
                   Num_Table[i-1][j+2] +=1; 
                }
                if (valid(i-1,j-2)==true)
                {
                   Num_Table[i-1][j-2] +=1; 
                }
                if (valid(i+1,j-2)==true)
                {
                   Num_Table[i+1][j-2] +=1; 
                }
                if (valid(i+2,j-1)==true)
                {
                   Num_Table[i+2][j-1] +=1; 
                }

                if (valid(i+2,j+1)==true)
                {
                   Num_Table[i+2][j+1] +=1; 
                }
                if (valid(i+1,j+2)==true)
                {
                   Num_Table[i+1][j+2] +=1; 
                }
            }
            //3.K
            if (Sum_Table[i][j]=="K"){
                if (valid(i-1,j-1)==true)
                {
                    Num_Table[i-1][j-1] +=1;
                }
                if (valid(i-1,j)==true)
                {
                    Num_Table[i-1][j] +=1;
                }
                if (valid(i-1,j+1)==true)
                {
                    Num_Table[i-1][j+1] +=1;
                }
                if (valid(i,j-1)==true)
                {
                    Num_Table[i][j-1] +=1;
                }
                if (valid(i,j+1)==true)
                {
                    Num_Table[i][j+1] +=1;
                }
                if (valid(i+1,j-1)==true)
                {
                    Num_Table[i+1][j-1] +=1;
                }
                if (valid(i+1,j)==true)
                {
                    Num_Table[i+1][j] +=1;
                }
                if (valid(i+1,j+1)==true)
                {
                    Num_Table[i+1][j+1] +=1;
                }
            }
            //4.B
            if (Sum_Table[i][j]=="B"){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    Num_Table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    Num_Table[x][y] +=1;
                }
            }
            //5.R
            if (Sum_Table[i][j]=="R"){
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    Num_Table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    Num_Table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    Num_Table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    Num_Table[i][y] +=1;
                }
            }
            //6.Q
            if (Sum_Table[i][j]=="Q"){
                for (int x = i-1,y = j-1; valid(x,y)==true; x--,y--)
                {
                    Num_Table[x][y] +=1;
                } 
                for (int x = i+1,y = j+1; valid(x,y)==true; x++,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i-1,y = j+1; valid(x,y)==true; x--,y++)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i+1,y = j-1; valid(x,y)==true; x++,y--)
                {
                    Num_Table[x][y] +=1;
                }
                for (int x = i-1; valid(x,j)==true; x--)
                {
                    Num_Table[x][j] +=1;
                }
                for (int x = i+1; valid(x,j)==true; x++)
                {
                    Num_Table[x][j] +=1;
                }
                for (int y = j-1; valid(i,y)==true; y--)
                {
                    Num_Table[i][y] +=1;
                }
                for (int y = j+1; valid(i,y)==true; y++)
                {
                    Num_Table[i][y] +=1;
                }
            } 
        }
        
    }

    for(int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            if (Sum_Table[i][j]=="."&&Num_Table[i][j]>0)
            {
                cout << Num_Table[i][j] << " ";
            }else{
                cout << Sum_Table[i][j] << " ";
            }
        }
        cout << "\\n";
    }

    return 0;
}
`
  },
  {
    id: "070",
    title: "DomainExpansion",
    group: "CEDT Ovenbreak 2026 · Exam",
    topic: "Exam",
    level: null,
    file: "DomainExpansion.cpp",
    path: "CEDT_Ovenbreak_2026/Exam_path/DomainExpansion.cpp",
    code: `#include <iostream>
#include <math.h>
using namespace std;

int main(){
    //path - รับ input
    double X[2],Y[2],R[2];
    for (int i = 0; i < 2; i++)
    {
        cin >> X[i] >> Y[i] >> R[i] ;
    }

    //path - ระยะห่างระหว่างสองจุด
    double x = pow(X[0]-X[1],2);
    double y = pow(Y[0]-Y[1],2);
    double D = pow(x+y,1.0/2.0);

    // path เปรียบเทียบ
    if (D==0 && R[0]==R[1])
    {
        cout << "infinity\\n" << "yes";
    }else
    if (D<abs(R[0]-R[1]))
    {
        cout << "0\\n" << "yes";
    }else
    if (D==abs(R[0]-R[1]))
    {
        cout << "1\\n" << "yes";
    }else
    if (R[0]+R[1]>D)
    {
        cout << "2\\n" << "yes";
    }else
    if (R[0]+R[1]==D)
    {
        cout << "1\\n" << "no";
    }else
    if (R[0]+R[1]<D)
    {
        cout << "0\\n"  << "no";
    }
    return 0;   
}
`
  },
  {
    id: "071",
    title: "Flowchart",
    group: "CEDT Ovenbreak 2026 · Exam",
    topic: "Exam",
    level: null,
    file: "Flowchart.cpp",
    path: "CEDT_Ovenbreak_2026/Exam_path/Flowchart.cpp",
    code: `#include <iostream>

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
    std::cout << A << "\\n" << B << "\\n" << C ;
    return 0;
}
`
  },
  {
    id: "072",
    title: "Hanayamata",
    group: "CEDT Ovenbreak 2026 · Exam",
    topic: "Exam",
    level: null,
    file: "Hanayamata.cpp",
    path: "CEDT_Ovenbreak_2026/Exam_path/Hanayamata.cpp",
    code: `#include <iostream>
using namespace std;

int main(){
    int n;
    cin >> n;
    int a[n];
    // for (int i = 0; i < n; i++)
    // {
    //     cin >> a[i];
    // }
    // for (int i = 0; i < n; i++)
    // {
    //     cout << a[i] << " ";
    // }
    return 0;
}
`
  }
];
