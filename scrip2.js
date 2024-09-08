function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        return;
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade <= 12) {
                //criança
                img.setAttribute('src', 'cm.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/am.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/sm.png')
            }
        } else if(fsex[1].checked) {
            genero = "Mulher"
            if (idade <= 12) {
                //criança
                img.setAttribute('src', 'imagens/cf.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jf.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/af.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/sf.png')
            }
        }
        res.innerHTML = `Você é ${genero} e tem ${idade}`
        res.appendChild(img)
    }
}