reprovados = []

with open("ciencia-da-computacao/01/02/file.txt", "r") as file:
    for line in file:
        name, grade = line.split()
        if float(grade) < 6:
            reprovados.append(name)
    print(reprovados)
