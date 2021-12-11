function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

msg.innerHTML = `Agora são Exatamente ${hora} Hrs ${minutos} Min ${segundos} Seg`

  if (hora >= 0 && hora < 12) {
    //Bom Dia Lindo Meu Lindo
    img.src = 'Manhã.jpg'
    document.body.style.background = 'blue'
  } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde Lindo Meu Lindo
    img.src = 'Tarde.jpg'
    document.body.style.background = 'yellow'
  } else {
    //Boa Noite Meu Lindo
    img.src = 'Noite.jpg'
    document.body.style.background = 'gray'
  }
}