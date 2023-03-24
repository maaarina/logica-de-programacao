var horaExata = new Date()
var hora = horaExata.getHours() //pega a informação da hora do sistema que está rodando o script.

console.log(`São exatamente ${hora} horas da `)
if (hora >= 1 && hora < 5 ) {
    console.log('madrugada')
} else if (hora > 5 & hora < 13) {
    console.log('manhã!')
} else if (hora > 12 && hora < 18) {
    console.log('tarde!')
} else {
    console.log('noite')
}