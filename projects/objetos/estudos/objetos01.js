// Criação de um objeto
var carro = {
    modelo: "Mustang",
    marca: "Ford",
    ano: 2020,
    cor: "vermelho",
    // Objeto dentro de outro objeto
    motor: {
        cilindros: 4,
        tamanho: 2.2
    },
    // Função dentro de um objeto
    anuncio: function(){
        console.log(`${this.marca} ${this.modelo} ${this.ano} ${this.cor}`)
    }
}

// Mudando os valores de um objeto com uma função de construtor
function trocarCarro(modelo,marca,ano,cor){
    this.modelo = modelo
    this.marca = marca
    this.ano = ano
    this.cor = cor
}

carro.anuncio()

// Difinindo o objeto que o This da função referenciará e os parâmetros que serão utilizados
trocarCarro.apply(carro,["Corolla", "Toyota", 2022, "preto"])

carro.anuncio()