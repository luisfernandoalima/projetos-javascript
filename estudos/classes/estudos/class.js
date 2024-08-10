// Criação de um objeto manualmente
const corredor = {
    nome: "Ayrton Senna",
    equipe: "McLaren",
    idade: 29,
    correr: function () {
        console.log("Vruuuuuuuuumm")
    }
}

console.log(corredor.nome)
corredor.correr()

// Utilizando classe
class Piloto {
    // Função construtora
    constructor(nome, equipe, idade){
        this.nome = nome
        this.equipe = equipe
        this.idade = idade
    }

    correr() {
        console.log("Vruuuuuuuuumm")
    }
}

const corredor01 = new Piloto("Senna", "McLaren", 32)

console.log(corredor01)