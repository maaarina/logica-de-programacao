function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formAno = document.getElementById('ano')
    var resultado = document.getElementById('resultado')

    if (formAno.value.length == 0 || Number(formAno.value) > anoAtual) {

        alert('[ERRO] verifique seu ano de nascimento e tente novamente')

    } else {

        var formSex = document.getElementsByName('sexo')
        var idade = anoAtual - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked) {

            gênero = 'sexo masculino'

            if (idade >= 0 && idade <= 10) {

                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/homemCrianca.png')

            } else if (idade >= 10 && idade < 21){

                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/homemJovem.png')

            } else if (idade >= 21 && idade < 50) {

                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/homemAdulto.png')

            } else {

                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/homemVelho.png')

            }

        } else if (formSex[1].checked) {

            gênero = 'sexo feminino'
            
            if (idade >= 0 && idade <= 10) {
                
                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/mulherCrianca.png')

            } else if (idade >= 10 && idade < 21){

                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/mulherJovem.png')

            } else if (idade >= 21 && idade < 50) {

                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/mulherAdulta.png')

            } else {

                img.setAttribute('src', '/logica-de-programacao/curso-em-video/exercícios-propostos/img/mulherVelha.png')
                
            }
        }
        
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos : `
        resultado.appendChild(img)
    }

} 