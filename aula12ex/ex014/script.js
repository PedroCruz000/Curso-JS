function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()        
    minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos `
    if (hora >= 0 && hora < 12 ){
        //bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#B4814A'

    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#8599B2'    

    }else{
        // boa noite 
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#1F4755'
        
    }
        
}

