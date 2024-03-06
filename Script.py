import random

# Banco de dados de monstros
monsters = {
    "Furcorn": {
        "elements": ["Earth"],
        "currency": "Coins",
        "description": "The Furcorn's musical sound originates from the hair-like fibers on its body. It hums constantly, even in its sleep.",
        "required_monsters": ["Potbelly", "Mammott"]
    },
    "Toe Jammer": {
        "elements": ["Cold", "Water"],
        "currency": "Coins",
        "description": "Toe Jammer's rhythmic taps and thumps serve as a base for all Monster music. It uses its toes to play the drums.",
        "required_monsters": ["Potbelly", "Mammott"]
    },
    # Adicione mais monstros conforme necessário
}

def generate_monster(name, num_elements, currency):
    if name not in monsters:
        return "Monstro não encontrado no banco de dados."
    
    selected_monster = monsters[name]
    
    # Verificar se o número de elementos selecionado é válido
    if num_elements != len(selected_monster["elements"]):
        return "Número de elementos selecionado não corresponde ao monstro escolhido."
    
    # Verificar se a moeda selecionada é válida
    if currency != selected_monster["currency"]:
        return "Moeda selecionada não corresponde ao monstro escolhido."
    
    return selected_monster

# Exemplo de uso
nome = input("Digite o nome do monstro: ")
num_elementos = int(input("Selecione o número de elementos do monstro: "))
moeda = input("Qual a moeda de produção do monstro: ")

resultado = generate_monster(nome, num_elementos, moeda)

if isinstance(resultado, str):
    print(resultado)
else:
    print("Nome:", nome)
    print("Elementos:", resultado["elements"])
    print("Moeda de produção:", resultado["currency"])
    print("Descrição:", resultado["description"])
    print("Monstros necessários:", resultado["required_monsters"])
