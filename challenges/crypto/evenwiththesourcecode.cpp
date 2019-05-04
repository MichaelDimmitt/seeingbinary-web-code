#include <iostream>
#include <ctime>
#include <stdlib.h>
#include <fstream>
#include <string>
#include <sstream>



using namespace std;

int main(int argc, char *argv[])
{

    if(argc < 4 || argc > 5)
    {
        cout<<"A very secure encryption program which uses a random generated secret. impervious to someone seeing the key in ~/.bash_history!"<<endl;
        cout<<"usage:\n\t encryption: ./unbreakable infile outfile key\n\t decryption: ./unbreakable infile outfile key secret"<<endl;
        return -1;
    }

    std::time_t t = std::time(0); //get epoch time 
    long int time = static_cast<long int>(t); //cast to long int
    
    ifstream input;
    input.open(argv[1]);
    ofstream output;
    output.open(argv[2], ios::trunc);


    //seed the random number generator for security!!!
    srand(time);
    int secret = rand();
    

    string line; //string to hold each line of input.
    int i = 0; //itterator for moving accross the key.

    //encryption
    if(argc == 4)
    {
        string key = string(argv[3]);

        while( getline(input,line) )
        {
            cout<<"origional: "<<line<<endl;
            //generate the xor encryption value.
            for(int j = 0; j < line.length(); j++)
            {
                char encryptor = static_cast<char> ( key[(i++ % key.length())] ^ secret );
                cout<<( static_cast<char>(line[j] ^ encryptor));
                output<<( static_cast<char>(line[j] ^ encryptor));
            }
            cout<<"\n";
            output<<"\n";
        }


        cout<<"\n\n\n IMPORTANT: THIS IS YOUR ENCRYPTION SECRET!\n\t"<<secret<<endl<<endl;
    }

    //decryption
    if(argc == 5)
    {
        string key = string(argv[3]);
        std::istringstream secret_string(argv[4]);

        secret_string >> secret; //convert cmd arg to int.

        while( getline(input,line) )
        {
            cout<<"origional: "<<line<<endl;
            //generate the xor encryption value.
            for(int j = 0; j < line.length(); j++)
            {
                char encryptor = static_cast<char> ( key[(i++ % key.length())] ^ secret );
                cout<<( static_cast<char>(line[j] ^ encryptor));
                output<<( static_cast<char>(line[j] ^ encryptor));
            }
            cout<<"\n";
            output<<"\n";
        }
    }

    return 0;
}
