function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Verifique se você preencheu corretamente os campos')
    } else {
        resultado.innerHTML = 'Contando..'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido. Considerando PASSO 1')
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} , `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}