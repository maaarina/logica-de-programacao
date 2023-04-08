function calcular() {
    let num = document.getElementById('n');
    let resultado = document.getElementById('divRes')    
    
    if (n.value.length == 0) {
        alert('Digite um número') // se estiver vazio ... alert
    } else {
        
        let n = Number(num.value) //se não, pegar o número e converte 
        let i = 1
        resultado.innerHTML = '' //string vazia para a área do resultado estar vazia a cada nova tabuada gerada

        while (i <= 10) {
            let item = document.createElement('option') //cria um elemento HTML de forma dinâmica que será inserido no HTML porteriormente
            
            item.text = `${n} x ${i} = ${n * i}` //a parte de dentro do elemento criado ('option')
            //item.value = `resultado${i}`
            resultado.appendChild(item) //adicionar elemento filho
            i++
        }
    }
}