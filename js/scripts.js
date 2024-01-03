
var imgs = [];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var tempo;
var load;

function preCarregamento(){
    var s = 1;
    for(var i=0;i<5;i++){
        imgs[i] = new Image();
        imgs[i].src = "../assets/img"+s+".jpg";
        s++; //carrega em cada posição uma nova imagem//
    }
}
function carregar(img){
    slider.style.backgroundImage = "url('"+imgs[img].src+"')"
}
function inicia(){
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length-1;
    slider = document.getElementById("dvslider");
    load = document.getElementById("barra")
    carregar(imgAtual);
    tempoTroca = 0;
    anima();
}
function troca(dir){
    tempoTroca = 0;
    imgAtual += dir;
    if(imgAtual > maxImg){
        imgAtual = 0;
    }else if(imgAtual < 0){
        imgAtual = maxImg;
    }
    carregar(imgAtual);
}
function anima(){
    tempoTroca++;
    if(tempoTroca >= 300){
        tempoTroca = 0;
        troca(1);
    }
    tempo = tempoTroca/3;
    load.style.width = tempo+ "%";
    window.requestAnimationFrame(anima);
}
window.addEventListener("load",inicia);
window.addEventListener("scroll",function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})