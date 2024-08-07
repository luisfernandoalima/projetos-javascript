// O método Call pode mudar o valor de this dentro de uma função

const objeto = {
    nome: 'objeto',
    tipo: 'object'
}

function leitura (){
    console.log(`O ${this.nome} é um ${this.tipo}`)
}

leitura() //O undefined é um undefined
leitura(objeto) //O undefined é um undefined
leitura.call(objeto) //O objeto é um object