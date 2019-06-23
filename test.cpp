#include <iostream>

using namespace std;

int IdNumber;
int ItemsSold;
int ItemsValue;
int ITEM_MIN=100;
int QUIT = -1;
string ID_PROMPT = "Enter an ID number or -1 to quit>>";

void houseKeeping(){
    cout << ID_PROMPT<<endl;
    // getline(cin,IdNumber,'\n');
    cin >> IdNumber;
    // cin.getline ();
    return;
}

void detailLoop(){
    cout << "Enter items sold and total value of items>>";
    // getline(cin,ItemsSold,'\n');
    // getline(cin,ItemsValue,'\n');
    cin >> ItemsSold >> ItemsValue;
    cin.ignore();

    if(ItemsSold>ITEM_MIN){
        cout<< IdNumber;
    }
    cout<<ID_PROMPT;
    // getline(cin,IdNumber,'\n');
    cin>>IdNumber;
    cin.ignore();
    return;
}

void finish(){
    cout<< "End of Program";
    return;
}

int main()
{
   houseKeeping();
   for(;;){
       if(IdNumber == -1){
           finish();
           break;
       }
       else
       detailLoop();
   }
 
   return 0;
}

    
