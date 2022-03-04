num_1 = input("Ingrese primer numero: ")
num_1 = int(num_1)

num_2 = input("Ingrese segundo numero: ")
num_2 = int(num_2)

operacion = input("que operacion quiere aplicar? (suma, resta, multiplicacion, division) ")

if operacion == 'suma':
    print("Resultado de la suma: ", num_1 + num_2) ## si se quiere restar num_2 - num_1, aplicar suma con num_1 negativo
elif operacion == 'resta':
    print("Resultado de la resta: ", num_1 - num_2)
elif operacion == 'division':
    print("Resultado de la division: ", num_1/num_2)
elif operacion == 'multiplicacion':
    print("Resultado de la multiplicacion: ", num_1 * num_2)
else:
    print("operacion no valida")
