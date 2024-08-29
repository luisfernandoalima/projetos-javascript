for (i=0; i <10; i++){
    if(i === 5){
        break
    }
    if(i % 2 === 0){
        // Faz com o Loop pule para a próxima interação
        continue
    }

    console.log(i)
}