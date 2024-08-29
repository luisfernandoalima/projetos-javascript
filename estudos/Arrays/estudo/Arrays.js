array = []
const metodosArray = {
    exibirArry: function () {
        // Exibindo cada item do array
        for (x = 0; x < array.length; x++) {
            console.log(array[x])
        }
    },
    colocarNaLista: function (nome) {
        // Adiciona um item ao final do array
        this.push(nome)
    },
    colocarNoPrimeiro: function(nome){
        // Adiciona na primeira posição
        this.unshift(nome)
    },
    removerDaLista: function(){
        // Remove o último item do Array
        this.pop()
    },
    removerPrimeiro: function(){
        // Remove o primeiro do Array
        this.shift()
    }
}

nome = "Luis"
metodosArray.colocarNaLista.apply(array, [nome])
nome = "Fernando"
metodosArray.colocarNaLista.apply(array, [nome])