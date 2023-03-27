function carregar(params) {

    var msg_area = document.getElementById('mensage-area')
    var img = document.getElementById('image')

    var data = new Date()
    var hours = data.getHours()
    var minutos = data.getMinutes()

    msg_area.innerHTML = `Agora são ${hours}:${minutos} horas`

    if (hours >= 0 && hours < 12) {
        document.querySelector('img').src = '/logica-de-programacao/curso-em-video/exercícios-propostos/img/homem'

        document.body.style.background = '#FFFF8E'

    } else if (hours >= 12 && hours < 18) {
        document.querySelector('img').src = '/logica-de-programacao/curso-em-video/exercícios-propostos/img/afternoon.png'

        document.body.style.background = '#F17935'

    } else {
       document.querySelector('img').src = '/logica-de-programacao/curso-em-video/exercícios-propostos/img/night.png'

        document.body.style.background = '#2c1e47'
        document.body.style.color = 'grey'
    }

}