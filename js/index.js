var acc = document.getElementsByClassName("accordion");
var i;
var srcImg = '/image/illustration-woman-online-desktop.svg'

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


const img = document.querySelector('.c-img');
this.window.onresize =() =>{
    if(window.innerWidth > 576) {
        srcImg = '/image/illustration-woman-online-desktop.svg'
        img.childNodes[1].src = srcImg;
    }else{
        srcImg= "/image/illustration-woman-online-mobile.svg"
        img.childNodes[1].src = srcImg;
    }
}
img.childNodes[1].src = srcImg;
