import json


with open("ciencia-da-computacao/01/02/pokemons.json", "r") as file:
    pokemons = json.load(file)["results"]

grass_type = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type.append(pokemon)


with open("ciencia-da-computacao/01/02/grass_pokemons.json", "w") as file:
    json.dump(grass_type, file)
