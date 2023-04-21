var numero = document.getElementById("num")
var lista = document.getElementById("lista")
var resultado = document.getElementById("divRes")

var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // se número foi realmente um número (isNumero) e se ele não estiver na lista (inLista) 
        valores.push(Number(numero.value))

        let item = document.createElement('option')

        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('inválido')
    }
    numero.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('sem resultados')
    } else {
        let total = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
             if (valores [pos] > maior) {
                maior = valores[pos]
             } else {
                menor = valores[pos]
             }
        }

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} valores cadastrados</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        resultado.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        resultado.innerHTML += `<p> A soma dos valores é ${soma} </p>`

    }
}