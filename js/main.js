var swrapper = document.querySelector("#stories-wrapper");
var stories = document.querySelector(".stories");
var btn1 = document.querySelector(".stories .button")
var btn2 = document.querySelector(".stories .button2")
    
//solução que criei quanto ao carousel, eu sei que é incompleta,
//(em caso do carousel ser navegado sem os botões)
//mas eu preferi fazer por mim do que trazer algo mais complexo e me embaralhar :)

document.body.onmousedown = function(e) { if (e.button === 1) return false; }
//configuração dando um overide no middleclick do mouse justamente pra não navegar pelo carousel XD.
//unico jeito que deixei possivel (e que tenho conhecimento) é via tab.

let scrollrestante = swrapper.scrollWidth - 614;
let clicks = 0;

btn2.style.display = 'none';

function right() {
    if (scrollrestante > 0){
        clicks ++;
        scrollrestante = scrollrestante - 350;     
        btn2.style.display = 'unset';
        btn1.style.display = 'unset';
        
    }
    console.log(document.querySelector("header .content span").scrollWidth);
    swrapper.scrollBy(350,0);
    if (scrollrestante <= 0) {
        btn1.style.display = 'none';
    }
}
function left() {
    if (clicks > 0){
        clicks --;   
        scrollrestante = scrollrestante + 350;
        btn2.style.display = 'unset';
        btn1.style.display = 'unset';
    }
    console.log(scrollrestante);
    swrapper.scrollBy(-350,0);
    if (clicks <= 0) {
        btn2.style.display = 'none';
    }
}

