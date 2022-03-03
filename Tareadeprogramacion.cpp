/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
   int number1;
   int number2;
   
   cout << "ingrese el primer numero : " ;
   cin >> number1;
   
   cout << "ingrese el segundo numero : " ;
   cin >> number2;
   
   cout << "Resultado de suma: " << (number1 + number2) << endl;
   cout << "Resultado de resta: " << (number1 - number2) << endl;
   cout << "Resultado de multiplicacion: " << (number1 * number2) << endl;
   cout << "Resultado de division: " << (number1 / number2) << endl;
   cout << "Resultado de comparacion: " << (number1 == number2) << endl;
   cout << "Resultado de si number1 es mayor: " << (number1 > number2) << endl;
   //verdadero si da 1
   //falso si da 0

    return 0;
}
