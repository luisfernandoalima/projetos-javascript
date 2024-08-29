// A partir do array animais criado anteriormente, remova o primeiro elemento usando shift e imprima o array modificado.

animais = ["Elefante", "Leão", "Jacaré"]

animais.shift()

for(x = 0; x < animais.length; x++){
    console.log(animais[x])
}