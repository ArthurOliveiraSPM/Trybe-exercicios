lista = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(lista):
    return max(lista, key=len)


print(maior_nome(lista))
