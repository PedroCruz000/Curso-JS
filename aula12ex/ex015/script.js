function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var idade = ano - Number(fano.value)
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    var clas = ''
    var img = document.createElement('img')
    

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os campos preenchidos e tente novametne!')
    }else{
       
        if(fsex[0].checked){

            genero = 'masculino'

            if(idade >= 0 && idade < 10){
                clas = 'criança'
                img.setAttribute('src','imagens/05-masculino-criança.png')
                //criança

            }else if (idade < 21){
                //jovem
                clas = 'Jovem'
                img.setAttribute('src','imagens/06-masculino-jovem.png')

            }else if (idade < 50){
                //adulto
                clas = 'Adulto'
                img.setAttribute('src', 'imagens/07-masculino-adulto.png')

            }else{
                //idoso
                clas = 'Idoso'
                img.setAttribute('src','imagens/08-masculino-idoso.png')
            }

        }else {

            genero = 'Feminino'

            if (idade >= 0 && idade < 10){
                //criança
                clas = 'Criança'
                img.setAttribute('src','imagens/01-feminino-criança.png')

            }else if (idade < 21){
                //jovem 
                clas = 'Jovem'
                img.setAttribute('src','imagens/02-feminino-jovem.png')

            }else if (idade < 50){
                //adulto
                clas = 'Adulto'
                img.setAttribute('src','imagens/03-feminino-adulto.png')

            }else{
                //idoso
                clas = 'idosa'
                img.setAttribute('src', 'imagens/04-feminino-idosa.png')
            }
        }
        
        res.style.fontStyle = 'normal'              
        res.innerHTML = `<p>detectado um(a) ${clas} do genero <strong>${genero} </strong>de  <strong>${idade} anos </strong></p>`
        res.appendChild(img) 
        
        
    }
}