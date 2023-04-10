let valores = [1, 6, 9, 7, 2]

valores.sort()

/* console.log(valores)

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/


for (let pos in valores) { //para cada 'posição' em 'valores/variavel composta' mostra o 'valores[pos]'
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
}