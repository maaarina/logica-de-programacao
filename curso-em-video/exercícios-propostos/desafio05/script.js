function calcular() {
    let num = document.getElementById('n')
    let result = document.getElementById('resultado')

    if (n.value.length == 0) {
        alert('Digite um numero')
    } else {

        let n = Number(num.value)
        result.innerHTML = ''

        for (var i = 1; i <= 10; i++) {

            let pulo = innerHTML = '<br>'
            result.innerHTML += (`${ n} x ${i} = ${n * i } ${pulo + pulo}`);
        }
    }
}