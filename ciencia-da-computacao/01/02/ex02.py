valor = input("Digite um valor: ")

valor_array = valor.split(",")

sum = 0
for i in valor_array:
    if not i.isnumeric():
        print("O valor digitado não é um número")
    else:
        sum += int(i)

print(f"A soma dos dígitos é: {sum}")