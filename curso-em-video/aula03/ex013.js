var dia = new Date()
var diaAtual = dia.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça 
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado*/



switch (diaAtual) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('terça')
        break

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sábado')
        break
        
    defalt: 
        console.log('ERRO: Dia inválido')
        break
}