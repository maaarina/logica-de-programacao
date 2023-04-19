var numero = document.getElementById('numero')
var numero = parseInt(numero.value)
var resultadoLista = document.getElementById('resultadoLista')
var resultado = document.getElementById('resultado')

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
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        alert('tudo ok')
    } else {
        alert('inválido')
    }
}

/*
        function adicionarNumero() {
            var inputNumero = document.getElementById("numero");
            var numero = parseInt(inputNumero.value);

            if (numero >= 1 && numero <= 100) {
                numeros.push(numero);
                inputNumero.value = "";
            } else {
                alert("Por favor, digite um número entre 1 e 100.");
            }
        }

        function exibirResultado() {
            var resultado = document.getElementById("resultado");

            if (numeros.length === 0) {
                resultado.textContent = "Nenhum número foi adicionado ainda.";
                return;
            }

            var totalNumeros = numeros.length;
            var maiorNumero = Math.max.apply(null, numeros);
            var menorNumero = Math.min.apply(null, numeros);

            resultado.textContent = "Total de números adicionados: " + totalNumeros + "\n"
                + "Maior número adicionado: " + maiorNumero + "\n"
                + "Menor número adicionado: " + menorNumero;
        }
*/


//resultadoLista.innerHTML = '<br> alo'