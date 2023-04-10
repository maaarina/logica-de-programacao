let num = [ 7, 2, 4, 6]

/*
num.push(1)
num.sort() //deixa os numeros ordenados
num.push(9)
*/

console.log(`O nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não existe')
} else {
    console.log(`O valor está na posição ${pos}`)
}