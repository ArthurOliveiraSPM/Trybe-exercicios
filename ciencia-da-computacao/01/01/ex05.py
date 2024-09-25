def tinta(area):
    litros = area / 3
    latas_preco = 80
    latas = litros // 18
    if litros % 18 != 0:
        latas += 1
    return latas, latas * latas_preco


print(tinta(70))
