function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('img')
        //var img = document.createElement('img')
        //img.setAttribute('id', 'imagens')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //img.setAttribute('src', 'imagens/menino.png')
                img.src = 'imagens/menino.png'
            } else if (idade < 21) {
                img.src = 'imagens/garoto.png'
            } else if (idade < 50) {
                img.src = 'imagens/homem.png'
            } else {
                img.src = 'imagens/velho.png'
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //img.setAttribute('src', 'imagens/menino.png')
                img.src = 'imagens/meninaa.png'
            } else if (idade < 21) {
                img.src = 'imagens/garota.png'
            } else if (idade < 50) {
                img.src = 'imagens/mulher.png'
            } else {
                img.src = 'imagens/velha.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}