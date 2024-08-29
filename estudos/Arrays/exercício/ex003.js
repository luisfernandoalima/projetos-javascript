// Utilize o método unshift para adicionar dois novos animais no início do array animais.

animais = ["Elefante", "Leão", "Jacaré"]

animais.unshift("Cachorro")
animais.unshift("Gato")

for(x = 0; x < animais.length; x++){
    console.log(animais[x])
}