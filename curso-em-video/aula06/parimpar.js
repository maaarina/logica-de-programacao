function parimpar (n) {
    if (n % 2 == 0){ //ação -- se 'n' dividido por 2 tiver o resto 0 então retorna par
        return 'par' //retorno
    } else {
        return 'impar' //retorno
    }
}

let res = parimpar(11) // chamada -- 11 será o parâmetro que terá o retorno 'impar' e irá para o 'res'
console.log(res)