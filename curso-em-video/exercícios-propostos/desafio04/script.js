function calcular() {
    let num = document.getElementById('n');
    let resultado = document.getElementById('divRes')    
    
    if (n.value.length == 0) {
        alert('Digite um número')
    } else {
        let n = Number(num.value)
        let i = 1
        resultado.innerHTML = ''

        while (i <= 10) {
            let item = document.createElement('option')
            
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `resultado${i}`
            resultado.appendChild(item)
            i++
        }
    }
}