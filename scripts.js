var _last = 0; //Última sección escogida


function cambiar(x){
    document.getElementsByName("btn")[_last].style.color = "rgb(185, 184, 184)";
    document.getElementsByName("btn")[x].style.color = "white";
    document.getElementsByName("seccion")[_last].style.display = "none";
    document.getElementsByName("seccion")[x].style.display = "block";
    _last = x;
}



var preloader;

function preload(opacity) {
    if(opacity <= 0) {
        showContent();
    }
    else {
        preloader.style.opacity = opacity;
        window.setTimeout(function() { preload(opacity - 0.05) }, 100);
    }
}
function showContent() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function () {
    preloader = document.getElementById('preloader');
    preload(1);
});