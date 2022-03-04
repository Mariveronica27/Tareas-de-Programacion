
#include <iostream>

using namespace std;

int main()
{
    int number1;
    cout<<"Ingrese primer numero: ";
    cin>>number1;
    
    int number2;
    cout<< "Ingrese segundo numero: ";
    cin>>number2;
    
    int operacion;
    cout<<"=========Calculadora=========="<<endl;
    cout<<"===        [1]-Suma        ==="<<endl;
    cout<<"===       [2]-Resta        ==="<<endl;
    cout<<"===   [3]-multiplicacion   ==="<<endl;
    cout<<"===      [4]-division      ==="<<endl;
    
    cout<<"Ingrese operacion a realizar(seleccione un numero del 1 al 4 correspondiente a lo que desea): ";
    cin>>operacion;
    
    switch (operacion){
        
        case 1: {
            cout << "Resultado de suma: " << (number1 + number2) << endl;
            break;
        }
        
        case 2: {
            cout << "Resultado de resta: " << (number1 - number2) << endl;
            break;
        }
        
        case 3: {
            cout << "Resultado de multiplicacion: " << (number1 * number2) << endl;
            break;
        }
        
        case 4: {
            cout << "Resultado de division: " << (number1 / number2) << endl;
            break;
        }
        default: {
            cout << "No se ha seleccionado una operacion posible " << endl;
            break;
        }
    }
  
    
    cin.get();
    return 0;
}

