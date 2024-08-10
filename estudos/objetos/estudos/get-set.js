var pessoa = {
    _nome : "João",
    // Retorna nome
    get nome(){
        return this._nome.toUpperCase()
    },
    // Altera o valor de nome
    set nome(novonome){
        // Confere se o nome digitado é válido
        if(novonome.length > 0){
            this._nome = novonome
        } else{
            console.log("Nome inválido")
        }
    }
}

console.log(pessoa.nome)
pessoa.nome = "Carlos"
console.log(pessoa.nome)