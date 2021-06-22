
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')


if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}


function ajustarTamanho(){  // informa o tamanho da tela para limitar os mosquitos no metodo random
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustarTamanho()

var cronometro = setInterval(function(){
    tempo--
    if(tempo <0){
       clearInterval(cronometro)
       clearInterval(criaMosquito)
       window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)


function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'imagens/imagens/coracao_vazio.png'
        vidas++ 
        }
        
    }
    

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //evita posições negativas, ou seja, fora da tela do usuário
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    //criar o elemento html
    //utilizando elementos do css atraves do DOM

var mosquito = document.createElement('img')  //atribuindo uma variavel mosquito e criando um elemento de imagem
mosquito.src = 'imagens/imagens/mosca.png'   //acessando a imagem
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()     //estilizando a imagem com a classe 'mosquito 1'
mosquito.style.left = posicaoX + 'px'      //posicao a esquerda recebe posicaoX
mosquito.style.top = posicaoY + 'px'      //posicao a direita recebe posicaoY
mosquito.style.position = 'absolute'     //necessario uma position absolute para se mover
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}
document.body.appendChild(mosquito)     //adicionando um filho ao html

}


function tamanhoAleatorio(){        //irá definir novas classes para o mosquito
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
}


function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    console.log(classe)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
        
    }
}
 
