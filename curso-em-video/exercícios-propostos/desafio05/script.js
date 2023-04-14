function calcular() {
    let num = document.getElementById('n')
    let result = document.getElementById('resultado')

    if (n.value.length === 0) {
        alert('Digite um numero')
    } else {

        let n = Number(num.value)
        result.innerHTML = ''

        let i = 1;

        while (i <= 10) {
            let pulo = '<br> <br>'
            result.innerHTML += `${n} x ${i} = ${n * i} ${pulo}`;
            i++;
        }
    }
}
