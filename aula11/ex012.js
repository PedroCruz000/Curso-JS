var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes ()
var segundos = agora.getSeconds()
console.log(`agora são exatamente ${hora} horas ${minutos} minutos e ${segundos}  `)
if(hora < 12){
    console.log(`bom dia`)
}else if (hora >= 12 && hora < 18 ){
    console.log(`boa tarde`)
}else{
    console.log(`boa noite`)
}