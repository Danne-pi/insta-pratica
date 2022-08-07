var swrapper = document.querySelector("#stories-wrapper");
var stories = document.querySelector(".stories");
var btn1 = document.querySelector(".stories .button")
var btn2 = document.querySelector(".stories .button2")
    
document.body.onmousedown = function(e) { if (e.button === 1) return false; }

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
    console.log(scrollrestante);
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

