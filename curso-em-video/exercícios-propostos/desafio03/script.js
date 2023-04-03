var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')


function contar() {
    while (inicio <= fim) {
        resultado.innerHTML = inicio
        inicio++
    }
}