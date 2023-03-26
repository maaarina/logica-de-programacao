function carregar(params) {

    var msg_area = document.getElementById('mensage-area')
    var img = document.getElementById('image')

    var data = new Date()
    var hours = data.getHours()

    //var imagemNoite = '/logica-de-programacao/curso-em-video/exercícios-propostos/desafio01/night.png'

    msg_area.innerHTML = `Agora são ${hours} horas`

    if (hours >= 0 && hours < 12) {
        img.scr = 'morning.png'

    } else if (hours >= 12 && hours < 18) {
        img.scr = '/logica-de-programacao/curso-em-video/exercícios-propostos/img/morning.png'
        document.body.style.background = 'burlywood'
        
    } else {
        document.body.style.background = '#2c1e47'
        document.body.style.color = 'grey'
    }

}