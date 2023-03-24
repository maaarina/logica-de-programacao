var idade = 87
console.log(`Você tem ${idade} anos, então..`)
if (idade < 16) {
    console.log('não pode votar')
} else if (idade < 18 || idade >= 65) {
    console.log('O voto é opcional')
} else {
    console.log('O voto é obrigatório')
}